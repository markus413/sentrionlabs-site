// /contact — minimal contact page. Static-export site can't host a
// form-submit endpoint without third-party tooling, so we surface
// email + Signal channels directly. v2 (post-launch) can swap in
// a Cloudflare Workers form handler if we ever want a form.

export const metadata = {
  title: "Contact — Sentrion Labs",
};

export default function Contact() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            CONTACT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Reach us directly.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            No form. No ticket-tracking system. Email or Signal. We
            answer.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactCard
            label="GENERAL / PRESS"
            primary="hello@sentrionlabs.io"
            secondary="48-hour response weekdays. No mailing list."
            href="mailto:hello@sentrionlabs.io"
          />
          <ContactCard
            label="SECURITY DISCLOSURE"
            primary="security@sentrionlabs.io"
            secondary="PGP key on request. We treat reports seriously."
            href="mailto:security@sentrionlabs.io"
          />
          <ContactCard
            label="PRODUCT — SENTINEL OC"
            primary="support via app"
            secondary="Login at db.sentineloc.io and use the in-app help."
            href="https://db.sentineloc.io/login"
            external
          />
          <ContactCard
            label="NEWSROOM SALES"
            primary="newsroom@sentrionlabs.io"
            secondary="10+ seat licenses, custom Vault tier configurations."
            href="mailto:newsroom@sentrionlabs.io"
          />
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="text-xs tracking-[0.4em] text-slate-500 mb-3 font-bold">
            WHAT NOT TO SEND HERE
          </div>
          <ul className="space-y-3 text-slate-400 font-sans">
            <li>
              ❌ <strong className="text-slate-200">Source tips for stories.</strong>
              {" "}Sentrion Labs does not run journalism. Send tips
              through Signal/SecureDrop/GlobaLeaks to the journalists
              you trust, not to us.
            </li>
            <li>
              ❌ <strong className="text-slate-200">Sensitive case material before signing up.</strong>
              {" "}Wait until you have a Sentinel OC account and use the
              in-app workflow. Don&apos;t paste case content into a
              regular email to us.
            </li>
            <li>
              ❌ <strong className="text-slate-200">Mass marketing pitches.</strong>
              {" "}We don&apos;t reply to those.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  primary,
  secondary,
  href,
  external,
}: {
  label: string;
  primary: string;
  secondary: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block border border-white/[0.06] rounded p-6 bg-white/[0.015] hover:border-sky-400/30 transition-colors"
    >
      <div className="text-xs tracking-[0.3em] text-sky-400/80 font-bold mb-2">
        {label}
      </div>
      <div className="text-base font-bold text-white mb-2">{primary}</div>
      <div className="text-xs text-slate-400 leading-relaxed font-sans">
        {secondary}
      </div>
    </a>
  );
}
