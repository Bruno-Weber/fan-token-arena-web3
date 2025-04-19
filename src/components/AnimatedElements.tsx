
import { useEffect, useState } from "react";
import { Bitcoin, Trophy } from "lucide-react";

export const FloatingCoin = ({ className = "" }: { className?: string }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const randomMovement = () => {
      setPosition({
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20
      });
    };

    const interval = setInterval(randomMovement, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`transition-all duration-3000 ease-in-out animate-pulse-slow ${className}`}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <Bitcoin className="h-10 w-10 text-web3-primary" />
    </div>
  );
};

export const FloatingTrophy = ({ className = "" }: { className?: string }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const randomRotation = () => {
      setRotation(Math.random() * 20 - 10);
    };

    const interval = setInterval(randomRotation, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={`transition-all duration-4000 ease-in-out animate-float ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <Trophy className="h-10 w-10 text-sport-red" />
    </div>
  );
};

export const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-sport-blue animate-pulse-slow" style={{ animationDelay: "0s" }}></div>
      <div className="absolute top-3/4 left-1/2 h-3 w-3 rounded-full bg-sport-red animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute top-1/3 right-1/4 h-2 w-2 rounded-full bg-web3-primary animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 right-1/3 h-2 w-2 rounded-full bg-sport-green animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 right-1/2 h-3 w-3 rounded-full bg-sport-yellow animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/3 left-1/3 h-2 w-2 rounded-full bg-web3-accent animate-pulse-slow" style={{ animationDelay: "2.5s" }}></div>
    </div>
  );
};

export const GradientBubble = ({ 
  className = "", 
  style = {} 
}: { 
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div 
      className={`absolute rounded-full opacity-10 blur-3xl animate-float ${className}`}
      style={style}
    ></div>
  );
};
