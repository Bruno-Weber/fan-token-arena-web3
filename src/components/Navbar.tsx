
import { useState, useEffect } from "react";
import LaunchAppButton from "@/components/LaunchAppButton";
import { useScrollTo } from "@/hooks/useScrollTo";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "@/components/LanguageSwitcher";

const whitepapersMap: Record<string, Record<string, string>> = {
  pt: {
    general: '/whitepapers/pt/whitepaper-geral.pdf',
    fan: '/whitepapers/pt/whitepaper-torcedor.pdf',
    club: '/whitepapers/pt/whitepaper-clube.pdf'
  },
  en: {
    general: '/whitepapers/en/whitepaper-general.pdf',
    fan: '/whitepapers/en/whitepaper-fan.pdf',
    club: '/whitepapers/en/whitepaper-club.pdf'
  },
  fr: {
    general: '/whitepapers/fr/whitepaper-general.pdf',
    fan: '/whitepapers/fr/whitepaper-supporter.pdf',
    club: '/whitepapers/fr/whitepaper-club.pdf'
  },
  es: {
    general: '/whitepapers/es/whitepaper-general.pdf',
    fan: '/whitepapers/es/whitepaper-aficionado.pdf',
    club: '/whitepapers/es/whitepaper-club.pdf'
  }
};

const Navbar = () => {
  const scrollTo = useScrollTo();
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  
  // Use a function to safely get whitepaper links with fallback to English
  const getWhitepaperLink = (type: string): string => {
    // Get current language or fallback to English if it doesn't exist in our map
    const currentLang = whitepapersMap[i18n.language] ? i18n.language : 'en';
    
    // Return the appropriate whitepaper or default to English general whitepaper
    return whitepapersMap[currentLang]?.[type] || whitepapersMap.en.general;
  };

  const updateWhitepaperLinks = (lng: string) => {
    const whitepapersLinks = document.querySelectorAll('a[data-whitepaper-type]');
    
    whitepapersLinks.forEach((link) => {
      const element = link as HTMLAnchorElement;
      const type = element.getAttribute('data-whitepaper-type');
      
      if (type) {
        // Use our safe getter function
        element.href = getWhitepaperLink(type);
      }
    });
  };

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
                <a href={getWhitepaperLink('general')} data-whitepaper-type="general" download target="_blank" rel="noopener noreferrer">
                  {t('navbar.general')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={getWhitepaperLink('fan')} data-whitepaper-type="fan" download target="_blank" rel="noopener noreferrer">
                  {t('navbar.fan')}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={getWhitepaperLink('club')} data-whitepaper-type="club" download target="_blank" rel="noopener noreferrer">
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
