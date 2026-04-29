import Link from "next/link";
import Globe from "./components/Globe";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative hero-bg bg-grid border-b border-white/[0.06] overflow-hidden">
        {/* Globe — positioned right side, mostly visible. Hidden on
            mobile so it doesn't compete with the headline. */}
        <div className="pointer-events-none hidden md:block absolute right-[-2%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[680px] lg:h-[680px] opacity-95">
          <Globe />
        </div>

        {/* Falling data streams — right edge, subtle */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="stream" style={{ left: "72%", animationDuration: "5s", animationDelay: "0s" }} />
          <span className="stream" style={{ left: "78%", animationDuration: "7s", animationDelay: "1.4s" }} />
          <span className="stream" style={{ left: "85%", animationDuration: "6s", animationDelay: "2.6s" }} />
          <span className="stream" style={{ left: "91%", animationDuration: "8s", animationDelay: "0.8s" }} />
          <span className="stream" style={{ left: "96%", animationDuration: "5.5s", animationDelay: "3.2s" }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-sky-400/60" />
            <span className="text-xs tracking-[0.4em] text-sky-400 font-bold">
              SENTRION LABS · PRIVACY-FIRST SOFTWARE
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] max-w-3xl tracking-tight">
            Software for people whose work needs to{" "}
            <span className="text-sky-400">stay private.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans">
            Sentrion Labs builds tools where the privacy posture is
            architectural — not a setting, not a marketing claim, not a
            footnote.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products/"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-500 text-white hover:bg-sky-400 transition-colors shadow-[0_0_40px_-10px_rgba(56,189,248,0.7)]"
            >
              SEE PRODUCTS →
            </Link>
            <Link
              href="/canary/"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-200 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              WARRANT CANARY
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-b border-white/[0.06] bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="3" label="Products in family" />
          <Stat value="1" label="Operating principle" />
          <Stat value="0" label="Warrants received" sub="As of 2026-04-28" />
          <Stat value="100%" label="Architectural privacy" />
        </div>
      </section>

      {/* PRODUCT FAMILY */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            PRODUCTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Three products, one principle.
          </h2>
          <p className="text-slate-400 font-sans max-w-2xl mb-12">
            Different surfaces, same architectural commitment. Each
            product enforces privacy at the structural level — not as
            an opt-in setting.
          </p>
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

      {/* CAPABILITIES GRID */}
      <section className="border-b border-white/[0.06] bg-grid">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What &ldquo;privacy as architecture&rdquo; actually means.
          </h2>
          <p className="text-slate-400 font-sans max-w-2xl mb-12">
            Six structural commitments that show up across every
            product we ship — not as features, but as the substrate
            they&apos;re built on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Capability
              icon="LOCK"
              title="Client-side encryption"
              body="Sensitive data is encrypted on the device before it touches a server. We can&apos;t read it because we don&apos;t hold the keys."
            />
            <Capability
              icon="HOUSE"
              title="Local-first inference"
              body="AI workloads run on hardware you own. Queries don&apos;t leave the building unless you explicitly send them out."
            />
            <Capability
              icon="EYE"
              title="Audit trails by default"
              body="Every action that touches case data is timestamped and signed. Defensible chain-of-custody, not an upsell."
            />
            <Capability
              icon="CODE"
              title="Open-source where it matters"
              body="Encryption layers and security-critical paths are auditable. Marketing copy is in the open."
            />
            <Capability
              icon="SHIELD"
              title="Honest threat models"
              body="We describe what each product defeats AND what it doesn&apos;t. No marketing-grade crypto claims."
            />
            <Capability
              icon="CHIP"
              title="Hardware separation"
              body="Where the threat model demands it (Defender), we ship physical isolation — not just software claims."
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            PRINCIPLE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Privacy as architecture, not as a setting.
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed font-sans mb-6">
            Most software treats privacy as a configuration knob. We
            treat it as a structural property — what the system
            can&apos;t do, regardless of who&apos;s asking.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed font-sans">
            That posture shows up in different ways across the product
            family — tiered client-side encryption in Sentinel OC,
            local-first inference in Sentinel ELI, hardware separation
            in Defender — but the principle is the same.
          </p>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-3 font-bold">
            COMMITMENTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What you can count on.
          </h2>
          <ul className="space-y-4 text-slate-400 font-sans">
            <li>
              <strong className="text-slate-200">Warrant canary, dated.</strong>
              {" "}<Link href="/canary/" className="text-sky-400 hover:underline">View it →</Link>
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

      {/* CTA BAND */}
      <section className="cta-band border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="text-xs tracking-[0.4em] text-sky-400 mb-4 font-bold">
            START WITH THE PRODUCT THAT&apos;S LIVE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Sentinel OC is in beta now.
          </h2>
          <p className="text-lg text-slate-400 font-sans max-w-2xl mx-auto mb-10">
            The OSINT workspace built by an investigative journalist
            for the people who do this for a living. Defender and ELI
            follow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://sentineloc.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded bg-sky-400 text-[#06090f] hover:bg-sky-300 transition-colors shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)]"
            >
              VISIT SENTINEL OC ↗
            </a>
            <Link
              href="/contact/"
              className="px-7 py-3.5 text-sm tracking-widest font-bold rounded border border-white/15 text-slate-300 hover:bg-white/5 hover:border-sky-400/40 transition-colors"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-sky-400 tracking-tight">
        {value}
      </div>
      <div className="text-xs tracking-[0.2em] text-slate-300 font-bold mt-2 uppercase">
        {label}
      </div>
      {sub && <div className="text-[10px] text-slate-500 mt-1 font-sans">{sub}</div>}
    </div>
  );
}

function Capability({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="card-accent border border-white/[0.06] rounded p-6 bg-white/[0.015] transition-shadow">
      <div className="hex-badge w-12 h-12 bg-sky-400/10 border border-sky-400/30 flex items-center justify-center mb-5">
        <span className="text-[9px] tracking-[0.15em] font-bold text-sky-400">
          {icon}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed font-sans">{body}</p>
    </div>
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
    <div className="card-accent border border-white/[0.06] rounded p-7 bg-white/[0.015] h-full transition-shadow">
      <div className="flex items-start justify-between mb-5">
        <div className="hex-badge w-10 h-10 bg-sky-400/10 border border-sky-400/30 flex items-center justify-center">
          <span className="text-[9px] tracking-[0.1em] font-bold text-sky-400">
            {name.split(" ").pop()?.slice(0, 3).toUpperCase()}
          </span>
        </div>
        <div className="text-[10px] tracking-[0.3em] text-sky-400/80 font-bold">
          {status.toUpperCase()}
        </div>
      </div>
      <div className="text-xl font-bold text-white mb-1">{name}</div>
      <div className="text-xs text-slate-500 mb-4 tracking-wide">{tagline}</div>
      <div className="text-sm text-slate-400 leading-relaxed font-sans">
        {desc}
      </div>
      {href && (
        <div className="mt-5 pt-4 border-t border-white/[0.06] text-xs text-sky-400 tracking-widest font-bold">
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
