import type { Metadata } from "next";
// ฟอนต์ self-host ผ่าน @fontsource (ไม่เรียก Google Fonts ตอน build/ใช้งาน)
import "@fontsource/sarabun/thai-400.css";
import "@fontsource/sarabun/thai-500.css";
import "@fontsource/sarabun/thai-600.css";
import "@fontsource/sarabun/thai-700.css";
import "@fontsource/sarabun/latin-400.css";
import "@fontsource/sarabun/latin-600.css";
import "@fontsource/prompt/thai-500.css";
import "@fontsource/prompt/thai-600.css";
import "@fontsource/prompt/latin-600.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/inter/latin-800.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Analytics, { AnalyticsBody } from "@/components/Analytics";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL, SITE_NAME, COMPANY_TH, COMPANY_EN } from "@/lib/site";

const DEFAULT_TITLE = "ผู้รับเหมาโครงสร้างเหล็ก โรงงาน โกดัง ชั้นลอย | S-2000 Steel Fabricated";
const DEFAULT_DESC = `S-2000 ผู้รับเหมาโครงสร้างเหล็กตั้งแต่ปี 2540 ออกแบบ ผลิต ติดตั้ง โรงงาน โกดัง ชั้นลอย หลังคาช่วงกว้าง ระบบ Truss, PEB, Beam, Cellular Beam โรงงานหาดใหญ่ รับงานทั่วประเทศ`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESC,
  applicationName: "S-2000",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: COMPANY_TH,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${COMPANY_TH} ${COMPANY_EN}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/images/og-image.jpg"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <Analytics />
      </head>
      <body>
        <AnalyticsBody />
        <a href="#content" className="skip-link">
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <Nav />
        <div id="content">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
