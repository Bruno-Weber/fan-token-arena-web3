
import { useRef, useEffect } from "react";
import { useAnimation, useInView, AnimationControls } from "framer-motion";

export function useScrollFadeIn(options: {
  delay?: number;
  duration?: number;
  y?: number;
} = {}) {
  const { delay = 0.1, duration = 0.7, y = 30 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay, duration, ease: [0.2, 0.8, 0.2, 1] } 
    }
  };

  return { ref, controls, variants };
}
