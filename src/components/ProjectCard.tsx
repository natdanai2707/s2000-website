import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import SystemDiagram from "@/components/SystemDiagram";

// การ์ดผลงานแบบภาพเต็ม คำบรรยายทับด้านล่าง — ใช้รูป "งานเสร็จ" เป็นปก ถ้ายังไม่มีรูปแสดงภาพลายเส้น
export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.photos.find((p) => p.stage === "after") ?? project.photos[0];
  return (
    <Link href={`/projects/${project.slug}`} className="ptile">
      <div className="ptile-media">
        {cover ? (
          <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 767px) 100vw, 33vw" style={{ objectFit: "cover" }} />
        ) : (
          <SystemDiagram slug={project.system ?? "truss"} cover />
        )}
      </div>
      <div className="ptile-caption">
        <span>
          {[project.buildingType, project.location, project.area, project.span && `ช่วงกว้าง ${project.span}`].filter(Boolean).join(" · ")}
        </span>
        <h3>{project.name}</h3>
      </div>
    </Link>
  );
}
