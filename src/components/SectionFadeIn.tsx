
import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
};

/**
 * Um wrapper reutilizável para animação de entrada das seções.
 */
const SectionFadeIn = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.section
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.35 }}
    className={className}
  >
    {children}
  </motion.section>
);

export default SectionFadeIn;
