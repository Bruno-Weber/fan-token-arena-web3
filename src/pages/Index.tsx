import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ClubBenefits from "@/components/ClubBenefits";
import FanBenefits from "@/components/FanBenefits";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Separator } from "@/components/ui/separator";
import { LineHorizontal } from "lucide-react";

const SectionSeparator = () => (
  <div className="relative z-20 w-full flex items-center justify-center py-6">
    <div className="w-full max-w-3xl flex items-center justify-center px-2">
      <span className="flex-1 h-0.5 bg-white/10 neon-shadow rounded-full" />
      <span className="flex items-center justify-center mx-4">
        <LineHorizontal className="h-7 w-7 text-web3-primary drop-shadow-lg opacity-60" strokeWidth={2.2} />
      </span>
      <span className="flex-1 h-0.5 bg-white/10 neon-shadow rounded-full" />
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080B]">
      <Navbar />
      <HeroSection />
      <SectionSeparator />
      <HowItWorks />
      <SectionSeparator />
      <ClubBenefits />
      <SectionSeparator />
      <FanBenefits />
      <SectionSeparator />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
