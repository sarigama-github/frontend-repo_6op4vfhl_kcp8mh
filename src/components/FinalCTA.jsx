export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-24" style={{ background: "#0B1630" }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-6">Construisons ensemble le rail probatoire européen.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-cyan-400/90 hover:bg-cyan-400 text-[#0B1630] px-6 py-3 font-medium transition">Lancez un POC AI Act</a>
            <a href="#" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/5 px-6 py-3 font-medium transition">Parler à un expert</a>
          </div>
        </div>
      </div>
    </section>
  );
}
