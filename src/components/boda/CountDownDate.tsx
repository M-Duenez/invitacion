import { span } from "framer-motion/client";
import { useEffect, useState } from "react";

interface TimeLeft {
  días: number;
  horas: number;
  minutos: number;
  segundos: number;
}

export default function CountDownElegant({ date }: { date: string }) {
  const targetDate = new Date(date).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { días: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / (1000 * 60)) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex w-78 justify-center items-center">
      {Object.entries(timeLeft).map(([key, value], index, array) => (
        <div key={key} className="flex items-center">

          <div className="flex flex-col items-center px-1">
            <span className="text-[1.9rem] text-gold-600 font-bold">
              {value.toString().padStart(2, "0")}
            </span>
            <span className="text-gold-800 uppercase text-xs tracking-widest">
              {key}
            </span>
          </div>

          {index < array.length - 1 &&(
            <span className="text-5xl text-gold-600 mx-1">:</span>
          )}

        </div>
      ))}
    </div>
  );
}