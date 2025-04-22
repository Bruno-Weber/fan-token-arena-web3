import React from "react";
import { Twitter, Instagram, Facebook, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-gradient-bg py-12">
      <div className="container mx-auto px-4 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/7f03ad53-171a-4f4a-b2aa-2d2066c42757.png"
                alt="TokenArena Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold neon-glow">TokenArena</span>
            </div>
            <p className="text-white/70">
              Conectando clubes esportivos e torcedores através de fan tokens verificados e seguros na Web3.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#como-funciona" className="text-white/70 hover:text-white transition-colors">Como Funciona</a>
              </li>
              <li>
                <a href="#verificacao" className="text-white/70 hover:text-white transition-colors">Segurança e Verificação</a>
              </li>
              <li>
                <a href="#clubes" className="text-white/70 hover:text-white transition-colors">Para Clubes</a>
              </li>
              <li>
                <a href="#torcedores" className="text-white/70 hover:text-white transition-colors">Para Torcedores</a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Central de Ajuda</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Tutoriais</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Termos de Serviço</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Inscreva-se para receber novidades sobre fan tokens e atualizações da plataforma.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary text-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-web3-primary hover:bg-web3-primary/90 rounded-md py-1.5 px-3 text-sm font-medium">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} TokenArena. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacidade</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Termos</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
