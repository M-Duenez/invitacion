import { motion } from "framer-motion";

type AnimationType =
  | "fade"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "zoom"
  | "rotate";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  type?: AnimationType;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
  duration = 1,
  type = "fade",
}: Props) {
  
  const animations: Record<AnimationType, any> = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },

    "slide-up": {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
    },

    "slide-left": {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
    },

    "slide-right": {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
    },

    zoom: {
      initial: { opacity: 0, scale: 0.85 },
      animate: { opacity: 1, scale: 1 },
    },

    rotate: {
      initial: { opacity: 0, rotate: -5, scale: 0.9 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
    },
  };

  const selected = animations[type];

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.animate}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}