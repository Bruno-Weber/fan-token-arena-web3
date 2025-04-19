
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Wallet, Bitcoin, Activity } from "lucide-react";
import { FloatingCoin, FloatingTrophy, ParticlesBackground, GradientBubble } from "./AnimatedElements";

const sportImages = [
  "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sportImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const sportIcons = [
    <Trophy key="soccer" className="h-12 w-12 text-white/80 animate-float" />,
    <Activity key="basketball" className="h-10 w-10 text-white/80 animate-float" style={{ animationDelay: "1s" }} />,
    <Wallet key="football" className="h-11 w-11 text-white/80 animate-float" style={{ animationDelay: "2s" }} />,
    <Bitcoin key="crypto" className="h-14 w-14 text-white/80 animate-float" style={{ animationDelay: "3s" }} />,
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-web3-dark">
      {/* Background images with crossfade animation */}
      <div className="absolute inset-0 z-0">
        {sportImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentImageIndex ? 0.3 : 0,
            }}
          />
        ))}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-web3-dark/90 to-web3-dark z-10"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 space-x-6">
            {sportIcons.map((icon, index) => (
              <div key={index} className="animate-pulse-slow" style={{ animationDelay: `${index * 0.5}s` }}>
                {icon}
              </div>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white animate-slide-in">
            Conectando <span className="text-gradient">Torcedores</span> e <span className="text-gradient">Clubes</span> pelo Mundo.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 animate-fade-in">
            Crie fan tokens verificados, engaje sua torcida e monetize sua paixão em uma plataforma segura e transparente.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-sport-red to-sport-blue hover:opacity-90 btn-animate shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
            >
              Criar Fan Token
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/20 btn-animate transition-all duration-300 transform hover:-translate-y-1 active:scale-95 hover:border-white/50 shadow-md"
            >
              Explorar Tokens
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/3 left-10 animate-float opacity-30">
        <Trophy className="h-20 w-20 text-white" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <Bitcoin className="h-16 w-16 text-white" />
      </div>
      
      {/* Animated backgrounds and particles */}
      <ParticlesBackground />
      <GradientBubble className="h-64 w-64 bg-web3-primary top-1/4 -left-32" />
      <GradientBubble className="h-96 w-96 bg-sport-blue -top-48 right-1/4" style={{ animationDelay: "2s" }} />
      <GradientBubble className="h-72 w-72 bg-sport-red bottom-1/4 -right-36" style={{ animationDelay: "4s" }} />
      
      {/* More animated coins */}
      <FloatingCoin className="absolute top-1/5 right-1/5" />
      <FloatingTrophy className="absolute bottom-1/5 left-1/5" />
    </section>
  );
};

export default HeroSection;
