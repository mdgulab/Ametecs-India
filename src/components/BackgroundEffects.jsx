import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function BackgroundEffects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ultra smooth mouse tracking
  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    function handleMouse(e) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">

      {/* 🌌 FLOATING AI PARTICLES */}
      {particles.map((_, i) => {
        const size = Math.random() * 2 + 2;
        const depth = Math.random() * 30 + 10;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#006699]/40"
            style={{
              width: size,
              height: size,
              x: useSpring(
                smoothX,
                { stiffness: 30, damping: 20 }
              ),
              y: useSpring(
                smoothY,
                { stiffness: 30, damping: 20 }
              ),
            }}
            initial={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        );
      })}

 {/* 🌌 FLOATING AI PARTICLES */}
      {particles.map((_, i) => {
        const size = Math.random() * 2 + 2;
        const depth = Math.random() * 30 + 10;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#32bbffff]/50"
            style={{
              width: size,
              height: size,
              x: useSpring(
                smoothX,
                { stiffness: 30, damping: 20 }
              ),
              y: useSpring(
                smoothY,
                { stiffness: 30, damping: 20 }
              ),
            }}
            initial={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        );
      })}


      {/* 🔗 AI CONNECTING LINES */}
      <svg className="absolute w-full h-full opacity-[0.18]">
        <motion.path
          d="M0 300 Q600 200 1200 300 T2400 300"
          stroke="#439affff"
          strokeWidth="1.5"
          fill="none"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
   {/* 🔗 AI CONNECTING LINES */}
      <svg className="absolute w-full h-full opacity-[0.18]">
        <motion.path
          d="M0 400 Q600 200 1100 300 T2400 300"
          stroke="#34a4ffff"
          strokeWidth="3"
          fill="none"
          animate={{
            pathLength: [0, 5, 0],
            opacity: [0.2, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
      {/* ✨ CURSOR GLOW */}

      
      <motion.div
        className="absolute w-[28px] h-[28px] rounded-full blur-[30px]"
        style={{
          background: "radial-gradient(circle, #0daeffff, transparent 90%)",
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
