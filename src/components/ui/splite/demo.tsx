
'use client'

import { SplineScene } from "@/components/ui/splite/component";
import { Card } from "@/components/ui/card"

export function SplineSceneBasic() {
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

        {/* Conteúdo direito */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/YemrUBf6kQOEVd4O/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
