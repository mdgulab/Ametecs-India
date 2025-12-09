import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  { id: 1, name: "Jenn F.", role: "Marketing Director @ Square", text: "I feel like I’ve learned as much from Ametecs as I did completing my masters. It's the first thing I read every morning.", img: "/assets/feedback1.jpg" },
  { id: 2, name: "Arun K.", role: "Team Lead @ Meta", text: "Ametecs CRM and automation changed how I manage my team. Couldn’t imagine scaling without it.", img: "/assets/feedback2.jpg" },
  { id: 3, name: "Priya S.", role: "Ops Manager @ Razorpay", text: "SmartDCM insights are next-level. Our collections improved dramatically.", img: "/assets/feedback3.jpg" },
  { id: 4, name: "Rahul M.", role: "Founder @ FinTechPro", text: "Super easy onboarding, amazing UI and the team support is unmatched.", img: "/assets/feedback4.jpg" },
  { id: 5, name: "Deepa L.", role: "Sales Head @ HDFC", text: "AI reports saved my team hours every single day. Game changer.", img: "/assets/feedback5.jpg" },
];

export default function RotatingTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="absolute right-20 top-30px -translate-y-1/2 w-[450px] h-[350px] pointer-events-none">
      <div className="relative w-full h-full">
        {testimonials.map((item, i) => {
          const position = (i - index + testimonials.length) % testimonials.length;

          return (
          <motion.div
  key={item.id}
  className="absolute w-[320px] h-[360px] rounded-2xl p-[2px]"

  initial={false}
  animate={{
    x: position === 0 ? 0 : position === 1 ? 40 : position === 2 ? 80 : 120,
    scale: position === 0 ? 1.05 : 0.9,
    opacity: position > 3 ? 0 : 1,
    rotate: position === 0 ? -1 : position === 1 ? 1 : 6,
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}
  transition={{
    type: "spring", stiffness: 120, damping: 14,
    backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" }
  }}
  style={{
    zIndex: testimonials.length - position,
    background:
      "linear-gradient(135deg, #bb10ff3a 2%, #00669963 50%, #00eaff3d 100%)",
    backgroundSize: "100% 100%",
    boxShadow: position === 0
      ? "0 0 5px rgba(0, 149, 255, 0.43)"
      : "0 0 8px rgba(0, 149, 255, 0.35)",
  }}
>
  {/* Inner Glass Card */}
  <div
    className="w-full h-full rounded-2xl backdrop-blur-2xl p-6
               border border-white/5 shadow-lg text-white
               bg-[rgba(0, 0, 0, 0.4)]"
  >
    <img
      src={item.img}
      className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border border-white/30 shadow-md"
    />

    <p className="text-center leading-relaxed text-gray-100 opacity-100">
      {item.text}
    </p>

    <p className="mt-4 text-center font-semibold text-[#050505] drop-shadow">
      {item.name}
    </p>

    <p className="text-center text-sm text-[#680099] opacity-100">
      {item.role}
    </p>
  </div>
</motion.div>

          );
        })}
      </div>
    </div>
  );
}
