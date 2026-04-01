import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Seal from "./Seal";

interface Props {
    nombre?: string;
    pases?: number;
    children: React.ReactNode;
}

export default function OpenCard({ nombre, pases, children }: Props) {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    setOpen(true);
    audioRef.current?.play();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center ">

      {/* <audio ref={audioRef} src="/music.mp3" loop /> */}

      {!open ? (
        <Seal nombre={nombre} pases={pases} onOpen={handleOpen} />
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