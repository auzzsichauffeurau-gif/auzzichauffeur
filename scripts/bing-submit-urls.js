/**
 * Bing Indexing API - Production Script
 * Handles quota limits and provides better error handling
 */

const https = require('https');

const BING_API_KEY = '34af85f7414f4443b34e9879c78bb9cb';
const SITE_URL = 'https://auzziechauffeur.com.au';

// Conservative batch size (API supports up to 150, but daily quota might be 100)
const BATCH_SIZE = 100;

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
                'Content-Length': Buffer.byteLength(data)
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
                        resolve({ success: true, data: result, statusCode: res.statusCode });
                    } catch (e) {
                        resolve({ success: true, data: responseData, statusCode: res.statusCode });
                    }
                } else {
                    // Parse error response
                    let errorMsg = responseData;
                    try {
                        const errorData = JSON.parse(responseData);
                        errorMsg = JSON.stringify(errorData, null, 2);
                    } catch (e) {
                        // Keep original error message
                    }
                    reject({
                        statusCode: res.statusCode,
                        message: errorMsg,
                        urls: urls.length
                    });
                }
            });
        });

        req.on('error', (error) => {
            reject({
                statusCode: 0,
                message: error.message,
                urls: urls.length
            });
        });

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
async function submitUrls(urlList) {
    console.log('🔍 Bing Indexing API - URL Submission Tool\n');
    console.log(`🔑 API Key: ${BING_API_KEY.substring(0, 8)}...`);
    console.log(`🌐 Site URL: ${SITE_URL}`);
    console.log(`📊 Total URLs: ${urlList.length}`);
    console.log(`📦 Batch Size: ${BATCH_SIZE}\n`);

    // Show sample URLs
    console.log('📋 Sample URLs:');
    urlList.slice(0, 5).forEach((url, i) => {
        console.log(`   ${i + 1}. ${url}`);
    });
    if (urlList.length > 5) {
        console.log(`   ... and ${urlList.length - 5} more\n`);
    } else {
        console.log('');
    }

    // Split into batches
    const batches = chunkArray(urlList, BATCH_SIZE);
    console.log(`📦 Split into ${batches.length} batch(es)\n`);

    let successCount = 0;
    let failCount = 0;
    const errors = [];

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        console.log(`🚀 Submitting batch ${i + 1}/${batches.length} (${batch.length} URLs)...`);

        try {
            const result = await submitUrlsToBing(batch);
            console.log(`✅ Batch ${i + 1} submitted successfully`);

            if (result.data && result.data.d) {
                console.log(`   Response: ${JSON.stringify(result.data.d)}`);
            }

            successCount += batch.length;

            // Add delay between batches
            if (i < batches.length - 1) {
                console.log('⏳ Waiting 3 seconds before next batch...\n');
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        } catch (error) {
            console.error(`❌ Batch ${i + 1} failed (HTTP ${error.statusCode})`);
            console.error(`   Error: ${error.message}`);
            failCount += batch.length;
            errors.push({
                batch: i + 1,
                error: error.message,
                urlCount: batch.length
            });

            // If quota exceeded, stop trying
            if (error.message && error.message.includes('quota')) {
                console.log('\n⚠️  Daily quota exceeded. Stopping submission.\n');
                break;
            }
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📈 SUBMISSION SUMMARY');
    console.log('='.repeat(60));
    console.log(`✅ Successfully submitted: ${successCount} URLs`);
    console.log(`❌ Failed: ${failCount} URLs`);
    console.log(`📊 Total processed: ${successCount + failCount} URLs`);

    if (errors.length > 0) {
        console.log('\n❌ Errors:');
        errors.forEach(err => {
            console.log(`   Batch ${err.batch}: ${err.error}`);
        });
    }

    console.log('='.repeat(60));

    return { successCount, failCount, errors };
}

// EXACTLY 100 MOST IMPORTANT URLs
const urls = [
    // Core Pages (11)
    `${SITE_URL}/`,
    `${SITE_URL}/about-us`,
    `${SITE_URL}/services`,
    `${SITE_URL}/contact-us`,
    `${SITE_URL}/book`,
    `${SITE_URL}/quote`,
    `${SITE_URL}/locations`,
    `${SITE_URL}/news`,
    `${SITE_URL}/the-fleet`,
    `${SITE_URL}/privacy-policy`,
    `${SITE_URL}/terms-conditions`,

    // Main Cities (8)
    `${SITE_URL}/sydney`,
    `${SITE_URL}/melbourne`,
    `${SITE_URL}/brisbane`,
    `${SITE_URL}/perth`,
    `${SITE_URL}/adelaide`,
    `${SITE_URL}/gold-coast`,
    `${SITE_URL}/hobart`,
    `${SITE_URL}/cairns-port-douglas`,

    // Main Services (13)
    `${SITE_URL}/services/airport-transfers`,
    `${SITE_URL}/services/corporate-transfers`,
    `${SITE_URL}/services/hourly-chauffeur`,
    `${SITE_URL}/services/luxury-tours`,
    `${SITE_URL}/services/international-student-transfers`,
    `${SITE_URL}/services/wedding-cars`,
    `${SITE_URL}/services/cruise-ship-transfers`,
    `${SITE_URL}/services/conferences-special-events`,
    `${SITE_URL}/services/airline-cruise-crewing`,
    `${SITE_URL}/services/all-day-hire`,
    `${SITE_URL}/services/meeting-points`,
    `${SITE_URL}/the-fleet/executive-sedans`,
    `${SITE_URL}/about-us/our-history`,

    // Sydney Services (8)
    `${SITE_URL}/sydney/airport-transfers`,
    `${SITE_URL}/sydney/corporate-transfers`,
    `${SITE_URL}/sydney/hourly-chauffeur`,
    `${SITE_URL}/sydney/luxury-tours`,
    `${SITE_URL}/sydney/international-student-transfers`,
    `${SITE_URL}/sydney/wedding-cars`,
    `${SITE_URL}/sydney/cruise-ship-transfers`,
    `${SITE_URL}/sydney/conferences-special-events`,

    // Melbourne Services (8)
    `${SITE_URL}/melbourne/airport-transfers`,
    `${SITE_URL}/melbourne/corporate-transfers`,
    `${SITE_URL}/melbourne/hourly-chauffeur`,
    `${SITE_URL}/melbourne/luxury-tours`,
    `${SITE_URL}/melbourne/international-student-transfers`,
    `${SITE_URL}/melbourne/wedding-cars`,
    `${SITE_URL}/melbourne/cruise-ship-transfers`,
    `${SITE_URL}/melbourne/conferences-special-events`,

    // Brisbane Services (8)
    `${SITE_URL}/brisbane/airport-transfers`,
    `${SITE_URL}/brisbane/corporate-transfers`,
    `${SITE_URL}/brisbane/hourly-chauffeur`,
    `${SITE_URL}/brisbane/luxury-tours`,
    `${SITE_URL}/brisbane/international-student-transfers`,
    `${SITE_URL}/brisbane/wedding-cars`,
    `${SITE_URL}/brisbane/cruise-ship-transfers`,
    `${SITE_URL}/brisbane/conferences-special-events`,

    // Perth Services (8)
    `${SITE_URL}/perth/airport-transfers`,
    `${SITE_URL}/perth/corporate-transfers`,
    `${SITE_URL}/perth/hourly-chauffeur`,
    `${SITE_URL}/perth/luxury-tours`,
    `${SITE_URL}/perth/international-student-transfers`,
    `${SITE_URL}/perth/wedding-cars`,
    `${SITE_URL}/perth/cruise-ship-transfers`,
    `${SITE_URL}/perth/conferences-special-events`,

    // Adelaide Services (8)
    `${SITE_URL}/adelaide/airport-transfers`,
    `${SITE_URL}/adelaide/corporate-transfers`,
    `${SITE_URL}/adelaide/hourly-chauffeur`,
    `${SITE_URL}/adelaide/luxury-tours`,
    `${SITE_URL}/adelaide/international-student-transfers`,
    `${SITE_URL}/adelaide/wedding-cars`,
    `${SITE_URL}/adelaide/cruise-ship-transfers`,
    `${SITE_URL}/adelaide/conferences-special-events`,

    // Gold Coast Services (8)
    `${SITE_URL}/gold-coast/airport-transfers`,
    `${SITE_URL}/gold-coast/corporate-transfers`,
    `${SITE_URL}/gold-coast/hourly-chauffeur`,
    `${SITE_URL}/gold-coast/luxury-tours`,
    `${SITE_URL}/gold-coast/international-student-transfers`,
    `${SITE_URL}/gold-coast/wedding-cars`,
    `${SITE_URL}/gold-coast/cruise-ship-transfers`,
    `${SITE_URL}/gold-coast/conferences-special-events`,

    // Hobart Services (8)
    `${SITE_URL}/hobart/airport-transfers`,
    `${SITE_URL}/hobart/corporate-transfers`,
    `${SITE_URL}/hobart/hourly-chauffeur`,
    `${SITE_URL}/hobart/luxury-tours`,
    `${SITE_URL}/hobart/international-student-transfers`,
    `${SITE_URL}/hobart/wedding-cars`,
    `${SITE_URL}/hobart/cruise-ship-transfers`,
    `${SITE_URL}/hobart/conferences-special-events`,

    // Cairns Services (8)
    `${SITE_URL}/cairns-port-douglas/airport-transfers`,
    `${SITE_URL}/cairns-port-douglas/corporate-transfers`,
    `${SITE_URL}/cairns-port-douglas/hourly-chauffeur`,
    `${SITE_URL}/cairns-port-douglas/luxury-tours`,
    `${SITE_URL}/cairns-port-douglas/international-student-transfers`,
    `${SITE_URL}/cairns-port-douglas/wedding-cars`,
    `${SITE_URL}/cairns-port-douglas/cruise-ship-transfers`,
    `${SITE_URL}/cairns-port-douglas/conferences-special-events`,

    // Additional Important Pages (4)
    `${SITE_URL}/about-us/our-policies`,
    `${SITE_URL}/about-us/faqs`,
    `${SITE_URL}/about-us/our-policies/fatigue-management-policy`,
    `${SITE_URL}/about-us/our-policies/child-safety-policy`,
];

// Run if called directly
if (require.main === module) {
    submitUrls(urls)
        .then((result) => {
            console.log('\n✨ All done!');
            process.exit(result.failCount > 0 ? 1 : 0);
        })
        .catch((error) => {
            console.error('\n💥 Fatal error:', error);
            process.exit(1);
        });
}

module.exports = { submitUrls, submitUrlsToBing };
