import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import banner from "@/assets/bannerhero.png";
import logo from "@/assets/roguehood.png";
import { Send, Coins } from "lucide-react";
import { Fireflies, FloatingLeaves, Fog } from "./Ambience";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bx = useTransform(mx, (v) => v * -20);
  const by = useTransform(my, (v) => v * -20);
  const fx = useTransform(mx, (v) => v * 30);
  const fy = useTransform(my, (v) => v * 30);
  const [wink, setWink] = useState(false);
  const [taunt, setTaunt] = useState(false);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [mx, my]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full overflow-hidden pt-24 pb-16"
    >
      <motion.div
        style={{ x: bx, y: by, scale: 1 }}
        className="absolute inset-0"
      >
        <img
          src={banner}
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.08 0.02 145 / 70%) 0%, oklch(0.08 0.02 145 / 40%) 40%, oklch(0.08 0.02 145 / 95%) 100%)",
          }}
        />
      </motion.div>

      <Fog />
      <Fireflies count={50} />
      <FloatingLeaves />

      {/* Moon glow */}
      <div
        className="pointer-events-none absolute -right-40 top-10 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--lime), transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center min-h-[80svh]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-lime animate-twinkle" />
            <span className="font-display text-[11px] tracking-widest text-lime">
              LIVE ON ROBINHOOD CHAIN
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 0.7 }}
            onClick={() => {
              setTaunt(true);
              setTimeout(() => setTaunt(false), 2200);
            }}
            className="font-display text-6xl md:text-8xl leading-[0.9] cursor-pointer select-none"
          >
            <span className="block text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.6)]">
              ROGUE
            </span>
            <span className="block text-lime-glow -mt-2">HOOD</span>
          </motion.h1>

          {taunt && (
            <motion.div
              initial={{ opacity: 0, y: 10, rotate: -3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 inline-block glass px-3 py-1 rounded-lg font-display text-xs text-gold"
            >
              "Catch me if you can." 🦊
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3, duration: 0.6 }}
            className="mt-6 font-display text-sm md:text-base tracking-widest text-white/90"
          >
            <span className="text-lime">→</span> NOT A HERO. NOT A VILLAIN. JUST A ROGUE.{" "}
            <span className="text-lime">←</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.6 }}
            className="mt-5 max-w-md text-white/70 text-base leading-relaxed"
          >
            The smartest outlaw on Robinhood Chain. Join the funniest gang.
            Own the Hood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#tokenomics" className="btn-rogue hover:scale-105">
              <Coins size={16} /> BUY $ROGUE
            </a>
            <a
              href="https://t.me/roguehood"
              target="_blank"
              rel="noreferrer"
              className="btn-rogue-outline hover:scale-105"
            >
              <Send size={16} /> JOIN TELEGRAM
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.7 }}
            className="mt-8 flex items-center gap-3 glass rounded-xl px-4 py-2 w-fit"
          >
            <span className="font-display text-xs text-gold tracking-widest">CA:</span>
            <span className="font-mono text-xs text-white/70">
              coming soon on robinhood chain
            </span>
          </motion.div>
        </div>

        <motion.div
          style={{ x: fx, y: fy }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div
              className="absolute inset-0 blur-3xl opacity-60"
              style={{ background: "radial-gradient(circle, var(--lime), transparent 60%)" }}
            />
            <motion.img
              src={logo}
              alt="Roguehood mascot"
              onClick={() => {
                setWink(true);
                setTimeout(() => setWink(false), 900);
              }}
              whileTap={{ scale: 0.95, rotate: -3 }}
              className="relative w-[min(520px,90vw)] cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            />
            {wink && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute top-6 right-6 glass px-3 py-1 rounded-lg font-display text-xs text-lime"
              >
                😉 wink
              </motion.div>
            )}
          </motion.div>

          {/* Floating coins */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + (i % 2) * 60}%`,
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 360] }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
            >
              <div
                className="w-6 h-6 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.95 0.18 95), var(--gold))",
                  boxShadow: "0 0 12px var(--gold)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[10px] tracking-[0.4em] text-lime/70"
      >
        SCROLL ↓ TO THE HIDEOUT
      </motion.div>
    </section>
  );
}
