import { motion } from "framer-motion";

interface EventItem {
    time: string;
    title: string;
    icon: React.ReactNode;
}

interface Props {
    events: EventItem[];
}

export default function TimeLine({ events }: Props) {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-20">

            {/* Línea central SIEMPRE visible */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gold-400/30 -translate-x-1/2"></div>

            <div className="flex flex-col gap-20">
                {events.map((event, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                delay: index * 0.2,
                            }}
                            viewport={{ once: true }}
                            className="relative grid grid-cols-[1fr_auto_1fr] items-center w-full"
                        >
                            {/* IZQUIERDA */}
                            <div className={`${isLeft ? "text-right pr-10 pl-10" : ""}`}>
                                {isLeft && (
                                    <>
                                        <h3 className="text-gold-400 text-lg md:text-xl font-semibold">
                                            {event.title}
                                        </h3>
                                        <p className="text-ivory-50 tracking-widest text-xs md:text-sm mt-2">
                                            {event.time}
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* ICONO CENTRAL */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2 + 0.2,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                viewport={{ once: true }}
                                className="w-12 h-12 md:w-14 md:h-14
               flex items-center justify-center
               bg-navy-800 border border-gold-400
               rounded-full
               shadow-[0_0_20px_rgba(201,162,77,0.4)]
               z-10"
                            >
                                <span className="text-gold-400 text-lg md:text-xl">
                                    {event.icon}
                                </span>
                            </motion.div>

                            {/* DERECHA */}
                            <div className={`${!isLeft ? "text-left pl-6" : ""}`}>
                                {!isLeft && (
                                    <>
                                        <h3 className="text-gold-400 text-lg md:text-xl font-semibold">
                                            {event.title}
                                        </h3>
                                        <p className="text-ivory-50 tracking-widest text-xs md:text-sm mt-2">
                                            {event.time}
                                        </p>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}