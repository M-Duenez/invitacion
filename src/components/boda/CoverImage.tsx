import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedNames from "./AnimatedNames";
import Rings from "./Rings";
import { div } from "framer-motion/client";
import AnimatedText from "./AnimateText";

export default function CoverImage() {
  const [imageLoaded, setImageLoaded] = useState(true); 
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) { setImageLoaded(true); }
  }, []);

  return (
    <section className="relative  touch-pan-y">

      <img
      ref={imgRef}
      src="/boda/imagen_fondo_3.webp"
      alt="Yulissa y Miguel"
      onLoad={() => setImageLoaded(true)}
      className={` 
        w-full
        h-auto
        block
        transition duration-700 ease-out
        pointer-events-none
        ${imageLoaded ? "" : "blur-xl"}`}
      
    />

      

      <div className="absolute inset-0 flex flex-col justify-between">

        {/* Parte superior */}
        <div className="flex flex-col items-center justify-center ">
          {imageLoaded && (
            <>
              
            </>
          )}
        </div>


        {/* Parte inferior */}
        <div className="flex flex-col w-full items-center">
          {imageLoaded && (
            <>
              {/* <motion.img
                src="/boda/logo_YM_blanco_copia.png"
                alt=""
                className="w-30"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 100,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.5,
                }}
                transition={{
                  duration: 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              /> */}
              {/* <div className="flex flex-col mb-10 items-center ">
                <AnimatedText
                  text="Yulissa" 
                  className="titulo  text-ivory-50 text-[75px] font-bold -ml-24"
                />
                <AnimatedText
                  text="&" 
                  className="titulo  text-ivory-50 text-[55px] font-bold"
                />
                <AnimatedText
                  text="Miguel" 
                  className="titulo  text-ivory-50 text-[75px] font-bold -mr-24"
                />
                

              </div> */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 1 }}
                className="flex animate-bounce text-ivory-50 text-sm tracking-widest gap-x-2 mb-5"
              >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg> <p className="flex items-end">Desliza</p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              </motion.div>
            </>
          )}
        </div>

      </div>

    </section>
  );
}