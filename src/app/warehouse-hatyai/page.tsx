import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import SagaIcon from "@/components/SagaIcon";
import { WAREHOUSE, WAREHOUSE_SITES, WAREHOUSE_FAQS } from "@/lib/warehouse";
import { SITE_URL, COMPANY_TH, LINE_ID, lineMessageUrl, OPENING_HOURS_SCHEMA } from "@/lib/site";

const TITLE = "โกดังให้เช่า หาดใหญ่ น้ำไม่ท่วม เริ่ม 90 บาท/ตร.ม. | S-2000 Warehouse";
const DESC =
  "โกดังให้เช่า คลังสินค้าให้เช่า หาดใหญ่ สงขลา น้ำไม่ท่วม 2 ทำเล: ถนนสายเอเชีย 200–1,400 ตร.ม. พร้อมเข้าอยู่ เริ่ม 90 บาท/ตร.ม./เดือน และโกดังสั่งสร้าง บ้านพรุ–บ้านไร่ ถ.กาญจนวนิช 1,000–32,000 ตร.ม. ใกล้วงแหวน ด่านสะเดา สนามบิน โทร 099-795-9526";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  keywords: [
    "โกดังให้เช่า หาดใหญ่",
    "โกดังให้เช่าหาดใหญ่",
    "คลังสินค้าให้เช่า หาดใหญ่",
    "โกดังให้เช่า สงขลา",
    "โกดังให้เช่า น้ำไม่ท่วม",
    "โกดังสั่งสร้าง หาดใหญ่",
    "built to suit warehouse hat yai",
    "warehouse for rent hat yai",
    "โกดังให้เช่า ใกล้ด่านสะเดา",
    "ห้องเย็นให้เช่า หาดใหญ่",
  ],
  alternates: { canonical: WAREHOUSE.path },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: WAREHOUSE.path,
    images: [{ url: "/images/wh-asia.webp", width: 683, height: 384, alt: "โกดังให้เช่า หาดใหญ่ S-2000 Warehouse" }],
  },
};

const lineText = "สนใจเช่าโกดัง S-2000 Warehouse หาดใหญ่ ขอรายละเอียดและนัดดูพื้นที่ครับ (จากเว็บ)";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}${WAREHOUSE.path}#business`,
      name: WAREHOUSE.nameTh,
      alternateName: WAREHOUSE.brand,
      description: DESC,
      url: `${SITE_URL}${WAREHOUSE.path}`,
      image: `${SITE_URL}/images/wh-asia.webp`,
      logo: `${SITE_URL}/images/logo-warehouse.png`,
      telephone: WAREHOUSE.phone.display,
      email: WAREHOUSE.email,
      address: { "@type": "PostalAddress", addressLocality: "อำเภอหาดใหญ่", addressRegion: "สงขลา", addressCountry: "TH" },
      areaServed: ["หาดใหญ่", "สงขลา", "ภาคใต้"],
      openingHours: OPENING_HOURS_SCHEMA,
      parentOrganization: { "@id": `${SITE_URL}/#organization`, name: COMPANY_TH },
      makesOffer: WAREHOUSE_SITES.map((s) => ({
        "@type": "Offer",
        name: `${s.type} ${s.name}`,
        description: `${s.size} · ${s.points.map((p) => p[0]).join(" · ")}`,
        ...(s.id === "asia"
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: WAREHOUSE.priceFrom,
                priceCurrency: "THB",
                unitText: "ตร.ม./เดือน",
              },
            }
          : {}),
      })),
    },
    {
      "@type": "FAQPage",
      mainEntity: WAREHOUSE_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "โกดังให้เช่า หาดใหญ่", item: `${SITE_URL}${WAREHOUSE.path}` },
      ],
    },
  ],
};

