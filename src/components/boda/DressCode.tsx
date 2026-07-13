import { motion } from "framer-motion";

interface Props {
    title?: string;
}

export default function DressCode({ title = "Código de vestimenta" }: Props) {
    return (
        <div className="flex w-full">

            {/* Cards */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full p-8 md:p-12 text-center"
            >
                {/* Título */}
                <img src="/boda/dresscode.png" className="mx-auto w-65 h-45" alt="" />
                <h1 className="titulo font-bold text-[45px] text-gold-500 mb-5" >
                    {title}
                </h1>

                <div className="flex flex-col w-106 bg-ivory-50 rounded-xl p-5 ">

                    <h3 className="text-gold-500 text-2xl font-bold mb-4 tracking-widest">
                        Elegante
                    </h3>

                    <p className="text-navy-800 text-sm leading-relaxed">
                        Ellas: Vestido largo.
                    </p>
                    <p className="text-navy-800 text-sm leading-relaxed">
                        Ellos: Traje y corbata.
                    </p>
                    <p className="mt-4 text-black text-md leading-relaxed">
                        Evitar los siguientes colores en damas y caballeros.
                    </p>

                    {/* Colores  */}
                    <div className="flex justify-center gap-3 mt-2">
                        <div className="w-6 h-6 border-black/50 border rounded-full bg-[#fff]" />
                        <div className="w-6 h-6 border-black/50 border rounded-full bg-[#FFF1D6]" />
                        <div className="w-6 h-6 border-black/50 border rounded-full bg-navy-blue" />
                        <div className="w-6 h-6 border-black/50 border rounded-full bg-black" />
                    </div>
                </div>
            </motion.div>
            {/* MUJERES
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-md border border-gold-200"
                >
                    <h3 className="text-gold-600 text-xl mb-4 tracking-widest">
                        MUJERES
                    </h3>

                    <p className="text-navy-800 text-lg leading-relaxed">
                        Elegante.
                    </p>
                    <p className="mx-auto text-navy-700 mt-2 text-sm max-w-xs md:max-w-xl">
                        No usar los siguientes colores.
                        {/* Se solicita respetuosamente evitar el uso de vestidos en tonos blancos,
                        marfil o cualquier derivado, ya que estos están reservados exclusivamente
                        para la novia. 
                    </p>

                    {/* Colores  
                    <div className="flex justify-center gap-3 mt-6"> 
                        <div className="w-6 h-6 border-black border rounded-full bg-[#fff]" /> 
                        <div className="w-6 h-6 rounded-full bg-[#FFF1D6]" />
                        <div className="w-6 h-6 rounded-full bg-[#EAE6DD]" />
                        <div className="w-6 h-6 rounded-full bg-red-500" />
                    </div>
                </motion.div>*/}

            {/* HOMBRES */}
            {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-md border border-gold-200 "
                >
                    <h3 className="text-gold-600 text-xl mb-4 tracking-widest">
                        HOMBRES
                    </h3>

                    <p className="text-navy-800 text-lg leading-relaxed ">
                        Traje formal y corbata.
                    </p>

                    <p className="mx-auto text-navy-700 mt-2 text-sm max-w-xs md:max-w-xl">
                        No usar los siguientes colores.
                        {/* Se solicita evitar el uso de trajes en tonos azul marino y sus variantes,
                        con el fin de mantener la armonía del evento.
                    </p>

                    <div className="flex justify-center gap-3 mt-6"> 
                        <div className="w-6 h-6 border-black border-1 rounded-full bg-navy-blue" /> 
                        <div className="w-6 h-6 rounded-full bg-[#1C3482]" /> 
                        <div className="w-6 h-6 rounded-full bg-[#284AB9]" /> 
                    </div>
                </motion.div> */}
            {/* <p className="flex md:col-span-2 justify-center items-center mx-auto text-gold-500 text-[16px] leading-relaxed max-w-xs md:max-w-xl">
                    Agradecemos su comprensión y apoyo para respetar el código de vestimenta y así
                    contribuir a la armonía de este día tan especial.
                </p> */}

        </div>
    );
}