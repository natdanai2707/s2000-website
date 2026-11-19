import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import JsonLd from "@/components/JsonLd";
import { PROJECTS, CATEGORY_LABEL, type ProjectCategory } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ผลงานโครงสร้างเหล็ก โรงงาน โกดัง ห้องเย็น ถังน้ำยาง ทั่วประเทศ",
  description:
    "ผลงาน S-2000 ผู้รับเหมาโครงสร้างเหล็ก โรงงาน Canadian Solar 30,000 ตร.ม. โรงงานแปรรูปยาง CP คลังสินค้าศรีตรัง ห้องเย็น โชว์รูม Hino และถังน้ำยาง 960 ตัน ดูรายละเอียดรายโครงการ",
  alternates: { canonical: "/projects" },
  openGraph: { url: "/projects", title: "ผลงานโครงสร้างเหล็ก | S-2000" },
};

const CATS: ProjectCategory[] = ["factory", "warehouse", "commercial", "roof", "tank"];

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
        desc="งานจริงที่ออกแบบ ผลิต และติดตั้งโดย S-2000 ทั่วประเทศ ตั้งแต่โรงงาน คลังสินค้า อาคารพาณิชย์ งานหลังคา ไปจนถึงถังน้ำยาง"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ผลงาน" }]}
      />
      <nav className="cat-nav" aria-label="หมวดผลงาน">
        <div className="container">
          {CATS.map((c) => (
            <a key={c} href={`#${c}`}>
              {CATEGORY_LABEL[c]} <span className="num">{PROJECTS.filter((p) => p.category === c).length}</span>
            </a>
          ))}
        </div>
      </nav>
      {CATS.map((c, i) => (
        <section key={c} id={c} className={`section2${i % 2 ? " section2--alt" : ""}`} style={{ paddingTop: 72, paddingBottom: 72 }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 28 }}>{CATEGORY_LABEL[c]}</h2>
            <div className="grid-3">
              {PROJECTS.filter((p) => p.category === c).map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <CTA title="โครงการของคุณคือผลงานถัดไป" />
    </main>
  );
}
