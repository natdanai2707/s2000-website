import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import ProjectCard from "@/components/ProjectCard";
import SystemCard from "@/components/SystemCard";
import ProcessSteps from "@/components/ProcessSteps";
import SagaIcon, { type SagaIconName } from "@/components/SagaIcon";
import { IconLine, IconPhone } from "@/components/Icons";
import { SYSTEMS } from "@/lib/systems";
import { PROJECTS } from "@/lib/projects";
import { PRODUCTS } from "@/lib/products";
import { FAQS, stripTags } from "@/lib/faq";
import { orgSchema } from "@/lib/schema";
import {
  YEARS_IN_BUSINESS,
  FOUNDED_YEAR_BE,
  PHONE_MAIN,
  LINE_MSG,
  lineMessageUrl,
  SISTER,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "ผู้รับเหมาโครงสร้างเหล็ก โรงงาน โกดัง ชั้นลอย ทั่วประเทศ | S-2000 Steel Fabricated" },
  description: `S-2000 ผู้รับเหมาโครงสร้างเหล็ก ${YEARS_IN_BUSINESS} ปี ออกแบบ ผลิต ติดตั้ง โรงงาน โกดัง ชั้นลอย หลังคาช่วงกว้าง 4 ระบบ Truss, PEB, Beam, Cellular Beam ผลงานหลังคาสถานีรถไฟสายสีแดง ส่งแบบขอราคาทาง LINE`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "ผู้รับเหมาโครงสร้างเหล็ก โรงงาน โกดัง ชั้นลอย ทั่วประเทศ | S-2000",
    description: `ออกแบบ ผลิต ติดตั้งโครงสร้างเหล็ก 4 ระบบ โรงงานหาดใหญ่ รับงานทั่วประเทศ ${YEARS_IN_BUSINESS} ปี`,
    url: "/",
  },
};

const audiences: { t: string; d: string; i: SagaIconName }[] = [
  {
    i: "factory",
    t: "เจ้าของโรงงาน",
    d: "สร้างโรงงานใหม่ ขยายอาคาร เพิ่มชั้นลอยหรือเครน ได้ระบบที่คุ้มน้ำหนักเหล็กและแผนเวลาที่ชัด",
  },
  {
    i: "warehouse",
    t: "นักพัฒนาโกดังให้เช่า",
    d: "ต้นทุนต่อตารางเมตรที่แข่งขันได้ ผลิตในโรงงาน ติดตั้งเร็ว สร้างทีละเฟสได้",
  },
  {
    i: "hardhat",
    t: "ผู้รับเหมาหลัก",
    d: "หาผู้รับเหมาช่วงงานเหล็ก รับผลิตตามแบบหรือผลิตพร้อมติดตั้ง ส่งแบบและ BOQ มาประเมินราคา",
  },
  {
    i: "ruler",
    t: "ที่ปรึกษาและวิศวกรออกแบบ",
    d: "ปรึกษาความเป็นไปได้ในการผลิตและติดตั้ง รายละเอียดจุดต่อ และทางเลือกระบบตั้งแต่ขั้นออกแบบ",
  },
];

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.slice(0, 4).map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
  })),
};

