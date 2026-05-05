# Auzzie Chauffeur — Project Documentation

Complete record of all work done on this project.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Database**: Supabase (PostgreSQL + Realtime)
- **Auth**: Supabase Auth (SSR via `@supabase/ssr`)
- **Email**: Nodemailer + Gmail SMTP (port 465)
- **Deployment**: Vercel (Hobby plan)
- **Repo**: https://github.com/auzzsichauffeurau-gif/auzzichauffeur (main branch)

---

## Environment Variables (set in Vercel dashboard)

```
NEXT_PUBLIC_SUPABASE_URL=https://olkmyudpnrssmvisyvpd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
SMTP_USER=auzzsichauffeur.au@gmail.com
SMTP_PASS=gesq nbox tlgm cbjp        # Gmail App Password (spaces stripped in code)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
FROM_NAME=Auzzie Chauffeur
CRON_SECRET=auzzie-cron-secret-2026
NEXT_PUBLIC_SITE_URL=https://auzziechauffeur.com.au
```

---

## Database Tables Used

| Table | Purpose |
|-------|---------|
| `bookings` | All bookings + quote requests (status: Pending, Quote Request, Quote Sent, Confirmed, In Progress, Completed, Cancelled) |
| `invoices` | Invoices linked to bookings |
| `notifications` | Admin dashboard notifications |
| `reminders_log` | Log of all automated reminder emails sent |
| `email_templates` | HTML email templates editable from admin |
| `followups` | Follow-up notes on bookings |
| `posts` | Blog posts |
| `customers` | Customer records |
| `drivers` | Driver records |
| `fleet` | Vehicle/fleet records |
| `promos` | Promo codes |

### reminders_log table (create via Supabase SQL Editor)
```sql
create table reminders_log (
  id uuid default gen_random_uuid() primary key,
  reminder_type text not null,
  booking_id uuid references bookings(id),
  invoice_id uuid references invoices(id),
  customer_email text,
  customer_name text,
  status text default 'sent',
  error_message text,
  sent_at timestamptz default now()
);
```

---

## File Structure — Key Files

```
src/
├── middleware.ts                          # Admin auth guard (protects /admin/dashboard)
├── proxy.ts                              # Old proxy — superseded by middleware.ts
├── lib/
│   ├── email.ts                          # Shared nodemailer utility
│   ├── supabaseAdmin.ts                  # Server-side Supabase (bypasses RLS)
│   └── supabaseClient.ts                 # Client-side Supabase
├── app/
│   ├── accept-quote/[id]/page.tsx        # Public page — customer accepts quote
│   ├── admin/
│   │   ├── login/page.tsx                # Admin login
│   │   └── dashboard/
│   │       ├── layout.tsx                # Sidebar nav
│   │       ├── page.tsx                  # Dashboard home
│   │       ├── bookings/                 # Booking management
│   │       ├── quotations/page.tsx       # Quote requests + send quote emails
│   │       ├── leads/page.tsx            # Lead management
│   │       ├── invoices/page.tsx         # Invoice management
│   │       ├── notifications/page.tsx    # Admin notifications
│   │       ├── reminders/page.tsx        # Automated reminder logs + manual trigger
│   │       ├── customers/page.tsx
│   │       ├── drivers/page.tsx
│   │       ├── fleet/page.tsx
│   │       ├── email-templates/page.tsx
│   │       ├── blog/                     # Blog management
│   │       ├── calendar/page.tsx
│   │       ├── settings/page.tsx
│   │       └── price-list/page.tsx
│   └── api/
│       ├── send-email/route.ts           # Email sending endpoint
│       ├── accept-quote/[id]/route.ts    # Customer accept quote handler
│       ├── admin/
│       │   └── trigger-cron/route.ts     # Secure cron manual trigger (admin only)
│       └── cron/
│           ├── booking-24h/route.ts      # 24h before pickup reminder
│           ├── booking-2h/route.ts       # 2h before pickup reminder
│           └── invoice-unpaid/route.ts   # Unpaid invoice reminder
```

---

## All Work Done — Chronological

### 1. Backend Audit
- Reviewed all admin pages, API routes, Supabase queries
- Identified issues: notification settings not persisting, booking status emails missing, realtime subscriptions broken

