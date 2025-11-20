import { ShieldCheck, LockKeyhole, Rows3 } from "lucide-react";

export default function Guarantees() {
  const items = [
    {
      icon: <LockKeyhole className="text-cyan-300" />, 
      title: "Protection maximale des données",
      desc: "Journaux minimaux, chiffrement, aucun accès hors périmètre contractuel, IP préservée, données personnelles minimisées, cloud européen.",
    },
    {
      icon: <Rows3 className="text-cyan-300" />, 
      title: "Neutralité et absence de lock-in",
      desc: "Tiers souverain, formats ouverts, export et réversibilité garantis, aucun scoring OEM.",
    },
    {
      icon: <ShieldCheck className="text-cyan-300" />, 
      title: "Fiabilité juridique et opérationnelle",
      desc: "Infrastructure résiliente, règles paramétrables par pays, alignée sur les normes européennes. Nous ne tranchons jamais les sinistres : nous fournissons des faits établis.",
    },
  ];

  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Nos garanties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/20">
                {it.icon}
              </div>
              <h3 className="text-lg font-medium mb-2">{it.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