export default function HomePage() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <main>
      <JsonLd data={orgSchema} />
      <JsonLd data={homeFaqSchema} />

      {/* HERO */}
      <section className="hero hero--s2k">
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-kicker">ผู้รับเหมาโครงสร้างเหล็ก ตั้งแต่ พ.ศ. {FOUNDED_YEAR_BE}</span>
          <h1 className="hero-title">
            โครงสร้างเหล็ก <em>โรงงาน โกดัง</em>
            <br />
            ออกแบบ ผลิต ติดตั้ง <span style={{ whiteSpace: "nowrap" }}>ทั่วประเทศ</span>
          </h1>
          <p className="hero-sub">
            ระบบโครงถัก PEB คานเหล็ก และ Cellular Beam ผลิตในโรงงานที่หาดใหญ่ ผลงานตั้งแต่หลังคาสถานีรถไฟสายสีแดง
            ถึงหลังคาสนามฟุตบอลช่วงกว้าง 50 เมตร
          </p>
          <div className="hero-ctas">
            <a href={lineMessageUrl(LINE_MSG.quote)} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--lg">
              <IconLine size={18} />
              ส่งแบบขอราคาทาง LINE
            </a>
            <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary btn--lg">
              <IconPhone size={18} />
              โทร <span className="num">{PHONE_MAIN.display}</span>
            </a>
            <a href={lineMessageUrl(LINE_MSG.siteVisit)} target="_blank" rel="noopener noreferrer" className="btn btn--outline-light btn--lg">
              นัดดูหน้างาน
            </a>
          </div>
        </div>
      </section>

      <section className="usp-band" aria-label="จุดเด่นของ S-2000">
        <div className="usp-band-inner">
          {[
            [`${YEARS_IN_BUSINESS} ปี`, "ประสบการณ์งานโครงสร้างเหล็ก"],
            ["4 ระบบ", "Truss · PEB · Beam · Cellular"],
            ["50 ม.", "ช่วงกว้างหลังคาไร้เสากลาง"],
            ["ทั่วประเทศ", "ผลิตที่หาดใหญ่ ติดตั้งทั่วไทย"],
          ].map(([n, d]) => (
            <div key={n} className="stat-badge">
              <strong>{n}</strong>
              <span>{d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ผลงานอ้างอิง</span>
            <h2>งานจริงที่พิสูจน์แล้ว ตั้งแต่ภาคใต้ถึงภาคอีสาน</h2>
            <p>งานโครงการภาครัฐ อาคารอุตสาหกรรม และหลังคาสนามกีฬาช่วงกว้าง ดูรายละเอียดแต่ละโครงการได้</p>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/projects" className="btn btn--outline-dark">
              ดูผลงานทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ระบบโครงสร้าง</span>
            <h2>4 ระบบ เลือกให้ตรงช่วงกว้างและการใช้งาน</h2>
            <p>ระบบที่ถูกต้องคือระบบที่ใช้น้ำหนักเหล็กน้อยที่สุดสำหรับงานนั้น วิศวกรของเราเทียบให้ก่อนเสนอราคา</p>
          </div>
          <div className="grid-4">
            {SYSTEMS.map((s) => (
              <SystemCard key={s.slug} system={s} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/services" className="btn btn--outline-dark">
              เปรียบเทียบ 4 ระบบ →
            </Link>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">เราทำงานกับใคร</span>
            <h2>ทีมเดียว ดูแลตั้งแต่แบบถึงส่งมอบ</h2>
          </div>
          <div className="grid-4">
            {audiences.map((a) => (
              <div key={a.t} className="card audience-card">
                <span className="icon-badge"><SagaIcon name={a.i} size={28} /></span>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ขั้นตอนการทำงาน</span>
            <h2>จากแบบถึงอาคารที่ใช้งานได้ใน 5 ขั้นตอน</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">งานผลิตอื่น</span>
            <h2>ชั้นลอย ถังน้ำมัน ถังน้ำยาง และเครนเหนือศีรษะ</h2>
          </div>
          <div className="grid-4">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="card audience-card link-card">
                <span className="icon-badge"><SagaIcon name={p.icon} size={28} /></span>
                <span className="project-loc">{p.nameEn}</span>
                <h3>{p.nameTh}</h3>
                <p>{p.short}</p>
                <span className="link-more">ดูรายละเอียด →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SISTER */}
      <section className="section section--alt">
        <div className="container">
          <div className="card sister-band">
            <div>
              <span className="eyebrow">บริษัทในเครือ</span>
              <h2 style={{ fontSize: 26 }}>คุมวัสดุตั้งแต่ต้นทางกับ{SISTER.name}</h2>
              <p style={{ color: "var(--gray)", margin: "8px 0 0" }}>
                {SISTER.company} {SISTER.desc} ทำให้ S-2000 จัดหาเหล็กได้เร็ว ตัดชิ้นงานแม่นยำ และคุมคุณภาพเหล็กได้ทุกโครงการ
              </p>
            </div>
            <a href={SISTER.url} target="_blank" rel="noopener" className="btn btn--outline-dark">
              ไปที่เว็บ{SISTER.name} →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="eyebrow">คำถามที่พบบ่อย</span>
            <h2>เรื่องที่ลูกค้าถามบ่อย</h2>
          </div>
          {FAQS.slice(0, 4).map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <h3 style={{ fontSize: 18, margin: 0, color: "var(--navy)" }}>{f.q}</h3>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
          <div style={{ marginTop: 24 }}>
            <Link href="/faq" className="btn btn--outline-dark">
              ดูคำถามทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