### 2. Notification Settings Fix
- **File**: `src/app/admin/dashboard/notifications/page.tsx`
- Fixed state type to `Record<string, boolean>` (was typed as unknown)
- Added localStorage persistence for notification settings
- Added Supabase Realtime subscription for live notification updates

### 3. Booking Realtime Subscription
- **File**: `src/app/admin/dashboard/bookings/page.tsx`
- Added `supabase.channel().on('postgres_changes').subscribe()` for live booking updates

### 4. Booking Status Change Emails
- **File**: `src/app/admin/dashboard/bookings/[id]/page.tsx`
- When admin changes status to Confirmed / Completed / Cancelled, an email is automatically sent to customer
- Uses `/api/send-email` internally

### 5. Admin Alert on Quote Send
- **File**: `src/app/admin/dashboard/quotations/page.tsx`
- When admin sends a quote email to customer, an alert email is also sent to admin Gmail
- Admin knows which customer received a quote

### 6. Shared Email Utility — `src/lib/email.ts`
Created shared Nodemailer utility used by all server routes:
```typescript
export async function sendEmail({ to, subject, html, replyTo }) {
    const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '') // strips spaces from Gmail App Password
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', port: 465, secure: true,
        auth: { user: process.env.SMTP_USER, pass: smtpPass }
    })
    await transporter.sendMail({ from: `Auzzie Chauffeur <${SMTP_USER}>`, to, subject, html })
}
```
**Key fix**: Gmail App Password must have spaces stripped (`.replace(/\s+/g, '')`)
**Key fix**: `from` must be SMTP_USER (Gmail address), not custom domain — Gmail rejects it otherwise

### 7. supabaseAdmin.ts — Build Fix
- **File**: `src/lib/supabaseAdmin.ts`
- Vercel build was crashing: `supabaseKey is required`
- Fix: use placeholder fallback strings so module loads at build time, real values used at runtime
```typescript
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key'
```

### 8. Automated Reminder Emails Feature

Three cron jobs built:

#### `/api/cron/booking-24h` — 24 Hour Pickup Reminder
- Runs daily at 8:00 PM UTC (Vercel cron: `0 20 * * *`)
- Finds bookings with pickup date in next 23–25 hours, status Confirmed or In Progress
- Checks `reminders_log` to avoid duplicate sends
- Sends customer email with booking details
- Logs result to `reminders_log`

#### `/api/cron/booking-2h` — 2 Hour Pickup Reminder
- NOT on Vercel cron (Hobby plan limited to once/day)
- Can be manually triggered from admin Reminders page
- Finds bookings with pickup in next 1h45m–2h15m window
- Same duplicate check and logging

#### `/api/cron/invoice-unpaid` — Unpaid Invoice Reminder
- Runs daily at 9:00 AM UTC (Vercel cron: `0 9 * * *`)
- Finds invoices with `payment_status = 'unpaid'` older than 3 days
- Sends overdue notice if past due date, otherwise friendly reminder
- Throttled: only sends once every 3 days per invoice

#### `vercel.json`
```json
{
  "crons": [
    { "path": "/api/cron/booking-24h", "schedule": "0 20 * * *" },
    { "path": "/api/cron/invoice-unpaid", "schedule": "0 9 * * *" }
  ]
}
```

#### Admin Reminders Page — `src/app/admin/dashboard/reminders/page.tsx`
- Shows stats: total sent, successful, failed, today
- Shows full log table with type, customer, email, status, timestamp
- Manual trigger buttons for all 3 cron types
- Filter by reminder type

### 9. Accept Quote Flow (Customer Accepts via Email)

**Problem**: Customers were replying to emails in Gmail inbox — hard to track.  
**Solution**: "Accept Quote" button in email → hits API → booking auto-confirms → admin alerted.

#### Flow:
1. Admin sends quote from Quotations page
2. Email includes green "✓ Accept This Quote" button linking to `/accept-quote/{booking_id}`
3. Customer clicks → `POST /api/accept-quote/{id}` called
4. Booking status updated to `Confirmed` in Supabase
5. Customer receives confirmation email
6. Admin receives alert email: "Quote Accepted — {customer_name}"
7. Dashboard notification inserted

#### Files:
- `src/app/accept-quote/[id]/page.tsx` — public page (loading → success/already confirmed/error states)
- `src/app/api/accept-quote/[id]/route.ts` — API handler
  - Uses `supabaseAdmin` (service role key) to bypass RLS
  - Next.js 15: params must be awaited: `const { id } = await params`

