import { motion } from "framer-motion";

interface props {
  nombre?: string;
  pases?: number;
  onOpen: () => void;
}

export default function Seal({ nombre = 'Fam. Rivera Lopez', pases = 3, onOpen }: props) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onOpen}
      className="cursor-pointer flex flex-col items-center"
    >
      <p className="text-navy-800 text-4xl md:text-6xl tracking-wide mb-6">Bienvenid@(s)</p>

      <div className="relative flex justify-center ">

        <img src="/boda/sobre-2.png" className="w-full  md:max-w-[720px] h-auto" alt="" />
        <div className="absolute inset-0 flex flex-col w-full items-center justify-end mb-5 md:mb-13 pointer-events-none">
          <h1 className="text-[50px] md:text-6xl text-gold-500 titulo">
            {nombre}
          </h1>

        </div>

      </div>
      <p className="text-navy-blue mb-3 text-lg">
        Hemos reservado <b className="text-gold-500">{pases}</b> lugar(es) para ti.
      </p>
      <p className=" text-gold-500 text-md md:text-lg tracking-[0.3em]">
        Toca el sello
      </p>
    </motion.div>
  );
}