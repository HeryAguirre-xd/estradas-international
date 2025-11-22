import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';

const inputDir = './src/assets';
const outputDir = './src/assets/optimized';

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

async function optimizePerformanceImages() {
    console.log('🔄 Optimizing performance grid images...\n');

    const images = ['picture1.jpg', 'picture2.jpg'];

    try {
        for (const image of images) {
            const inputPath = `${inputDir}/${image}`;
            const outputName = image.replace('.jpg', '.webp');
            const outputPath = `${outputDir}/${outputName}`;

            await sharp(inputPath)
                .resize(800, 800, { fit: 'cover', position: 'center' })
                .webp({ quality: 85 })
                .toFile(outputPath);

            console.log(`✅ Created: ${outputName} (800x800 - Optimized)`);
        }

    } catch (error) {
        console.error('❌ Error optimizing images:', error.message);
        console.error('\nMake sure picture1.jpg and picture2.jpg exist in:', inputDir);
    }
}

optimizePerformanceImages().catch(console.error);
