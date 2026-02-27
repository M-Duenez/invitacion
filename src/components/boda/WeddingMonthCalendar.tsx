import { motion } from "framer-motion";

interface Props {
    date: string;
}

export default function WeddingMonthCalendar({ date }: Props) {
    const weddingDate = new Date(date);

    const year = weddingDate.getFullYear();
    const month = weddingDate.getMonth();
    const day = weddingDate.getDate();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const startDay = firstDayOfMonth.getDay()// 0 domingo
    const daysInMonth = lastDayOfMonth.getDate();

    const monthName = weddingDate.toLocaleString("es-MX", {
        month: "long",
    }).toUpperCase();

    const daysArray = [];

    // Espacios vacíos antes del día 1
    for (let i = 0; i < startDay; i++) {
        daysArray.push(null);
    }

    // Días reales
    for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm
                 border border-gold-500/40
                 rounded-xl
                 p-8
                 shadow-navy-800
                 shadow-[0_10px_40px_rgba(0,0,0,0.5)]
                 max-w-md mx-auto"
        >
            <h3 className="text-center text-gold-600 tracking-[0.3em] mb-6">
                {monthName} {year}
            </h3>

            <div className="grid grid-cols-7 gap-2 text-center text-sm text-earth-700 mb-3">
                {["DO", "LU", "MA", "MI", "JU", "VI", "SA"].map((d) => (
                    <div key={d} className="font-semibold text-gold-500">
                        {d}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-earth-800">
                {daysArray.map((d, i) => (
                    <div key={i}>
                        {d === day ? (
                            <div className="relative w-10 h-10 mx-auto flex items-center justify-center">

                                <svg
                                    viewBox="0 0 24 24"
                                    className="absolute w-12 h-12 fill-gold-500"
                                >
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                                        2 5.42 4.42 3 7.5 3
                                        c1.74 0 3.41 0.81 4.5 2.09
                                        C13.09 3.81 14.76 3 16.5 3
                                        19.58 3 22 5.42 22 8.5
                                        c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>

                                <span className="relative text-white font-semibold text-sm">
                                    {d}
                                </span>

                            </div>
                        ) : (
                            <span>{d}</span>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}