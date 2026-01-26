import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { QualificationsSection } from "@/components/QualificationsSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <QualificationsSection />
      <ConnectSection />
      <Footer />
    </div>
  );
};

export default Index;
