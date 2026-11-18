import { lineMessageUrl, LINE_MSG, PHONE_MAIN, OPENING_HOURS_TH, LINE_ID } from "@/lib/site";
import { IconPhone, IconLine } from "@/components/Icons";

// แถบชวนติดต่อท้ายหน้า — 3 conversion หลัก: ส่งแบบทาง LINE, โทร, นัดดูหน้างาน
export default function CTA({
  title = "มีแบบหรือขนาดอาคารแล้ว? ส่งมาให้เราประเมินราคา",
  subtitle = `ส่งแบบ สเก็ตช์ หรือขนาดคร่าว ๆ ทาง LINE ${LINE_ID} ทีมงานเสนอระบบที่เหมาะพร้อมราคา เปิดทำการ${OPENING_HOURS_TH}`,
  eyebrow = "เริ่มโครงการกับ S-2000",
  lineText = LINE_MSG.quote,
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  lineText?: string;
}) {
  return (
    <section className="section section--navy">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 style={{ maxWidth: 720, margin: "0 auto" }}>{title}</h2>
        <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 18, margin: "16px auto 32px", maxWidth: 600 }}>{subtitle}</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href={lineMessageUrl(lineText)} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--lg">
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
  );
}
