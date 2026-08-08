import Navbar from '../components/Navbar';
import StickyFooter from '../components/StickyFooter';
import HeroSection from '../components/HeroSection';
import DataBar from '../components/DataBar';
import ImageStrip from '../components/ImageStrip';
import WhyNowSection from '../components/WhyNowSection';
import ComparativeDiagram from '../components/ComparativeDiagram';
import ProblemStatementSection from '../components/ProblemStatementSection';
import ArchitectureSection from '../components/ArchitectureSection';
import TechnicalPillarsSection from '../components/TechnicalPillarsSection';
import ThesisSection from '../components/ThesisSection';
import OpenProblemsSection from '../components/OpenProblemsSection';
import RoleSection from '../components/RoleSection';
import ReadingSection from '../components/ReadingSection';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E1013] text-[#F3F1EC] pb-[44px]">
      <Navbar />

      <main>
        <HeroSection />
        <DataBar />
        <ImageStrip />
        <WhyNowSection />
        <ComparativeDiagram />
        <ProblemStatementSection />
        <ArchitectureSection />
        <TechnicalPillarsSection />
        <ThesisSection />
        <OpenProblemsSection />
        <RoleSection />
        <ReadingSection />
        <FooterSection />
      </main>

      <StickyFooter />
    </div>
  );
}
