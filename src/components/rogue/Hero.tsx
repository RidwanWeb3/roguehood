import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import banner from "@/assets/hero.png";
import logo from "@/assets/roguehood.png";
import { Send, Coins, MessageSquare } from "lucide-react";
import { Fireflies, FloatingLeaves, Fog } from "./Ambience";
import { ChatPanel } from "./ChatPanel";

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // Background parallax (3px)
  const bx = useTransform(mx, (v) => v * -3);
  const by = useTransform(my, (v) => v * -3);
  // Mascot parallax (15px)
  const fx = useTransform(mx, (v) => v * 15);
  const fy = useTransform(my, (v) => v * 15);
  const [wink, setWink] = useState(false);
  const [taunt, setTaunt] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [emotion, setEmotion] = useState("idle");

  useEffect(() => {
    const h = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", h);
    
    // Auto-blink every 5-8 seconds
    const blinkInterval = setInterval(() => {
      setWink(true);
      setTimeout(() => setWink(false), 200);
    }, 5000 + Math.random() * 3000);
    
    return () => {
      window.removeEventListener("mousemove", h);
      clearInterval(blinkInterval);
    };
  }, [mx, my]);

  return (
    <section
      id="home"
      className="relative min-h-[920px] max-h-[1100px] w-full overflow-hidden pt-24 pb-16"
    >
      <motion.div
        style={{ x: bx, y: by }}
        className="absolute inset-0 z-0"
      >
        <img
          src={banner}
          alt=""
          className="w-full h-full object-contain object-center opacity-100 pointer-events-none user-select-none"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,.75) 0%, rgba(0,0,0,.25) 100%)",
          }}
        />
      </motion.div>

      <Fog />
      <Fireflies count={50} />
      <FloatingLeaves />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-[48%_52%] gap-10 items-center min-h-[80svh]">
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
            initial={{ scale: 1 }}
            animate={{ 
              y: emotion === "excited" ? [0, -10, 0] : [0, -3, 0],
              scale: emotion === "happy" ? [1, 1.05, 1] : [1, 1.02, 1],
              rotate: emotion === "thinking" ? [-5, 5, -5] : [0, -1, 0],
            }}
            transition={{ 
              y: { duration: emotion === "excited" ? 0.5 : 4, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: emotion === "happy" ? 0.8 : 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: emotion === "thinking" ? 1 : 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative cursor-pointer"
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
              className="relative w-[min(680px,90vw)] cursor-pointer drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
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

          {/* Talk Button & Chat Panel */}
          <div className="w-full mt-6 md:mt-10">
            {!isChatOpen ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsChatOpen(true)}
                className="mx-auto flex items-center gap-3 bg-[#0B0F0A] border-2 border-lime-400 px-6 py-4 rounded-2xl shadow-lg hover:shadow-lime-400/30 transition-all"
              >
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center">
                  🦊
                </div>
                <div className="text-left">
                  <h4 className="font-display text-lime-400 font-bold text-lg">Rogue</h4>
                  <p className="text-white/70 text-sm">Ready for an adventure?</p>
                </div>
                <div className="ml-auto bg-lime-400 text-black px-4 py-2 rounded-xl font-bold">
                  <MessageSquare size={18} className="inline mr-2" />
                  Talk With Rogue
                </div>
              </motion.button>
            ) : (
              <ChatPanel
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
                onEmotionChange={setEmotion}
              />
            )}
          </div>


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
