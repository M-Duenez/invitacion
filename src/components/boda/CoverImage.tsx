import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedNames from "./AnimatedNames";
import Rings from "./Rings";
import { div } from "framer-motion/client";
import AnimatedText from "./AnimateText";

export default function CoverImage() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full bg-ivory-50 touch-pan-y">

      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload=""
        onCanPlay={() => setVideoReady(true)}
        onEnded={() => setVideoFinished(true)}
        className={`absolute inset-0 w-full h-full object-cover `}
      >
        <source src="/boda/yulissa_miguel_1.mp4" type="video/mp4" />
      </video>

      

      <div className="relative z-10 flex flex-col justify-between w-full h-full py-10">

        {/* Parte superior */}
        <div className="flex justify-center ">
          {videoFinished && (
            <AnimatedText
              text="Nos casamos"
              className="subtitulo  text-ivory-50 text-[53px] font-bold"
            />
          )}
        </div>

        {/* Parte inferior */}
        <div className="flex flex-col w-full items-center">
          {videoFinished && (
            <>
              {/* <AnimatedNames /> */}
              
              <motion.img
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