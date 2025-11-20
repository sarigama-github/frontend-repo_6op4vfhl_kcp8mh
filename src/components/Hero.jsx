import { ArrowRight, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const bg = "#0B1630";
const cyan = "#4FD3FF";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: bg }} />
      {/* Subtle grid + cyan glow */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-3xl" style={{ background: `radial-gradient(ellipse at center, ${cyan}22 0%, transparent 60%)` }} />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24">
        <div className="flex flex-col items-start gap-8">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
            <Shield size={14} className="text-cyan-300" />
            Evidence Rail / European Proof Layer
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.6 }} className="max-w-3xl text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Simplifiez la traçabilité AI Act
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="max-w-3xl text-lg md:text-xl text-white/70">
            Layer4AI mutualise, en POC, les journaux des systèmes autonomes dans un coffre de preuves neutre et souverain entre constructeurs, assureurs et régulateurs.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-[#0B1630] px-5 py-3 font-medium transition">
              Lancez un POC AI Act
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 text-white hover:bg-white/5 px-5 py-3 font-medium transition">
              Parler à un expert
            </a>
          </motion.div>
        </div>

        {/* Subtle diagram */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
          <DiagramCard title="Constructeurs OEM" subtitle="Systèmes autonomes" />
          <DiagramRail />
          <DiagramCard title="Assureurs & Régulateurs" subtitle="Sinistres • Contrôle" />
        </div>
      </div>
    </section>
  );
}

function DiagramCard({ title, subtitle }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="absolute -inset-px rounded-xl" style={{ boxShadow: `inset 0 0 0 1px ${cyan}11` }} />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-cyan-300/20 flex items-center justify-center">
          <Sparkles className="text-cyan-300" size={18} />
        </div>
        <div>
          <p className="text-white font-medium">{title}</p>
          <p className="text-white/60 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function DiagramRail() {
  return (
    <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
      <div className="absolute -inset-px rounded-xl" style={{ boxShadow: `inset 0 0 0 1px ${cyan}22` }} />
      <div className="flex flex-col items-center text-center gap-2">
        <Shield className="text-cyan-300" />
        <p className="text-white font-medium">Layer4AI</p>
        <p className="text-white/60 text-sm">Rail probatoire européen</p>
      </div>
      <svg className="mt-4 w-full" height="36" viewBox="0 0 400 36" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor={cyan} stopOpacity="0.2" />
            <stop offset="100%" stopColor={cyan} stopOpacity="0.8" />
          </linearGradient>
        </defs>
        <path d="M 0 18 Q 100 2 200 18 T 400 18" fill="none" stroke="url(#g)" strokeWidth="2" />
      </svg>
    </div>
  );
}
