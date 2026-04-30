// /commitments — locked v1.1 commitments page per build-handoff doc
// Section 4. Public, hard-to-take-back posture.

export const metadata = {
  title: "Commitments — Sentrion Labs",
  description:
    "Public commitments about how Sentrion Labs operates — what we " +
    "will do, and what we will not. Hold us to them.",
};

const LAST_UPDATED = "2026-04-29";

export default function Commitments() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            COMMITMENTS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Commitments
          </h1>
          <p className="text-slate-300 font-sans leading-relaxed text-lg mb-5">
            Public commitments about how Sentrion Labs operates — what
            we will do, and what we will not.
          </p>
          <p className="text-slate-300 font-sans leading-relaxed">
            Public commitments are easy to make and hard to take back.
            That&apos;s the point. The commitments below hold
            regardless of business pressure, customer requests, or
            acquisition offers. If any of these change, we will say so
            publicly before the change takes effect.
          </p>
        </div>
      </section>

      <Commitment title="We will not sell user data.">
        Customer investigations, notes, queries, and metadata will not
        be sold, licensed, or transferred to advertisers, data
        brokers, or third parties for marketing purposes. Ever.
      </Commitment>

      <Commitment title="We will not run advertising.">
        No banner ads, no sponsored placements, no paid promotion in
        product. The product is paid for by customers, directly. That
        is the only revenue model.
      </Commitment>

      <Commitment title="We will not weaken encryption silently.">
        If a product update materially changes the encryption model,
        we will document the change publicly before it ships.
        Customers will have time to read it before it takes effect.
      </Commitment>

      <Commitment title="We will not hide compelled disclosure.">
        If we are legally compelled to provide customer data, we will
        note this in our transparency reporting to the maximum extent
        the law allows. The warrant canary is the floor, not the
        ceiling.
      </Commitment>

      <Commitment title="We will not pivot away from this market.">
        Sentinel is built for people running investigations. We will
        not retool the product for a different market segment that
        displaces the one we serve. New products, when they exist,
        will be additive — on separate domains, not replacements.
      </Commitment>

      <Commitment title="We will not accept acquisition that violates the above.">
        The hardest commitment to make and the most important. If
        Sentrion Labs is acquired, the acquirer will be bound by these
        commitments as a condition of sale. If a deal cannot be
        structured that way, the deal will not happen.
      </Commitment>

      <Commitment title="What we reserve the right to do." muted>
        We will change pricing. We will change features. We will
        deprecate things that don&apos;t work. We will release new
        products on new domains. We will be wrong about technical
        decisions and revise them. None of those are violations of
        the above.
      </Commitment>

      <Commitment title="How to hold us to this.">
        If you believe Sentrion Labs has violated any of the above,
        write to{" "}
        <a href="mailto:sentrionlabs@pm.me" className="text-sky-400 hover:underline">
          sentrionlabs@pm.me
        </a>{" "}
        with{" "}
        <code className="text-amber-300 bg-amber-300/10 px-1.5 py-0.5 rounded text-sm">
          [ACCOUNTABILITY]
        </code>{" "}
        in the subject line. We will respond publicly to credible
        claims within 30 days.
      </Commitment>

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

function Commitment({
  title,
  children,
  muted,
}: {
  title: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section className="border-b border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2
          className={
            "text-xl md:text-2xl font-bold mb-4 tracking-tight " +
            (muted ? "text-slate-300" : "text-white")
          }
        >
          {title}
        </h2>
        <p
          className={
            "font-sans leading-relaxed " +
            (muted ? "text-slate-400" : "text-slate-300")
          }
        >
          {children}
        </p>
      </div>
    </section>
  );
}
