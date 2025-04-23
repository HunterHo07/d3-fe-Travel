import HeroSection from '@/components/home/HeroSection';
import FeaturedCruises from '@/components/home/FeaturedCruises';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCruises />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
