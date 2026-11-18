import Link from "next/link";
import { lineMessageUrl, LINE_MSG, PHONE_MAIN } from "@/lib/site";

// ท้ายหน้า: 2 ช่อง เงียบ ๆ แบบงานโครงการ — คุยกับทีมงาน / ขอใบเสนอราคา
export default function CTA({
  title = "มีโครงการที่กำลังวางแผน?",
  subtitle = "เล่าความต้องการให้เราฟัง ทีมงานจะแนะนำระบบโครงสร้าง ประเมินงบ และวางแผนเวลาให้",
  lineText = LINE_MSG.quote,
}: {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  lineText?: string;
}) {
  return (
    <section className="cta2">
      <div className="container cta2-grid">
        <div className="cta2-item">
          <span className="kicker kicker--light">LET&apos;S TALK</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="cta2-actions">
            <Link href="/contact" className="btn btn--light">
              ติดต่อทีมงาน
            </Link>
            <a href={`tel:${PHONE_MAIN.tel}`} className="text-link text-link--light num">
              {PHONE_MAIN.display}
            </a>
          </div>
        </div>
        <div className="cta2-item">
          <span className="kicker kicker--light">REQUEST A QUOTE</span>
          <h2>ขอใบเสนอราคา</h2>
          <p>ส่งแบบ สเก็ตช์ หรือขนาดอาคาร ทีมงานเสนอราคาพร้อมขอบเขตงานและแผนเวลา</p>
          <div className="cta2-actions">
            <a href={lineMessageUrl(lineText)} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">
              ส่งแบบทาง LINE
            </a>
            <a href={lineMessageUrl(LINE_MSG.siteVisit)} target="_blank" rel="noopener noreferrer" className="text-link text-link--light">
              นัดดูหน้างาน →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
