import { motion } from 'framer-motion';

export default function ElectricTitle() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-[#6B2FD9] via-[#4F46E5] to-[#06B6D4] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      <div className="relative px-8 py-7 bg-[#1A0B2E] rounded-lg leading-none">
        <h2 className="text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4] animate-pulse">
            De Nogales, AZ<br />al mundo!
          </span>
        </h2>
      </div>
    </motion.div>
  );
}