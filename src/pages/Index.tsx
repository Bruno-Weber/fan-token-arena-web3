
import Navbar from "@/components/Navbar";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import HowItWorks from "@/components/HowItWorks";
import ClubBenefits from "@/components/ClubBenefits";
import FanBenefits from "@/components/FanBenefits";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Use the integrated HeroGeometric as the main hero section */}
      <HeroGeometric
        badge="TokenArena"
        title1="Conectando Torcedores"
        title2="e Clubes pelo Mundo"
        subtitle="Crie fan tokens verificados, engaje sua torcida e monetize sua paixão em uma plataforma segura e transparente."
      />
      <HowItWorks />
      <ClubBenefits />
      <FanBenefits />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
