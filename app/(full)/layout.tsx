// Layout for the full marketing site (preview + about/canary/contact/products).
// Coming-soon root uses the bare app/layout.tsx instead.

import Link from "next/link";

export default function FullLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-white/[0.06] bg-[#06090f]/95 sticky top-0 z-40 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
        <Link href="/preview/" className="flex items-center gap-3 group">
          <div className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(252,211,77,0.6)]" />
          <span className="text-sm tracking-[0.3em] font-bold text-white">
            SENTRION<span className="text-sky-400">·</span>LABS
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-xs tracking-widest text-slate-400">
          <Link href="/security/" className="hover:text-white transition-colors">
            SECURITY
          </Link>
          <Link href="/canary/" className="hover:text-white transition-colors">
            CANARY
          </Link>
          <Link href="/commitments/" className="hover:text-white transition-colors">
            COMMITMENTS
          </Link>
          <Link href="/contact/" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        <div>
          <div className="tracking-[0.3em] font-bold text-white mb-3">
            SENTRION<span className="text-sky-400">·</span>LABS
          </div>
          <p className="text-slate-500 leading-relaxed">
            Privacy-first software. Trademark filed 2026.
          </p>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">PRODUCTS</div>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="https://sentineloc.io/" className="hover:text-white">
                Sentinel OC ↗
              </a>
            </li>
            <li>Sentinel Defender (soon)</li>
            <li>Sentinel ELI (soon)</li>
          </ul>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">COMPANY</div>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="/security/" className="hover:text-white">Security</Link>
            </li>
            <li>
              <Link href="/canary/" className="hover:text-white">Warrant canary</Link>
            </li>
            <li>
              <Link href="/commitments/" className="hover:text-white">Commitments</Link>
            </li>
            <li>
              <Link href="/contact/" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/legal/" className="hover:text-white">Legal</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="tracking-widest text-slate-500 mb-3">EXTERNAL</div>
          <ul className="space-y-2 text-slate-400">
            <li>
              <a href="https://sentineloc.io/" className="hover:text-white">
                sentineloc.io ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.04] py-5 text-center text-[10px] tracking-[0.2em] text-slate-600">
        SENTRION LABS · KEEP PRIVATE
      </div>
    </footer>
  );
}
