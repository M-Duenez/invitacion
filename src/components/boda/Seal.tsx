import { motion } from "framer-motion";

export default function Seal({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onOpen}
      className="cursor-pointer flex flex-col items-center"
    >
      <div className="w-32 h-32 rounded-full bg-gold-600 
                      flex items-center justify-center
                      shadow-[0_0_40px_rgba(198,167,94,0.6)]">
        <span className="titulo text-navy-950 font-bold text-xl">Y & M</span>
      </div>

      <p className="mt-6 text-gold-500 tracking-widest text-sm">
        Toca el sello
      </p>
    </motion.div>
  );
}