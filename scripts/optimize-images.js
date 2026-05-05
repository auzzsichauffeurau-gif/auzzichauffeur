const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Define optimization rules for different image types - VERY AGGRESSIVE
const optimizations = [
    // Logos - smaller and more compressed
    {
        input: 'logo/header-logo.png',
        outputs: [
            { file: 'logo/header-logo.webp', width: 300, format: 'webp', quality: 75 },
        ]
    },
    {
        input: 'logo/footer-logo.png',
        outputs: [
            { file: 'logo/footer-logo.webp', width: 300, format: 'webp', quality: 75 },
        ]
    },
    // Accreditation badges - tiny
    {
        input: 'logo-accreditation-classic.png',
        outputs: [
            { file: 'logo-accreditation-classic.webp', width: 80, format: 'webp', quality: 70 },
        ]
    },
    {
        input: 'logo-accreditation-black-gold.png',
        outputs: [
            { file: 'logo-accreditation-black-gold.webp', width: 80, format: 'webp', quality: 70 },
        ]
    },
    {
        input: 'logo-accreditation-clean.png',
        outputs: [
            { file: 'logo-accreditation-clean.webp', width: 80, format: 'webp', quality: 70 },
        ]
    },
    {
        input: 'logo-accreditation-modern.png',
        outputs: [
            { file: 'logo-accreditation-modern.webp', width: 80, format: 'webp', quality: 70 },
        ]
    },
    // Hero background - much smaller and compressed
    {
        input: 'hero-bg.png',
        outputs: [
            { file: 'hero-bg.webp', width: 1600, format: 'webp', quality: 65 },
        ]
    },
    // Map - smaller
    {
        input: 'au-map.png',
        outputs: [
            { file: 'au-map.webp', width: 800, format: 'webp', quality: 75 },
        ]
    },
    // Tile images - smaller and more compressed
    {
        input: 'tile-driver.png',
        outputs: [
            { file: 'tile-driver.webp', width: 600, format: 'webp', quality: 70 },
        ]
    },
    {
        input: 'tile-meeting-1.png',
        outputs: [
            { file: 'tile-meeting-1.webp', width: 600, format: 'webp', quality: 70 },
        ]
    },
    {
        input: 'tile-woman-phone.png',
        outputs: [
            { file: 'tile-woman-phone.webp', width: 600, format: 'webp', quality: 70 },
        ]
    },
    {
        input: 'tile-audi.png',
        outputs: [
            { file: 'tile-audi.webp', width: 600, format: 'webp', quality: 70 },
        ]
    }
];

async function optimizeImages() {
    console.log('🖼️  Starting AGGRESSIVE image optimization...\n');
    let totalOriginal = 0;
    let totalOptimized = 0;

    for (const opt of optimizations) {
        const inputPath = path.join(publicDir, opt.input);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipping ${opt.input} - file not found`);
            continue;
        }

        const inputStats = fs.statSync(inputPath);
        totalOriginal += inputStats.size;
        console.log(`📁 Processing: ${opt.input} (${(inputStats.size / 1024).toFixed(2)} KB)`);

        for (const output of opt.outputs) {
            const outputPath = path.join(publicDir, output.file);
            const outputDir = path.dirname(outputPath);

            // Create directory if it doesn't exist
            if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
            }

            try {
                let pipeline = sharp(inputPath).resize(output.width, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                });

                if (output.format === 'webp') {
                    pipeline = pipeline.webp({
                        quality: output.quality,
                        effort: 6 // Maximum compression effort
                    });
                } else if (output.format === 'png') {
                    pipeline = pipeline.png({
                        quality: output.quality,
                        compressionLevel: 9,
                        effort: 10
                    });
                }

                await pipeline.toFile(outputPath);

                const outputStats = fs.statSync(outputPath);
                totalOptimized += outputStats.size;
                const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
                console.log(`  ✅ ${output.file} (${(outputStats.size / 1024).toFixed(2)} KB) - ${savings}% smaller`);
            } catch (error) {
                console.log(`  ❌ Error creating ${output.file}: ${error.message}`);
            }
        }
        console.log('');
    }

    console.log('✨ Image optimization complete!');
    console.log(`📊 Total original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`📊 Total optimized: ${(totalOptimized / 1024).toFixed(2)} KB`);
    console.log(`📊 Total savings: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
}

optimizeImages().catch(console.error);
