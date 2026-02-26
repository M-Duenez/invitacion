import { motion } from "framer-motion";

export default function Rings() {
  return (
    <div className="flex justify-center mt-10 relative z-20">

      <motion.div
        initial={{ x: -40 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
        className="w-24 h-24 md:w-35 md:h-35 border-[3px] border-gold-600 rounded-full
                   shadow-[0_0_20px_rgba(184,145,63,0.4)]"
      />

      <motion.div
        initial={{ x: 40 }}
        animate={{ x: -20 }}
        transition={{ duration: 1.5 }}
        className="w-24 h-24 md:w-35 md:h-35 border-[3px] border-gold-400 rounded-full -ml-8
                   shadow-[0_0_20px_rgba(184,145,63,0.4)]"
      />

    </div>
  );
}