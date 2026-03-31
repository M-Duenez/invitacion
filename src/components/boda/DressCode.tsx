import { motion } from "framer-motion";

interface Props {
  title?: string;
}

export default function DressCode({ title = "Código de vestimenta" }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto py-20 px-6 text-center">

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl text-navy-blue tracking-[0.3em] mb-16"
      >
        {title}
      <img src="/boda/dress_code.png" className="mx-auto w-25 h-auto" alt="" />
      </motion.h2>


      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* MUJERES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 shadow-md border border-gold-200"
        >
          <h3 className="text-gold-500 text-xl mb-4 tracking-widest">
            MUJERES
          </h3>

          <p className="text-navy-800 leading-relaxed">
            Vestido largo en tonos elegantes.
          </p>
          <p className="text-navy-800">
            Evitar las siguientes tonalidades. 
          </p>

          {/* Colores */}
          <div className="flex justify-center gap-3 mt-6">
            <div className="w-6 h-6 border-black border-1 rounded-full bg-[#fff]" />
            <div className="w-6 h-6 rounded-full bg-[#E8D8B3]" />
            <div className="w-6 h-6 rounded-full bg-[#C9A24D]" />
            <div className="w-6 h-6 rounded-full bg-[#2C3559]" />
          </div>
        </motion.div>

        {/* HOMBRES */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg p-8 shadow-md border border-gold-200"
        >
          <h3 className="text-gold-500 text-xl mb-4 tracking-widest">
            HOMBRES
          </h3>

          <p className="text-navy-800 leading-relaxed">
            Traje formal en tonos oscuros y elegantes.
          </p>

          {/* Colores */}
          <div className="flex justify-center gap-3 mt-6">
            <div className="w-6 h-6 rounded-full bg-[#202643]" />
            <div className="w-6 h-6 rounded-full bg-[#2C3559]" />
            <div className="w-6 h-6 rounded-full bg-[#C9A24D]" />
          </div>
        </motion.div>
    <p className="flex justify-center items-center mx-auto text-navy-blue text-[18px]">¡ Favor de respetar el código de vestimenta !</p>

      </div>
    </div>
  );
}