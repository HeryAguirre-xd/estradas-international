import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SocialProof from '../components/home/SocialProof';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <SocialProof />
    </main>
  );
}