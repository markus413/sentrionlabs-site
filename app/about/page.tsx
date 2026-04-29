// /about — placeholder per user direction. Founder bio + company
// story land here. Trademark info noted because v2 doc flagged it.

export const metadata = {
  title: "About — Sentrion Labs",
};

export default function About() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            ABOUT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Privacy as architecture, built by people who&apos;ve felt the gap.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            Sentrion Labs is an independent software company. Trademark
            filed 2026. We build tools where the privacy commitment is
            structural — what the system can&apos;t do, regardless of
            who&apos;s asking.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            COMPANY
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">
            Why Sentrion Labs exists.
          </h2>
          <p className="text-slate-400 leading-relaxed font-sans mb-4">
            [Company story — fleshes out over time. The founder&apos;s
            background as an investigative journalist, the practical
            workflow gap that drove Sentinel OC, the broader principle
            that privacy belongs in the architecture not in the
            settings.]
          </p>
          <p className="text-slate-400 leading-relaxed font-sans">
            [Why an independent company rather than embedding the
            product inside an existing newsroom or research org.]
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            WORKING HERE
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">
            We&apos;re a small team.
          </h2>
          <p className="text-slate-400 leading-relaxed font-sans">
            Sentrion Labs runs lean by design. No VC. No data sale. No
            growth-at-all-costs incentive structure that would compromise
            the privacy posture we&apos;re selling.{" "}
            <a
              href="/contact/"
              className="text-sky-400 hover:underline"
            >
              Contact us
            </a>{" "}
            if you have a question or a product question.
          </p>
        </div>
      </section>
    </>
  );
}
