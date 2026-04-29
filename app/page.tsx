// Home — corporate brand parent. Minimal, authoritative, less
// marketing-heavy than the product site (per v2 doc tone direction).

import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-grid sweep-line border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-6 font-bold">
            SENTRION LABS · PRIVACY-FIRST SOFTWARE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl tracking-tight">
            Software for people whose work needs to stay private.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-sans">
            Sentrion Labs builds tools where the privacy posture is
            architectural — not a setting, not a marketing claim, not a
            footnote.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products/"
              className="px-6 py-3 text-sm tracking-widest font-bold rounded bg-amber-300 text-[#06090f] hover:bg-amber-200 transition-colors"
            >
              SEE PRODUCTS →
            </Link>
            <Link
              href="/canary/"
              className="px-6 py-3 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-300 hover:bg-white/5 transition-colors"
            >
              WARRANT CANARY
            </Link>
          </div>
        </div>
      </section>

      {/* Product family preview */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            PRODUCTS
          </div>
          <h2 className="text-3xl font-bold text-white mb-12">
            Three products, one principle.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              name="Sentinel OC"
              tagline="OSINT workspace"
              status="Beta — summer 2026"
              desc="Investigation workspace for journalists. Tiered Vault encryption. Story-ready exports."
              href="https://sentineloc.io/"
              external
            />
            <ProductCard
              name="Sentinel Defender"
              tagline="RFID security"
              status="Coming soon"
              desc="Hardware-and-software RFID protection for journalists, lawyers, and travelers. Threat-model-honest."
            />
            <ProductCard
              name="Sentinel ELI"
              tagline="Home AI server"
              status="Coming soon"
              desc="Local-first AI assistant. Your queries never leave your house. Self-hosted, privacy by architecture."
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            PRINCIPLE
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">
            Privacy as architecture, not as a setting.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-sans mb-6">
            Most software treats privacy as a configuration knob. We
            treat it as a structural property — what the system can&apos;t
            do, regardless of who&apos;s asking.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            That posture shows up in different ways across the product
            family — tiered client-side encryption in Sentinel OC,
            local-first inference in Sentinel ELI, hardware separation in
            Defender — but the principle is the same.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            COMMITMENTS
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">
            What you can count on.
          </h2>
          <ul className="space-y-4 text-slate-400 font-sans">
            <li>
              <strong className="text-slate-200">Warrant canary, dated.</strong>
              {" "}<Link href="/canary/" className="text-amber-300 hover:underline">View it →</Link>
            </li>
            <li>
              <strong className="text-slate-200">Honest threat-model claims.</strong>
              {" "}We describe what each product defeats AND what it doesn&apos;t.
            </li>
            <li>
              <strong className="text-slate-200">No data sale, ever.</strong>
              {" "}Your data isn&apos;t our revenue model.
            </li>
            <li>
              <strong className="text-slate-200">Open-source where it matters.</strong>
              {" "}Encryption layers are auditable. Marketing copy is in the open.
            </li>
            <li>
              <strong className="text-slate-200">No bait-and-switch on tiers.</strong>
              {" "}Features in a lower tier stay in that tier when higher ones ship.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  name,
  tagline,
  status,
  desc,
  href,
  external,
}: {
  name: string;
  tagline: string;
  status: string;
  desc: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="border border-white/[0.06] rounded p-6 bg-white/[0.015] h-full hover:border-amber-300/30 transition-colors">
      <div className="text-xs tracking-[0.3em] text-amber-300/80 font-bold mb-2">
        {status.toUpperCase()}
      </div>
      <div className="text-xl font-bold text-white mb-1">{name}</div>
      <div className="text-xs text-slate-500 mb-4 tracking-wide">{tagline}</div>
      <div className="text-sm text-slate-400 leading-relaxed font-sans">
        {desc}
      </div>
      {href && (
        <div className="mt-4 text-xs text-amber-300 tracking-widest font-bold">
          {external ? "VISIT ↗" : "MORE →"}
        </div>
      )}
    </div>
  );
  if (!href) return inner;
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={href}>{inner}</Link>
  );
}
