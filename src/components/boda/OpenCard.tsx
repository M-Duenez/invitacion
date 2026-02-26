import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Seal from "./Seal";

export default function OpenCard({ children }: any) {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setOpen(true);
    audioRef.current?.play();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-navy-950">

      <audio ref={audioRef} src="/music.mp3" loop />

      {!open ? (
        <Seal onOpen={handleOpen} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="w-full"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}