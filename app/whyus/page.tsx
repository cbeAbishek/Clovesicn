'use client';
import WhyUsHighlights from '@/components/ui/WhyUsHighlights';
import HeroSection from '@/components/ui/Herosection';  

export default function WhyUsPage() {
  return (
    <main style={{ minHeight: '80vh', background: '#f8f9fa', padding: '2rem', paddingTop: '90px' }}>
      <HeroSection
        title="Why Choose Cloves INC"
        subtitle="Discover what sets us apart in sustainable textile solutions and industrial packaging."
      />
      <WhyUsHighlights />
    </main>
  );
}