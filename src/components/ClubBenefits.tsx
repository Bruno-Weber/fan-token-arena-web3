
import React from "react";
import { TrendingUp, Users, Wallet, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SectionFadeIn from "./SectionFadeIn";

const ClubBenefits = () => {
  const clubImages = [
    {
      url: "/lovable-uploads/0281b172-d21c-4809-8a10-2cb45489c2f1.png",
      alt: "Reunião da CBF"
    },
    {
      url: "/lovable-uploads/32a7a01b-762a-4545-855f-b70c8e3f22c9.png",
      alt: "Assembleia de clube de futebol"
    },
    {
      url: "/lovable-uploads/9432b616-6a49-4765-9c12-938accd505e2.png",
      alt: "Conselho do clube"
    }
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % clubImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [{
    icon: <TrendingUp className="h-10 w-10 text-sport-blue" />,
    title: "Monetização Direta",
    description: "Crie uma nova fonte de receita recorrente através da venda de fan tokens e transações secundárias."
  }, {
    icon: <Users className="h-10 w-10 text-sport-green" />,
    title: "Engajamento da Torcida",
    description: "Conecte-se com sua torcida globalmente e aumente a participação em decisões do clube."
  }, {
    icon: <Wallet className="h-10 w-10 text-web3-primary" />,
    title: "Economia do Clube",
    description: "Desenvolva um ecossistema econômico próprio em torno do seu token e fidelize seus torcedores."
  }, {
    icon: <Trophy className="h-10 w-10 text-sport-red" />,
    title: "Dados e Insights",
    description: "Acesse informações valiosas sobre sua base de fãs para tomadas de decisão estratégicas."
  }];

  return (
    <SectionFadeIn id="clubes" className="scroll-mt-24" className="bg-[#0A0A0A] py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Benefícios para <span className="text-gradient">Clubes</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.12s" }}>
              Transforme sua relação com os torcedores e abra novas possibilidades de receita e engajamento através dos fan tokens.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-[#1A1A1A] border border-white/10 rounded-xl hover:border-web3-primary/50 transition-all hover:shadow-md animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6 animate-fade-in"
              size="lg"
              style={{ animationDelay: "0.55s" }}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Launch App
            </Button>
          </div>
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Carousel>
                <CarouselContent>
                  {clubImages.map((image, index) => (
                    <CarouselItem key={index} className={index === currentImage ? "block" : "hidden"}>
                      <img 
                        src={image.url}
                        alt={image.alt}
                        className="w-full object-cover h-80"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Histórias de Sucesso</h3>
                  <p className="text-white/80 mb-4">
                    Clubes aumentaram sua receita em até 30% no primeiro ano após o lançamento de fan tokens.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="bg-web3-dark rounded-full h-10 w-10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-sport-red" />
                    </div>
                    <div>
                      <p className="font-bold">+200 Clubes</p>
                      <p className="text-sm text-white/70">Já utilizam nossa plataforma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 bg-web3-dark border border-white/10 rounded-lg shadow-xl p-4 animate-float">
              <div className="flex items-center space-x-3">
                <div className="bg-sport-blue/10 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-sport-blue" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">+45%</p>
                  <p className="text-xs text-white/70">Aumento de receita</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-14 -left-5 bg-web3-dark border border-white/10 rounded-lg shadow-xl p-4 animate-float" style={{
            animationDelay: "1.5s"
          }}>
              <div className="flex items-center space-x-3">
                <div className="bg-sport-green/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-sport-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3.2M</p>
                  <p className="text-xs text-white/70">Fãs engajados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default ClubBenefits;
