import { motion } from "framer-motion";

export default function MagicDust() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-gold-500 rounded-full opacity-40"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ 
            y: "-10vh",
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}