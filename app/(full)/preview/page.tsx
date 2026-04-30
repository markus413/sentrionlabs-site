// /preview/ — sentrionlabs.io home page v1.1 per build-handoff doc
// Section 4. Quieter voice than Sentinel — closer to a company-page
// register than a product-marketing register. This is the page that
// will move to / when launch goes live.

import Link from "next/link";
import Globe from "../../components/Globe";

export const metadata = {
  title: "Sentrion Labs",
  description:
    "Sentrion Labs builds software for people who do the work free " +
    "speech and a free press were written to protect.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg bg-grid border-b border-white/[0.06] overflow-hidden">
        <div className="pointer-events-none hidden md:block absolute right-[-2%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] lg:w-[640px] lg:h-[640px] opacity-95">
          <Globe />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-40">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-sky-400/60" />
            <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
              SENTRION · LABS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] max-w-3xl tracking-tight">
            Software for people who do the work{" "}
            <span className="text-sky-400">
              free speech and a free press
            </span>{" "}
            were written to protect.
          </h1>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            PRODUCTS
          </div>
          <div className="card-accent border border-white/[0.08] rounded p-8 md:p-10 bg-white/[0.02] max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Sentinel OC
            </h2>
            <p className="text-slate-300 font-sans leading-relaxed mb-6">
              An OSINT investigation workspace for journalists,
              analysts, and researchers. Track entities. Run
              transforms. Build cases that hold up. Export defensible
              reports.
            </p>
            <a
              href="https://sentineloc.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm tracking-widest font-bold text-sky-400 hover:text-sky-300 transition-colors"
            >
              [ → sentineloc.io ]
            </a>
          </div>
        </div>
      </section>

      {/* HOW WE OPERATE */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            HOW WE OPERATE
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight max-w-3xl">
            That work depends on tools the people doing it can
            actually trust. Security isn&apos;t a feature for us;
            it&apos;s the foundation.
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed mb-6 max-w-3xl">
            Specific decisions:
          </p>
          <ul className="space-y-3 text-slate-300 font-sans leading-relaxed mb-10 max-w-3xl">
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                Tiered encryption customers choose per investigation,
                with honest documentation of what each tier protects
                against
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>A signed warrant canary, refreshed quarterly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>Public commitments about what we will and will not do</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                Direct contact with the founder by email or
                PGP-encrypted message
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/security/"
              className="px-5 py-2.5 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              → SECURITY
            </Link>
            <Link
              href="/canary/"
              className="px-5 py-2.5 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              → WARRANT CANARY
            </Link>
            <Link
              href="/commitments/"
              className="px-5 py-2.5 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              → COMMITMENTS
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            ABOUT
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
            Sentrion Labs was founded in 2026.
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed max-w-3xl mb-10">
            The company is privately held and self-funded. No outside
            investors. No advertising revenue. No data brokers.
          </p>
          <div className="border border-amber-500/30 bg-amber-500/[0.04] rounded p-6 max-w-3xl">
            <div className="text-xs tracking-[0.4em] text-amber-300 mb-2 font-bold">
              [XXX — COPY COMING — XXX]
            </div>
            <p className="text-sm text-amber-100/80 font-sans">
              Founder bio — Mark to write. Per session decision,
              biographical context (journalism background, US Army
              veteran service) belongs here, not in marketing copy.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            CONTACT
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
            Reach us directly.
          </h2>
          <div className="space-y-3 text-slate-300 font-sans leading-relaxed">
            <p>
              <span className="text-slate-500">Email: </span>
              <a href="mailto:sentrionlabs@pm.me" className="text-sky-400 hover:underline">
                sentrionlabs@pm.me
              </a>
            </p>
            <p>
              <span className="text-slate-500">PGP: </span>
              <span className="text-slate-500 italic">
                [XXX — fingerprint coming — XXX] · [XXX — key file coming — XXX]
              </span>
            </p>
            <p>
              <Link href="/contact/" className="text-sky-400 hover:underline">
                Full contact page →
              </Link>
            </p>
          </div>
          <p className="mt-12 text-xs text-slate-500 font-sans">
            Trademark filed 2026-04-27.
          </p>
        </div>
      </section>
    </>
  );
}
