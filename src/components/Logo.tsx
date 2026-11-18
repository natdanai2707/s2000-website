// โลโก้ตัวอักษร S-2000 (SVG) — TODO: แทนด้วยไฟล์โลโก้จริงเมื่อได้รับ
export default function Logo({ light = false, height = 44 }: { light?: boolean; height?: number }) {
  const main = light ? "#FFFFFF" : "var(--navy)";
  const sub = light ? "rgba(255,255,255,0.75)" : "var(--gray)";
  return (
    <svg
      viewBox="0 0 230 52"
      height={height}
      style={{ width: "auto", display: "block" }}
      role="img"
      aria-label="S-2000 Steel Fabricated"
    >
      <rect x="0" y="4" width="44" height="44" fill="var(--amber)" />
      <path d="M10 16h24v6H16v4h18v16H10v-6h18v-4H10z" fill="#fff" />
      <text x="54" y="31" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="800" fontSize="27" fill={main} letterSpacing="0.5">
        S-2000
      </text>
      <text x="55" y="46" fontFamily="var(--font-inter), Inter, sans-serif" fontWeight="600" fontSize="10.5" fill={sub} letterSpacing="2.2">
        STEEL FABRICATED
      </text>
    </svg>
  );
}
