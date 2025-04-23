
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ClubBenefits from "@/components/ClubBenefits";
import FanBenefits from "@/components/FanBenefits";
import NFTMintSection from "@/components/NFTMintSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#08080B]">
      <Navbar />
      <HeroSection />
      <section id="como-funciona"><HowItWorks /></section>
      <section id="clubes"><ClubBenefits /></section>
      <section id="torcedores"><FanBenefits /></section>
      <section id="nfts"><NFTMintSection /></section>
      <section id="faq"><FAQSection /></section>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
