
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import VerificationSection from "@/components/VerificationSection";
import ClubBenefits from "@/components/ClubBenefits";
import FanBenefits from "@/components/FanBenefits";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <VerificationSection />
      <ClubBenefits />
      <FanBenefits />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
