// /products — full product family page. Sentinel OC links external
// to the product site; the other two products show "coming soon"
// status without dates (don't promise dates we can't keep).

import Link from "next/link";

export const metadata = {
  title: "Products — Sentrion Labs",
};

export default function Products() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-amber-300 mb-4 font-bold">
            PRODUCT FAMILY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Three tools. One privacy posture.
          </h1>
          <p className="text-slate-400 max-w-2xl font-sans">
            Each product addresses a different surface — investigation
            workspaces, RFID security, local-first AI — but the
            architectural commitment to privacy is consistent across
            them.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ProductRow
            name="Sentinel OC"
            tagline="OSINT workspace for investigative journalists"
            status="Beta — summer 2026"
            statusColor="text-emerald-300 bg-emerald-400/10 border-emerald-400/30"
            href="https://sentineloc.io/"
            external
            body={
              <>
                <p>
                  Investigation workspace built by an investigative
                  journalist. Persistent investigations, transforms
                  (OFAC, GDELT, urlscan, FEC), entity link analysis,
                  story-ready PDF export with source citations.
                </p>
                <p>
                  Tiered Vault encryption: Lite (today, included),
                  Standard (Q4 2026, client-side encryption), Pro (Q1
                  2027, hardware-key auth + threshold sharing).
                </p>
              </>
            }
          />

          <ProductRow
            name="Sentinel Defender"
            tagline="RFID security for high-risk individuals"
            status="Coming soon"
            statusColor="text-slate-400 bg-slate-400/10 border-slate-400/30"
            body={
              <>
                <p>
                  Hardware + software RFID protection for journalists,
                  lawyers, dissidents, and travelers. Threat-model-honest
                  about what RFID skimming actually looks like and what
                  protection is real vs. theater.
                </p>
                <p className="text-slate-500 text-sm">
                  Specs and timeline announced when ready. No vapor
                  promises.
                </p>
              </>
            }
          />

          <ProductRow
            name="Sentinel ELI"
            tagline="Home AI server — local-first inference"
            status="Coming soon"
            statusColor="text-slate-400 bg-slate-400/10 border-slate-400/30"
            body={
              <>
                <p>
                  Local-first AI assistant for the home. Your queries
                  and your context never leave your house. Self-hosted,
                  privacy by architecture rather than policy.
                </p>
                <p className="text-slate-500 text-sm">
                  Specs and timeline announced when ready. No vapor
                  promises.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Common thread.
          </h2>
          <p className="text-slate-400 font-sans">
            We don&apos;t claim &ldquo;military-grade&rdquo; anything.
            We don&apos;t claim &ldquo;unhackable.&rdquo; We tell you
            what each product defeats AND what it doesn&apos;t. The
            <Link href="/canary/" className="text-amber-300 hover:underline">
              {" "}warrant canary
            </Link>
            {" "}is the receipt.
          </p>
        </div>
      </section>
    </>
  );
}

function ProductRow({
  name,
  tagline,
  status,
  statusColor,
  body,
  href,
  external,
}: {
  name: string;
  tagline: string;
  status: string;
  statusColor: string;
  body: React.ReactNode;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="border border-white/[0.06] rounded p-8 bg-white/[0.015] mb-6">
      <div className="flex items-baseline justify-between mb-3 flex-wrap gap-3">
        <div>
          <div className="text-2xl font-bold text-white">{name}</div>
          <div className="text-sm text-slate-400 mt-1 font-sans">{tagline}</div>
        </div>
        <span className={`px-3 py-1 text-[10px] tracking-widest font-bold rounded border ${statusColor}`}>
          {status.toUpperCase()}
        </span>
      </div>
      <div className="space-y-3 text-sm text-slate-300 leading-relaxed font-sans">
        {body}
      </div>
      {href && (
        <div className="mt-6">
          {external ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-xs tracking-widest font-bold rounded bg-amber-300 text-[#06090f] hover:bg-amber-200 transition-colors"
            >
              VISIT SENTINELOC.IO ↗
            </a>
          ) : (
            <Link
              href={href}
              className="inline-block px-5 py-2 text-xs tracking-widest font-bold rounded border border-white/15 text-slate-300 hover:bg-white/5 transition-colors"
            >
              MORE →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
