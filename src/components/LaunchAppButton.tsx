import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import React from "react";

interface LaunchAppButtonProps {
  className?: string;
  size?: "sm" | "lg" | "default" | "icon";
  style?: React.CSSProperties;
  animationDelay?: string;
}

const LaunchAppButton: React.FC<LaunchAppButtonProps> = ({
  className = "bg-primary hover:bg-primary/90 neon-box text-lg px-8 py-6",
  size = "lg",
  style,
  animationDelay,
  ...props
}) => {
  const handleClick = () => {
    const href = "https://token-arena-app-hqez.vercel.app/";
    window.location.href = href;
  };

  return (
    <Button
      className={className + (animationDelay ? " animate-fade-in" : "")}
      size={size}
      style={animationDelay ? { ...style, animationDelay } : style}
      onClick={handleClick}
      {...props}
    >
      <Rocket className="mr-2 h-5 w-5" />
      Launch App
    </Button>
  );
};

export default LaunchAppButton;
