import { motion } from "framer-motion";

interface GiftStore {
  name: string;
  url: string;
  image?: string;
}

interface Props {
  stores: GiftStore[];
}

export default function GiftTable({ stores }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 py-5">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 text-center mb-5"
      >
        {/* Ícono */}
        <img
          src="/boda/gift.png"
          alt="Mesa de regalos"
          className="w-24 h-auto mx-auto mb-6"
        />

        {/* Título */}
        <h2 className="titulo text-[58px] text-gold-500 mb-4">
          Mesa de Regalos
        </h2>

        {/* Mensaje */}
        <p className="text-gold-500 text-center max-w-xs mb-5">
          Su presencia es el mejor regalo para nosotros.
          Sin embargo, si desean tener un detalle con motivo de nuestra boda,
          ponemos a su disposición nuestra mesa de regalos.
        </p>

      </motion.div>
        {/* Tiendas */}
        <div className="grid gap-5 md:grid-cols-2">
          {stores.map((store, index) => (
            <motion.a
              key={index}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center bg-ivory-50 justify-center
                         border border-gold-400 rounded-xl p-6
                         hover:shadow-lg transition-all"
            >
              {store.image && (
                <img
                  src={store.image}
                  alt={store.name}
                  className="h-12 object-contain mb-4"
                />
              )}

              <span className="text-navy-blue font-semibold text-lg">
                {store.name}
              </span>

              <span className="mt-3 text-gold-500 text-sm tracking-widest">
                VER MESA DE REGALOS
              </span>
            </motion.a>
          ))}
        </div>

    </div>
  );
}