import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem 
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

// Mapeamento de códigos de idioma para nomes legíveis
const languageNames: Record<string, string> = {
  pt: 'Português',
  en: 'English',
  fr: 'Français',
  es: 'Español'
};

// Mapeamento de códigos de idioma para URLs de whitepapers
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

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'pt');

  // Atualiza o estado quando o idioma muda
  useEffect(() => {
    setCurrentLanguage(i18n.language);
    // Atualiza os links dos whitepapers quando o componente é montado ou o idioma muda
    updateWhitepaperLinks(i18n.language);
  }, [i18n.language]);

  // Função para mudar o idioma
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    
    // Atualiza os links dos whitepapers com base no idioma selecionado
    updateWhitepaperLinks(lng);
  };

  // Função para atualizar os links dos whitepapers
  const updateWhitepaperLinks = (lng: string) => {
    const whitepapersLinks = document.querySelectorAll('a[data-whitepaper-type]');
    
    whitepapersLinks.forEach((link) => {
      const element = link as HTMLAnchorElement;
      const type = element.getAttribute('data-whitepaper-type');
      
      if (type && whitepapersMap[lng] && whitepapersMap[lng][type]) {
        element.href = whitepapersMap[lng][type];
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Mudar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languageNames).map(([code, name]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => changeLanguage(code)}
            className={currentLanguage === code ? "bg-muted" : ""}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
