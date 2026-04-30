// /security — sentrionlabs.io security posture per build-handoff doc
// Section 4. Locked v1.1 copy.

import Link from "next/link";

export const metadata = {
  title: "Security — Sentrion Labs",
  description:
    "Sentrion Labs security posture, architecture, vulnerability " +
    "disclosure process, and where we're not there yet.",
};

const LAST_UPDATED = "2026-04-29";

export default function Security() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            SECURITY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Posture
          </h1>
          <p className="text-slate-300 font-sans leading-relaxed text-lg">
            Sentrion Labs operates under the principle that
            customers&apos; investigations are sensitive even when
            they&apos;re routine. Our security architecture reflects
            that.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Specific commitments
          </h2>
          <ul className="space-y-3 text-slate-300 font-sans leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                Customer data is encrypted at rest in all deployments
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                Customers choose per-investigation encryption tiers;
                documentation linked below
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                Authentication, key management, and customer data run
                as separated processes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                Backup keys are stored offline, never co-located with
                primary infrastructure
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                We publish a signed warrant canary, refreshed quarterly
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1.5">·</span>
              <span>
                We will not ship a product update that materially
                weakens encryption without disclosing it
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Architecture
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed mb-5">
            Detailed security architecture for Sentinel OC is published
            at:
          </p>
          <a
            href="https://sentineloc.io/security/"
            className="inline-block text-sm tracking-widest font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            [ → sentineloc.io/security ]
          </a>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Reporting a vulnerability
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed mb-5">
            Email security disclosures to{" "}
            <a href="mailto:sentrionlabs@pm.me" className="text-sky-400 hover:underline">
              sentrionlabs@pm.me
            </a>{" "}
            with{" "}
            <code className="text-amber-300 bg-amber-300/10 px-1.5 py-0.5 rounded text-sm">
              [SECURITY]
            </code>{" "}
            in the subject line, PGP-encrypted with the key linked
            below. Coordinated disclosure preferred. We aim to
            acknowledge reports within 72 hours.
          </p>
          <Link
            href="/contact/"
            className="inline-block text-sm tracking-widest font-bold text-sky-400 hover:text-sky-300 transition-colors"
          >
            [ → PGP key ]
          </Link>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Where we&apos;re not there yet
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed">
            We have not been audited by an external firm. We have not
            published a transparency report. Both are on our roadmap.
            We will not claim either before they are real.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs text-slate-500 font-sans italic">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>
    </>
  );
}
