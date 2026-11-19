import type { SystemSlug } from "@/lib/systems";

// ผลงานรายโครงการ — แต่ละตัวสร้างหน้า /projects/<slug> + sitemap อัตโนมัติ
// ช่องข้อมูลที่ยังไม่มีให้ปล่อยเป็น null (หน้าเว็บจะซ่อนแถวนั้นเอง ไม่แสดงตัวเลขที่ยังไม่ยืนยัน)
// รูป: วางไฟล์ WebP ใน public/images/projects/<slug>/ แล้วใส่ path ใน photos

export type PhotoStage = "before" | "during" | "after";

export interface ProjectPhoto {
  src: string;
  alt: string;
  stage: PhotoStage;
}

export interface Project {
  slug: string;
  name: string;
  buildingType: string;
  location: string;
  year: number | null;
  system: SystemSlug | null;
  span: string | null; // ช่วงกว้าง
  area: string | null; // พื้นที่
  steelWeight: string | null; // น้ำหนักเหล็ก
  duration: string | null; // ระยะเวลา
  scope: string | null; // ขอบเขตงานของ S-2000
  summary: string;
  story: string[];
  photos: ProjectPhoto[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "srt-red-line-station-roof",
    name: "หลังคาสถานีรถไฟสายสีแดง",
    buildingType: "หลังคาสถานีรถไฟ",
    location: "กรุงเทพมหานคร",
    year: null, // TODO
    system: null, // TODO
    span: null,
    area: null,
    steelWeight: null,
    duration: null,
    scope: null,
    summary: "งานโครงสร้างเหล็กหลังคาสถานีรถไฟฟ้าชานเมืองสายสีแดง งานโครงการภาครัฐที่ต้องผ่านมาตรฐานการตรวจสอบเข้มงวด",
    story: [
      "โครงการหลังคาสถานีรถไฟสายสีแดงเป็นงานโครงสร้างเหล็กในโครงการระบบรางของภาครัฐ ซึ่งต้องทำงานตามแบบและข้อกำหนดของผู้ออกแบบอย่างเคร่งครัด ตั้งแต่วัสดุ งานเชื่อม ไปจนถึงงานสีป้องกันสนิม",
    ],
    photos: [],
    featured: true,
  },
  {
    slug: "ner-buriram-roof",
    name: "หลังคา NER บุรีรัมย์",
    buildingType: "หลังคาอาคารอุตสาหกรรม",
    location: "บุรีรัมย์",
    year: null, // TODO
    system: null, // TODO
    span: null,
    area: null,
    steelWeight: null,
    duration: null,
    scope: null,
    summary: "งานโครงสร้างหลังคาเหล็กให้กับ NER ที่จังหวัดบุรีรัมย์ ตัวอย่างงานที่ S-2000 ผลิตจากหาดใหญ่และติดตั้งไกลถึงภาคอีสาน",
    story: [
      "งานหลังคา NER ที่บุรีรัมย์แสดงให้เห็นว่า S-2000 รับงานได้ทั่วประเทศ ชิ้นส่วนผลิตในโรงงานที่หาดใหญ่ ควบคุมคุณภาพก่อนขนส่ง แล้วส่งทีมติดตั้งไปประกอบที่หน้างาน",
    ],
    photos: [],
    featured: false,
  },
  {
    slug: "punphin-rubber-factory-peb",
    name: "โรงงานยางพร้อมถังน้ำยาง พุนพิน",
    buildingType: "โรงงานอุตสาหกรรม",
    location: "อ.พุนพิน จ.สุราษฎร์ธานี",
    year: 2024,
    system: "peb",
    span: null,
    area: null,
    steelWeight: null,
    duration: null,
    scope: "อาคารโรงงานระบบ PEB, ถังน้ำยาง 250 / 600 / 650 ตัน, งานพื้นอาคาร",
    summary: "อาคารโรงงานยางระบบ PEB พร้อมถังน้ำยางเหล็กเชื่อมประกอบขนาด 250, 600 และ 650 ตัน บนฐานคอนกรีตเสริมเหล็ก",
    story: [
      "โครงการโรงงานยางที่อำเภอพุนพิน จังหวัดสุราษฎร์ธานี เป็นงานที่ S-2000 ดูแลทั้งอาคารและระบบถังเก็บ ตัวอาคารใช้โครงสร้างเหล็กสำเร็จรูประบบ PEB ซึ่งผลิตในโรงงานและติดตั้งได้เร็ว",
      "ภายในโครงการติดตั้งถังน้ำยางเหล็กเชื่อมประกอบ 3 ขนาด คือ 250 ตัน 600 ตัน และ 650 ตัน วางบนฐานถังคอนกรีตเสริมเหล็ก พร้อมงานพื้นอาคาร",
    ],
    photos: [],
    featured: true,
  },
  {
    slug: "pattani-football-field-roof",
    name: "โครงหลังคาสนามฟุตบอล ปัตตานี",
    buildingType: "หลังคาสนามกีฬา",
    location: "ปัตตานี",
    year: null, // TODO
    system: null, // TODO: ยืนยันระบบ (โครงถัก?)
    span: "50 เมตร",
    area: null,
    steelWeight: null,
    duration: null,
    scope: null,
    summary: "โครงหลังคาคลุมสนามฟุตบอล ช่วงกว้าง 50 เมตรโดยไม่มีเสากลาง พื้นที่เล่นโล่งเต็มสนาม",
    story: [
      "หลังคาสนามฟุตบอลต้องการพื้นที่โล่งตลอดความกว้างของสนาม โครงหลังคาของโครงการนี้มีช่วงกว้าง 50 เมตรโดยไม่มีเสากลาง เป็นงานที่ต้องคุมทั้งน้ำหนักโครงสร้าง การยกติดตั้งชิ้นส่วนยาว และแรงลม",
    ],
    photos: [],
    featured: true,
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const STAGE_LABEL: Record<PhotoStage, string> = {
  before: "ก่อนเริ่มงาน",
  during: "ระหว่างก่อสร้าง",
  after: "งานเสร็จ",
};
