import AboutPage from '@/components/about/main';
import PlayfulHeroSection from '@/components/about/play';
import MeetTheFounderSection from '@/components/about/MeetTheFounderSection';
import MissionSection from '@/components/about/MissionSection';
import GlobalPresenceSection from '@/components/about/GlobalPresence';
import SustainabilityFocusSection from '@/components/about/Sustain';

export const metadata = {
  title: 'About Cloves Inc. | Global Leader in Sustainable Packaging',
  description: 'Learn more about Cloves Inc., a global provider of medical waste liners, industrial packaging, and commercial textiles. Discover our mission, values, and commitment to sustainability.',
};

const About = () => {
  return (
    <>
      <PlayfulHeroSection />

      <MeetTheFounderSection />
      <MissionSection />
      <GlobalPresenceSection />
      <SustainabilityFocusSection />
      <AboutPage />
    </>
  );
};

export default About;
