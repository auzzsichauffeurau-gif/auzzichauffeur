# Bing Indexing API Scripts

This folder contains scripts to submit URLs to Bing's Indexing API for faster indexing.

## API Information

- **API Key**: `34af85f7414f4443b34e9879c78bb9cb`
- **Batch Limit**: 150 URLs per request
- **Daily Quota**: Check your Bing Webmaster Tools dashboard for limits

## Scripts

### 1. `bing-indexing.js` - Manual URL Submission

Submit a custom list of URLs to Bing.

**Usage:**
```bash
node scripts/bing-indexing.js
```

**Configuration:**
Edit the `urlsToSubmit` array in the script to add your URLs.

### 2. `bing-indexing-auto.js` - Automatic Sitemap Submission

Automatically fetches your sitemap and submits all URLs to Bing.

**Usage:**
```bash
node scripts/bing-indexing-auto.js
```

This script will:
1. Fetch your sitemap from `https://auzzichauffeur.com.au/sitemap.xml`
2. Extract all URLs
3. Submit them in batches of 150
4. Show progress and results

## Features

✅ **Batch Processing**: Automatically splits URLs into batches of 150
✅ **Rate Limiting**: Adds delays between batches to avoid API limits
✅ **Error Handling**: Continues processing even if a batch fails
✅ **Progress Tracking**: Shows detailed progress and results
✅ **Automatic Extraction**: Can read URLs directly from your sitemap

## Example Output

```
🔍 Bing Indexing API - Sitemap URL Submitter

🔑 API Key: 34af85f7...
🌐 Site URL: https://auzzichauffeur.com.au
📄 Sitemap URL: https://auzzichauffeur.com.au/sitemap.xml

📥 Fetching sitemap...
✅ Sitemap fetched successfully

🔍 Extracting URLs from sitemap...
✅ Found 45 URLs

📦 Split into 1 batch(es) of up to 150 URLs each

🚀 Submitting batch 1/1 (45 URLs)...
✅ Batch 1 submitted successfully

============================================================
📈 SUBMISSION SUMMARY
============================================================
✅ Successfully submitted: 45 URLs
❌ Failed: 0 URLs
📊 Total processed: 45 URLs
============================================================

✨ All done!
```

## API Documentation

For more information about Bing's Indexing API:
- [Bing Webmaster Tools](https://www.bing.com/webmasters/)
- [URL Submission API Documentation](https://www.bing.com/webmasters/url-submission-api)

## Troubleshooting

### Error: Invalid API Key
- Verify your API key in Bing Webmaster Tools
- Update the `BING_API_KEY` constant in the script

### Error: Site not verified
- Ensure your site is verified in Bing Webmaster Tools
- The `SITE_URL` must match exactly with the verified site

### Rate Limiting
- The scripts include automatic delays between batches
- If you hit rate limits, increase the delay in the code

## Notes

- URLs are submitted for indexing, but Bing decides when/if to actually index them
- It may take several days for URLs to appear in Bing search results
- Check Bing Webmaster Tools for indexing status
- Re-submitting the same URLs is safe and can help with updates
