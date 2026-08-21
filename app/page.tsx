import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import SectionHero from '../components/SectionHero';
import ImageMarquee from '../components/ImageMarquee';
import SectionConstraint from '../components/SectionConstraint';
import SectionKnownSolution from '../components/SectionKnownSolution';
import SectionLiteratureError from '../components/SectionLiteratureError';
import SectionThesis from '../components/SectionThesis';
import SectionOpenProblems from '../components/SectionOpenProblems';
import SectionLossRequirement from '../components/SectionLossRequirement';
import SectionProductDR1 from '../components/SectionProductDR1';
import SectionRoadmap from '../components/SectionRoadmap';
import SectionStatusCompare from '../components/SectionStatusCompare';
import SectionSources from '../components/SectionSources';
import SectionFooter from '../components/SectionFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#262829] text-[#F0F0EB] font-sans antialiased selection:bg-[#FF3B20] selection:text-[#F0F0EB]">
      <Header />
      <StatusBar />
      <SectionHero />
      <ImageMarquee />
      <SectionConstraint />
      <SectionKnownSolution />
      <SectionLiteratureError />
      <SectionThesis />
      <SectionOpenProblems />
      <SectionLossRequirement />
      <SectionProductDR1 />
      <SectionRoadmap />
      <SectionStatusCompare />
      <SectionSources />
      <SectionFooter />
    </main>
  );
}
