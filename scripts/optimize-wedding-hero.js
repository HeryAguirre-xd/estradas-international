import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';

const inputPath = './src/assets/wedding-performance.jpg';
const outputDir = './src/assets/optimized';

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

async function optimizeWeddingImage() {
    try {
        // 1. Desktop version (1920x1080, WebP, 85% quality) - Landscape
        await sharp(inputPath)
            .resize(1920, 1080, { fit: 'cover', position: 'center' })
            .webp({ quality: 85 })
            .toFile(`${outputDir}/wedding-performance-desktop.webp`);
        console.log('✅ Created: wedding-performance-desktop.webp (Desktop/Laptop - Landscape)');

        // 2. Mobile version (750x1334, WebP, 75% quality) - Portrait for phones
        // Using iPhone dimensions (750x1334 covers most phones)
        await sharp(inputPath)
            .resize(750, 1334, { fit: 'cover', position: 'center' })
            .webp({ quality: 75 })
            .toFile(`${outputDir}/wedding-performance-mobile.webp`);
        console.log('✅ Created: wedding-performance-mobile.webp (iPhone/Android - Portrait)');
    } catch (error) {
        console.error('❌ Error optimizing image:', error.message);
        console.error('\nMake sure the file exists at:', inputPath);
    }
}

optimizeWeddingImage().catch(console.error);
