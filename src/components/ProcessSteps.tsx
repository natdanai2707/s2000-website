import SagaIcon, { type SagaIconName } from "@/components/SagaIcon";
// ขั้นตอนการทำงาน — แสดงหน้าแรกและหน้าเกี่ยวกับเรา
const steps: { t: string; d: string; i: SagaIconName }[] = [
  { i: "drawing", t: "ส่งแบบหรือขนาด", d: "ส่งแบบ สเก็ตช์ หรือขนาดอาคารคร่าว ๆ ทาง LINE หรือโทรคุยความต้องการ" },
  { i: "pin", t: "ดูหน้างาน", d: "ทีมงานนัดสำรวจพื้นที่ วัดขนาด ดูทางเข้ารถและเงื่อนไขหน้างาน" },
  { i: "quote", t: "เสนอระบบและราคา", d: "วิศวกรเทียบระบบโครงสร้างที่เหมาะ เสนอราคาพร้อมขอบเขตงานและแผนเวลา" },
  { i: "weld", t: "ผลิตในโรงงาน", d: "ตัด เจาะ เชื่อม และทำสีในโรงงานที่หาดใหญ่ ตรวจคุณภาพก่อนส่งออก" },
  { i: "crane", t: "ขนส่งและติดตั้ง", d: "ขนส่งถึงหน้างานทั่วประเทศ ประกอบยกติดตั้ง และส่งมอบงาน" },
];

export default function ProcessSteps() {
  return (
    <ol className="process">
      {steps.map((s, i) => (
        <li key={s.t}>
          <span className="process-top"><span className="icon-badge"><SagaIcon name={s.i} size={26} /></span><span className="process-n num">{String(i + 1).padStart(2, "0")}</span></span>
          <strong>{s.t}</strong>
          <span>{s.d}</span>
        </li>
      ))}
    </ol>
  );
}
