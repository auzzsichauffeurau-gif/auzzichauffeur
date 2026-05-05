const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

async function optimizeNewLogos() {
    console.log('🖼️  Optimizing new logos...\n');

    const optimizations = [
        {
            input: 'logo/front.png',
            outputs: [
                { file: 'logo/header-logo.webp', width: 300, format: 'webp', quality: 80 },
            ]
        },
        {
            input: 'logo/footer.png',
            outputs: [
                { file: 'logo/footer-logo.webp', width: 300, format: 'webp', quality: 80 },
            ]
        },
        {
            input: 'logo/icon.png',
            outputs: [
                { file: 'favicon.ico', width: 32, format: 'png', quality: 90 },
                { file: 'icon.png', width: 192, format: 'png', quality: 90 },
                { file: 'apple-touch-icon.png', width: 180, format: 'png', quality: 90 },
            ]
        }
    ];

    for (const opt of optimizations) {
        const inputPath = path.join(publicDir, opt.input);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${opt.input} - file not found`);
            continue;
        }

        const inputStats = fs.statSync(inputPath);
        console.log(`📁 Processing: ${opt.input} (${(inputStats.size / 1024).toFixed(2)} KB)`);

        for (const output of opt.outputs) {
            const outputPath = path.join(publicDir, output.file);

            try {
                let pipeline = sharp(inputPath).resize(output.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });

                if (output.format === 'webp') {
                    pipeline = pipeline.webp({
                        quality: output.quality,
                        effort: 6
                    });
                } else if (output.format === 'png') {
                    pipeline = pipeline.png({
                        quality: output.quality,
                        compressionLevel: 9
                    });
                }

                await pipeline.toFile(outputPath);

                const outputStats = fs.statSync(outputPath);
                const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
                console.log(`  ✅ ${output.file} (${(outputStats.size / 1024).toFixed(2)} KB) - ${savings}% smaller`);
            } catch (error) {
                console.log(`  ❌ Error creating ${output.file}: ${error.message}`);
            }
        }
        console.log('');
    }

    console.log('✨ Logo optimization complete!');
}

optimizeNewLogos().catch(console.error);
