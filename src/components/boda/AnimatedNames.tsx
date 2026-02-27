import { motion } from "framer-motion";

export default function AnimatedNames() {
  return (
    <div className="flex flex-row items-center gap-x-3">

      <motion.span
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="titulo text-5xl md:text-[180px] text-ivory-50  tracking-[0.1em] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        Yulissa
      </motion.span>

      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="text-ivory-300 text-3xl md:text-7xl my-4"
        style={{ transform: "translateZ(0)" }}
      >
        &
      </motion.span>

      <motion.span
        initial={{ x: 80 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="titulo text-5xl md:text-[180px] text-ivory-50 tracking-[0.1em] will-change-transform"
        style={{ transform: "translateZ(0)" }}
      >
        Miguel
      </motion.span>

    </div>
  );
}