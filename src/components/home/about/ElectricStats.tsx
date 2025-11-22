import { motion } from 'framer-motion';
import { stats } from '../../../config/stats';

export default function ElectricStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4] rounded-lg blur-sm opacity-75" />
          <div className="relative bg-[#1A0B2E]/80 backdrop-blur-sm p-6 rounded-lg border border-[#4F46E5]/20">
            <stat.icon className="h-8 w-8 mx-auto mb-4 text-[#06B6D4] animate-pulse" />
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              className="text-3xl font-bold text-white mb-2 text-center"
            >
              {stat.value}
            </motion.div>
            <div className="text-[#A5B4FC] text-center">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}