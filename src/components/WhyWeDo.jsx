export default function WhyWeDo() {
  const points = [
    "Le AI Act rend les journaux centraux pour responsabilité, contrôle et assurance.",
    "Sans rail commun, chacun construit sa solution, avec coûts, fragmentation et lenteur.",
    "Objectif : bâtir une infrastructure souveraine de traçabilité, prête et partagée avant l’entrée en vigueur de l’AI Act.",
    "Permettre à l’écosystème européen de déployer l’autonomie sans perdre de terrain dans la compétition mondiale.",
  ];
  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Pourquoi nous le faisons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="relative rounded-xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-cyan-300/30" />
              <p className="text-white/80 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
