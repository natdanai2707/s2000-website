"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SYSTEMS } from "@/lib/systems";
import { PRODUCTS } from "@/lib/products";
import { lineMessageUrl, LINE_MSG, PHONE_MAIN } from "@/lib/site";
import { IconLine, IconPhone } from "@/components/Icons";
import Logo from "@/components/Logo";

const navItems = [
  { th: "หน้าแรก", href: "/" },
  { th: "ระบบโครงสร้าง", href: "/services", mega: true },
  { th: "ผลงาน", href: "/projects" },
  { th: "งานผลิตอื่น", href: "/products" },
  { th: "บทความ", href: "/blog" },
  { th: "เกี่ยวกับเรา", href: "/about" },
  { th: "ติดต่อเรา", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <nav className={`nav${compact ? " nav--compact" : ""}`} aria-label="เมนูหลัก">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" aria-label="S-2000 กลับหน้าแรก">
            <Logo height={compact ? 36 : 44} />
          </Link>

          <ul className="nav-links">
            {navItems.map((item) =>
              item.mega ? (
                <li
                  key={item.href}
                  className={`nav-item${megaOpen ? " nav-item--open" : ""}`}
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link${isActive(item.href) ? " nav-link--active" : ""}`}
                    aria-expanded={megaOpen}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.th}
                    <svg className="nav-caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </Link>
                  <div className="mega" role="menu">
                    <div className="mega-grid">
                      {SYSTEMS.map((s) => (
                        <Link key={s.slug} href={`/services/${s.slug}`} className="mega-link" role="menuitem">
                          <strong>{s.nameTh}</strong>
                          <span>{s.tagline}</span>
                        </Link>
                      ))}
                      {PRODUCTS.map((p) => (
                        <Link key={p.slug} href={`/products/${p.slug}`} className="mega-link" role="menuitem">
                          <strong>{p.nameTh}</strong>
                          <span>{p.nameEn}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="mega-footer">
                      <Link href="/services" className="link-more">
                        เปรียบเทียบ 4 ระบบโครงสร้าง →
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link${isActive(item.href) ? " nav-link--active" : ""}`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.th}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="nav-cta">
            <a href={lineMessageUrl(LINE_MSG.quote)} target="_blank" rel="noopener noreferrer" className="btn btn--line">
              <IconLine size={16} />
              ส่งแบบขอราคา
            </a>
          </div>

          <button
            className={`nav-burger${mobileOpen ? " nav-burger--open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " mobile-menu--open" : ""}`} aria-hidden={!mobileOpen}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`mobile-link${isActive(item.href) ? " mobile-link--active" : ""}`}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.th}
              </Link>
              {item.mega &&
                SYSTEMS.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="mobile-sublink">
                    {s.nameTh}
                  </Link>
                ))}
            </li>
          ))}
        </ul>
        <div className="mobile-menu-cta" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <a href={lineMessageUrl(LINE_MSG.quote)} target="_blank" rel="noopener noreferrer" className="btn btn--line btn--lg">
            <IconLine size={18} />
            ส่งแบบขอราคาทาง LINE
          </a>
          <a href={`tel:${PHONE_MAIN.tel}`} className="btn btn--primary btn--lg">
            <IconPhone size={18} />
            โทร <span className="num">{PHONE_MAIN.display}</span>
          </a>
        </div>
      </div>
    </>
  );
}
