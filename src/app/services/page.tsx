import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import SystemCard from "@/components/SystemCard";
import JsonLd from "@/components/JsonLd";
import { SYSTEMS } from "@/lib/systems";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ระบบโครงสร้างเหล็ก 4 แบบ เปรียบเทียบ Truss, PEB, Beam, Cellular Beam",
  description:
    "เปรียบเทียบระบบโครงสร้างเหล็กสำหรับโรงงานและโกดัง โครงถัก (Truss) PEB คานเหล็ก และ Cellular Beam ช่วงกว้างที่เหมาะ จุดแข็ง และงานที่เหมาะ โดย S-2000 ผู้รับเหมาโครงสร้างเหล็ก",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", title: "ระบบโครงสร้างเหล็ก 4 แบบ | S-2000" },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: SYSTEMS.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${SITE_URL}/services/${s.slug}`,
    name: s.nameTh,
  })),
};

export default function ServicesPage() {
  return (
    <main>
      <JsonLd data={itemList} />
      <PageHeader
        title="ระบบโครงสร้างเหล็ก 4 แบบ"
        desc="แต่ละระบบเหมาะกับช่วงกว้างและการใช้งานต่างกัน เลือกถูกตั้งแต่ต้น ประหยัดน้ำหนักเหล็กและเวลาก่อสร้าง ไม่แน่ใจ ส่งขนาดมาให้วิศวกรเทียบให้ได้"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ระบบโครงสร้าง" }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {SYSTEMS.map((s) => (
              <SystemCard key={s.slug} system={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ตารางเปรียบเทียบ</span>
            <h2>เทียบ 4 ระบบในตารางเดียว</h2>
            <p>ช่วงกว้างเป็นค่าทั่วไปเพื่อเริ่มต้นคิด ค่าจริงขึ้นกับน้ำหนักหลังคา แรงลม ความสูง และเครน</p>
          </div>
          <div className="table-scroll">
            <table className="spec-table compare-table">
              <thead>
                <tr>
                  <th>ระบบ</th>
                  <th>ช่วงกว้างที่เหมาะ</th>
                  <th>จุดแข็งหลัก</th>
                  <th>เหมาะกับ</th>
                </tr>
              </thead>
              <tbody>
                {SYSTEMS.map((s) => (
                  <tr key={s.slug}>
                    <td>
                      <Link href={`/services/${s.slug}`} style={{ fontWeight: 600, color: "var(--navy)" }}>
                        {s.nameTh}
                      </Link>
                      <br />
                      <small style={{ color: "var(--gray)" }}>{s.nameEn}</small>
                    </td>
                    <td className="num">{s.specs[0][1]}</td>
                    <td>{s.strengths[0]}</td>
                    <td>{s.bestFor.slice(0, 2).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 24 }}>
            อ่านเพิ่ม:{" "}
            <Link href="/blog/choose-steel-structure-system" className="link-more">
              สร้างโกดัง โรงงาน เลือกโครงสร้างเหล็กแบบไหนดี →
            </Link>
          </p>
        </div>
      </section>

      <CTA title="ไม่แน่ใจว่าระบบไหนคุ้มที่สุด?" subtitle="ส่งขนาดอาคารและการใช้งานมาทาง LINE วิศวกรเทียบระบบที่เหมาะพร้อมราคาให้" />
    </main>
  );
}
