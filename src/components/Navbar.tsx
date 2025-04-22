import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoToFAQ = () => {
    const faqSection = document.getElementById("faq");
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#faq";
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/7f03ad53-171a-4f4a-b2aa-2d2066c42757.png"
            alt="TokenArena Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-2xl font-bold neon-glow">TokenArena</span>
        </div>
        
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#como-funciona" className="text-foreground/90 hover:text-primary transition-colors">
            Como Funciona
          </a>
          <a href="#clubes" className="text-foreground/90 hover:text-primary transition-colors">
            Para Clubes
          </a>
          <a href="#torcedores" className="text-foreground/90 hover:text-primary transition-colors">
            Para Torcedores
          </a>
          <a href="#faq" className="text-foreground/90 hover:text-primary transition-colors">
            FAQ
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            onClick={handleGoToFAQ}
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Ir para FAQ
          </Button>
          <Button 
            className="bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6"
            size="lg"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Launch App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
