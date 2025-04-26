import { useState, useEffect } from "react";
import LaunchAppButton from "@/components/LaunchAppButton";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Trophy, Wallet, Bitcoin, Activity } from "lucide-react";
import { FloatingCoin, FloatingTrophy, ParticlesBackground, GradientBubble } from "./AnimatedElements";

const sportImages = [
  "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80",
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sportImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-background">
      <div className="absolute inset-0 z-0">
        {sportImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentImageIndex ? 0.4 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10"></div>
      </div>

      <div className="container mx-auto px-4 z-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 neon-glow animate-fade-in">
            Conectando <span className="text-gradient">Torcedores</span> e{" "}
            <span className="text-gradient">Clubes</span> pelo Mundo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Crie fan tokens verificados, engaje sua torcida e monetize sua paixão em uma plataforma segura e transparente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <LaunchAppButton
  size="lg"
  className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 neon-box transition-all duration-300"
  href="/app"
/>
          </div>
        </div>
      </div>

      <ParticlesBackground />
      <GradientBubble className="h-64 w-64 bg-primary/20 top-1/4 -left-32 blur-3xl" />
      <GradientBubble className="h-96 w-96 bg-primary/20 -top-48 right-1/4 blur-3xl" />
      <GradientBubble className="h-72 w-72 bg-primary/20 bottom-1/4 -right-36 blur-3xl" />
    </section>
  );
};

export default HeroSection;
