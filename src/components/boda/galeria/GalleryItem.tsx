import { motion } from "framer-motion";

interface GalleryItemProps {
  src: string;
  alt: string;
  size: "small" | "large" | "wide" | "tall";
  onClick?: () => void;
}

export default function GalleryItem({
  src,
  alt,
  size,
  onClick,
}: GalleryItemProps) {

  const sizeClasses = {
    small: "col-span-1 row-span-1 aspect-[3/4]",
    large: "col-span-2 row-span-2 aspect-[4/5]",
    wide: "col-span-2 aspect-[16/10]",
    tall: "col-span-1 row-span-2 aspect-[3/5]",
  };

  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.03,
      }}
      className={`
        ${sizeClasses[size]}
        overflow-hidden
        rounded-[10px]
        cursor-pointer
        border
        border-gold-600
        shadow-lg
      `}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          hover:scale-100
        "
      />
    </motion.div>
  );
}