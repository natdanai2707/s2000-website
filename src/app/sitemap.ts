import type { MetadataRoute } from "next";
import { SYSTEMS } from "@/lib/systems";
import { PRODUCTS } from "@/lib/products";
import { PROJECTS } from "@/lib/projects";
import { ARTICLES } from "@/lib/blog";
import { SITE_URL, CONTENT_UPDATED } from "@/lib/site";

export const dynamic = "force-static";

// sitemap.xml สร้างอัตโนมัติจากไฟล์ข้อมูล — ระบบ งานผลิต ผลงาน บทความใหม่ถูกรวมเองตอน build
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date(CONTENT_UPDATED);
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/projects", 0.9, "weekly"),
    page("/warehouse-hatyai", 0.95, "weekly"),
    page("/services", 0.9),
    page("/products", 0.7),
    page("/blog", 0.6, "weekly"),
    page("/about", 0.6),
    page("/faq", 0.6),
    page("/contact", 0.8),
    page("/privacy", 0.2, "yearly"),
    ...SYSTEMS.map((s) => page(`/services/${s.slug}`, 0.9)),
    ...PROJECTS.map((p) => page(`/projects/${p.slug}`, 0.8)),
    ...PRODUCTS.map((p) => page(`/products/${p.slug}`, 0.7)),
    ...ARTICLES.map((a) => ({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
