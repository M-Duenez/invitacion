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
      initial: { opacity: 0, y: 40 },
      animate: { opacity: 1, y: 0 },
    },

    "slide-left": {
      initial: { opacity: 0, x: -40 },
      animate: { opacity: 1, x: 0 },
    },

    "slide-right": {
      initial: { opacity: 0, x: 40 },
      animate: { opacity: 1, x: 0 },
    },

    zoom: {
      initial: { opacity: 0, scale: 0.92 },
      animate: { opacity: 1, scale: 1 },
    },

    rotate: {
      initial: { opacity: 0, rotate: -50, scale: 0.95 },
      animate: { opacity: 1, rotate: 0, scale: 1 },
    },
  };

  const selected = animations[type];

  return (
    <motion.div
      initial={selected.initial}
      whileInView={selected.animate}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}