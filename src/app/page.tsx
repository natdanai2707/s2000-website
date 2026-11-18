import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import ProjectCard from "@/components/ProjectCard";
import SystemCard from "@/components/SystemCard";
import ProcessSteps from "@/components/ProcessSteps";
import SagaIcon, { type SagaIconName } from "@/components/SagaIcon";
import { SYSTEMS } from "@/lib/systems";
import { PROJECTS } from "@/lib/projects";
import { PRODUCTS } from "@/lib/products";
import { orgSchema } from "@/lib/schema";
import { YEARS_IN_BUSINESS, FOUNDED_YEAR_BE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "ผู้รับเหมาโครงสร้างเหล็ก โรงงาน โกดัง ชั้นลอย ทั่วประเทศ | S-2000 Steel Fabricated" },
  description: `S-2000 ผู้รับเหมาโครงสร้างเหล็ก ${YEARS_IN_BUSINESS} ปี ออกแบบ ผลิต ติดตั้ง โรงงาน โกดัง ชั้นลอย หลังคาช่วงกว้าง 4 ระบบ Truss, PEB, Beam, Cellular Beam ผลงานหลังคาสถานีรถไฟสายสีแดง`,
  alternates: { canonical: "/" },
  openGraph: {
    title: "ผู้รับเหมาโครงสร้างเหล็ก โรงงาน โกดัง ชั้นลอย ทั่วประเทศ | S-2000",
    description: `ออกแบบ ผลิต ติดตั้งโครงสร้างเหล็ก 4 ระบบ โรงงานหาดใหญ่ รับงานทั่วประเทศ ${YEARS_IN_BUSINESS} ปี`,
    url: "/",
  },
};

const advantages: { t: string; d: string; i: SagaIconName }[] = [
  { i: "ruler", t: "ออกแบบตามงาน", d: "วิศวกรเลือกระบบที่คุ้มน้ำหนักเหล็กที่สุด" },
  { i: "factory", t: "ผลิตในโรงงานเอง", d: "คุมคุณภาพและเวลาได้ทุกชิ้น" },
  { i: "crane", t: "ติดตั้งครบวงจร", d: "ทีมติดตั้งพร้อมเดินทางทั่วประเทศ" },
  { i: "hardhat", t: `ประสบการณ์ ${YEARS_IN_BUSINESS} ปี`, d: `งานโครงสร้างเหล็กตั้งแต่ พ.ศ. ${FOUNDED_YEAR_BE}` },
];

export default function HomePage() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <main>
      <JsonLd data={orgSchema} />

      {/* HERO */}
      <section className="hero2">
        <div className="hero2-inner">
          <span className="kicker kicker--light">S-2000 STEEL FABRICATED · SINCE 1998</span>
          <h1>
            โครงสร้างเหล็กสำหรับ
            <br />
            โรงงานและโกดัง
          </h1>
          <p>ออกแบบ ผลิต และติดตั้งครบในทีมเดียว จากโรงงานที่หาดใหญ่ สู่โครงการทั่วประเทศ</p>
          <div className="hero2-actions">
            <Link href="/projects" className="btn btn--light">
              ดูผลงาน
            </Link>
            <Link href="/contact" className="text-link text-link--light">
              ปรึกษาโครงการ →
            </Link>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="adv-band" aria-label="จุดเด่นของ S-2000">
        <div className="container adv-grid">
          {advantages.map((a) => (
            <div key={a.t} className="adv-item">
              <SagaIcon name={a.i} size={32} />
              <div>
                <strong>{a.t}</strong>
                <span>{a.d}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="section2">
        <div className="container intro2">
          <div>
            <span className="kicker">ABOUT S-2000</span>
            <h2>ผู้รับเหมาโครงสร้างเหล็ก ที่ดูแลตั้งแต่แบบถึงส่งมอบ</h2>
          </div>
          <div>
            <p>
              S-2000 ออกแบบ ผลิต และติดตั้งโครงสร้างเหล็กสำหรับโรงงาน โกดัง ชั้นลอย และหลังคาช่วงกว้าง
              ทำงานได้ทั้ง 4 ระบบ จึงเลือกระบบที่เหมาะกับงานจริง ผลงานมีตั้งแต่หลังคาสถานีรถไฟสายสีแดง
              ถึงหลังคาสนามฟุตบอลช่วงกว้าง 50 เมตร
            </p>
            <dl className="stats2">
              <div>
                <dt className="num">{YEARS_IN_BUSINESS}</dt>
                <dd>ปีประสบการณ์</dd>
              </div>
              <div>
                <dt className="num">4</dt>
                <dd>ระบบโครงสร้าง</dd>
              </div>
              <div>
                <dt className="num">50 ม.</dt>
                <dd>ช่วงกว้างไร้เสากลาง</dd>
              </div>
            </dl>
            <Link href="/about" className="text-link">
              เกี่ยวกับเรา →
            </Link>
          </div>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="section2 section2--alt">
        <div className="container">
          <div className="head2">
            <span className="kicker">STRUCTURAL SYSTEMS</span>
            <h2>ระบบโครงสร้าง 4 แบบ</h2>
            <p>เลือกให้ตรงช่วงกว้างและการใช้งาน วิศวกรเทียบให้ก่อนเสนอราคา</p>
          </div>
          <div className="grid-4">
            {SYSTEMS.map((s) => (
              <SystemCard key={s.slug} system={s} />
            ))}
          </div>
          <div className="head2-foot">
            <Link href="/services" className="text-link">
              เปรียบเทียบทั้ง 4 ระบบ →
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section2">
        <div className="container">
          <div className="head2">
            <span className="kicker">PROJECTS</span>
            <h2>ผลงานที่ผ่านมา</h2>
            <p>โครงการภาครัฐ อาคารอุตสาหกรรม และหลังคาสนามกีฬาช่วงกว้าง</p>
          </div>
          <div className="grid-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="head2-foot">
            <Link href="/projects" className="text-link">
              ดูผลงานทั้งหมด →
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section2 section2--alt">
        <div className="container">
          <div className="head2">
            <span className="kicker">HOW WE WORK</span>
            <h2>ขั้นตอนการทำงาน</h2>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="section2">
        <div className="container">
          <div className="head2">
            <span className="kicker">FABRICATION</span>
            <h2>งานผลิตอื่น</h2>
          </div>
          <div className="mini-grid">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="mini-item">
                <SagaIcon name={p.icon} size={36} />
                <strong>{p.nameTh}</strong>
                <span>{p.nameEn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
