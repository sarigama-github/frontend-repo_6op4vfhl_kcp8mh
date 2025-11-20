import { Building2, Factory, Landmark } from "lucide-react";

export default function ValuePerActor() {
  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Valeur pour chaque acteur</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <Col icon={<Building2 className="text-cyan-300" />} title="Assureurs / risk managers" items={[
            "Données normalisées, exploitables, alignées sur les pratiques constructeurs.",
            "Mieux comprendre, modéliser et tarifer le risque autonome.",
            "Packs de preuves standardisés pour accélérer les sinistres.",
            "Zéro lock-in.",
          ]} />
          <Col icon={<Factory className="text-cyan-300" />} title="Constructeurs / OEM" items={[
            "Réduire risque technique, juridique et réputationnel.",
            "Un seul rail probatoire réutilisable partout.",
            "Protection de l’IP : journaux minimaux, schémas ouverts.",
          ]} />
          <Col icon={<Landmark className="text-cyan-300" />} title="Gouvernements / États / régulateurs" items={[
            "Rail souverain, multi-OEM, multi-pays.",
            "Réduire fragmentation et charge publique.",
            "Faciliter contrôles, enquêtes et surveillance post-marché.",
          ]} />
        </div>
      </div>
    </section>
  );
}

function Col({ icon, title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/20">{icon}</div>
      <h3 className="text-white text-lg font-medium mb-3">{title}</h3>
      <ul className="space-y-2 text-white/70 text-sm">
        {items.map((x, i) => (
          <li key={i} className="leading-relaxed">• {x}</li>
        ))}
      </ul>
    </div>
  );
}
