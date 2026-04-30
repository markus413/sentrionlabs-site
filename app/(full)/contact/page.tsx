// /contact — locked v1.1 contact page per build-handoff doc Section 4.
// Single email; subject-tag routing; PGP fingerprint placeholder.

export const metadata = {
  title: "Contact — Sentrion Labs",
  description:
    "Email Sentrion Labs directly. Subject-tag routing for security " +
    "disclosures, press, accountability claims.",
};

export default function Contact() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            CONTACT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Contact
          </h1>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">
            Email
          </h2>
          <p className="text-2xl font-bold text-sky-400 mb-3">
            <a href="mailto:sentrionlabs@pm.me" className="hover:underline">
              sentrionlabs@pm.me
            </a>
          </p>
          <p className="text-slate-300 font-sans leading-relaxed mb-10">
            Replies typically within 2 business days.
          </p>
          <p className="text-slate-300 font-sans leading-relaxed mb-6">
            To help route your message, please add a tag to the
            subject line:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-6 text-xs tracking-widest text-slate-500 font-bold">
                    IF YOUR MESSAGE IS ABOUT…
                  </th>
                  <th className="text-left py-3 text-xs tracking-widest text-slate-500 font-bold">
                    USE SUBJECT TAG
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <RouteRow label="A general question or feedback" tag="(no tag needed)" muted />
                <RouteRow label="A security disclosure" tag="[SECURITY]" note="Acknowledgment within 72 hours" />
                <RouteRow label="A press inquiry" tag="[PRESS]" />
                <RouteRow
                  label="A potential commitment violation"
                  tag="[ACCOUNTABILITY]"
                  note="See /commitments"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">
            PGP key
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed mb-3">
            Fingerprint:{" "}
            <code className="text-amber-300 bg-amber-300/10 px-2 py-1 rounded text-sm">
              [XXX — fingerprint coming — XXX]
            </code>
          </p>
          <p className="text-slate-500 italic font-sans mb-6">
            [XXX — Download key (.asc) coming — XXX]
          </p>
          <p className="text-slate-300 font-sans leading-relaxed text-sm">
            Encrypt sensitive disclosures with this key. Verify the
            fingerprint before encrypting.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">
            Mailing address
          </h2>
          <p className="text-slate-500 italic font-sans">
            To be added when relevant for legal correspondence.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-xs text-slate-500 font-sans italic">
            Layout and content will expand as the company grows. For
            now, one inbox handles all incoming mail.
          </p>
        </div>
      </section>
    </>
  );
}

function RouteRow({
  label,
  tag,
  note,
  muted,
}: {
  label: string;
  tag: string;
  note?: string;
  muted?: boolean;
}) {
  return (
    <tr className="border-b border-white/[0.04]">
      <td className="py-4 pr-6 text-slate-300">{label}</td>
      <td className="py-4">
        <code
          className={
            "px-2 py-1 rounded text-sm font-mono " +
            (muted
              ? "text-slate-500"
              : "text-sky-300 bg-sky-300/10")
          }
        >
          {tag}
        </code>
        {note && (
          <span className="ml-3 text-xs text-slate-500 italic">— {note}</span>
        )}
      </td>
    </tr>
  );
}
