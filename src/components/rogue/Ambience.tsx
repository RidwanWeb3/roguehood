import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Fireflies({ count = 30 }: { count?: number }) {
  const [dots] = useState(() =>
    Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      size: 2 + Math.random() * 4,
    })),
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-lime animate-twinkle"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            animationDelay: `${d.delay}s`,
            boxShadow: "0 0 12px var(--lime), 0 0 24px var(--lime)",
          }}
        />
      ))}
    </div>
  );
}

export function FloatingLeaves() {
  const leaves = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((i) => (
        <motion.div
          key={i}
          initial={{ x: -50, y: Math.random() * 600, rotate: 0 }}
          animate={{
            x: ["-5vw", "105vw"],
            y: [Math.random() * 600, Math.random() * 600 + 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 18 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
          className="absolute"
          style={{ top: `${Math.random() * 90}%` }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C6 6 4 12 6 18c6-2 12-8 12-16-2 0-4 0-6 0z"
              fill="var(--lime)"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function FlyingArrow() {
  const [key, setKey] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setKey((k) => k + 1), 9000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <motion.div
        key={key}
        initial={{ x: "-20vw", y: "60vh", rotate: -10, opacity: 0 }}
        animate={{ x: "120vw", y: "10vh", rotate: -10, opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute"
      >
        <svg width="90" height="14" viewBox="0 0 90 14" fill="none">
          <path d="M0 7 L70 7" stroke="var(--gold)" strokeWidth="2" />
          <path d="M70 1 L88 7 L70 13 Z" fill="var(--gold)" />
          <path d="M0 7 L10 2 M0 7 L10 12" stroke="var(--lime)" strokeWidth="2" />
        </svg>
      </motion.div>
    </div>
  );
}

export function Fog() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 animate-fog"
        style={{
          background:
            "radial-gradient(ellipse at bottom, oklch(0.92 0.24 125 / 15%), transparent 60%)",
        }}
      />
    </div>
  );
}
