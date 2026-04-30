// /canary — warrant canary, locked template per build-handoff doc
// Section 4. Quarterly refresh. Build note: do not publish without
// real PGP signature — placeholders remain visible until generation.

export const metadata = {
  title: "Warrant Canary — Sentrion Labs",
  description:
    "Quarterly statement that Sentrion Labs has not received NSLs, " +
    "FISA orders, gag orders, or compulsion to weaken products. " +
    "Signed with the Sentrion Labs PGP key.",
  robots: { index: true, follow: true },
};

// Placeholders until first signed canary lands.
const QUARTER_LABEL = "[XXX — quarter year coming — XXX]";
const STATEMENT_DATE = "[XXX — date coming — XXX]";

export default function Canary() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            WARRANT CANARY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Statement, refreshed quarterly.
          </h1>
          <p className="text-slate-300 font-sans leading-relaxed">
            Signed with the Sentrion Labs PGP key.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
            Statement, {QUARTER_LABEL}
          </h2>
          <p className="text-slate-400 font-sans mb-8 text-sm">
            As of <span className="text-amber-300">{STATEMENT_DATE}</span>:
          </p>
          <ol className="space-y-4 text-slate-300 font-sans leading-relaxed list-decimal list-inside marker:text-sky-400 marker:font-bold">
            <li className="pl-2">
              Sentrion Labs has not received any National Security
              Letters.
            </li>
            <li className="pl-2">
              Sentrion Labs has not received any FISA court orders.
            </li>
            <li className="pl-2">
              Sentrion Labs has not received any gag orders.
            </li>
            <li className="pl-2">
              Sentrion Labs has not been compelled to weaken or
              backdoor any product.
            </li>
            <li className="pl-2">
              Sentrion Labs has not been compelled to disclose user
              data outside of standard, public-record legal process.
            </li>
          </ol>
          <p className="mt-10 text-slate-300 font-sans leading-relaxed">
            If any of the above ceases to be true, this canary will
            not be refreshed. Customers should treat the absence of a
            current statement as itself information.
          </p>
          <div className="mt-12 border border-amber-500/30 bg-amber-500/[0.04] rounded p-6">
            <div className="text-xs tracking-[0.4em] text-amber-300 mb-2 font-bold">
              [XXX — PGP SIGNATURE BLOCK COMING — XXX]
            </div>
            <p className="text-sm text-amber-100/70 font-sans">
              Per build-handoff doc: do not publish this page without
              a real PGP signature. A warrant canary without a
              signature is theatre.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Previous canaries
          </h2>
          <p className="text-slate-500 font-sans italic">
            Quarterly archive will appear here as canaries are issued.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            How to verify this canary
          </h2>
          <ol className="space-y-3 text-slate-300 font-sans leading-relaxed list-decimal list-inside marker:text-sky-400 marker:font-bold">
            <li className="pl-2">
              Download the Sentrion Labs PGP public key:{" "}
              <span className="text-amber-300 italic">
                [XXX — key file coming — XXX]
              </span>
            </li>
            <li className="pl-2">
              Verify the key fingerprint matches:{" "}
              <code className="text-amber-300 bg-amber-300/10 px-1.5 py-0.5 rounded text-sm">
                [XXX — fingerprint coming — XXX]
              </code>
            </li>
            <li className="pl-2">
              Verify the canary signature against the current
              statement.
            </li>
          </ol>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
            Why a canary
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed mb-5">
            US law allows certain government orders to come with gag
            provisions — the recipient cannot disclose that the order
            exists. A canary works around this by publishing a
            statement that <em>no such order has been received</em>.
            If that statement disappears, customers can infer
            something changed, even if we cannot say what.
          </p>
          <p className="text-slate-300 font-sans leading-relaxed">
            A canary is not a guarantee. It&apos;s a structural
            commitment that the company is willing to be silent rather
            than lie.
          </p>
        </div>
      </section>
    </>
  );
}
