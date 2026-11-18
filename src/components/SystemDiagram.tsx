import type { SystemSlug } from "@/lib/systems";

// ภาพลายเส้นอธิบายระบบโครงสร้าง (SVG ล้วน ไม่ต้องโหลดรูป)
// ใช้เป็นภาพประกอบหน้าระบบ การ์ด และปกบทความ จนกว่าจะมีรูปผลงานจริง

const W = 480;
const H = 260;
const GROUND = 220;

function Ground() {
  return (
    <g>
      <line x1={20} y1={GROUND} x2={W - 20} y2={GROUND} stroke="currentColor" strokeOpacity={0.35} strokeWidth={2} />
      {Array.from({ length: 22 }).map((_, i) => (
        <line
          key={i}
          x1={30 + i * 20}
          y1={GROUND}
          x2={22 + i * 20}
          y2={GROUND + 8}
          stroke="currentColor"
          strokeOpacity={0.25}
          strokeWidth={1.5}
        />
      ))}
    </g>
  );
}

function Truss() {
  const L = 60;
  const R = W - 60;
  const top = 70;
  const eave = 120;
  const bottom = 128;
  const n = 10;
  const mid = (L + R) / 2;
  const topY = (x: number) => (x <= mid ? eave - ((x - L) / (mid - L)) * (eave - top) : top + ((x - mid) / (R - mid)) * (eave - top));
  const xs = Array.from({ length: n + 1 }, (_, i) => L + ((R - L) * i) / n);
  return (
    <g fill="none" stroke="currentColor" strokeLinejoin="round">
      <line x1={L} y1={bottom} x2={L} y2={GROUND} strokeWidth={6} />
      <line x1={R} y1={bottom} x2={R} y2={GROUND} strokeWidth={6} />
      <polyline points={xs.map((x) => `${x},${topY(x)}`).join(" ")} strokeWidth={4} />
      <line x1={L} y1={bottom} x2={R} y2={bottom} strokeWidth={4} />
      {xs.map((x, i) => (
        <g key={i} strokeWidth={2} strokeOpacity={0.8}>
          <line x1={x} y1={topY(x)} x2={x} y2={bottom} />
          {i < n && <line x1={x} y1={i < n / 2 ? bottom : topY(x)} x2={xs[i + 1]} y2={i < n / 2 ? topY(xs[i + 1]) : bottom} />}
        </g>
      ))}
    </g>
  );
}

function Peb() {
  const L = 60;
  const R = W - 60;
  const mid = W / 2;
  // เสาเรียว: โคนแคบ หัวเสากว้าง / คานเรียว: ช่วงหัวเสาลึก กลางช่วงตื้น
  return (
    <g fill="currentColor" fillOpacity={0.14} stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round">
      <polygon points={`${L - 5},${GROUND} ${L + 5},${GROUND} ${L + 22},110 ${L - 5},110`} />
      <polygon points={`${R + 5},${GROUND} ${R - 5},${GROUND} ${R - 22},110 ${R + 5},110`} />
      <polygon points={`${L - 5},110 ${L - 5},86 ${mid},58 ${mid},70 ${L + 22},110`} />
      <polygon points={`${R + 5},110 ${R + 5},86 ${mid},58 ${mid},70 ${R - 22},110`} />
      <line x1={mid} y1={58} x2={mid} y2={70} strokeWidth={3} />
    </g>
  );
}

function Beam() {
  const L = 110;
  const R = W - 110;
  return (
    <g fill="currentColor" fillOpacity={0.14} stroke="currentColor" strokeWidth={2.5}>
      <rect x={L - 8} y={80} width={16} height={GROUND - 80} />
      <rect x={R - 8} y={80} width={16} height={GROUND - 80} />
      <polygon points={`${L - 8},80 ${W / 2},56 ${R + 8},80 ${R + 8},94 ${W / 2},70 ${L - 8},94`} />
      {/* ชั้นลอย */}
      <rect x={L + 8} y={150} width={(R - L) * 0.45} height={12} />
      <rect x={L + 8 + (R - L) * 0.45 - 6} y={162} width={10} height={GROUND - 162} />
    </g>
  );
}

function Cellular() {
  const L = 40;
  const R = W - 40;
  const y = 92;
  const d = 64;
  const n = 11;
  const step = (R - L) / n;
  return (
    <g stroke="currentColor">
      <rect x={L} y={y} width={R - L} height={d} fill="currentColor" fillOpacity={0.14} strokeWidth={2.5} />
      <line x1={L} y1={y + 5} x2={R} y2={y + 5} strokeWidth={2} strokeOpacity={0.6} />
      <line x1={L} y1={y + d - 5} x2={R} y2={y + d - 5} strokeWidth={2} strokeOpacity={0.6} />
      {Array.from({ length: n }).map((_, i) => (
        <circle key={i} cx={L + step * (i + 0.5)} cy={y + d / 2} r={d * 0.33} fill="var(--paper, #fff)" strokeWidth={2} />
      ))}
      <rect x={L} y={y + d} width={14} height={GROUND - y - d} fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
      <rect x={R - 14} y={y + d} width={14} height={GROUND - y - d} fill="currentColor" fillOpacity={0.3} strokeWidth={2} />
      {/* ท่องานระบบลอดช่อง */}
      <line x1={L - 20} y1={y + d / 2} x2={R + 20} y2={y + d / 2} strokeWidth={6} strokeOpacity={0.35} strokeLinecap="round" />
    </g>
  );
}

const LABEL: Record<SystemSlug, string> = {
  truss: "ภาพประกอบโครงถักเหล็ก (Steel Truss) หลังคาช่วงกว้าง",
  peb: "ภาพประกอบโครงอาคาร PEB เสาและคานหน้าตัดเรียว",
  beam: "ภาพประกอบโครงสร้างคานเหล็กรีดร้อน พร้อมชั้นลอย",
  "cellular-beam": "ภาพประกอบคานเหล็กเจาะรู Cellular Beam ที่มีท่องานระบบลอดผ่าน",
};

export default function SystemDiagram({ slug, className }: { slug: SystemSlug; className?: string }) {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role="img" aria-label={LABEL[slug]} style={{ width: "100%", height: "auto", display: "block" }}>
      <Ground />
      {slug === "truss" && <Truss />}
      {slug === "peb" && <Peb />}
      {slug === "beam" && <Beam />}
      {slug === "cellular-beam" && <Cellular />}
    </svg>
  );
}
