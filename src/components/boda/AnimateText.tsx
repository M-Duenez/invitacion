import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className }: Props) {
  const letters = text.split("");

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.9,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
}