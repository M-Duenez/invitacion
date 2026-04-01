import { useState } from "react";
import { motion } from "framer-motion";
import Seal from "./Seal";

interface Props {
  nombre?: string;
  pases?: number;
}

export default function OpenCard({ nombre, pases }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);

    const content = document.getElementById("content");
    if (content) {
      content.classList.remove("opacity-0", "pointer-events-none");
    }
    document.body.classList.remove("no-scroll");

    // 🔥 FIX CRÍTICO iOS
    setTimeout(() => {
      window.scrollTo(0, 1);
    }, 50);
  };

  return !open ? (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-ivory-50">
      <Seal nombre={nombre} pases={pases} onOpen={handleOpen} />
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] bg-white pointer-events-none"
    />
  );
}