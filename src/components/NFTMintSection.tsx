
import React, { useState, useEffect } from "react";
import SectionFadeIn from "./SectionFadeIn";
import { Diamond, Gift, Badge, Trophy } from "lucide-react";

// Galeria de imagens fornecidas
const nftImages = [
  {
    url: "/lovable-uploads/223b45e4-14b0-4d90-a222-3820be0a3dcf.png",
    alt: "NFT Jogador Aplaudindo"
  },
  {
    url: "/lovable-uploads/be04b1f5-8ddf-4313-86c0-d6876dc0cc39.png",
    alt: "NFT Jogador Confiante"
  },
  {
    url: "/lovable-uploads/b301d8be-8e1f-4510-8bae-741012fa30ba.png",
    alt: "NFT Jogada Icônica"
  },
  {
    url: "/lovable-uploads/72ea2933-396a-45ca-b4fb-9511ba65a0e3.png",
    alt: "NFT Torcedor com Bumbo"
  },
  {
    url: "/lovable-uploads/61730c4f-4fc5-4363-87d9-5437069be35a.png",
    alt: "NFT Jogador Atento"
  },
];

const benefitList = [
  {
    icon: <Diamond className="h-7 w-7 text-cyan-300 animate-pulse" />,
    title: "Vantagens VIP",
    desc: "Acesse benefícios exclusivos em experiências digitais e físicas."
  },
  {
    icon: <Badge className="h-7 w-7 text-yellow-400 animate-bounce" />,
    title: "Reconhecimento Único",
    desc: "Destaque-se como membro premium da comunidade do seu clube."
  },
  {
    icon: <Trophy className="h-7 w-7 text-pink-400 animate-float" />,
    title: "Recompensas Surpresa",
    desc: "Participe de sorteios, brindes e experiências com os ídolos do esporte."
  },
  {
    icon: <Gift className="h-7 w-7 text-violet-300 animate-spin" />,
    title: "NFTs Colecionáveis",
    desc: "Colecione cards digitais raros e comprove sua paixão pelo seu clube."
  },
];

const NFTMintSection = () => {
  // Alternância das imagens da coleção
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % nftImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionFadeIn className="relative py-16 md:py-24 bg-gradient-to-br from-[#0A0A0A] via-[#221F26] to-[#8B5CF6] overflow-hidden">
      {/* Gradient decorativos animados */}
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full blur-3xl bg-gradient-to-tr from-cyan-400/30 to-violet-400/20 animate-float -z-10" style={{ animationDelay: "1.2s" }} />
      <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full blur-2xl bg-gradient-to-br from-pink-400/30 to-yellow-300/10 animate-float -z-10" style={{ animationDelay: "2.4s" }} />
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Galeria NFT com animação */}
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-2xl border-4 border-web3-primary neon-shadow bg-white/10 p-3 relative shadow-2xl w-[330px] h-[330px] flex items-center justify-center animate-fade-in"
            style={{
              animationDelay: "0.15s"
            }}
          >
            <img
              key={nftImages[imgIndex].url}
              src={nftImages[imgIndex].url}
              alt={nftImages[imgIndex].alt}
              className="object-cover rounded-xl shadow-lg transition-[transform,opacity] duration-700 ease-in-out w-[300px] h-[300px] border-4 border-web3-light bg-gradient-to-tr from-[#130f1c] via-[#292945] to-[#7e69ab] animate-float"
              style={{
                opacity: 1,
                transform: `scale(1.04) rotate(${imgIndex % 2 === 0 ? 2 : -2}deg)`,
              }}
            />
          </div>
        </div>
        {/* Texto e benefícios */}
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient neon-text animate-fade-in">
            MINT EXCLUSIVO DE <span className="text-web3-primary">NFTs</span>
          </h2>
          <p className="text-lg text-white/80 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Libere benefícios extras na plataforma ao mintar NFTs oficiais. Cada coleção é limitada, com designs únicos para torcedores apaixonados!
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {benefitList.map((b, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-[#1A1A1A]/80 rounded-lg p-4 border-white/10 border animate-fade-in" style={{ animationDelay: `${0.13 + idx * 0.10}s` }}>
                <span>{b.icon}</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">{b.title}</h4>
                  <p className="text-xs text-white/60">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-2 px-7 py-4 rounded-lg text-lg font-bold shadow-xl bg-gradient-to-r from-web3-primary via-sport-blue to-web3-accent text-white hover:scale-105 transition-all neon-shadow animate-fade-in" style={{ animationDelay: "0.55s" }}>
            Mintar meu NFT
          </button>
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default NFTMintSection;
