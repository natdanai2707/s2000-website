import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { getSystem } from "@/lib/systems";
import SystemDiagram from "@/components/SystemDiagram";

// การ์ดผลงาน — ใช้รูป "งานเสร็จ" เป็นปก ถ้ายังไม่มีรูปแสดงภาพลายเส้นแทน
export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.photos.find((p) => p.stage === "after") ?? project.photos[0];
  const system = project.system ? getSystem(project.system) : null;
  const facts = [
    project.span && ["ช่วงกว้าง", project.span],
    project.area && ["พื้นที่", project.area],
    project.steelWeight && ["น้ำหนักเหล็ก", project.steelWeight],
  ].filter(Boolean) as [string, string][];

  return (
    <Link href={`/projects/${project.slug}`} className="product-card project-card">
      <div className="product-card-img project-card-img">
        {cover ? (
          <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        ) : (
          <div className="diagram-fill">
            <SystemDiagram slug={project.system ?? "truss"} />
          </div>
        )}
        <span className="badge-mok">{project.buildingType}</span>
      </div>
      <div className="product-card-body">
        <span className="project-loc">{project.location}{project.year ? ` · ${project.year}` : ""}</span>
        <h3>{project.name}</h3>
        {facts.length > 0 && (
          <dl className="fact-row">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd className="num">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        {system && <p style={{ margin: 0 }}>ระบบ{system.nameTh}</p>}
        <span className="link-more">ดูรายละเอียดโครงการ →</span>
      </div>
    </Link>
  );
}
