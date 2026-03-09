import { motion } from "framer-motion";

export default function Seal({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onOpen}
      className="cursor-pointer flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center ">
        <img src="/boda/sobre-2.png" className="w-full md:w-[720px] h-auto" alt="" />

        <p className=" text-gold-500 text-md md:text-lg tracking-[0.3em]">
          Toca el sello
        </p>

      </div>
    </motion.div>
  );
}