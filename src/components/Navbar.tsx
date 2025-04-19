
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, Trophy } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Trophy className="h-8 w-8 text-sport-red" />
          <span className="text-2xl font-bold text-gradient">FanTokenArena</span>
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
          <Button variant="outline" size="sm" className="btn-animate hidden sm:flex">
            <Wallet className="mr-2 h-4 w-4" />
            Conectar Carteira
          </Button>
          <Button className="btn-animate bg-primary">
            Criar Token
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
