
import React from "react";
import {
  Trophy,
  Crown,
  Star,
  Heart,
  Award,
} from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";

// Novos ícones e cores de fundo diferenciados (só atrás do ícone)
const steps = [
  {
    // Now Trophy, amarelo/dourado
    icon: (
      <div className="bg-gradient-to-tr from-[#FFE29F] via-[#FFA99F] to-[#FF719A] p-3 rounded-full animate-pulse shadow-lg transition">
        <Trophy className="h-12 w-12 text-yellow-400 drop-shadow" />
      </div>
    ),
    title: "Clubes Verificados",
    description:
      "Instituições esportivas passam por um rigoroso processo de verificação via CNPJ, garantindo autenticidade e confiança.",
  },
  {
    // Crown, roxo
    icon: (
      <div className="bg-gradient-to-tr from-[#8B5CF6] via-[#9b87f5] to-[#E5DEFF] p-3 rounded-full animate-pulse shadow-lg transition">
        <Crown className="h-12 w-12 text-white drop-shadow" />
      </div>
    ),
    title: "Criação de Fan Tokens",
    description:
      "Tokens exclusivos são criados para cada clube, permitindo aos torcedores participação nas decisões e acesso a benefícios exclusivos.",
  },
  {
    // Award, corações, rosa
    icon: (
      <div className="bg-gradient-to-tr from-[#FFDEE2] via-[#D946EF] to-[#FF4D6A] p-3 rounded-full animate-pulse shadow-lg transition">
        <Heart className="h-12 w-12 text-pink-400 drop-shadow" />
      </div>
    ),
    title: "Engajamento da Torcida",
    description:
      "Os fãs podem adquirir tokens, participar em votações, acessar conteúdos exclusivos e até mesmo lucrar com a valorização dos tokens.",
  },
];

const HowItWorks = () => {
  return (
    <SectionFadeIn className="bg-[#0A0A0A] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12 md:mb-14">
          <h2 className="text-2xl font-bold mb-2 text-gradient neon-text md:text-3xl animate-fade-in">
            Como Funciona
          </h2>
          <h3
            className="text-3xl md:text-4xl font-bold mb-3 text-gradient neon-glow animate-fade-in"
            style={{ animationDelay: "0.08s", animationFillMode: "backwards" }}
          >
            FAN TOKENS AGORA SÃO MAIS ÚTEIS
          </h3>
          <p
            className="text-lg text-white/80 max-w-3xl text-left animate-fade-in neon-text"
            style={{ animationDelay: "0.17s", animationFillMode: "backwards" }}
          >
            Conectamos clubes esportivos e torcedores através de uma plataforma Web3 segura e transparente.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Linha horizontal decorativa removida */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] hover:neon-shadow transition-all duration-500 p-6 group animate-fade-in rounded-xl"
              style={{
                animationDelay: `${0.2 + index * 0.15}s`
              }}
            >
              <div className="w-full flex justify-center -mt-10 mb-2 relative z-10">
                {step.icon}
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-web3-primary transition-colors neon-text text-left">
                  {step.title}
                </h3>
                <p className="text-white/80 group-hover:text-white transition-colors text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default HowItWorks;

