import { motion } from "framer-motion";

export default function Seal({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onOpen}
      className="cursor-pointer flex flex-col items-center"
    >
      
      <img src="/boda/sello_iniciales.png" className="w-40 h-40" alt="" />

      <p className="mt-5 text-gold-500 tracking-widest text-md">
        Toca el sello
      </p>
    </motion.div>
  );
}