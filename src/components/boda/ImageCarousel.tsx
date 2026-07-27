import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  images: string[];
}

export default function ImageCarousel({ images }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full h-auto max-w-md mx-auto">

      {/* Imagen */}

      <div className="relative w-full aspect-[1/1] overflow-hidden ">

        <AnimatePresence initial={false}>

          <motion.img
            key={current}
            src={images[current]}
            alt=""
            initial={{ opacity:0, scale:1.05 }}
            animate={{ opacity:1, scale:1 }}
            exit={{ opacity:0, scale:.98 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover" />

        </AnimatePresence>

      </div>

      {/* Indicadores */}

      <div className="flex justify-center gap-2 mt-4">

        {images.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-8 h-2 bg-gold-500"
                : "w-2 h-2 bg-navy-300"
            }`}
          />

        ))}

      </div>

    </div>
  );
}