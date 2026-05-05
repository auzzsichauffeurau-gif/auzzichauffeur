/**
 * Bing Indexing API Script
 * Submits URLs to Bing for indexing in batches
 * 
 * API Documentation: https://www.bing.com/webmasters/url-submission-api
 */

const https = require('https');

// Configuration
const BING_API_KEY = '34af85f7414f4443b34e9879c78bb9cb';
const SITE_URL = 'https://auzziechauffeur.com.au'; // Update with your actual domain
const BATCH_SIZE = 150; // Bing allows up to 150 URLs per request

/**
 * Submit URLs to Bing Indexing API
 * @param {string[]} urls - Array of URLs to submit
 * @returns {Promise<object>} - API response
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

        req.on('error', (error) => {
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

/**
 * Split array into chunks
 * @param {Array} array - Array to split
 * @param {number} size - Chunk size
 * @returns {Array[]} - Array of chunks
 */
function chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * Main function to submit all URLs
 * @param {string[]} urls - Array of all URLs to submit
 */
async function submitAllUrls(urls) {
    console.log(`📊 Total URLs to submit: ${urls.length}`);

    const batches = chunkArray(urls, BATCH_SIZE);
    console.log(`📦 Split into ${batches.length} batch(es) of up to ${BATCH_SIZE} URLs each\n`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        console.log(`🚀 Submitting batch ${i + 1}/${batches.length} (${batch.length} URLs)...`);

        try {
            const result = await submitUrlsToBing(batch);
            console.log(`✅ Batch ${i + 1} submitted successfully`);
            console.log(`   Response:`, JSON.stringify(result, null, 2));
            successCount += batch.length;

            // Add delay between batches to avoid rate limiting
            if (i < batches.length - 1) {
                console.log('⏳ Waiting 2 seconds before next batch...\n');
                await new Promise(resolve => setTimeout(resolve, 2000));
            }
        } catch (error) {
            console.error(`❌ Batch ${i + 1} failed:`, error.message);
            failCount += batch.length;
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log('📈 SUMMARY');
    console.log('='.repeat(50));
    console.log(`✅ Successfully submitted: ${successCount} URLs`);
    console.log(`❌ Failed: ${failCount} URLs`);
    console.log(`📊 Total processed: ${successCount + failCount} URLs`);
}

// Example URLs - Update this with your actual URLs
const urlsToSubmit = [
    `${SITE_URL}/`,
    `${SITE_URL}/about-us`,
    `${SITE_URL}/services`,
    `${SITE_URL}/contact`,
    `${SITE_URL}/sydney`,
    `${SITE_URL}/melbourne`,
    `${SITE_URL}/brisbane`,
    `${SITE_URL}/perth`,
    `${SITE_URL}/adelaide`,
    `${SITE_URL}/gold-coast`,
    `${SITE_URL}/canberra`,
    // Add more URLs here...
];

// Run the script
if (require.main === module) {
    console.log('🔍 Bing Indexing API - URL Submission Tool\n');
    console.log(`🔑 API Key: ${BING_API_KEY.substring(0, 8)}...`);
    console.log(`🌐 Site URL: ${SITE_URL}\n`);

    submitAllUrls(urlsToSubmit)
        .then(() => {
            console.log('\n✨ All done!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('\n💥 Fatal error:', error);
            process.exit(1);
        });
}

module.exports = { submitUrlsToBing, submitAllUrls };
