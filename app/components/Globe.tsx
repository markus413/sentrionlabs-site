// True 3D rotating globe: dots positioned on a sphere using
// translate3d, parent applies rotateY animation with preserve-3d so
// the whole dot field actually rotates in space. Perspective on the
// outer wrapper gives front dots a size advantage over back dots.
//
// Server-component output (no client JS) — the animation is pure CSS.

const RINGS = 20;            // latitude bands
const RADIUS_PX = 250;       // sphere radius (matched in CSS sizing)

type Dot = { x: number; y: number; z: number };

function buildDots(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < RINGS; i++) {
    const phi = (i / (RINGS - 1)) * Math.PI;
    const ringR = Math.sin(phi);
    const y = Math.cos(phi) * RADIUS_PX;
    const dotsAtRing = Math.max(8, Math.round(ringR * 32));
    for (let j = 0; j < dotsAtRing; j++) {
      const theta = (j / dotsAtRing) * 2 * Math.PI;
      const x = ringR * Math.cos(theta) * RADIUS_PX;
      const z = ringR * Math.sin(theta) * RADIUS_PX;
      dots.push({ x, y, z });
    }
  }
  return dots;
}

const DOTS = buildDots();

export default function Globe({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full h-full ${className}`} style={{ perspective: "1600px" }}>
      {/* Pulse rings — extended range (~3x prior radius) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="ring-pulse-1 absolute w-full h-full rounded-full border border-sky-400/50" />
        <div className="ring-pulse-2 absolute w-full h-full rounded-full border border-sky-400/40" />
        <div className="ring-pulse-3 absolute w-full h-full rounded-full border border-sky-400/30" />
      </div>

      {/* Soft glow halo */}
      <div className="absolute inset-0 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.20) 0%, transparent 55%)" }} />

      {/* True-3D dot sphere — wrapper is a zero-sized point at center,
          so each absolute-positioned dot anchors there and translate3d
          places it in 3D space relative to the center. */}
      <div
        className="globe-3d-spin absolute"
        style={{
          top: "50%",
          left: "50%",
          width: 0,
          height: 0,
          transformStyle: "preserve-3d",
        }}
      >
        {DOTS.map((d, i) => (
          <div
            key={i}
            className="globe-dot"
            style={{
              top: 0,
              left: 0,
              transform: `translate3d(${d.x}px, ${d.y}px, ${d.z}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
