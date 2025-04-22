
'use client'

import { SplineScene } from "@/components/ui/splite/component";
import { Card } from "@/components/ui/card"

export function SplineSceneBasic() {
  // Custom 3D-like soccer ball animation instead of relying solely on Spline
  return (
    <Card className="w-full h-[420px] bg-black/[0.96] relative overflow-hidden border-0 shadow-none">
      <div className="flex h-full">
        {/* Conteúdo esquerdo */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red neon-glow animate-fade-in"
            style={{
              animationDelay: "0.1s",
              animationFillMode: "backwards"
            }}
          >
            Explore a Energia do Esporte em 3D
          </h1>
          <p 
            className="mt-4 text-lg md:text-2xl text-neutral-300 max-w-lg neon-text animate-fade-in"
            style={{
              animationDelay: "0.4s",
              animationFillMode: "backwards"
            }}
          >
            Interaja com experiências que conectam clubes e torcedores com muita tecnologia, inovação e emoção esportiva!
          </p>
        </div>

        {/* Right content - Custom 3D-like animation that doesn't rely on Spline */}
        <div className="flex-1 relative">
          {/* Our custom fallback that will always work */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            {/* Soccer ball simulation with circles */}
            <div className="w-64 h-64 bg-gradient-to-r from-sport-blue via-web3-primary to-sport-red rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute w-48 h-48 border-4 border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute w-32 h-32 bg-sport-blue/20 rounded-full animate-bounce-slow"></div>
            
            {/* Soccer ball pattern */}
            <div className="absolute w-40 h-40 rounded-full bg-white/10 flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-12 h-12 bg-white/5 rounded-full"
                  style={{ 
                    transform: `rotate(${i * 72}deg) translateX(20px)`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Try a different Spline scene or use a mock scene */}
          <SplineScene 
            scene="https://prod.spline.design/sample-scene.splinecode" 
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
