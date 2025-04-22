
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { SplineSceneBasic } from "@/components/ui/splite/demo";

// Substitua pelos caminhos reais das imagens anexadas
const sportImages = [
  "/lovable-uploads/0281b172-d21c-4809-8a10-2cb45489c2f1.png",
  "/lovable-uploads/9432b616-6a49-4765-9c12-938accd505e2.png",
  "/lovable-uploads/7f03ad53-171a-4f4a-b2aa-2d2066c42757.png",
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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 bg-background">
      {/* Imagens de fundo no estilo carrossel */}
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

      {/* Conteúdo HERO */}
      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Bloco textual */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red neon-glow animate-fade-in"
              style={{
                animationDelay: "0.15s",
                animationFillMode: "backwards",
              }}
            >
              Conectando <span className="text-gradient">Torcedores</span> e{" "}
              <span className="text-gradient">Clubes</span> pelo Mundo
            </h1>
            
            <p
              className="text-xl md:text-2xl text-white/90 mb-12 neon-text animate-fade-in"
              style={{
                animationDelay: "0.3s",
                animationFillMode: "backwards",
              }}
            >
              Crie fan tokens verificados, engaje sua torcida e monetize sua paixão em uma plataforma segura e transparente.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Button 
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 neon-box transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Launch App
              </Button>
            </div>
          </div>
          {/* Bloco 3D Esportivo lado direito (hidden em telas menores) */}
          <div className="flex-1 w-full mt-10 lg:mt-0 hidden lg:block">
            <SplineSceneBasic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