export default function WarehousePage() {
  return (
    <main>
      <JsonLd data={schema} />

      <section className="wh-hero">
        <div className="wh-hero-inner">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-warehouse.png" alt="S-2000 Warehouse" width={120} height={120} className="wh-logo" />
          <span className="kicker kicker--light">WAREHOUSE FOR RENT · HAT YAI</span>
          <h1>
            โกดังให้เช่า หาดใหญ่
            <br />
            น้ำไม่ท่วม เข้าอยู่ได้ทันที
          </h1>
          <p>
            โกดังและคลังสินค้าให้เช่า 2 ทำเลในหาดใหญ่ พร้อมเช่าตั้งแต่ 200 ตร.ม. ค่าเช่าเริ่ม{" "}
            <strong className="gold">{WAREHOUSE.priceFrom} บาท/ตร.ม./เดือน</strong> หรือสั่งสร้างตามธุรกิจสูงสุด 32,000 ตร.ม.
          </p>
          <div className="hero2-actions">
            <a href={`tel:${WAREHOUSE.phone.tel}`} className="btn btn--light">
              โทร <span className="num">{WAREHOUSE.phone.display}</span>
            </a>
            <a href={lineMessageUrl(lineText)} target="_blank" rel="noopener noreferrer" className="text-link text-link--light">
              นัดดูพื้นที่ทาง LINE →
            </a>
          </div>
        </div>
      </section>

      <section className="adv-band" aria-label="จุดเด่นโกดังให้เช่า">
        <div className="container adv-grid">
          {[
            ["drop", "น้ำไม่ท่วม", "ทั้งสองทำเลอยู่บนพื้นที่น้ำไม่ท่วม"],
            ["warehouse", "200 – 32,000 ตร.ม.", "พร้อมเช่า หรือสั่งสร้างตามขนาด"],
            ["truck", "ใกล้วงแหวนหาดใหญ่", "เชื่อมด่านสะเดาและสนามบิน"],
            ["hardhat", "สร้างโดย S-2000", "ผู้รับเหมาโครงสร้างเหล็กตั้งแต่ 2540"],
          ].map(([i, t, d]) => (
            <div key={t} className="adv-item">
              <SagaIcon name={i as "drop"} size={32} />
              <div>
                <strong>{t}</strong>
                <span>{d}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {WAREHOUSE_SITES.map((s, i) => (
        <section key={s.id} id={s.id} className={`section2${i % 2 ? " section2--alt" : ""}`}>
          <div className={`container wh-site${i % 2 ? " wh-site--rev" : ""}`}>
            <div className="wh-site-media">
              <Image src={s.image} alt={s.imageAlt} fill sizes="(max-width: 899px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
            <div>
              <span className="kicker">{s.badge}</span>
              <h2>{s.name}</h2>
              <p className="wh-type">{s.type}</p>
              <p className="wh-size num">{s.size}</p>
              <ul className="wh-points">
                {s.points.map(([t, d]) => (
                  <li key={t}>
                    <strong>{t}</strong>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <a href={lineMessageUrl(`สนใจโกดัง${s.type} ${s.name} ขอรายละเอียดครับ (จากเว็บ)`)} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--navy">
                สอบถามทำเลนี้
              </a>
            </div>
          </div>
        </section>
      ))}

      <section className="section2">
        <div className="container intro2">
          <div>
            <span className="kicker">BUILT-TO-SUIT</span>
            <h2>โกดังสั่งสร้าง ออกแบบตามธุรกิจของคุณ</h2>
          </div>
          <div>
            <p>
              ธุรกิจที่ต้องการพื้นที่เฉพาะ เช่น ศูนย์กระจายสินค้า ห้องเย็น หรือลานตู้คอนเทนเนอร์ ไม่จำเป็นต้องลงทุนสร้างเอง
              S-2000 Warehouse ออกแบบและก่อสร้างอาคารบนที่ดินของโครงการตามขนาด ความสูง ประตู และลานจอดที่คุณต้องใช้
              แล้วให้เช่าระยะยาว งานโครงสร้างเหล็กทั้งหมดผลิตโดย{" "}
              <Link href="/" className="text-link">
                S-2000 Steel Fabricated
              </Link>{" "}
              ผู้รับเหมาโครงสร้างเหล็กที่สร้างโรงงานและคลังสินค้าทั่วประเทศ
            </p>
            <div className="wh-gallery">
              <div>
                <Image src="/images/wh-banrai-site.webp" alt="พื้นที่โครงการโกดังสั่งสร้าง บ้านพรุ–บ้านไร่ หาดใหญ่" fill sizes="33vw" style={{ objectFit: "cover" }} />
              </div>
              <div>
                <Image src="/images/wh-location.webp" alt="แผนที่ทำเลโกดังให้เช่า หาดใหญ่ ใกล้ถนนวงแหวน" fill sizes="33vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2 section2--alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="head2">
            <span className="kicker">FAQ</span>
            <h2>คำถามเรื่องเช่าโกดังหาดใหญ่</h2>
          </div>
          {WAREHOUSE_FAQS.map((f, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary>
                <h3 style={{ fontSize: 18, margin: 0, color: "var(--navy)" }}>{f.q}</h3>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-answer">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="cta2">
        <div className="container cta2-grid">
          <div className="cta2-item">
            <span className="kicker kicker--light">VISIT THE SITE</span>
            <h2>นัดดูพื้นที่จริง</h2>
            <p>แจ้งขนาดพื้นที่ที่ต้องการและวันที่สะดวก ทีมงานพาชมโกดังได้ทุกวัน</p>
            <div className="cta2-actions">
              <a href={`tel:${WAREHOUSE.phone.tel}`} className="btn btn--light">
                โทร <span className="num">{WAREHOUSE.phone.display}</span>
              </a>
              <a href={`mailto:${WAREHOUSE.email}`} className="text-link text-link--light">
                {WAREHOUSE.email}
              </a>
            </div>
          </div>
          <div className="cta2-item">
            <span className="kicker kicker--light">LINE</span>
            <h2>ทักแชทสอบถาม</h2>
            <p>ส่งขนาดพื้นที่ ประเภทสินค้า และระยะเวลาเช่า ทีมงานตอบกลับพร้อมทำเลที่เหมาะ</p>
            <div className="cta2-actions">
              <a href={lineMessageUrl(lineText)} target="_blank" rel="noopener noreferrer" className="btn btn--ghost-light">
                LINE {LINE_ID}
              </a>
              {WAREHOUSE.facebook && (
                <a href={WAREHOUSE.facebook} target="_blank" rel="noopener noreferrer" className="text-link text-link--light">
                  Facebook →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
