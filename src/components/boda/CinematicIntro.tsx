import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CinematicIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "auto";
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, delay: 2 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="text-gold-500 max-w-sm text-center mx-auto text-4xl md:text-5xl tracking-widest"
      >
        Una hermosa historia está por comenzar…
      </motion.h1>
    </motion.div>
  );
}