import type { Metadata } from "next";
import Image from "next/image";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import { IconLine, IconPhone } from "@/components/Icons";
import SagaIcon from "@/components/SagaIcon";
import {
  LINE_ID,
  LINE_URL,
  LINE_MSG,
  lineMessageUrl,
  PHONE_MAIN,
  EMAIL,
  FACEBOOK_URL,
  OPENING_HOURS_TH,
  OFFICE,
  COMPANY_TH,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "ติดต่อ S-2000 ขอใบเสนอราคาโครงสร้างเหล็ก นัดดูหน้างาน",
  description: `ส่งแบบขอราคางานโครงสร้างเหล็ก โรงงาน โกดัง ชั้นลอย ทาง LINE ${LINE_ID} โทร ${PHONE_MAIN.display} หรือนัดทีมงานดูหน้างาน S-2000 หาดใหญ่ รับงานทั่วประเทศ`,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "ติดต่อ S-2000 | ขอใบเสนอราคาโครงสร้างเหล็ก" },
};

const quoteChecklist = [
  "ขนาดอาคาร กว้าง × ยาว × ความสูงชายคา",
  "ที่ตั้งโครงการ (จังหวัด/อำเภอ หรือพิกัด Google Maps)",
  "การใช้งาน เช่น โกดังเก็บสินค้า โรงงานผลิต หลังคาคลุม",
  "มีเครนเหนือศีรษะ ชั้นลอย หรือน้ำหนักพิเศษหรือไม่",
  "แบบ สเก็ตช์ หรือ BOQ (ถ้ามี) ส่งเป็นไฟล์ PDF/DWG หรือรูปถ่ายได้",
  "กำหนดเวลาที่ต้องการเริ่มใช้งาน",
];

export default function ContactPage() {
  const ways = [
    {
      n: "01",
      t: "ส่งแบบขอราคาทาง LINE",
      d: "ช่องทางที่เร็วที่สุด ส่งไฟล์แบบ รูปถ่าย และขนาดได้ในแชทเดียว",
      href: lineMessageUrl(LINE_MSG.quote),
      label: `แชท LINE ${LINE_ID}`,
      cls: "btn--navy",
      icon: <IconLine size={18} />,
      ext: true,
    },
    {
      n: "02",
      t: "โทรคุยกับทีมงาน",
      d: `คุยรายละเอียดโครงการและสอบถามเบื้องต้น ${OPENING_HOURS_TH}`,
      href: `tel:${PHONE_MAIN.tel}`,
      label: `โทร ${PHONE_MAIN.display}`,
      cls: "btn--outline-dark",
      icon: <IconPhone size={18} />,
      ext: false,
    },
    {
      n: "03",
      t: "นัดดูหน้างาน",
      d: "แจ้งที่ตั้งโครงการและวันที่สะดวก ทีมงานนัดสำรวจพื้นที่และวัดขนาดก่อนเสนอราคา",
      href: lineMessageUrl(LINE_MSG.siteVisit),
      label: "ขอนัดดูหน้างาน",
      cls: "btn--outline-dark",
      icon: <SagaIcon name="calendar" size={18} />,
      ext: true,
    },
  ];

  return (
    <main>
      <PageHeader
        title="ติดต่อ S-2000"
        desc="ส่งแบบขอราคา โทรคุยรายละเอียด หรือนัดทีมงานดูหน้างาน รับงานทั่วประเทศ"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "ติดต่อเรา" }]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid-3">
            {ways.map((w) => (
              <div key={w.n} className="card audience-card">
                <span className="process-n num">{w.n}</span>
                <h2 style={{ fontSize: 22 }}>{w.t}</h2>
                <p>{w.d}</p>
                <a
                  href={w.href}
                  className={`btn btn--sm ${w.cls}`}
                  {...(w.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {w.icon}
                  {w.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
            <div className="card" style={{ padding: 28 }}>
              <span className="eyebrow">ขอราคาให้แม่นและเร็ว</span>
              <h2 style={{ fontSize: 24, marginBottom: 16 }}>ข้อมูลที่ควรส่งมา</h2>
              <ol className="need-list">
                {quoteChecklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ol>
              <p style={{ color: "var(--gray)", fontSize: 15, margin: "16px 0 0" }}>
                ยังไม่มีแบบก็ส่งได้ ขนาดคร่าว ๆ กับรูปพื้นที่ก็เริ่มประเมินได้แล้ว
              </p>
            </div>

            <div>
              <div className="card" style={{ padding: 24, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", marginBottom: 24 }}>
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer" aria-label={`เพิ่มเพื่อน LINE ${LINE_ID}`}>
                  <Image
                    src="/images/line-qr.png"
                    alt={`LINE QR Code สแกนเพิ่มเพื่อน ${LINE_ID}`}
                    width={140}
                    height={140}
                    style={{ display: "block", border: "1px solid var(--rule)" }}
                  />
                </a>
                <div style={{ flex: 1, minWidth: 180 }}>
                  <h3 style={{ fontSize: 18, marginBottom: 6 }}>สแกนเพิ่มเพื่อน LINE {LINE_ID}</h3>
                  <p style={{ fontSize: 14, color: "var(--gray)", margin: 0 }}>
                    เปิดกล้องหรือแอป LINE สแกน QR แล้วส่งแบบหรือรายละเอียดโครงการมาได้เลย
                  </p>
                </div>
              </div>

              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 18, marginBottom: 12 }}>{COMPANY_TH}</h3>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, fontSize: 15, lineHeight: 2.1 }}>
                  <li>
                    {OFFICE.name}: {OFFICE.addr}
                  </li>
                  <li>
                    โทร:{" "}
                    <a href={`tel:${PHONE_MAIN.tel}`} className="num" style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                      {PHONE_MAIN.display}
                    </a>
                  </li>
                  <li>
                    LINE:{" "}
                    <a href={LINE_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                      {LINE_ID}
                    </a>
                  </li>
                  {EMAIL && (
                    <li>
                      อีเมล:{" "}
                      <a href={`mailto:${EMAIL}`} style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                        {EMAIL}
                      </a>
                    </li>
                  )}
                  {FACEBOOK_URL && (
                    <li>
                      Facebook:{" "}
                      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--amber-dark)", fontWeight: 600 }}>
                        S-2000
                      </a>
                    </li>
                  )}
                  <li>เวลาทำการ: {OPENING_HOURS_TH}</li>
                </ul>
                {OFFICE.mapsUrl && (
                  <a href={OFFICE.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-more map-link" style={{ marginTop: 12, display: "inline-block" }}>
                    เปิดใน Google Maps →
                  </a>
                )}
              </div>
              {OFFICE.geo && (
                <div className="card map-embed" style={{ marginTop: 24, overflow: "hidden" }}>
                  <iframe
                    src={`https://maps.google.com/maps?q=${OFFICE.geo.lat},${OFFICE.geo.lng}&z=16&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`แผนที่ ${COMPANY_TH}`}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