### 10. Price in Quote Email Fix
- **File**: `src/app/admin/dashboard/quotations/page.tsx`
- Quote emails were going to customer without showing the price
- Fix: always append a `quoteSummary` block to every quote email:
  - Trip details table (date, pickup, dropoff, vehicle, service type)
  - Price box in dark blue: `$4000 AUD`
  - Accept Quote green button
- Price only shown if `selectedQuote.amount` exists

### 11. Admin Middleware Auth Guard
- **File**: `src/middleware.ts` (NEW — this was the critical missing piece)
- `proxy.ts` existed with correct logic but was never registered as Next.js middleware
- `/admin/dashboard` was **completely accessible without login**
- Fix: created `src/middleware.ts` using `@supabase/ssr` + `supabase.auth.getUser()`
- Unauthenticated users redirected to `/admin/login`
- Logged-in users redirected away from login page

### 12. Secure Cron Manual Trigger
- **File**: `src/app/api/admin/trigger-cron/route.ts` (NEW)
- Reminders page was calling `/api/cron/*` directly with hardcoded `CRON_SECRET` in client-side code
- Anyone could read the secret from browser DevTools and spam cron jobs
- Fix: new endpoint verifies Supabase admin session, then calls cron internally with the secret server-side

### 13. Supabase MCP Server Setup
- Added `.mcp.json` in project root with Supabase Personal Access Token
- Added `.mcp.json` to `.gitignore` (token must not go to GitHub)
- MCP allows Claude Code to directly query/manage Supabase database

---

## Email Architecture

```
Admin Dashboard (client)
        │
        ▼
POST /api/send-email          ← for quote/lead emails from admin UI
POST /api/admin/trigger-cron  ← for manual cron triggers (admin session required)
        │
        ▼
src/lib/email.ts              ← shared Nodemailer utility
        │
        ▼
Gmail SMTP (port 465)         ← auzzsichauffeur.au@gmail.com

Cron Jobs (server-side only)
        │
        ├── /api/cron/booking-24h
        ├── /api/cron/booking-2h
        └── /api/cron/invoice-unpaid
                │
                ▼
        src/lib/email.ts (imported directly, no internal HTTP calls)
```

---

## Known Issues / Bugs Fixed

| Bug | Root Cause | Fix |
|-----|-----------|-----|
| Email not sending from admin | Gmail App Password has spaces; `from` was custom domain not Gmail | Strip spaces in `email.ts`; always use SMTP_USER as sender |
| Vercel build crash: `supabaseKey is required` | `supabaseAdmin.ts` used `!` assertion, env vars not available at build time | Placeholder fallback strings |
| Accept Quote showing "Link Expired" | API returning error, error message not shown | Added `errorMsg` state to display actual error on page |
| Admin dashboard no auth | `proxy.ts` existed but was not wired as `middleware.ts` | Created `src/middleware.ts` |
| CRON_SECRET exposed in browser | Client code used `process.env.NEXT_PUBLIC_CRON_SECRET` with hardcoded fallback | Created `/api/admin/trigger-cron` — secret stays server-side |
| Price not in quote email | Email came from template only, amount not appended | Always append `quoteSummary` block with price to quote emails |
| Next.js 15 params error | `params: { id: string }` — must be `Promise<{id: string}>` and awaited | Fixed in all dynamic routes |
| Cron jobs ran too often on Vercel | Hobby plan only allows once-per-day | Changed schedules to `0 20 * * *` and `0 9 * * *` |

---

## Deployment

- **Platform**: Vercel
- **Branch**: `main`
- **Repo**: https://github.com/auzzsichauffeurau-gif/auzzichauffeur
- Vercel auto-deploys on every push to `main`
- Cron jobs run automatically per `vercel.json` schedule
- All env vars must be set in Vercel dashboard: Settings → Environment Variables

---

## Git Commits (this session)

| Commit | Description |
|--------|-------------|
| `42e52d0` | fix: supabaseAdmin placeholder fallback to prevent Vercel build crash |
| `d6ddce9` | fix: reduce cron jobs to once-daily for Vercel Hobby plan |
| `9eb6faa` | fix: always include price and Accept button in quote email |
| `f0c6e13` | debug: show error message on accept-quote failure page |
| `9cbc480` | fix: add middleware auth guard and secure cron trigger endpoint |
