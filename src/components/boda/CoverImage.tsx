import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedNames from "./AnimatedNames";
import Rings from "./Rings";

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

      <div className="relative z-10 flex items-end justify-center  h-full">
        <div className="text-center">

          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <p className="uppercase tracking-[0.9em] text-ivory-50 text-lg md:text-lg font-bold ml-4 mb-2">
                Nos casamos
              </p>
              <AnimatedNames />
              {/* <Rings /> */}
            </motion.div>
          )}

          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="animate-bounce mt-[10px] mb-5 text-ivory-50 text-sm tracking-widest"
            >
              Desliza hacia abajo
            </motion.div>
          )}

        </div>
      </div>

    </section>
  );
}