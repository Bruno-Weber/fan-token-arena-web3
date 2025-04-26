import React from "react";
import { Bitcoin, Wallet, Trophy, TrendingUp, Rocket } from "lucide-react";
import LaunchAppButton from "@/components/LaunchAppButton";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SectionFadeIn from "./SectionFadeIn";

const FanBenefits = () => {
  const fanImages = [
    {
      url: "/lovable-uploads/e2370ad2-1498-4723-b2ac-c690e2bfcbb2.png",
      alt: "Reunião da CBF"
    },
    {
      url: "/lovable-uploads/448692c8-4728-4870-94e7-e92038b9fcdc.png",
      alt: "Assembleia de clube de futebol"
    },
    {
      url: "/lovable-uploads/1075c7bb-59f4-4104-ae15-906ad2493583.png",
      alt: "Conselho de administração do clube"
    }
  ];

  const bgImages = [
    "/lovable-uploads/84d7c71f-0c61-46f9-acc9-84b5e906f95c.png",
    "/lovable-uploads/4506b950-63c7-4e85-85a8-8fbd035abf20.png",
    "/lovable-uploads/8432dad2-b682-40e8-8291-0c4520aa14aa.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % fanImages.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(bgTimer);
  }, []);

  const benefits = [{
    icon: <Bitcoin className="h-10 w-10 text-sport-blue" />,
    title: "Participação em Decisões",
    description: "Vote em decisões importantes do clube, desde novos uniformes até contratações estratégicas."
  }, {
    icon: <Wallet className="h-10 w-10 text-sport-green" />,
    title: "Acesso Exclusivo",
    description: "Garanta ingressos prioritários, acesso a áreas VIP e conteúdos exclusivos."
  }, {
    icon: <Trophy className="h-10 w-10 text-sport-red" />,
    title: "Benefícios e Recompensas",
    description: "Receba produtos oficiais, encontre com atletas e participe de experiências únicas."
  }, {
    icon: <TrendingUp className="h-10 w-10 text-web3-primary" />,
    title: "Potencial de Valorização",
    description: "Seu token pode valorizar conforme o desempenho e popularidade do clube crescem."
  }];

  return (
    <SectionFadeIn id="torcedores" className="scroll-mt-24 py-24 bg-gradient-to-b from-[#0A0A0A] via-[#221F26] to-[#221F26]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              Benefícios para <span className="text-gradient">Torcedores</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.12s" }}>
              Vá além de apenas torcer. Participe ativamente do dia a dia do seu clube e obtenha vantagens exclusivas.
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
            <LaunchAppButton
  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 neon-box transition-all duration-300"
  size="lg"
  animationDelay="0.55s"
  href="/app"
/>
          </div>
          <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Carousel>
                <CarouselContent>
                  {fanImages.map((image, index) => (
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
              <div
                className="absolute inset-0 flex items-end bg-cover bg-center transition-all duration-1000"
                style={{
                  backgroundImage: `url(${bgImages[currentBg]})`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent z-0 pointer-events-none transition-all duration-1000" />
                <div className="relative z-10 p-8 text-white w-full">
                  <p className="text-white/80 mb-4">
                    Torcedores que participaram de fan tokens aumentaram seu engajamento em até 75%.
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="bg-web3-dark rounded-full h-10 w-10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-sport-red" />
                    </div>
                    <div>
                      <p className="font-bold">+100k Torcedores</p>
                      <p className="text-sm text-white/70">Já utilizam fan tokens</p>
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
                  <p className="text-2xl font-bold text-white">+75%</p>
                  <p className="text-xs text-white/70">Engajamento</p>
                </div>
              </div>
            </div>

            <div 
              className="absolute -bottom-10 -left-5 bg-web3-dark border border-white/10 rounded-lg shadow-xl p-4 animate-float" 
              style={{
                animationDelay: "1.5s"
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-sport-green/10 p-2 rounded-full">
                  <Wallet className="h-5 w-5 text-sport-green" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">3.5M</p>
                  <p className="text-xs text-white/70">Tokens Emitidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default FanBenefits;
