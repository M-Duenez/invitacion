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
    <section className="relative h-screen w-full overflow-hidden bg-ivory-50 min-h-[600px]">

      <img
        ref={imgRef}
        src="/boda/3.jpg"
        alt="Yulissa y Miguel"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full
              object-cover
              object-[85%_30%]
              scale-125 md:scale-100
              transition duration-1000 ease-out ${imageLoaded ? "blur-0" : "blur-md"
          }`}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 flex items-center justify-start pl-12 md:pl-52 h-full">
        <div className="text-center">

          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <p class="uppercase tracking-[0.4em] text-gold-500 text-sm md:text-lg mb-6">
                Nuestra Boda
              </p>
              <AnimatedNames />
              <Rings />
            </motion.div>
          )}

          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="animate-bounce text-gold-500 mt-10 text-sm tracking-widest"
            >
              Desliza hacia abajo
            </motion.div>
          )}

        </div>
      </div>

    </section>
  );
}