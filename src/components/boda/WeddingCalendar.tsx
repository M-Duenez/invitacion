import { motion } from "framer-motion";

interface Props {
  date: string; // formato ISO: 2026-10-02T21:00:00
}

export default function WeddingCalendar({ date }: Props) {
  const weddingDate = new Date(date);

  const day = weddingDate.getDate();
  const month = weddingDate.toLocaleString("es-MX", {
    month: "long",
  }).toUpperCase();
  const year = weddingDate.getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center
                 border border-gold-500/40
                 rounded-xl
                 px-10 py-8
                 bg-white/60 backdrop-blur-sm
                 shadow-navy-800/80
                 shadow-[10px_10px_1px_rgba(0,0,0,0.8)]"
    >
      <span className="text-gold-500 tracking-[0.3em] text-sm mb-2">
        {month}
      </span>

      <span className="text-6xl md:text-7xl font-light text-earth-800 leading-none">
        {day.toString().padStart(2, "0")}
      </span>

      <span className="text-gold-500 tracking-[0.3em] text-sm mt-2">
        {year}
      </span>
    </motion.div>
  );
}