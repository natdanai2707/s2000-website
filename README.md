# เว็บไซต์ S-2000 Steel Fabricated — s2000steelfab.com

Next.js 15 (App Router, TypeScript, static export) ต่อยอดจากโค้ดเว็บเหล็กใต้ (southsteel-website)
Deploy บน **Netlify** (build `npm run build` → publish `out/`)

## เริ่มพัฒนา

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # สร้าง static site ใน out/
```

## แก้ข้อมูลที่ไหน

| ไฟล์ | เนื้อหา |
|---|---|
| `src/lib/site.ts` | ⭐ ชื่อบริษัท เบอร์ LINE อีเมล ที่อยู่ พิกัด ปีก่อตั้ง (ช่องที่ยังขาดมี `TODO`) |
| `src/lib/projects.ts` | ⭐ ผลงานรายโครงการ: ประเภทอาคาร ช่วงกว้าง พื้นที่ น้ำหนักเหล็ก ระยะเวลา รูปก่อน/ระหว่าง/หลัง |
| `src/lib/systems.ts` | ระบบโครงสร้าง 4 หน้า (Truss, PEB, Beam, Cellular Beam) |
| `src/lib/products.ts` | งานผลิตอื่น (ชั้นลอย ถังน้ำมัน ถังน้ำยาง Overhead Crane) |
| `src/lib/blog.ts` | บทความ |
| `src/lib/faq.ts` | คำถามที่พบบ่อย |

ทุกไฟล์ข้อมูลสร้างหน้าเว็บ, sitemap.xml, llms.txt และ schema ให้อัตโนมัติ

## เพิ่มผลงาน

1. วางรูป WebP (กว้าง ≤1920px) ที่ `public/images/projects/<slug>/`
2. ใน `projects.ts` เติมตัวเลข (ช่องที่เป็น `null` จะไม่แสดงบนเว็บ) และใส่รูปใน `photos`
   พร้อม `stage: "before" | "during" | "after"`
3. รูป `after` ตัวแรกใช้เป็นปกการ์ดและ OG image ของโครงการ

## ข้อห้ามเนื้อหา

- ห้ามเขียนว่า "ไม่ใช้ผู้รับเหมาช่วง" — บริษัทใช้ทีมช่างพันธมิตรร่วมกับทีมตัวเอง

## Analytics

ตั้งค่าใน Netlify → Environment variables แล้ว deploy ใหม่: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`,
`NEXT_PUBLIC_FB_PIXEL_ID`, `NEXT_PUBLIC_LINE_TAG_ID` (Consent Mode v2 เริ่มที่ denied จนผู้ใช้กดยอมรับ)

Events: `phone_click`, `line_click`, `service_view`, `project_view`, `product_view`, `blog_view`

## Conversion หลัก

1. ส่งแบบขอราคาทาง LINE (ข้อความตั้งต้นต่างกันตามหน้า) 2. โทร 3. นัดดูหน้างาน (LINE)
