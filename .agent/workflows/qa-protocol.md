---
description: Run Layer 1 & 2 QA Protocols before deployment
---

# 🛡️ Auzzie Chauffeur QA Workflow

Follow these steps to ensure the site is ready for the Founder's final approval.

## 1. Local Environment Check
// turbo-all
- Run `npm run lint` to check for code quality issues.
- Run `npm run build` to ensure the project compiles without errors.

## 2. UI & Functional Sweep (Manual Agent Simulation)
- Navigate to `http://localhost:3000`.
- Verify the header phone number is **0415 673 786**.
- Verify the floating WhatsApp button is visible on mobile and desktop.
- Click 'Book Now' and ensure the form loads instantly.

## 3. Core Flow Validation (Automation Agent)
- Submit a test booking with name "Automation QA".
- Login to `/admin/login` and verify the lead is captured in the dashboard.
- Check the console for any "Hydration Mismatch" errors.

## 4. SEO & AEO Verification
- Inspect the page source for `application/ld+json`.
- Confirm the `FAQPage` schema contains the latest service pricing.
- Verify the 'AI SEO Answer Hub' is visible below the FAQ section.

## 5. Final Report
- Generate the `qa_verification_report.md` artifact.
- Signal to the Founder for **Layer 3: Final Approval**.
