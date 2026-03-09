import { motion } from "framer-motion";

interface EventItem {
  time: string;
  title: string;
  description?: string;
}

interface Props {
  events: EventItem[];
}

export default function TimeLine({ events }: Props) {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-24 overflow-x-hidden">

      <div className="flex flex-col gap-20">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className={`w-full flex ${
                isLeft ? "justify-start" : "justify-end text-end"
              }`}
            >
              <div
                className="bg-white rounded-lg p-8 w-[85%] md:w-[70%]
                           shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                           border border-gold-200"
              >
                <h3 className="text-gold-600 text-xl font-semibold">
                  {event.title}
                </h3>

                <p className="text-earth-700 text-sm tracking-widest mt-2">
                  {event.time}
                </p>

                {event.description && (
                  <p className="text-navy-950 text-sm mt-4 leading-relaxed">
                    {event.description}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}