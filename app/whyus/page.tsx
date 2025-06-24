'use client';
import WhyUsHighlights from '@/components/ui/WhyUsHighlights';

export default function WhyUsPage() {
  return (
    <main style={{ minHeight: '80vh', background: '#f8f9fa', padding: '2rem', paddingTop: '90px' }}>
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#218838' }}>Why Choose Cloves INC</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Discover what sets us apart in sustainable textile solutions and industrial packaging.
        </p>
      </section>
      <WhyUsHighlights />
    </main>
  );
}