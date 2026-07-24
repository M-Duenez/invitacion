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
      <p className="uppercase subtitulo text-navy-700 font-bold text-xl md:text-6xl tracking-wide">Nuestra boda</p>

      <p className="subtitulo text-navy-700 font-bold text-[42px] mb-3">Yulissa & Miguel</p>

      <div className="relative flex justify-center px-3">

        <img src="/boda/sobre-2.png" className="w-full  md:max-w-[720px] h-auto" alt="" />
        <div className="absolute  inset-0 flex flex-col w-full items-center justify-end mb-2 md:mb-13 pointer-events-none">
          <h1 className="bg-black/30 px-4 text-center text-[41px] md:text-6xl text-gold-400 titulo rounded-xl">
            {nombre}
          </h1>

        </div>

      </div>
      <p className="uppercase subtitulo w-50 text-center text-navy-700 text-sm md:text-lg tracking-[0.1em] mb-6">
        Clic para abrir la invitación
      </p>
      <p className="subtitulo font-bold text-navy-blue mb-1 text-md uppercase">
        Hemos reservado 
      </p>
      <div className="font-bold border-2 border-gold-600 px-2 py-1 mb-1 text-4xl text-gold-600 rounded-lg uppercase">
        {pases} 
      </div>
      <p className="subtitulo font-bold text-navy-blue mb-1 text-md uppercase">        
        lugares en su honor.
      </p>
    </motion.div>
  );
}