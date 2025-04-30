
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Rocket, MessageSquare } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0A] to-[#0B0B0F] text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/bf95a484-0d6c-41ce-8fad-8a228fb5b2df.png" 
              alt="TokenArena Logo" 
              className="h-16 w-16 object-contain" 
            />
            <span className="text-3xl font-bold neon-glow">TokenArena</span>
          </div>
          <p className="text-gray-400">
            {t('footer.connecting')}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t('footer.contact')}</h3>
          <p className="text-gray-400">
            {t('footer.contactText')}
          </p>
          <Button variant="outline" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" />
            contato@tokenarena.club
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">{t('footer.joinCommunity')}</h3>
          <p className="text-gray-400">
            {t('footer.stayUpdated')}
          </p>
          <Button 
            className="bg-primary hover:bg-primary/90 neon-box text-lg" 
            size="lg"
            onClick={() => window.open("https://discord.gg/tokenarena", "_blank")}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            {t('footer.joinDiscord')}
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
