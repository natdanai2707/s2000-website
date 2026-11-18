import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import JsonLd from "@/components/JsonLd";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ผลงานโครงสร้างเหล็ก หลังคาสถานีรถไฟ สนามกีฬา อาคารอุตสาหกรรม",
  description:
    "ผลงาน S-2000 ผู้รับเหมาโครงสร้างเหล็ก หลังคาสถานีรถไฟสายสีแดง หลังคา NER บุรีรัมย์ โครงหลังคาสนามฟุตบอลช่วงกว้าง 50 ม. ปัตตานี ดูรายละเอียดรายโครงการ",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "ผลงานโครงสร้างเหล็ก | S-2000" },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/projects/${p.slug}`,
    name: p.name,
  })),
};

export default function ProjectsPage() {
  return (
    <main>
      <JsonLd data={itemList} />
      <PageHeader
        title="ผลงานโครงสร้างเหล็ก"
        desc="งานจริงที่ออกแบบ ผลิต และติดตั้งโดย S-2000 ตั้งแต่โครงการภาครัฐ อาคารอุตสาหกรรม ถึงหลังคาสนามกีฬาช่วงกว้าง"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ผลงาน" }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid-3">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <CTA title="โครงการของคุณคือผลงานถัดไป" />
    </main>
  );
}
