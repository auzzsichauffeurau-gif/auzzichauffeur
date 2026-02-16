/**
 * Bing Indexing API - Sitemap URL Extractor & Submitter
 * Automatically extracts URLs from sitemap and submits them to Bing
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const BING_API_KEY = '34af85f7414f4443b34e9879c78bb9cb';
const SITE_URL = 'https://auzziechauffeur.com.au';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const BATCH_SIZE = 150;

/**
 * Fetch content from URL
 */
function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(data);
                } else {
                    reject(new Error(`HTTP ${res.statusCode}`));
                }
            });
        }).on('error', reject);
    });
}

/**
 * Extract URLs from sitemap XML
 */
function extractUrlsFromSitemap(xml) {
    const urls = [];
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    let match;

    while ((match = urlRegex.exec(xml)) !== null) {
        urls.push(match[1]);
    }

    return urls;
}

/**
 * Submit URLs to Bing Indexing API
 */
function submitUrlsToBing(urls) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            siteUrl: SITE_URL,
            urlList: urls
        });

        const options = {
            hostname: 'ssl.bing.com',
            port: 443,
            path: '/webmaster/api.svc/json/SubmitUrlbatch?apikey=' + BING_API_KEY,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';

            res.on('data', (chunk) => {
                responseData += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const result = JSON.parse(responseData);
                        resolve(result);
                    } catch (e) {
                        resolve({ success: true, response: responseData });
                    }
                } else {
                    reject(new Error(`HTTP ${res.statusCode}: ${responseData}`));
                }
            });
        });

        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

/**
 * Split array into chunks
 */
function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * Main function
 */
async function main() {
    console.log('🔍 Bing Indexing API - Sitemap URL Submitter\n');
    console.log(`🔑 API Key: ${BING_API_KEY.substring(0, 8)}...`);
    console.log(`🌐 Site URL: ${SITE_URL}`);
    console.log(`📄 Sitemap URL: ${SITEMAP_URL}\n`);

    try {
        // Fetch sitemap
        console.log('📥 Fetching sitemap...');
        const sitemapXml = await fetchUrl(SITEMAP_URL);
        console.log('✅ Sitemap fetched successfully\n');

        // Extract URLs
        console.log('🔍 Extracting URLs from sitemap...');
        const urls = extractUrlsFromSitemap(sitemapXml);
        console.log(`✅ Found ${urls.length} URLs\n`);

        if (urls.length === 0) {
            console.log('⚠️  No URLs found in sitemap. Exiting.');
            return;
        }

        // Display first few URLs
        console.log('📋 Sample URLs:');
        urls.slice(0, 5).forEach((url, i) => {
            console.log(`   ${i + 1}. ${url}`);
        });
        if (urls.length > 5) {
            console.log(`   ... and ${urls.length - 5} more\n`);
        } else {
            console.log('');
        }

        // Split into batches
        const batches = chunkArray(urls, BATCH_SIZE);
        console.log(`📦 Split into ${batches.length} batch(es) of up to ${BATCH_SIZE} URLs each\n`);

        // Submit batches
        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < batches.length; i++) {
            const batch = batches[i];
            console.log(`🚀 Submitting batch ${i + 1}/${batches.length} (${batch.length} URLs)...`);

            try {
                const result = await submitUrlsToBing(batch);
                console.log(`✅ Batch ${i + 1} submitted successfully`);

                // Show response details if available
                if (result.d) {
                    console.log(`   Response: ${JSON.stringify(result.d)}`);
                }

                successCount += batch.length;

                // Add delay between batches
                if (i < batches.length - 1) {
                    console.log('⏳ Waiting 2 seconds before next batch...\n');
                    await new Promise(resolve => setTimeout(resolve, 2000));
                }
            } catch (error) {
                console.error(`❌ Batch ${i + 1} failed:`, error.message);
                failCount += batch.length;
            }
        }

        // Summary
        console.log('\n' + '='.repeat(60));
        console.log('📈 SUBMISSION SUMMARY');
        console.log('='.repeat(60));
        console.log(`✅ Successfully submitted: ${successCount} URLs`);
        console.log(`❌ Failed: ${failCount} URLs`);
        console.log(`📊 Total processed: ${successCount + failCount} URLs`);
        console.log('='.repeat(60));

    } catch (error) {
        console.error('\n💥 Error:', error.message);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main()
        .then(() => {
            console.log('\n✨ All done!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('\n💥 Fatal error:', error);
            process.exit(1);
        });
}

module.exports = { extractUrlsFromSitemap, submitUrlsToBing };
