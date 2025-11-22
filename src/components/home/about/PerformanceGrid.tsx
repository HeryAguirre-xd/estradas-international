import { motion } from 'framer-motion';
import picture1 from '../../../assets/optimized/picture1.webp';
import picture2 from '../../../assets/optimized/picture2.webp';

const images = [picture1, picture2];

export default function PerformanceGrid() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-[#06B6D4] transition-colors duration-300"
        >
          <img
            src={image}
            alt="Band performance"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}