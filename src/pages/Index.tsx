import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSnapshot from "@/components/ServicesSnapshot";
import WorkWithUs from "@/components/WorkWithUs";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HighlightsSection />
        <FeaturedProjects />
        <ServicesSnapshot />
        <WorkWithUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
