import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import ViewTracker from "@/components/ViewTracker";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, getProject, STAGE_LABEL, CATEGORY_LABEL, type PhotoStage, type ProjectPhoto } from "@/lib/projects";
import { getSystem } from "@/lib/systems";
import { SITE_URL, COMPANY_TH } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `ผลงาน${p.name}`;
  const cover = p.photos.find((x) => x.stage === "after") ?? p.photos[0];
  return {
    title,
    description: `${p.summary} โดย S-2000 ผู้รับเหมาโครงสร้างเหล็ก`,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: `${title} | S-2000`,
      description: p.summary,
      url: `/projects/${p.slug}`,
      ...(cover ? { images: [{ url: cover.src, alt: cover.alt }] } : {}),
    },
  };
}

const STAGES: PhotoStage[] = ["before", "during", "after"];

function Gallery({ photos }: { photos: ProjectPhoto[] }) {
  return (
    <div className="gallery2">
      {photos.map((g) => (
        <div key={g.src} className="gallery2-item">
          <Image src={g.src} alt={g.alt} fill loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const system = p.system ? getSystem(p.system) : null;
  const facts = (
    [
      ["ประเภทอาคาร", p.buildingType],
      ["ที่ตั้ง", p.location],
      ["ปีที่แล้วเสร็จ", p.year ? String(p.year) : null],
      ["ระบบโครงสร้าง", system ? `${system.nameTh} (${system.nameEn})` : null],
      ["ช่วงกว้าง", p.span],
      ["พื้นที่", p.area],
      ["น้ำหนักเหล็ก", p.steelWeight],
      ["ระยะเวลา", p.duration],
      ["ขอบเขตงาน", p.scope],
    ] as [string, string | null][]
  ).filter(([, v]) => Boolean(v)) as [string, string][];

  const cover = p.photos.find((x) => x.stage === "after") ?? p.photos[0];
  const rest = p.photos.filter((x) => x !== cover);
  const hasStages = new Set(rest.map((x) => x.stage)).size > 1;
  const others = PROJECTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.name,
    description: p.summary,
    url: `${SITE_URL}/projects/${p.slug}`,
    ...(p.location ? { locationCreated: { "@type": "Place", name: p.location } } : {}),
    creator: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: COMPANY_TH },
    ...(p.photos.length ? { image: p.photos.map((x) => `${SITE_URL}${x.src}`) } : {}),
  };

  return (
    <main>
      <JsonLd data={schema} />
      <ViewTracker event="project_view" params={{ project_name: p.name }} />
      <PageHeader
        title={p.name}
        desc={p.summary}
        crumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ผลงาน", href: "/projects" },
          { label: p.name },
        ]}
      />

      <section className="section section--tight">
        <div className="container">
          {cover && (
            <div className="proj-hero">
              <Image src={cover.src} alt={cover.alt} fill priority sizes="(max-width: 1200px) 100vw, 1200px" style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="grid-2" style={{ gap: 56, alignItems: "start", marginTop: cover ? 48 : 0 }}>
            <div>
              <span className="kicker">{CATEGORY_LABEL[p.category]}</span>
              <p style={{ fontSize: 18, lineHeight: 1.85 }}>{p.summary}</p>
              {p.story.map((t, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.85 }}>
                  {t}
                </p>
              ))}
              {system && (
                <p>
                  ระบบที่ใช้:{" "}
                  <Link href={`/services/${system.slug}`} className="text-link">
                    {system.nameTh} →
                  </Link>
                </p>
              )}
            </div>
            <div>
              <div className="table-scroll">
                <table className="spec-table">
                  <tbody>
                    {facts.map(([k, v]) => (
                      <tr key={k}>
                        <td>{k}</td>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {rest.length > 0 && (
        <section className="section2 section2--alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <div className="container">
            {hasStages ? (
              STAGES.map((stage) => {
                const photos = rest.filter((x) => x.stage === stage);
                if (!photos.length) return null;
                return (
                  <div key={stage} style={{ marginBottom: 40 }}>
                    <h2 style={{ fontSize: 22, marginBottom: 20 }}>{STAGE_LABEL[stage]}</h2>
                    <Gallery photos={photos} />
                  </div>
                );
              })
            ) : (
              <Gallery photos={rest} />
            )}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">ผลงานอื่น</span>
              <h2>โครงการอื่นของ S-2000</h2>
            </div>
            <div className="grid-3">
              {others.map((x) => (
                <ProjectCard key={x.slug} project={x} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}
