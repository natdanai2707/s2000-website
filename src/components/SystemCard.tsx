import Link from "next/link";
import type { StructureSystem } from "@/lib/systems";
import SystemDiagram from "@/components/SystemDiagram";

export default function SystemCard({ system }: { system: StructureSystem }) {
  return (
    <Link href={`/services/${system.slug}`} className="tile">
      <div className="tile-media tile-media--render">
        <SystemDiagram slug={system.slug} cover />
      </div>
      <div className="tile-body">
        <span className="tile-meta">{system.nameEn}</span>
        <h3>{system.nameTh}</h3>
        <p>{system.tagline}</p>
        <span className="text-link">ดูรายละเอียด →</span>
      </div>
    </Link>
  );
}
