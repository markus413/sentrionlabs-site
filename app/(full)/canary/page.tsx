// /canary — warrant canary. Templated for the v1 launch. Date and
// statement get updated quarterly via commit. If this page disappears
// or the date stops updating, the canary has triggered.

export const metadata = {
  title: "Warrant canary — Sentrion Labs",
  // Discourage indexing of past canary pages (only the current matters).
  robots: { index: true, follow: true },
};

// Update quarterly. Format: ISO 8601 date the canary was last
// affirmed by the company. Should be the most recent commit date.
const CANARY_AS_OF = "2026-04-28";
const NEXT_REFRESH_BY = "2026-07-31";

export default function Canary() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            WARRANT CANARY
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            As of {CANARY_AS_OF}, Sentrion Labs has received zero
            government orders, warrants, subpoenas, or gag orders
            affecting our products or our users.
          </h1>
          <p className="text-slate-400 leading-relaxed font-sans">
            We commit to refreshing this statement on or before{" "}
            <span className="text-sky-400 font-bold">{NEXT_REFRESH_BY}</span>.
            {" "}If this page disappears, if the date stops updating, or
            if the language of this statement changes in any
            substantive way, the canary has triggered. Customers should
            interpret that as a signal that something has changed.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            HOW TO READ THIS
          </div>
          <ul className="space-y-3 text-slate-400 font-sans">
            <li>
              <strong className="text-slate-200">Page exists, date current:</strong>
              {" "}we have received no compelled disclosure orders.
            </li>
            <li>
              <strong className="text-slate-200">Page exists, date stale:</strong>
              {" "}assume the canary has triggered. We may be legally
              prohibited from saying so directly.
            </li>
            <li>
              <strong className="text-slate-200">Page is gone:</strong>
              {" "}same — assume the canary has triggered.
            </li>
            <li>
              <strong className="text-slate-200">Statement language changed:</strong>
              {" "}read carefully. Subtle wording changes carry meaning.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            WHY WE PUBLISH ONE
          </div>
          <p className="text-slate-400 leading-relaxed font-sans mb-4">
            A warrant canary is a passive signal. It costs nothing to
            maintain when nothing has happened, and it cannot easily be
            faked. We publish one because customers — especially those
            using Vault Standard or Vault Pro tiers of Sentinel OC —
            need a way to evaluate compelled-disclosure risk without
            relying on us to volunteer information we may be prohibited
            from disclosing.
          </p>
          <p className="text-slate-400 leading-relaxed font-sans">
            Customer&apos;s rule of thumb: trust the canary, not the
            press release.
          </p>
        </div>
      </section>
    </>
  );
}
