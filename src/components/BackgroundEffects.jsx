import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const particles = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">

      {/* AI FLOATING PARTICLES */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-blue-400/40 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2,
          }}
          animate={{
            y: [null, Math.random() * -200],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* AI ANIMATED LINES */}
      <svg className="absolute w-full h-full opacity-[0.25]">
        <motion.path
          d="M0 300 Q600 200 1200 300 T2400 300"
          stroke="#d2e1ff40"
          strokeWidth="2"
          fill="none"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
