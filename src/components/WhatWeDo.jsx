import { HardDrive, FileLock2, Scale } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10">Ce que nous faisons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card icon={<HardDrive className="text-cyan-300" />} title="Collecte & normalisation" desc="Collecte et normalisation d’événements clés (décisions, incidents, near-miss, mises à jour…)." />
          <Card icon={<FileLock2 className="text-cyan-300" />} title="Journalisation probatoire sécurisée" desc="Journaux probatoires minimaux, horodatés, chiffrés, stockés en Europe." />
          <Card icon={<Scale className="text-cyan-300" />} title="Base de faits opposables" desc="Mise à disposition d’une base de faits opposables, conforme aux exigences européennes (AI Act, etc.)." />
        </div>
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 text-white/80">
          Nous opérons uniquement la plomberie technique de traçabilité : pas de télémétrie générale, pas d’analytics marketing. Vous gardez vos données et la relation client ; nous apportons le rail probatoire neutre, multi-acteurs et multi-pays.
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/20">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
