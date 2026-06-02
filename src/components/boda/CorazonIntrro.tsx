import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function CorazonIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 5, delay: 5 }}
      className="fixed inset-0 bg-navy-blue flex items-center justify-center z-[9999]"
    >
      {/* Corazón latiendo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 0.95, 1] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-48 h-48 md:w-58 md:h-58 drop-shadow-[0_0_15px_rgba(201,162,77,0.6)]"
        >
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E8D8B3" />
              <stop offset="50%" stopColor="#C9A24D" />
              <stop offset="100%" stopColor="#9E7A2F" />
            </linearGradient>
          </defs>

          <path
            fill="url(#goldGradient)"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
               2 5.42 4.42 3 7.5 3
               c1.74 0 3.41 0.81 4.5 2.09
               C13.09 3.81 14.76 3 16.5 3
               19.58 3 22 5.42 22 8.5
               c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}