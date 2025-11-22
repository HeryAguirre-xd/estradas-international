import { motion } from 'framer-motion';

export default function Description() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <div className="relative group">
        {/* Gradient background blur effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#6B2FD9]/20 to-[#06B6D4]/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />

        {/* Content container with glass effect */}
        <div className="relative bg-[#1A0B2E]/60 backdrop-blur-sm p-8 rounded-xl border border-[#4F46E5]/20">
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Grupo Estradas es una banda internacionalmente reconocida con una trayectoria musical excepcional y una vasta experiencia,
              conocida por llevar presentaciones en vivo inolvidables a los eventos más exclusivos. Desde reuniones íntimas hasta
              celebraciones majestuosas, ofrecemos un espectáculo electrizante que trasciende géneros, cautivando a públicos de
              todos los gustos y estilos.
            </p>
            <p>
              Con música 100% en vivo, creamos una experiencia musical dinámica y auténtica que conecta con cada invitado,
              dejando recuerdos imborrables. Nuestra versatilidad y pasión garantizan que cada presentación no sea solo un
              espectáculo, sino una verdadera celebración de la música y la cultura.
            </p>
            <p className="text-[#06B6D4] font-semibold text-xl">
              Cuando eliges a Grupo Estradas, no solo contratas una banda, ¡invitas el corazón y el alma de la música a tu evento!
              Permítenos hacer que tu próxima celebración sea extraordinaria con el mejor entretenimiento en vivo.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}