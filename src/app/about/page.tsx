import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import ProcessSteps from "@/components/ProcessSteps";
import SagaIcon, { type SagaIconName } from "@/components/SagaIcon";
import { YEARS_IN_BUSINESS, FOUNDED_YEAR_BE, COMPANY_TH, COMPANY_EN, SISTER } from "@/lib/site";

export const metadata: Metadata = {
  title: `เกี่ยวกับเรา ผู้รับเหมาโครงสร้างเหล็ก ${YEARS_IN_BUSINESS} ปี`,
  description: `รู้จัก ${COMPANY_TH} ผู้รับเหมาโครงสร้างเหล็กตั้งแต่ พ.ศ. ${FOUNDED_YEAR_BE} โรงงานผลิตที่หาดใหญ่ สงขลา รับงานโรงงาน โกดัง หลังคาช่วงกว้างทั่วประเทศ บริษัทในเครือเหล็กใต้`,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: `เกี่ยวกับ S-2000 | ผู้รับเหมาโครงสร้างเหล็ก ${YEARS_IN_BUSINESS} ปี` },
};

const strengths: { t: string; d: string; i: SagaIconName }[] = [
  {
    i: "factory",
    t: "ผลิตเองในโรงงาน",
    d: "ชิ้นส่วนโครงสร้างตัด เจาะ เชื่อม และทำสีในโรงงานที่หาดใหญ่ คุมคุณภาพและเวลาได้เอง ไม่ต้องรอผู้ผลิตภายนอก",
  },
  {
    i: "ruler",
    t: "เลือกระบบให้ตรงงาน",
    d: "ทำได้ทั้ง 4 ระบบ จึงเสนอระบบที่คุ้มน้ำหนักเหล็กที่สุดสำหรับงานนั้น ไม่ใช่ระบบเดียวที่เราถนัด",
  },
  {
    i: "truck",
    t: "วัสดุจากบริษัทในเครือ",
    d: `${SISTER.name}จัดหาเหล็กรูปพรรณและตัดเลเซอร์ CNC ให้ ลดเวลารอวัสดุและคุมเกรดเหล็กได้ตั้งแต่ต้นทาง`,
  },
  {
    i: "hardhat",
    t: "ทีมติดตั้งพร้อมเดินทาง",
    d: "ทีมติดตั้งของบริษัททำงานร่วมกับทีมช่างพันธมิตรที่ผ่านงานกันมา รองรับหลายโครงการพร้อมกันทั่วประเทศ",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="เกี่ยวกับ S-2000"
        desc={`${COMPANY_TH} (${COMPANY_EN}) ผู้รับเหมาโครงสร้างเหล็กตั้งแต่ พ.ศ. ${FOUNDED_YEAR_BE}`}
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "เกี่ยวกับเรา" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">เรื่องราวของเรา</span>
          <h2>{YEARS_IN_BUSINESS} ปีของงานโครงสร้างเหล็กจากหาดใหญ่</h2>
          <p style={{ fontSize: 17, lineHeight: 1.85, marginTop: 16 }}>
            S-2000 ก่อตั้งที่หาดใหญ่ จังหวัดสงขลา เมื่อ พ.ศ. {FOUNDED_YEAR_BE} เริ่มจากงานผลิตเหล็กตามแบบ
            แล้วเติบโตเป็นผู้รับเหมาโครงสร้างเหล็กที่ออกแบบ ผลิต และติดตั้งงานทั้งอาคาร ตั้งแต่โรงงานและโกดัง
            ชั้นลอยโรงงาน ไปจนถึงหลังคาช่วงกว้างและถังน้ำยางขนาดใหญ่
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85 }}>
            วันนี้ S-2000 รับงานทั่วประเทศ ผลงานมีตั้งแต่โรงงานพื้นที่ 30,000 ตร.ม. ที่ชลบุรี โรงงานแปรรูปยางที่เลยและหนองคาย
            ไปจนถึงหลังคาสนามฟุตบอลช่วงกว้าง 50 เมตรที่ปัตตานี ทุกงานผลิตชิ้นส่วนในโรงงานของเรา
            ตรวจคุณภาพก่อนส่งออก แล้วประกอบติดตั้งที่หน้างาน
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.85 }}>
            S-2000 อยู่ในเครือเดียวกับ{" "}
            <a href={SISTER.url} target="_blank" rel="noopener" style={{ color: "var(--navy)", fontWeight: 600 }}>
              {SISTER.company}
            </a>{" "}
            ซึ่ง{SISTER.desc}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <span className="eyebrow">ความเป็นมา</span>
          <h2 style={{ marginBottom: 32 }}>จากร้านเหล็กสู่ผู้รับเหมาโครงสร้างเหล็ก</h2>
          <ol className="timeline">
            <li>
              <span className="num">พ.ศ. 2487</span>
              <div>
                <strong>เริ่มธุรกิจเหล็กในชื่อ &ldquo;กวงหลี&rdquo;</strong>
                <p>จุดเริ่มต้นของครอบครัวในธุรกิจเหล็ก ก่อนขยายสู่อุตสาหกรรมต่าง ๆ ทั้งในสุราษฎร์ธานี สงขลา กรุงเทพฯ และเชียงใหม่</p>
              </div>
            </li>
            <li>
              <span className="num">พ.ศ. 2531</span>
              <div>
                <strong>ขยายธุรกิจเหล็กรูปพรรณในนาม &ldquo;เหล็กใต้&rdquo;</strong>
                <p>ค้าเหล็กรูปพรรณและบริการตัดเลเซอร์ที่หาดใหญ่ ปัจจุบันเป็นบริษัทในเครือที่จัดหาวัสดุให้ S-2000</p>
              </div>
            </li>
            <li>
              <span className="num">พ.ศ. {FOUNDED_YEAR_BE}</span>
              <div>
                <strong>ก่อตั้ง เอส-2000 สตีลแฟบริเคท</strong>
                <p>ต่อยอดจากเหล็กรูปพรรณสู่งานแฟบริเคทเหล็กทุกชนิด งานก่อสร้างโรงงาน โกดัง หลังคาเมทัลชีท ถังไซโล และงานสถาปัตยกรรมเหล็ก</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ทำไมลูกค้าเลือก S-2000</span>
            <h2>สิ่งที่ทำให้งานจบตามแบบและตามเวลา</h2>
          </div>
          <div className="grid-4">
            {strengths.map((s) => (
              <div key={s.t} className="card audience-card">
                <span className="icon-badge"><SagaIcon name={s.i} size={28} /></span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ขั้นตอนการทำงาน</span>
            <h2>ทำงานกับเราอย่างไร</h2>
          </div>
          <ProcessSteps />
          <p style={{ marginTop: 32 }}>
            <Link href="/projects" className="link-more">
              ดูผลงานของเรา →
            </Link>
          </p>
        </div>
      </section>

      <CTA />
    </main>
  );
}
