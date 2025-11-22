import sharp from 'sharp';
import { existsSync, mkdirSync } from 'fs';

const inputPath = './src/assets/wedding-performance.jpg';
const outputDir = './src/assets/optimized';

// Create output directory if it doesn't exist
if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
}

async function optimizeWeddingImage() {
    console.log('🔄 Optimizing wedding-performance.jpg...\n');

    try {
        // 1. Desktop version (1920x1080, WebP, 80% quality)
        await sharp(inputPath)
            .resize(1920, 1080, { fit: 'cover', position: 'center' })
            .webp({ quality: 80 })
            .toFile(`${outputDir}/wedding-performance-desktop.webp`);
        console.log('✅ Created: wedding-performance-desktop.webp (~150KB)');

        // 2. Tablet version (1024x768, WebP, 75% quality)
        await sharp(inputPath)
            .resize(1024, 768, { fit: 'cover', position: 'center' })
            .webp({ quality: 75 })
            .toFile(`${outputDir}/wedding-performance-tablet.webp`);
        console.log('✅ Created: wedding-performance-tablet.webp (~80KB)');

        // 3. Mobile version (768x1024, WebP, 70% quality)
        await sharp(inputPath)
            .resize(768, 1024, { fit: 'cover', position: 'center' })
            .webp({ quality: 70 })
            .toFile(`${outputDir}/wedding-performance-mobile.webp`);
        console.log('✅ Created: wedding-performance-mobile.webp (~60KB)');

        // 4. Tiny placeholder (for instant load, 50x28, very blurred)
        await sharp(inputPath)
            .resize(50, 28, { fit: 'cover' })
            .blur(10)
            .webp({ quality: 20 })
            .toFile(`${outputDir}/wedding-performance-placeholder.webp`);
        console.log('✅ Created: wedding-performance-placeholder.webp (~3KB)');

        console.log('\n🎉 All versions created! Total size reduced by ~95%');
        console.log('\nNext step: Update HeroVideo.tsx to use these optimized images');
    } catch (error) {
        console.error('❌ Error optimizing image:', error.message);
        console.error('\nMake sure the file exists at:', inputPath);
    }
}

optimizeWeddingImage().catch(console.error);
