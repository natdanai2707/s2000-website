import Link from "next/link";
import type { StructureSystem } from "@/lib/systems";
import SystemDiagram from "@/components/SystemDiagram";

export default function SystemCard({ system }: { system: StructureSystem }) {
  return (
    <Link href={`/services/${system.slug}`} className="product-card system-card">
      <div className="system-card-diagram">
        <SystemDiagram slug={system.slug} />
      </div>
      <div className="product-card-body">
        <span className="project-loc">{system.nameEn}</span>
        <h3>{system.nameTh}</h3>
        <p>{system.short}</p>
        <p className="system-span">
          ช่วงกว้างที่เหมาะ: <strong>{system.specs[0][1]}</strong>
        </p>
        <span className="link-more">ดูรายละเอียดระบบ →</span>
      </div>
    </Link>
  );
}
