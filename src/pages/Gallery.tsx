import { motion } from 'framer-motion';
import GalleryGrid from '../components/gallery/GalleryGrid';
import ParticleBackground from '../components/shared/ParticleBackground';

export default function Gallery() {
  return (
    <div className="relative min-h-screen bg-[#1A0B2E] pt-32 pb-20">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4]">
            Nuestra Galería
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Momentos inolvidables capturados en cada evento. Descubre la magia que creamos juntos.
          </p>
        </motion.div>

        <GalleryGrid />
      </div>
    </div>
  );
}