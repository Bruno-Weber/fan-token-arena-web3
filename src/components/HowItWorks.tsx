
import React from "react";
import { Trophy, Crown, Award, Diamond, Gem, Star } from "lucide-react";
import SectionFadeIn from "./SectionFadeIn";
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();
  
  // Novos ícones, fundos destacados e animações nos fundos dos ícones
  const steps = [
    {
      icon: (
        <div className="bg-gradient-to-tr from-[#FFE29F] via-[#FFA99F] to-[#FF719A] p-4 rounded-full neon-shadow animate-bg-shift transition-all shadow-2xl">
          <Crown className="h-12 w-12 text-yellow-300 animate-float" />
        </div>
      ),
      title: t('howItWorks.step1Title'),
      description: t('howItWorks.step1Description'),
    },
    {
      icon: (
        <div className="bg-gradient-to-tr from-[#D946EF] via-[#8B5CF6] to-[#33C3F0] p-4 rounded-full animate-bg-shift transition-all shadow-2xl">
          <Gem className="h-12 w-12 text-purple-400 animate-float" />
        </div>
      ),
      title: t('howItWorks.step2Title'),
      description: t('howItWorks.step2Description'),
    },
    {
      icon: (
        <div className="bg-gradient-to-tr from-[#39fad7] via-[#FFDEE2] to-[#FF4D6A] p-4 rounded-full animate-bg-shift transition-all shadow-2xl">
          <Star className="h-12 w-12 text-pink-400 animate-float" />
        </div>
      ),
      title: t('howItWorks.step3Title'),
      description: t('howItWorks.step3Description'),
    },
  ];

  return (
    <SectionFadeIn className="bg-[#0A0A0A] py-10 md:py-14 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-left mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gradient neon-glow animate-fade-in" style={{ animationDelay: "0.08s", animationFillMode: "backwards" }}>
            {t('howItWorks.title')}
          </h2>
          <p
            className="text-lg text-white/80 max-w-3xl text-left animate-fade-in neon-text"
            style={{ animationDelay: "0.17s", animationFillMode: "backwards" }}
          >
            {t('howItWorks.description')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] hover:neon-shadow transition-all duration-500 p-6 group animate-fade-in rounded-xl"
              style={{
                animationDelay: `${0.2 + index * 0.13}s`
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
