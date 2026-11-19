// โลโก้ S2000 Steel Fabricated (ไฟล์ต้นฉบับของบริษัท) — public/images/logo-s2000*.png
export default function Logo({ light = false, height = 48 }: { light?: boolean; height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/images/logo-s2000-white.png" : "/images/logo-s2000.png"}
      alt="S2000 Steel Fabricated Co.,Ltd."
      height={height}
      width={Math.round((height * 1559) / 527)}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
