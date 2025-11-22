import { Instagram, Youtube, Facebook, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Maria Rodriguez",
    role: "Cliente de Boda",
    text: "¡Estradas International hizo nuestra boda mágica! ¡Su energía fue contagiosa!"
  },
  {
    name: "Juan Pérez",
    role: "Organizador de Quinceañera",
    text: "¡El grupo más profesional y versátil con el que hemos trabajado!"
  },
  {
    name: "Ana Garcia",
    role: "Coordinadora de Eventos",
    text: "¡Saben cómo mantener la energía alta durante todo el evento!"
  }
];

export default function SocialProof() {
  return (
    <section className="relative py-20 bg-[#1A0B2E] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#6B2FD9]/20 to-[#06B6D4]/20 animate-gradient-xy" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4]">
            Síguenos en Redes Sociales
          </h2>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.instagram.com/estradasinternational01/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-[#06B6D4] hover:text-[#6B2FD9] transition-colors duration-300"
            >
              <Instagram className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@eryestrada"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-[#06B6D4] hover:text-[#6B2FD9] transition-colors duration-300"
            >
              <Youtube className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/EstradasInternational"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-[#06B6D4] hover:text-[#6B2FD9] transition-colors duration-300"
            >
              <Facebook className="h-8 w-8" />
            </motion.a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6B2FD9] to-[#06B6D4] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-[#1A0B2E]/80 backdrop-blur-sm p-6 rounded-lg border border-[#4F46E5]/20">
                <div className="flex text-[#06B6D4] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="text-[#06B6D4] font-semibold">{testimonial.name}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}