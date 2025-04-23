
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
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            alt="TokenArena Logo" 
            className="h-12 w-12 object-contain rounded-full shadow-md hover:scale-105 transition-transform duration-300" 
            src="/lovable-uploads/e11855b7-5e9f-4d1a-a40e-4ebeef34cad4.png" 
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
          <a href="#contato" className="text-foreground/90 hover:text-primary transition-colors">
            Contato
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6" size="lg">
            <Rocket className="mr-2 h-5 w-5" />
            Launch App
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navbar;
