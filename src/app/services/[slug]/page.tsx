import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import ViewTracker from "@/components/ViewTracker";
import SystemDiagram from "@/components/SystemDiagram";
import ProjectCard from "@/components/ProjectCard";
import { SYSTEMS, getSystem } from "@/lib/systems";
import { PROJECTS } from "@/lib/projects";
import { SITE_URL, COMPANY_TH, PHONE_MAIN, lineMessageUrl, AREA_SERVED } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SYSTEMS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSystem(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.metaTitle} | S-2000`, description: s.metaDescription, url: `/services/${s.slug}` },
  };
}

export default async function SystemPage({ params }: Props) {
  const { slug } = await params;
  const s = getSystem(slug);
  if (!s) notFound();

  const projects = PROJECTS.filter((p) => p.system === s.slug);
  const others = SYSTEMS.filter((x) => x.slug !== s.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${s.nameTh} (${s.nameEn})`,
    serviceType: s.nameEn,
    description: s.short,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: COMPANY_TH, url: SITE_URL },
    areaServed: AREA_SERVED,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <ViewTracker event="service_view" params={{ service_name: s.nameEn }} />

      <PageHeader
        title={`${s.nameTh} (${s.nameEn})`}
        desc={s.short}
        crumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ระบบโครงสร้าง", href: "/services" },
          { label: s.nameTh },
        ]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
            <div>
              {s.intro.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.85 }}>
                  {p}
                </p>
              ))}

              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>เหมาะกับงานแบบไหน</h2>
              <ul className="check-list">
                {s.bestFor.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>

              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>จุดแข็ง</h2>
              <ul className="check-list">
                {s.strengths.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>

              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>ข้อควรรู้ก่อนเลือก</h2>
              <ul className="note-list">
                {s.considerations.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>

            <div className="sticky-col">
              <div className="card diagram-card">
                <SystemDiagram slug={s.slug} />
              </div>
              <h2 style={{ fontSize: 22, margin: "24px 0 16px" }}>ข้อมูลระบบ</h2>
              <div className="table-scroll">
                <table className="spec-table">
                  <tbody>
                    {s.specs.map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="card quote-box">
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>ขอราคางาน{s.nameTh}</h3>
                <p style={{ fontSize: 15, color: "var(--gray)", marginBottom: 16 }}>
                  ส่งแบบหรือขนาดอาคาร (กว้าง × ยาว × สูง) และที่ตั้งโครงการ ทีมงานเสนอราคาพร้อมแผนเวลา
                </p>
                <div className="btn-row">
                  <a
                    href={lineMessageUrl(`สนใจงาน${s.nameTh} (${s.nameEn}) ขอใบเสนอราคา จะส่งแบบ/ขนาดให้ครับ (จากเว็บ)`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm btn--navy"
                  >
                                        ส่งแบบทาง LINE
                  </a>
                  <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--sm btn--outline-dark">
                    โทร <span className="num">{PHONE_MAIN.display}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section section--alt">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">ผลงานระบบนี้</span>
              <h2>ผลงาน{s.nameTh}</h2>
            </div>
            <div className="grid-3">
              {projects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-head">
            <span className="eyebrow">คำถามที่พบบ่อย</span>
            <h2>คำถามเรื่อง{s.nameTh}</h2>
          </div>
          {s.faqs.map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <h3 style={{ fontSize: 18, margin: 0, color: "var(--navy)" }}>{f.q}</h3>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer">{f.a}</div>
            </details>
          ))}

          <h2 style={{ fontSize: 22, margin: "48px 0 16px" }}>ระบบอื่นที่ควรเทียบ</h2>
          <ul className="check-list">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
                  {o.nameTh}
                </Link>{" "}
                · {o.tagline}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA lineText={`สนใจงาน${s.nameTh} (${s.nameEn}) ขอใบเสนอราคา จะส่งแบบ/ขนาดให้ครับ (จากเว็บ)`} />
    </main>
  );
}
