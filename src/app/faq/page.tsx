import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import { FAQS, stripTags } from "@/lib/faq";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย งานโครงสร้างเหล็ก โรงงาน โกดัง",
  description:
    "คำถามที่พบบ่อยเกี่ยวกับงานโครงสร้างเหล็กกับ S-2000 รับงานประเภทไหน รับต่างจังหวัดไหม ขอราคาต้องเตรียมอะไร เลือกระบบ Truss PEB Beam Cellular Beam อย่างไร",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "คำถามที่พบบ่อย | S-2000 ผู้รับเหมาโครงสร้างเหล็ก",
    url: "/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={faqSchema} />
      <PageHeader
        title="คำถามที่พบบ่อย"
        desc="คำถามที่เจ้าของโครงการ ผู้รับเหมาหลัก และวิศวกรถามเราบ่อย ถ้าไม่พบคำตอบ ทัก LINE @s-2000 ได้เลย"
        crumbs={[{ label: "หน้าแรก", href: "/" }, { label: "คำถามที่พบบ่อย" }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          {FAQS.map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <h2>{f.q}</h2>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer" dangerouslySetInnerHTML={{ __html: f.a }} />
            </details>
          ))}
        </div>
      </section>

      <CTA title="ยังมีคำถามอื่นอีกไหม?" />
    </main>
  );
}
