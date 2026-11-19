import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import JsonLd from "@/components/JsonLd";
import PhotoGrid from "@/components/PhotoGrid";
import { GALLERY_WORKS, GALLERY_FACTORY } from "@/lib/gallery";
import { PROJECTS, CATEGORY_LABEL, type ProjectCategory } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ผลงานโครงสร้างเหล็ก โรงงาน โกดัง ห้องเย็น ถังน้ำยาง ทั่วประเทศ",
  description:
    "ผลงาน S-2000 ผู้รับเหมาโครงสร้างเหล็ก โรงงาน 30,000 ตร.ม. ที่ศรีราชา โรงงานแปรรูปยาง คลังสินค้า 18,000 ตร.ม. ห้องเย็น โชว์รูม และถังน้ำยาง 960 ตัน ทั่วประเทศ",
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
      <section id="more" className="section2" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2 style={{ fontSize: 26, marginBottom: 8 }}>ภาพผลงานเพิ่มเติม</h2>
          <p style={{ color: "var(--gray)", marginBottom: 28 }}>งานโครงสร้างเหล็ก หลังคา และโรงงานที่ S-2000 ผลิตและติดตั้ง</p>
          <PhotoGrid photos={GALLERY_WORKS} />
        </div>
      </section>
      <section className="section2 section2--alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container">
          <h2 style={{ fontSize: 26, marginBottom: 28 }}>โรงงานผลิตของเรา</h2>
          <PhotoGrid photos={GALLERY_FACTORY} />
        </div>
      </section>
      <CTA title="โครงการของคุณคือผลงานถัดไป" />
    </main>
  );
}
