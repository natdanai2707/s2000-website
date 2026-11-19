import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import ViewTracker from "@/components/ViewTracker";
import { PRODUCTS, getProduct } from "@/lib/products";
import SagaIcon from "@/components/SagaIcon";
import ProjectCard from "@/components/ProjectCard";
import { getProject } from "@/lib/projects";
import { SITE_URL, COMPANY_TH, PHONE_MAIN, lineMessageUrl, AREA_SERVED } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    keywords: p.keywords,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: `${p.metaTitle} | S-2000`, description: p.metaDescription, url: `/products/${p.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = (p.projects ?? []).map(getProject).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const lineText = `สนใจ${p.nameTh} ขอใบเสนอราคาครับ (จากเว็บ)`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.nameTh,
    alternateName: p.nameEn,
    serviceType: p.nameEn,
    description: p.short,
    url: `${SITE_URL}/products/${p.slug}`,
    provider: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: COMPANY_TH, url: SITE_URL },
    areaServed: AREA_SERVED,
  };

  return (
    <main>
      <JsonLd data={serviceSchema} />
      <ViewTracker event="product_view" params={{ product_name: p.nameTh, product_category: "fabrication" }} />
      <PageHeader
        title={p.nameTh}
        desc={p.short}
        crumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "งานผลิตอื่น", href: "/products" },
          { label: p.nameTh },
        ]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
            <div>
              {p.intro.map((t, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.85 }}>
                  {t}
                </p>
              ))}
              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>เหมาะกับงาน</h2>
              <ul className="check-list">
                {p.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
              <h2 style={{ fontSize: 24, margin: "32px 0 16px" }}>ขอบเขตงานที่รับ</h2>
              <ul className="check-list">
                {p.scope.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            </div>
            <div className="sticky-col">
              <div className="card diagram-card" style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                <SagaIcon name={p.icon} size={96} />
              </div>
              <div className="card quote-box" style={{ marginTop: 0 }}>
                <h3 style={{ fontSize: 19, marginBottom: 8 }}>ข้อมูลที่ควรส่งมาเพื่อขอราคา</h3>
                <ol className="need-list">
                  {p.quoteNeeds.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ol>
                <div className="btn-row" style={{ marginTop: 16 }}>
                  <a href={lineMessageUrl(lineText)} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--navy">
                                        ส่งข้อมูลทาง LINE
                  </a>
                  <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--sm btn--outline-dark">
                    โทร <span className="num">{PHONE_MAIN.display}</span>
                  </a>
                </div>
              </div>
              <p style={{ marginTop: 24 }}>
                <Link href="/services" className="link-more">
                  ดูระบบโครงสร้างอาคาร 4 แบบ →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="section2 section2--alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <div className="container">
            <h2 style={{ fontSize: 26, marginBottom: 28 }}>ผลงาน{p.nameTh}</h2>
            <div className="grid-3">
              {related.map((x) => (
                <ProjectCard key={x.slug} project={x} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CTA lineText={lineText} />
    </main>
  );
}
