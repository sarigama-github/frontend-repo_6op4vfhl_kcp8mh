import { ArrowRight } from "lucide-react";

export default function PricingCTA() {
  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300/10 to-white/5 p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">POCs & Tarification</h2>
          <p className="text-white/80 mb-8">
            POC / pilote 100 % gratuits pour constructeurs, assureurs et autorités. Connecteurs et APIs sur mesure pour chaque entité. Co-construction technique et juridique.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-[#0B1630] px-5 py-3 font-medium transition">
            Lancez un POC AI Act
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
