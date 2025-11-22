import LaserText from './LaserText';
import weddingPerformance from '../../assets/optimized/wedding-performance-desktop.webp';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: `url(${weddingPerformance})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <LaserText
          text="Un Espectáculo En Tu Evento!"
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-fade-in"
        />
      </div>
    </section>
  );
}