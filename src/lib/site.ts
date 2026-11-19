// ข้อมูลกลางของเว็บไซต์ S-2000 — แก้เบอร์โทร ที่อยู่ ลิงก์ ได้ที่ไฟล์นี้ไฟล์เดียว
// ช่องที่ยังรอข้อมูลจริงมีคำว่า TODO กำกับ

export const SITE_URL = "https://s2000steelfab.com";

// ปีก่อตั้ง — ตัวเลข "กี่ปี" ทั้งเว็บคำนวณจากค่านี้ตอน build
export const FOUNDED_YEAR = 1998; // ค.ศ.
export const FOUNDED_YEAR_BE = FOUNDED_YEAR + 543; // พ.ศ. 2541
export const YEARS_IN_BUSINESS = new Date().getFullYear() - FOUNDED_YEAR;
// วันที่แก้เนื้อหาล่าสุด — ใช้เป็น lastmod ใน sitemap
export const CONTENT_UPDATED = "2026-11-18";

export const COMPANY_TH = "บริษัท เอส-2000 สตีล แฟบริเคท จำกัด";
export const COMPANY_EN = "S-2000 Steel Fabricated Co., Ltd.";
export const BRAND = "S-2000";
export const SITE_NAME = `S-2000 ผู้รับเหมาโครงสร้างเหล็ก ${YEARS_IN_BUSINESS} ปี`;

export const LINE_ID = "@s-2000";
export const LINE_URL = "https://line.me/R/ti/p/@s-2000";
// เปิดแชท LINE OA พร้อมข้อความตั้งต้น (รู้ว่าลูกค้ามาจากหน้าไหน)
export const lineMessageUrl = (text: string) =>
  `https://line.me/R/oaMessage/${encodeURIComponent(LINE_ID)}/?${encodeURIComponent(text)}`;

// ข้อความตั้งต้นของ 3 conversion หลัก
export const LINE_MSG = {
  quote: "ขอใบเสนอราคางานโครงสร้างเหล็ก จะส่งแบบ/ขนาดให้ครับ (จากเว็บ)",
  siteVisit: "ขอนัดทีมงานดูหน้างาน (จากเว็บ)",
};

// เบอร์สำนักงานใหญ่ (ตามเพจ Facebook บริษัท)
export const PHONE_MAIN = { display: "074-280-545", tel: "074280545" };
export const EMAIL = "s-2000.steel@gmail.com";
export const FACEBOOK_URL = "https://www.facebook.com/s2000steel";

export const OPENING_HOURS_TH = "จันทร์–เสาร์ 08.00–17.00 น.";
export const OPENING_HOURS_SCHEMA = "Mo-Sa 08:00-17:00";

// สำนักงานใหญ่และโรงงาน (บ้านพรุ หาดใหญ่)
export const OFFICE = {
  name: "สำนักงานใหญ่และโรงงาน",
  addr: "1 หมู่ 1 ถนนชุมแสง ตำบลบ้านพรุ อำเภอหาดใหญ่ จังหวัดสงขลา 90250",
  streetAddress: "1 หมู่ 1 ถนนชุมแสง ตำบลบ้านพรุ",
  addressLocality: "อำเภอหาดใหญ่",
  addressRegion: "สงขลา",
  postalCode: "90250",
  geo: { lat: 6.9561681, lng: 100.4742269 } as { lat: number; lng: number } | null,
  mapsUrl: "https://maps.google.com/?cid=5280487534722556263",
};

// สาขา (ตาม Company Profile บน Canva)
export const BRANCHES = [
  {
    name: "สาขาสายเอเชีย หาดใหญ่",
    addr: "1199 ถนนสายเอเชีย ตำบลคอหงส์ อำเภอหาดใหญ่ จังหวัดสงขลา 90110",
    phone: { display: "074-370-400", tel: "074370400" },
    mapsUrl: "https://maps.google.com/?cid=9691938572853490454",
  },
  {
    name: "โรงงานผลิต สาขาบ้านไร่",
    addr: "ถนนกาญจนวนิช ตำบลบ้านไร่ อำเภอหาดใหญ่ จังหวัดสงขลา",
    phone: { display: "074-370-400", tel: "074370400" },
    mapsUrl: "",
  },
  {
    name: "สาขากรุงเทพฯ",
    addr: "66/69 ถนนลาดปลาเค้า แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพมหานคร",
    phone: { display: "099-478-1515", tel: "0994781515" },
    mapsUrl: "",
  },
];
export const EMAIL_PROJECTS = "s2000.projects@gmail.com";

export const AREA_SERVED = ["ประเทศไทย", "ภาคใต้", "สงขลา", "หาดใหญ่", "กรุงเทพมหานคร", "ภาคอีสาน", "ภาคกลาง"];

// บริษัทในเครือ
export const SISTER = {
  name: "เหล็กใต้",
  company: "บริษัท เหล็กใต้ จำกัด",
  url: "https://southsteel-th.com",
  desc: "จัดหาเหล็กรูปพรรณ มาตรฐาน มอก. และบริการตัดเลเซอร์ CNC พับเหล็ก ที่หาดใหญ่",
};

export const sameAs = [LINE_URL, FACEBOOK_URL].filter(Boolean);
