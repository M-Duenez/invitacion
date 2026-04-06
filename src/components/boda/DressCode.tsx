import { motion } from "framer-motion";

interface Props {
    title?: string;
}

export default function DressCode({ title = "Código de vestimenta" }: Props) {
    return (
        <div className="w-full max-w-5xl mx-auto bg-navy-blue py-12 px-6 text-center">

            {/* Título */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl text-gold-500 tracking-[0.2em] mb-2"
            >
                {title}
                <img src="/boda/dresscode.png" className="mx-auto w-65 h-auto" alt="" />
            </motion.h2>


            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-10">

                {/* MUJERES */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-md border border-gold-200"
                >
                    <h3 className="text-gold-500 text-xl mb-4 tracking-widest">
                        MUJERES
                    </h3>

                    <p className="text-navy-800 leading-relaxed">
                        Vestido largo en tonos elegantes.
                    </p>
                    <p className="text-navy-700 mt-2 text-sm">
                        Se solicita respetuosamente evitar el uso de vestidos en tonos blancos,
                        marfil o cualquier derivado, ya que estos están reservados exclusivamente
                        para la novia.
                    </p>

                    {/* Colores */} 
                    <div className="flex justify-center gap-3 mt-6"> 
                        <div className="w-6 h-6 border-black border rounded-full bg-[#fff]" /> 
                        <div className="w-6 h-6 rounded-full bg-[#FFF1D6]" />
                        <div className="w-6 h-6 rounded-full bg-[#EAE6DD]" />
                        <div className="w-6 h-6 rounded-full bg-[#E8D8B3]" />
                    </div>
                </motion.div>

                {/* HOMBRES */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-8 shadow-md border border-gold-200"
                >
                    <h3 className="text-gold-500 text-xl mb-4 tracking-widest">
                        HOMBRES
                    </h3>

                    <p className="text-navy-800 leading-relaxed">
                        Traje formal en tonos oscuros y elegantes.
                    </p>

                    <p className="text-navy-700 mt-2 text-sm">
                        Se solicita evitar el uso de trajes en tonos azul marino y sus variantes,
                        con el fin de mantener la armonía del evento.
                    </p>

                    <div className="flex justify-center gap-3 mt-6"> 
                        <div className="w-6 h-6 border-black border-1 rounded-full bg-navy-blue" /> 
                        <div className="w-6 h-6 rounded-full bg-[#1C3482]" /> 
                        <div className="w-6 h-6 rounded-full bg-[#284AB9]" /> 
                    </div>
                </motion.div>
                <p className="flex md:col-span-2 justify-center items-center mx-auto text-gold-500 text-[16px] leading-relaxed max-w-xl">
                    Agradecemos su comprensión y apoyo para respetar el código de vestimenta y así
                    contribuir a la armonía de este día tan especial.
                </p>

            </div>
        </div>
    );
}