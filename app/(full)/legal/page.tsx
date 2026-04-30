// /legal — stub directory per build-handoff doc Section 4. Per-product
// legal docs live on each product's own domain. This page is the
// company-level pointer.

export const metadata = {
  title: "Legal — Sentrion Labs",
  description:
    "Legal directory. Per-product Terms of Service, Privacy Policy, " +
    "and Acceptable Use Policy live on each product's own domain.",
};

export default function Legal() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            LEGAL
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Legal
          </h1>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Sentinel OC
          </h2>
          <ul className="space-y-3 text-slate-300 font-sans">
            <li>
              <a href="https://sentineloc.io/terms/" className="text-sky-400 hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="https://sentineloc.io/privacy/" className="text-sky-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://sentineloc.io/aup/" className="text-sky-400 hover:underline">
                Acceptable Use Policy
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Sentrion Labs (company)
          </h2>
          <ul className="space-y-3 text-slate-300 font-sans leading-relaxed">
            <li>
              <span className="text-slate-500">Trademark: </span>
              Sentrion Labs, filed 2026-04-27
            </li>
            <li>
              <span className="text-slate-500">Entity: </span>
              Privately held, US-based — full filing details on
              request via{" "}
              <a href="mailto:sentrionlabs@pm.me" className="text-sky-400 hover:underline">
                sentrionlabs@pm.me
              </a>{" "}
              with{" "}
              <code className="text-amber-300 bg-amber-300/10 px-1.5 py-0.5 rounded text-xs">
                [LEGAL]
              </code>{" "}
              in the subject line
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs text-slate-500 font-sans italic">
            Per-product legal documents are maintained on each
            product&apos;s own domain. Future products will follow the
            same pattern.
          </p>
        </div>
      </section>
    </>
  );
}
