import { motion } from "framer-motion";

const points = [
  { x: 20, y: 40 },
  { x: 30, y: 30 },
  { x: 40, y: 40 },
  { x: 50, y: 30 },
  { x: 60, y: 40 },
  { x: 70, y: 30 },
];

export default function Constellation() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        {points.map((p, i) => (
          <motion.circle
            key={i}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r="3"
            fill="#E8D8B3"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        ))}

        {points.map((p, i) =>
          i < points.length - 1 ? (
            <line
              key={`line-${i}`}
              x1={`${p.x}%`}
              y1={`${p.y}%`}
              x2={`${points[i + 1].x}%`}
              y2={`${points[i + 1].y}%`}
              stroke="#C6A75E"
              strokeOpacity="0.3"
            />
          ) : null
        )}
      </svg>
    </div>
  );
}