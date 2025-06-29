import AboutPage from "@/components/about/main";
import PlayfulHeroSection from "@/components/about/play";
import MeetTheFounderSection from '@/components/about/MeetTheFounderSection';
import MissionSection from '@/components/about/MissionSection';
 import GlobalPresenceSection from "@/components/about/GlobalPresence";
import QualityFocusSection from "@/components/about/Sustain";
const About = () => {
  return (
    <>
      <PlayfulHeroSection />
      
      <MeetTheFounderSection />
      {/* ✅ Mission Section */}
      <MissionSection />
       <GlobalPresenceSection />
       <QualityFocusSection />  
      <AboutPage />

      

    </>
  );
};


export default About;
