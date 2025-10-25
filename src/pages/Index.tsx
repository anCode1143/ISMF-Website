// import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { StatsGrid } from "@/components/StatsGrid";
import { PerformanceChart } from "@/components/PerformanceChart";
import { PortfolioBreakdown } from "@/components/PortfolioBreakdown";
import { AboutSection } from "@/components/AboutSection";
import { Divisions } from "@/components/Divisions";
import { MacroDashboard } from "@/components/MacroDashboard";
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
        <StatsGrid />
        <div id="about">
          <AboutSection />
        </div>
        <div id="divisions">
          <Divisions />
        </div>
        <div id="research">
          <MacroDashboard />
        </div>
        <div id="performance" className="container mx-auto px-4 py-16">
          <PerformanceChart />
        </div>
        <PortfolioBreakdown />
        <EducationSection />
        <Partners />
        <JoinSection />
      </main>

    </div>
  );
};

export default Index;
