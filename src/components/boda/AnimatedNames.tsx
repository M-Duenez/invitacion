import { motion } from "framer-motion";

export default function AnimatedNames() {
  return (
    <div className="flex flex-col items-center">

      <motion.span
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="titulo text-7xl md:text-[180px] text-gold-500 will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        Yulissa
      </motion.span>

      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="text-gold-300 text-4xl md:text-7xl my-4"
        style={{ transform: "translateZ(0)" }}
      >
        &
      </motion.span>

      <motion.span
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="titulo text-7xl md:text-[180px] text-gold-500 will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        Miguel
      </motion.span>

    </div>
  );
}