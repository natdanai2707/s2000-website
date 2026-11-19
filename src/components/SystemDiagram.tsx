import type { SystemSlug } from "@/lib/systems";

// ภาพ 3D ของระบบโครงสร้าง (เรนเดอร์ด้วย Blender — สคริปต์ tools/render_systems.py) ไฟล์อยู่ public/images/systems/
const LABEL: Record<SystemSlug, string> = {
  truss: "ภาพ 3D โครงถักเหล็ก (Steel Truss) หลังคาช่วงกว้าง",
  peb: "ภาพ 3D โครงอาคาร PEB เสาและคานหน้าตัดเรียว พร้อมแปและค้ำยัน",
  beam: "ภาพ 3D โครงสร้างคานเหล็กรีดร้อน พร้อมชั้นลอย",
  "cellular-beam": "ภาพ 3D คานเหล็กเจาะรู Cellular Beam ที่มีท่องานระบบลอดผ่านช่อง",
};

export default function SystemDiagram({ slug, className, cover = false }: { slug: SystemSlug; className?: string; cover?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/images/systems/${slug}.webp`}
      alt={LABEL[slug]}
      width={1600}
      height={1000}
      loading="lazy"
      className={className}
      style={cover ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" } : { width: "100%", height: "auto", display: "block" }}
    />
  );
}
