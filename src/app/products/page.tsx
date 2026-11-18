import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "งานผลิตอื่น ชั้นลอยโรงงาน ถังน้ำมัน ถังน้ำยาง Overhead Crane",
  description:
    "S-2000 รับผลิตและติดตั้งชั้นลอยโรงงาน ถังน้ำมัน ถังน้ำยางพารา และเครนเหนือศีรษะ Overhead Crane พร้อมโครงสร้างรองรับ โรงงานหาดใหญ่ รับงานทั่วประเทศ",
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", title: "งานผลิตอื่น | S-2000" },
};

export default function ProductsPage() {
  return (
    <main>
      <PageHeader
        title="งานผลิตอื่น"
        desc="นอกจากโครงสร้างอาคาร S-2000 ผลิตและติดตั้งงานเหล็กสำหรับโรงงานและอุตสาหกรรม ด้วยโรงงานและทีมเดียวกัน"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "งานผลิตอื่น" }]}
      />
      <section className="section">
        <div className="container">
          <div className="grid-2">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="card audience-card link-card">
                <span className="project-loc">{p.nameEn}</span>
                <h2 style={{ fontSize: 24 }}>{p.nameTh}</h2>
                <p>{p.short}</p>
                <ul className="check-list" style={{ marginBottom: 16 }}>
                  {p.uses.slice(0, 3).map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
                <span className="link-more">ดูรายละเอียดและขอราคา →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
