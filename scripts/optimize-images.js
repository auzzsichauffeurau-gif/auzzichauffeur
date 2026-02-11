const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// Define optimization rules for different image types
const optimizations = [
    // Logos - resize to reasonable dimensions
    {
        input: 'logo/header-logo.png',
        outputs: [
            { file: 'logo/header-logo.webp', width: 400, format: 'webp', quality: 85 },
            { file: 'logo/header-logo-optimized.png', width: 400, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'logo/footer-logo.png',
        outputs: [
            { file: 'logo/footer-logo.webp', width: 400, format: 'webp', quality: 85 },
            { file: 'logo/footer-logo-optimized.png', width: 400, format: 'png', quality: 85 }
        ]
    },
    // Accreditation badges - very small
    {
        input: 'logo-accreditation-classic.png',
        outputs: [
            { file: 'logo-accreditation-classic.webp', width: 100, format: 'webp', quality: 85 },
            { file: 'logo-accreditation-classic-optimized.png', width: 100, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'logo-accreditation-black-gold.png',
        outputs: [
            { file: 'logo-accreditation-black-gold.webp', width: 100, format: 'webp', quality: 85 },
            { file: 'logo-accreditation-black-gold-optimized.png', width: 100, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'logo-accreditation-clean.png',
        outputs: [
            { file: 'logo-accreditation-clean.webp', width: 100, format: 'webp', quality: 85 },
            { file: 'logo-accreditation-clean-optimized.png', width: 100, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'logo-accreditation-modern.png',
        outputs: [
            { file: 'logo-accreditation-modern.webp', width: 100, format: 'webp', quality: 85 },
            { file: 'logo-accreditation-modern-optimized.png', width: 100, format: 'png', quality: 85 }
        ]
    },
    // Hero background
    {
        input: 'hero-bg.png',
        outputs: [
            { file: 'hero-bg.webp', width: 1920, format: 'webp', quality: 80 },
            { file: 'hero-bg-optimized.png', width: 1920, format: 'png', quality: 80 }
        ]
    },
    // Map
    {
        input: 'au-map.png',
        outputs: [
            { file: 'au-map.webp', width: 1200, format: 'webp', quality: 85 },
            { file: 'au-map-optimized.png', width: 1200, format: 'png', quality: 85 }
        ]
    },
    // Tile images
    {
        input: 'tile-driver.png',
        outputs: [
            { file: 'tile-driver.webp', width: 800, format: 'webp', quality: 85 },
            { file: 'tile-driver-optimized.png', width: 800, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'tile-meeting-1.png',
        outputs: [
            { file: 'tile-meeting-1.webp', width: 800, format: 'webp', quality: 85 },
            { file: 'tile-meeting-1-optimized.png', width: 800, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'tile-woman-phone.png',
        outputs: [
            { file: 'tile-woman-phone.webp', width: 800, format: 'webp', quality: 85 },
            { file: 'tile-woman-phone-optimized.png', width: 800, format: 'png', quality: 85 }
        ]
    },
    {
        input: 'tile-audi.png',
        outputs: [
            { file: 'tile-audi.webp', width: 800, format: 'webp', quality: 85 },
            { file: 'tile-audi-optimized.png', width: 800, format: 'png', quality: 85 }
        ]
    }
];

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

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
                    pipeline = pipeline.webp({ quality: output.quality });
                } else if (output.format === 'png') {
                    pipeline = pipeline.png({ quality: output.quality, compressionLevel: 9 });
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

    console.log('✨ Image optimization complete!');
}

optimizeImages().catch(console.error);
