import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/roguehood.png";

const messages = [
  "Stealing memes...",
  "Finding treasure...",
  "Sharpening arrows...",
  "Escaping the guards...",
  "Entering Roguehood...",
];

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const dur = 2600;
    const raf = () => {
      const p = Math.min(1, (Date.now() - start) / dur);
      setProgress(p);
      setMsgIdx(Math.min(messages.length - 1, Math.floor(p * messages.length)));
      if (p < 1) requestAnimationFrame(raf);
      else setTimeout(() => setDone(true), 400);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          style={{ background: "radial-gradient(circle at center, var(--forest), var(--ink))" }}
        >
          <motion.img
            src={logo}
            alt="Roguehood"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1, 0.95, 1], opacity: 1 }}
            transition={{ duration: 1.4, repeat: Infinity, repeatType: "reverse" }}
            className="w-56 drop-shadow-[0_0_40px_var(--lime)]"
          />
          <div className="mt-8 w-[min(360px,80vw)]">
            <div className="relative h-3 rounded-full bg-black/60 border border-lime/30 overflow-hidden">
              <motion.div
                className="h-full"
                style={{
                  width: `${progress * 100}%`,
                  background: "linear-gradient(90deg, var(--gold), var(--lime))",
                  boxShadow: "0 0 20px var(--lime)",
                }}
              />
            </div>
            <p className="mt-4 text-center font-display text-lime text-sm tracking-widest">
              {messages[msgIdx]}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
