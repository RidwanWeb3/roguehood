import { motion } from "framer-motion";
import logo from "@/assets/roguehood.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#about", label: "About" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#community", label: "Community" },
  { href: "#social", label: "Social" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [bursts, setBursts] = useState(0);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.8, duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,94vw)]"
    >
      <div className="glass rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => setBursts((b) => b + 1)}
          className="flex items-center gap-2 group relative"
        >
          <img
            src={logo}
            alt="Roguehood"
            className="w-10 h-10 object-contain transition-transform group-hover:rotate-[-8deg]"
          />
          <span className="font-display text-lg tracking-wide text-lime-glow">ROGUEHOOD</span>
          {Array.from({ length: bursts }).map((_, i) => (
            <CoinBurst key={i} />
          ))}
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-widest text-white/80 hover:text-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="https://flap.sh/robinhood/0x499903a705025761ad33b4f14212a830a3757777?lang=en" target="_blank" rel="noreferrer" className="btn-rogue text-xs">BUY $RGH</a>
        </nav>

        <button
          className="md:hidden text-lime"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-3"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-sm tracking-widest text-white/90"
            >
              {l.label}
            </a>
          ))}
          <a href="https://flap.sh/robinhood/0x499903a705025761ad33b4f14212a830a3757777?lang=en" target="_blank" rel="noreferrer" className="btn-rogue text-xs self-start">BUY $RGH</a>
        </motion.div>
      )}
    </motion.header>
  );
}

function CoinBurst() {
  const coins = Array.from({ length: 8 });
  return (
    <div className="pointer-events-none absolute inset-0">
      {coins.map((_, i) => {
        const angle = (i / coins.length) * Math.PI * 2;
        const dx = Math.cos(angle) * 60;
        const dy = Math.sin(angle) * 60;
        return (
          <motion.span
            key={i}
            initial={{ x: 20, y: 20, opacity: 1, scale: 0.5 }}
            animate={{ x: 20 + dx, y: 20 + dy, opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: "radial-gradient(circle, var(--gold), oklch(0.6 0.15 80))",
              boxShadow: "0 0 8px var(--gold)",
            }}
          />
        );
      })}
    </div>
  );
}
