import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0F] text-white py-16">
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
            Conectando clubes e torcedores através de tokens exclusivos.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contato</h3>
          <p className="text-gray-400">
            Entre em contato para saber mais sobre como podemos ajudar seu clube ou sua experiência como torcedor.
          </p>
          <Button variant="outline" className="w-full justify-start">
            <Mail className="mr-2 h-4 w-4" />
            contato@tokenarena.com
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Junte-se à Comunidade</h3>
          <p className="text-gray-400">
            Fique por dentro das últimas novidades e lançamentos.
          </p>
          <Button className="bg-primary hover:bg-primary/90 neon-box text-lg" size="lg">
            <Rocket className="mr-2 h-5 w-5" />
            Launch App
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
