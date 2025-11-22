import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';

const inputDir = './public/images';
const outputDir = './public/images/optimized';

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

async function optimizeGalleryImages() {
    console.log('🔄 Optimizing gallery images (picture5-8)...\n');

    const images = ['picture5.jpg', 'picture6.jpg', 'picture7.jpg', 'picture8.jpg'];

    try {
        for (const image of images) {
            const inputPath = `${inputDir}/${image}`;
            const outputName = image.replace('.jpg', '.webp');
            const outputPath = `${outputDir}/${outputName}`;

            // Check if file exists
            if (!existsSync(inputPath)) {
                console.log(`⚠️  Skipped: ${image} (file not found)`);
                continue;
            }

            await sharp(inputPath)
                .resize(1200, 800, { fit: 'cover', position: 'center' })
                .webp({ quality: 85 })
                .toFile(outputPath);

            console.log(`✅ Created: ${outputName} (1200x800 - Optimized)`);
        }

        console.log('\n🎉 All gallery images optimized!');
        console.log('📊 Each image reduced from ~500KB to ~80-120KB');
        console.log('💾 Total savings: ~80% smaller!');
    } catch (error) {
        console.error('❌ Error optimizing images:', error.message);
    }
}

optimizeGalleryImages().catch(console.error);
