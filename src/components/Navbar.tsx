
import { useState, useEffect } from "react";
import LaunchAppButton from "@/components/LaunchAppButton";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            alt="TokenArena Logo" 
            className="h-12 w-12 object-contain rounded-full shadow-md hover:scale-105 transition-transform duration-300" 
            src="/lovable-uploads/e11855b7-5e9f-4d1a-a40e-4ebeef34cad4.png" 
          />
          <span className="text-2xl font-bold neon-glow">TokenArena</span>
        </div>

        <div className="hidden md:flex space-x-8 font-medium items-center">
          <button onClick={() => scrollTo("como-funciona")} className="cursor-pointer text-foreground/90 hover:text-primary transition-colors">
            {t('navbar.howItWorks')}
          </button>
          <button onClick={() => scrollTo("clubes")} className="cursor-pointer text-foreground/90 hover:text-primary transition-colors">
            {t('navbar.forClubs')}
          </button>
          <button onClick={() => scrollTo("torcedores")} className="cursor-pointer text-foreground/90 hover:text-primary transition-colors">
            {t('navbar.forFans')}
          </button>
          <button onClick={() => scrollTo("nfts")} className="cursor-pointer text-foreground/90 hover:text-primary transition-colors">
            {t('navbar.nfts')}
          </button>
          <button onClick={() => scrollTo("faq")} className="cursor-pointer text-foreground/90 hover:text-primary transition-colors">
            {t('navbar.faq')}
          </button>

          {/* Dropdown Whitepaper estilizado como texto */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span
                className="cursor-pointer text-foreground/90 hover:text-primary transition-colors px-0 py-0 bg-transparent border-none shadow-none select-none"
                tabIndex={0}
                role="button"
              >
                {t('navbar.whitepaper')}
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <a href="/whitepapers/pt/whitepaper-geral.pdf" data-whitepaper-type="general" download target="_blank" rel="noopener noreferrer">
                  {t('navbar.general')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/whitepapers/pt/whitepaper-torcedor.pdf" data-whitepaper-type="fan" download target="_blank" rel="noopener noreferrer">
                  {t('navbar.fan')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/whitepapers/pt/whitepaper-clube.pdf" data-whitepaper-type="club" download target="_blank" rel="noopener noreferrer">
                  {t('navbar.club')}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <LaunchAppButton>
            {t('navbar.launchApp')}
          </LaunchAppButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
