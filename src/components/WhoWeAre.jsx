import { ShieldCheck } from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-300/20">
              <ShieldCheck className="text-cyan-300" />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Qui nous sommes</h2>
            <p className="text-white/80 leading-relaxed">
              Tiers neutre, souverain et de confiance entre constructeurs, assureurs et pouvoirs publics. Spécialisé dans la traçabilité probatoire des robots / entités autonomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
