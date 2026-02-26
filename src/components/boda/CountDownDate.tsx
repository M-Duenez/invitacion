import { useEffect, useState } from "react";

export default function CountDownElegant({ date }: { date: string }) {
  const calculate = () => {
    const difference = +new Date(date) - +new Date();
    let time = { dias: 0, horas: 0, minutos: 0, segundos: 0 };

    if (difference > 0) {
      time = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return time;
  };

  const [timeLeft, setTimeLeft] = useState(calculate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-8 text-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col">
          <span className="text-4xl text-gold-500 font-bold">
            {value}
          </span>
          <span className="text-gold-400 uppercase text-xs tracking-widest">
            {key}
          </span>
        </div>
      ))}
    </div>
  );
}