// import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { Sectors } from "@/components/Sectors";
// import { MacroDashboard } from "@/components/MacroDashboard";
import { EducationSection } from "@/components/EducationSection";
import { Partners } from "@/components/Partners";
import { JoinSection } from "@/components/JoinSection";
// import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">

      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="sectors">
          <Sectors />
        </div>
        {/* Performance content moved to /performance page */}
        <EducationSection />
        <Partners />
        <JoinSection />
      </main>

    </div>
  );
};

export default Index;
