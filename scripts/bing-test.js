/**
 * Bing Indexing API - Simple Test
 * Tests the Bing API with a small set of URLs
 */

const https = require('https');

const BING_API_KEY = '34af85f7414f4443b34e9879c78bb9cb';
const SITE_URL = 'https://auzziechauffeur.com.au';

// Test with just a few URLs
const testUrls = [
    `${SITE_URL}/`,
    `${SITE_URL}/about-us`,
    `${SITE_URL}/services`,
    `${SITE_URL}/contact-us`,
    `${SITE_URL}/sydney`
];

function submitUrlsToBing(urls) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            siteUrl: SITE_URL,
            urlList: urls
        });

        console.log('📤 Sending request to Bing API...');
        console.log('📋 Payload:', data);

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
                console.log(`📊 Response Status: ${res.statusCode}`);
                console.log(`📄 Response Body: ${responseData}`);

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
            console.error('❌ Request Error:', error);
            reject(error);
        });

        req.write(data);
        req.end();
    });
}

async function main() {
    console.log('🧪 Bing Indexing API - Test Script\n');
    console.log(`🔑 API Key: ${BING_API_KEY.substring(0, 8)}...`);
    console.log(`🌐 Site URL: ${SITE_URL}`);
    console.log(`📊 Test URLs: ${testUrls.length}\n`);

    testUrls.forEach((url, i) => {
        console.log(`   ${i + 1}. ${url}`);
    });
    console.log('');

    try {
        const result = await submitUrlsToBing(testUrls);
        console.log('\n✅ SUCCESS!');
        console.log('📊 Result:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('\n❌ FAILED!');
        console.error('💥 Error:', error.message);
        process.exit(1);
    }
}

main();
