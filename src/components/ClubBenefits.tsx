
import React from "react";
import { TrendingUp, Users, Wallet, Trophy, Rocket } from "lucide-react";
import LaunchAppButton from "@/components/LaunchAppButton";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SectionFadeIn from "./SectionFadeIn";
import { useTranslation } from 'react-i18next';

const ClubBenefits = () => {
  const { t } = useTranslation();
  const clubImages = [
    {
      url: "/lovable-uploads/0281b172-d21c-4809-8a10-2cb45489c2f1.png",
      alt: t('images.cbfMeeting')
    },
    {
      url: "/lovable-uploads/32a7a01b-762a-4545-855f-b70c8e3f22c9.png",
      alt: t('images.clubAssembly')
    },
    {
      url: "/lovable-uploads/9432b616-6a49-4765-9c12-938accd505e2.png",
      alt: t('images.clubCouncil')
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
    title: t('clubBenefits.benefit1Title'),
    description: t('clubBenefits.benefit1Description')
  }, {
    icon: <Users className="h-10 w-10 text-sport-green" />,
    title: t('clubBenefits.benefit2Title'),
    description: t('clubBenefits.benefit2Description')
  }, {
    icon: <Wallet className="h-10 w-10 text-web3-primary" />,
    title: t('clubBenefits.benefit3Title'),
    description: t('clubBenefits.benefit3Description')
  }, {
    icon: <Trophy className="h-10 w-10 text-sport-red" />,
    title: t('clubBenefits.benefit3Title'),
    description: t('clubBenefits.benefit3Description')
  }];

  return (
    <SectionFadeIn className="bg-[#0A0A0A] py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
              <span className="text-gradient">{t('clubBenefits.title')}</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 animate-fade-in" style={{ animationDelay: "0.12s" }}>
              {t('clubBenefits.description')}
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
  className="bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6"
  size="lg"
  animationDelay="0.55s"
  href="/app"
>
  {t('navbar.launchApp')}
</LaunchAppButton>
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
                  <p className="text-white/80 mb-4">
                    {t('stats.clubRevenue')}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="bg-web3-dark rounded-full h-10 w-10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-sport-red" />
                    </div>
                    <div>
                      <p className="font-bold">{t('stats.clubCount')}</p>
                      <p className="text-sm text-white/70">{t('stats.platformUsage')}</p>
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
                  <p className="text-xs text-white/70">{t('stats.engagement')}</p>
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
                  <p className="text-xs text-white/70">{t('stats.engagedFans')}</p>
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
