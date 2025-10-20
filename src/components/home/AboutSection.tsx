import ElectricTitle from './about/ElectricTitle';
import PerformanceGrid from './about/PerformanceGrid';
import VenueTypes from './about/VenueTypes';
import ElectricStats from './about/ElectricStats';
import PulsingBackground from './about/PulsingBackground';

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-24 overflow-hidden bg-[#1A0B2E]">
      <PulsingBackground />

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <ElectricTitle />
            <VenueTypes />
          </div>
          <div className="flex items-center justify-center w-full">
            <PerformanceGrid />
          </div>
        </div>
        <ElectricStats />
      </div>
    </section>
  );
}