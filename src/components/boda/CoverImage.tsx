import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedNames from "./AnimatedNames";
import Rings from "./Rings";
import { div } from "framer-motion/client";
import AnimatedText from "./AnimateText";

export default function CoverImage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <section className="relative h-screen w-full bg-ivory-50 touch-pan-y">

      <img
        ref={imgRef}
        src="/boda/7.jpg"
        alt="Yulissa y Miguel"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full
                object-cover
                object-[25%_35%]
                
                pointer-events-none
                `}
        style={{
        }}
      />

      <div className="absolute inset-0 bg-black/15"></div>

      <div className="absolute inset-0 pointer-events-none
                  bg-gradient-to-b
                  from-navy-80/70
                  via-transparent
                  to-navy-900/80" />

      <div className="relative z-10 flex flex-col justify-between w-full h-full py-10">

        {/* Parte superior */}
        <div className="flex justify-center">
          {imageLoaded && (
            <AnimatedText
              text="Nos casamos"
              className="titulo tracking-[0.1em] text-ivory-50 text-[58px] font-bold"
            />
          )}
        </div>

        {/* Parte inferior */}
        <div className="flex flex-col w-full items-center">
          {imageLoaded && (
            <>
              {/* <AnimatedNames /> */}
              
              <motion.img
                src="/boda/logo_YM_blanco_copia.png"
                alt=""
                className="w-50"
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
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 1 }}
                className="animate-bounce mt-3 text-ivory-50 text-sm tracking-widest"
              >
                Desliza hacia abajo
              </motion.div>
            </>
          )}
        </div>

      </div>

    </section>
  );
}