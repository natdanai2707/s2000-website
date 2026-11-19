// โลโก้ S2000 Steel Fabricated (SVG วาดใหม่จากโลโก้บริษัท) — ไฟล์อยู่ public/images/logo-s2000*.svg
export default function Logo({ light = false, height = 44 }: { light?: boolean; height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={light ? "/images/logo-s2000-white.svg" : "/images/logo-s2000.svg"}
      alt="S2000 Steel Fabricated Co.,Ltd."
      height={height}
      width={Math.round((height * 300) / 112)}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
