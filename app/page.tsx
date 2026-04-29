// Coming-soon root. No header, no footer, no links. The full design
// lives at /preview/ and the rest of the site (products, about,
// canary, contact) is preserved at its original URLs for reference.

import Globe from "./components/Globe";

export default function ComingSoon() {
  return (
    <section className="relative flex-1 flex items-center justify-center hero-bg bg-grid overflow-hidden">
      {/* Same rotating globe from the previous home, centered */}
      <div className="pointer-events-none hidden md:block absolute right-[-2%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[680px] lg:h-[680px] opacity-95">
        <Globe />
      </div>

      {/* Falling data streams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="stream" style={{ left: "72%", animationDuration: "5s", animationDelay: "0s" }} />
        <span className="stream" style={{ left: "78%", animationDuration: "7s", animationDelay: "1.4s" }} />
        <span className="stream" style={{ left: "85%", animationDuration: "6s", animationDelay: "2.6s" }} />
        <span className="stream" style={{ left: "91%", animationDuration: "8s", animationDelay: "0.8s" }} />
        <span className="stream" style={{ left: "96%", animationDuration: "5.5s", animationDelay: "3.2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-sky-400/60" />
          <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
            SENTRION · LABS
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl tracking-tight">
          Coming <span className="text-sky-400">soon.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
          Privacy-first software for people whose work needs to stay
          private.
        </p>
        <div className="mt-12 text-[10px] tracking-[0.4em] text-slate-500 font-bold">
          2026
        </div>
      </div>
    </section>
  );
}
