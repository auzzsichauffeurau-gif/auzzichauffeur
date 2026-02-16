# Bing Indexing API - Complete Guide

## 📌 Overview

You have access to Bing's Indexing API which allows you to submit URLs directly to Bing for faster indexing.

**Your API Key:** `34af85f7414f4443b34e9879c78bb9cb`

## ⚠️ Important Quota Information

Based on testing, your API key has the following limits:
- **Daily Quota:** 100 URLs per day
- **Batch Size:** Up to 150 URLs per request (but limited by daily quota)
- **Rate Limiting:** Recommended 2-3 second delay between batches

## 🚀 Quick Start

### Option 1: Submit Custom URLs (Recommended)

Use this to submit specific URLs you want indexed:

```bash
node scripts/bing-submit-urls.js
```

**To customize URLs:**
1. Open `scripts/bing-submit-urls.js`
2. Edit the `urls` array at the bottom
3. Add/remove URLs as needed
4. Run the script

### Option 2: Test with Sample URLs

Test the API with just 5 URLs:

```bash
node scripts/bing-test.js
```

### Option 3: Auto-submit from Sitemap

Automatically extract and submit all URLs from your sitemap:

```bash
node scripts/bing-indexing-auto.js
```

⚠️ **Warning:** This will try to submit ALL URLs from your sitemap. If you have more than 100 URLs, it will hit the daily quota limit.

## 📊 Understanding the Output

### Success Example:
```
✅ Batch 1 submitted successfully
   Response: {"d":null}
```

### Quota Exceeded Example:
```
❌ Batch 1 failed (HTTP 400)
   Error: {"ErrorCode":"1","Message":"Exceeded daily submission quota : 100"}
```

### Summary:
```
============================================================
📈 SUBMISSION SUMMARY
============================================================
✅ Successfully submitted: 28 URLs
❌ Failed: 0 URLs
📊 Total processed: 28 URLs
============================================================
```

## 📝 Best Practices

### 1. **Prioritize Important Pages**

Don't submit all URLs at once. Focus on:
- Homepage
- Main service pages
- Location pages
- New/updated content

### 2. **Spread Submissions Over Multiple Days**

With a 100 URL/day limit:
- Day 1: Homepage + main services (20-30 URLs)
- Day 2: Location pages (30-40 URLs)
- Day 3: Blog posts and other content (30-40 URLs)

### 3. **Track What You've Submitted**

Keep a log of submitted URLs to avoid duplicates:
```bash
node scripts/bing-submit-urls.js > submission-log-2026-02-14.txt
```

### 4. **Re-submit Updated Pages**

When you update important pages, re-submit them to Bing:
- It's safe to re-submit the same URL
- Helps Bing discover your updates faster

## 🛠️ Customization Examples

### Submit Only High-Priority Pages

Edit `scripts/bing-submit-urls.js`:

```javascript
const urls = [
  `${SITE_URL}/`,
  `${SITE_URL}/sydney`,
  `${SITE_URL}/melbourne`,
  `${SITE_URL}/services/airport-transfers`,
  `${SITE_URL}/services/corporate-transfers`,
  // Add your 20-30 most important pages
];
```

### Submit All Location Pages

```javascript
const locations = ['sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'gold-coast', 'hobart', 'cairns-port-douglas'];
const urls = locations.map(loc => `${SITE_URL}/${loc}`);
```

### Submit All Service Pages

```javascript
const services = [
  'airport-transfers',
  'corporate-transfers',
  'hourly-chauffeur',
  'luxury-tours',
  'international-student-transfers',
  'wedding-cars',
  'cruise-ship-transfers',
  'conferences-special-events'
];
const urls = services.map(svc => `${SITE_URL}/services/${svc}`);
```

## 🔍 Troubleshooting

### Error: "Exceeded daily submission quota"

**Solution:** You've hit the 100 URL/day limit. Wait 24 hours and try again.

### Error: "Site not verified"

**Solution:** 
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Verify your site ownership
3. Ensure the site URL matches exactly: `https://auzziechauffeur.com.au`

### Error: "Invalid API key"

**Solution:**
1. Check your API key in Bing Webmaster Tools
2. Update the `BING_API_KEY` in the scripts

### No Errors But URLs Not Indexed

**This is normal!**
- Submission ≠ Immediate indexing
- Bing decides when/if to index
- Can take days or weeks
- Check indexing status in Bing Webmaster Tools

## 📅 Recommended Submission Schedule

### Week 1: Core Pages
**Day 1 (28 URLs):**
- Homepage
- Main sections (about, services, contact, etc.)
- Top 3 location pages

**Day 2 (40 URLs):**
- Remaining location pages
- Main service pages

**Day 3 (32 URLs):**
- Location-specific service pages (high priority)

### Week 2: Remaining Pages
**Day 4-7:** Submit remaining location-specific service pages in batches of 80-100 URLs/day

## 🔗 Useful Links

- [Bing Webmaster Tools](https://www.bing.com/webmasters/)
- [URL Submission API Docs](https://www.bing.com/webmasters/url-submission-api)
- [Check Indexing Status](https://www.bing.com/webmasters/indexnow)

## 📞 Support

If you encounter issues:
1. Check the error message in the script output
2. Verify your site in Bing Webmaster Tools
3. Check your daily quota usage in the dashboard
4. Ensure your API key is active

---

**Last Updated:** February 14, 2026
**API Key:** `34af85f7414f4443b34e9879c78bb9cb`
**Daily Quota:** 100 URLs
