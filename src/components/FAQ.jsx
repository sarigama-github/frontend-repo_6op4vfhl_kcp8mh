import { useState } from "react";

export default function FAQ() {
  const groups = [
    {
      title: "Constructeur / OEM",
      items: [
        { q: "Journalisation", a: "Nous collectons uniquement des événements probatoires minimaux liés aux décisions, incidents, near-miss et mises à jour, avec horodatage et empreintes cryptographiques." },
        { q: "IP", a: "La propriété intellectuelle est préservée : schémas ouverts, champs minimaux et chiffrés, aucune utilisation hors périmètre contractuel." },
        { q: "Intégration", a: "Connecteurs et APIs sur mesure selon vos architectures. Support des bus d'événements et des formats industriels." },
        { q: "Scoring", a: "Aucun scoring OEM ni benchmarking public : nous opérons uniquement le rail probatoire neutre." },
        { q: "Responsabilités", a: "Nous ne tranchons jamais les sinistres. Nous fournissons des faits établis, opposables et datés." },
        { q: "Cloud", a: "Stockage en cloud européen, souverain, avec redondance régionale et journalisation immuable." },
        { q: "Normes", a: "Alignement avec les exigences européennes (AI Act, etc.) et interopérabilité avec normes du secteur." },
        { q: "Timing", a: "POCs rapides en quelques semaines pour anticiper l'entrée en vigueur et réduire les frictions." },
        { q: "Intérêt interne", a: "Réduction du risque juridique et réputationnel, documentation accélérée, une seule intégration réutilisable." },
        { q: "Friction exploitants", a: "Aucune télémétrie générale ni analytics marketing. Seuls les journaux probatoires minimaux sont collectés." },
      ],
    },
    {
      title: "Assureur / réassureur",
      items: [
        { q: "Tarification", a: "Accès à des données normalisées pour mieux modéliser et tarifer le risque autonome." },
        { q: "Sinistres", a: "Packs de preuves standardisés pour accélérer les indemnisations et clarifier les responsabilités." },
        { q: "Dépendance", a: "Formats ouverts, export et réversibilité garantis : zéro lock-in." },
        { q: "Solution publique", a: "Infrastructure neutre, multi-acteurs et multi-pays, opérée comme tiers de confiance." },
        { q: "Données perso", a: "Minimisation stricte des données personnelles et chiffrement systématique." },
        { q: "Responsabilité", a: "Nous ne prenons aucune position : nous fournissons des faits opposables et traçables." },
        { q: "Normes", a: "Conformité aux exigences européennes et compatibilité avec les pratiques OEM." },
        { q: "Image", a: "Approche institutionnelle, sérieuse et souveraine, sans exploitation des données." },
      ],
    },
    {
      title: "État / régulateur / autorité",
      items: [
        { q: "Rôle régalien", a: "Le rail probatoire réduit la charge publique et facilite contrôles, enquêtes et surveillance post-marché." },
        { q: "SPOF", a: "Architecture résiliente, redondante et multi-régions pour éviter tout point de défaillance unique." },
        { q: "Gatekeeper", a: "Aucun rôle de gatekeeper économique : nous n'imposons ni scoring, ni conditions commerciales aux acteurs." },
        { q: "Multi-juridictions", a: "Règles paramétrables par pays, hébergement souverain, et traçabilité interopérable multi-pays." },
        { q: "GAIA-X", a: "Alignement possible avec des initiatives européennes et exigences de souveraineté." },
        { q: "Gouvernance", a: "Modèles de gouvernance transparents et auditables, avec représentation des parties prenantes." },
        { q: "Timing", a: "POCs prêts avant l'entrée en vigueur afin de sécuriser les déploiements d'autonomie." },
      ],
    },
  ];

  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-lg font-medium mb-4">{g.title}</h3>
              <div className="divide-y divide-white/10">
                {g.items.map((item, j) => (
                  <Accordion key={j} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-3">
      <button onClick={() => setOpen(!open)} className="w-full text-left text-white flex items-center justify-between">
        <span className="text-sm font-medium">{q}</span>
        <span className="text-cyan-300">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="mt-2 text-white/70 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}
