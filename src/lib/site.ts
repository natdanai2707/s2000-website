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

// TODO: ยืนยันเบอร์หลักของ S-2000 (ตอนนี้ใช้เบอร์ที่แสดงบนเว็บเหล็กใต้)
export const PHONE_MAIN = { display: "099-795-9526", tel: "0997959526" };
// TODO: ใส่อีเมลบริษัท แล้วจะแสดงในหน้าติดต่อ/footer อัตโนมัติ
export const EMAIL = "";
// TODO: ใส่ลิงก์เพจ Facebook
export const FACEBOOK_URL = "";

export const OPENING_HOURS_TH = "จันทร์–เสาร์ 08.00–17.00 น.";
export const OPENING_HOURS_SCHEMA = "Mo-Sa 08:00-17:00";

// ที่ตั้งสำนักงาน/โรงงาน — TODO: ใส่ที่อยู่เต็ม พิกัด และลิงก์ Google Maps
export const OFFICE = {
  name: "สำนักงานใหญ่และโรงงาน",
  addr: "อำเภอหาดใหญ่ จังหวัดสงขลา",
  streetAddress: "",
  addressLocality: "อำเภอหาดใหญ่",
  addressRegion: "สงขลา",
  postalCode: "90110",
  geo: null as { lat: number; lng: number } | null,
  mapsUrl: "",
};

export const AREA_SERVED = ["ประเทศไทย", "ภาคใต้", "สงขลา", "หาดใหญ่", "กรุงเทพมหานคร", "ภาคอีสาน", "ภาคกลาง"];

// บริษัทในเครือ
export const SISTER = {
  name: "เหล็กใต้",
  company: "บริษัท เหล็กใต้ จำกัด",
  url: "https://southsteel-th.com",
  desc: "จัดหาเหล็กรูปพรรณ มาตรฐาน มอก. และบริการตัดเลเซอร์ CNC พับเหล็ก ที่หาดใหญ่",
};

export const sameAs = [LINE_URL, FACEBOOK_URL].filter(Boolean);
