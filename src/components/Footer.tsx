import Link from "next/link";
import {
  COMPANY_TH,
  COMPANY_EN,
  FACEBOOK_URL,
  LINE_ID,
  LINE_URL,
  OPENING_HOURS_TH,
  EMAIL,
  PHONE_MAIN,
  OFFICE,
  SISTER,
  BRANCHES,
  YEARS_IN_BUSINESS,
  FOUNDED_YEAR_BE,
} from "@/lib/site";
import { SYSTEMS } from "@/lib/systems";
import { PRODUCTS } from "@/lib/products";
import Logo from "@/components/Logo";

const menuLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "ระบบโครงสร้าง", href: "/services" },
  { label: "ผลงาน", href: "/projects" },
  { label: "โกดังให้เช่า หาดใหญ่", href: "/warehouse-hatyai" },
  { label: "งานผลิตอื่น", href: "/products" },
  { label: "บทความ", href: "/blog" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "คำถามที่พบบ่อย", href: "/faq" },
  { label: "ติดต่อเรา", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear() + 543;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" aria-label="S-2000 กลับหน้าแรก" style={{ display: "inline-block", marginBottom: 16 }}>
              <Logo light height={48} />
            </Link>
            <p>
              ผู้รับเหมาโครงสร้างเหล็กตั้งแต่ พ.ศ. {FOUNDED_YEAR_BE} ({YEARS_IN_BUSINESS} ปี) ออกแบบ ผลิต และติดตั้ง
              โรงงาน โกดัง ชั้นลอย และหลังคาช่วงกว้าง โรงงานที่หาดใหญ่ รับงานทั่วประเทศ
            </p>
            <p style={{ marginTop: 12 }}>
              บริษัทในเครือ:{" "}
              <a href={SISTER.url} target="_blank" rel="noopener" style={{ textDecoration: "underline" }}>
                {SISTER.name}
              </a>{" "}
              จัดหาเหล็กและตัดเลเซอร์ CNC
            </p>
          </div>

          <div>
            <h4>เมนู</h4>
            <ul>
              {menuLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>ระบบโครงสร้าง</h4>
            <ul>
              {SYSTEMS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.nameTh}</Link>
                </li>
              ))}
            </ul>
            <h4 style={{ marginTop: 24 }}>งานผลิตอื่น</h4>
            <ul>
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`}>{p.nameTh}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <Link href="/warehouse-hatyai" className="footer-wh" aria-label="โกดังให้เช่า หาดใหญ่ S-2000 Warehouse">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-warehouse.png" alt="S-2000 Warehouse" width={56} height={56} />
              <span>
                <strong>S-2000 Warehouse</strong>
                โกดังให้เช่า หาดใหญ่ →
              </span>
            </Link>
            <h4>ติดต่อเรา</h4>
            <div className="footer-branch">
              <strong>{OFFICE.name}</strong>
              <address>{OFFICE.addr}</address>
            </div>
            {BRANCHES.map((b) => (
              <div key={b.name} className="footer-branch">
                <strong>{b.name}</strong>
                <span className="num"> โทร {b.phone.display}</span>
              </div>
            ))}
            <ul>
              <li>
                โทร:{" "}
                <a href={`tel:${PHONE_MAIN.tel}`} className="num">
                  {PHONE_MAIN.display}
                </a>
              </li>
              <li>
                LINE:{" "}
                <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
                  {LINE_ID}
                </a>
              </li>
              {FACEBOOK_URL && (
                <li>
                  Facebook:{" "}
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                    S-2000
                  </a>
                </li>
              )}
              {EMAIL && (
                <li>
                  อีเมล: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </li>
              )}
              <li>เปิดทำการ {OPENING_HOURS_TH}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {year} {COMPANY_TH} · {COMPANY_EN} ·{" "}
            <Link href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
          <div>
            <span className="num">HAT YAI · SONGKHLA · THAILAND</span> ·{" "}
            <a href="https://iconsaga.com" target="_blank" rel="noopener" style={{ color: "inherit" }}>
              Icons by IconSaga · iconsaga.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
