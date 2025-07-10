'use client';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/ui/hero-section';
import GameCarousel from '@/components/ui/game-carousel';
import PlansSection from '@/components/ui/plans-section';
import InfiniteScrollAnimationPage from '@/components/ui/infinite-scroll';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <InfiniteScrollAnimationPage />
      
      
      <GameCarousel />
      <PlansSection />
      <Footer />
    </div>
  );
}