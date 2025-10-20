import { motion } from 'framer-motion';
import Description from '../components/about/Description';
import ParticleBackground from '../components/shared/ParticleBackground';

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#1A0B2E] pt-32 pb-20">
      <ParticleBackground />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4]">
            Sobre Nosotros
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4]" />
        </motion.div>

        <Description />
      </div>
    </div>
  );
}