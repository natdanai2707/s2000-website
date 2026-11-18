import type { Metadata } from "next";
import ArticleCover from "@/components/ArticleCover";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { ARTICLES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "บทความงานโครงสร้างเหล็ก โรงงาน โกดัง",
  description:
    "บทความความรู้งานโครงสร้างเหล็กจาก S-2000 วิธีเลือกระบบโครงสร้าง Truss PEB Beam Cellular Beam การขอราคา และการวางแผนสร้างโรงงานและโกดัง",
  alternates: { canonical: "/blog" },
  openGraph: { title: "บทความงานโครงสร้างเหล็ก | S-2000", url: "/blog" },
};

export default function BlogPage() {
  const sorted = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <main>
      <PageHeader
        title="บทความงานโครงสร้างเหล็ก"
        desc="ความรู้สำหรับเจ้าของโครงการ ผู้รับเหมา และวิศวกร ก่อนเริ่มงานโครงสร้างเหล็ก"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "บทความ" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {sorted.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="product-card blog-card">
                <div className="product-card-img">
                  <ArticleCover article={a} sizes="(max-width: 767px) 100vw, 33vw" />
                </div>
                <div className="product-card-body">
                  <time dateTime={a.date}>
                    {new Date(a.date).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <h3 style={{ fontSize: 19, margin: "6px 0 8px" }}>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className="link-more">อ่านต่อ →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
