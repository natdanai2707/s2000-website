import { SYSTEMS } from "@/lib/systems";
import { PRODUCTS } from "@/lib/products";
import { PROJECTS } from "@/lib/projects";
import { ARTICLES } from "@/lib/blog";
import {
  SITE_URL,
  COMPANY_TH,
  COMPANY_EN,
  FOUNDED_YEAR,
  FOUNDED_YEAR_BE,
  LINE_ID,
  PHONE_MAIN,
  OPENING_HOURS_TH,
  OFFICE,
  SISTER,
  EMAIL,
  BRANCHES,
} from "@/lib/site";

export const dynamic = "force-static";

// /llms.txt สร้างจากไฟล์ข้อมูลเดียวกับเว็บ — ข้อมูลตรงกันเสมอ
export function GET() {
  const lines = [
    `# ${COMPANY_EN} (${COMPANY_TH})`,
    "",
    `> ${COMPANY_TH} หรือ S-2000 เป็นผู้รับเหมาโครงสร้างเหล็กในอำเภอหาดใหญ่ จังหวัดสงขลา ก่อตั้ง พ.ศ. ${FOUNDED_YEAR_BE} (ค.ศ. ${FOUNDED_YEAR}) ออกแบบ ผลิต และติดตั้งโครงสร้างเหล็กโรงงาน โกดัง ชั้นลอยโรงงาน และหลังคาช่วงกว้าง รับงานทั่วประเทศ`,
    "",
    "## ข้อมูลบริษัท",
    "",
    `- ชื่อ: ${COMPANY_TH} / ${COMPANY_EN}`,
    `- เว็บไซต์: ${SITE_URL}`,
    `- ที่ตั้ง: ${OFFICE.addr}`,
    `- โทร: ${PHONE_MAIN.display}`,
    `- LINE: ${LINE_ID}`,
    ...(EMAIL ? [`- อีเมล: ${EMAIL}`] : []),
    ...BRANCHES.map((b) => `- ${b.name}: ${b.addr} โทร ${b.phone.display}`),
    `- เวลาทำการ: ${OPENING_HOURS_TH}`,
    "- พื้นที่ให้บริการ: ทั่วประเทศไทย",
    `- บริษัทในเครือ: ${SISTER.company} (${SISTER.url}) ${SISTER.desc}`,
    "- ช่องทางขอราคา: ส่งแบบหรือขนาดอาคารทาง LINE, โทร, หรือนัดทีมงานดูหน้างาน",
    "",
    "## ระบบโครงสร้าง",
    "",
    ...SYSTEMS.map((s) => `- [${s.nameTh} (${s.nameEn})](${SITE_URL}/services/${s.slug}): ${s.short} ช่วงกว้างที่เหมาะโดยทั่วไป ${s.specs[0][1]}`),
    "",
    "## งานผลิตอื่น",
    "",
    ...PRODUCTS.map((p) => `- [${p.nameTh}](${SITE_URL}/products/${p.slug}): ${p.short}`),
    "",
    "## ผลงานอ้างอิง",
    "",
    ...PROJECTS.map((p) => `- [${p.name}](${SITE_URL}/projects/${p.slug}): ${p.summary}`),
    "",
    "## บทความ",
    "",
    ...ARTICLES.map((a) => `- [${a.title}](${SITE_URL}/blog/${a.slug}): ${a.description}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
