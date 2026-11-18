import Image from "next/image";
import type { Article } from "@/lib/blog";
import SystemDiagram from "@/components/SystemDiagram";

// ปกบทความ: รูปจริงถ้ามี ไม่มีใช้ภาพลายเส้นระบบโครงสร้าง (กล่อง parent ต้อง position: relative)
export default function ArticleCover({ article, sizes, priority }: { article: Article; sizes: string; priority?: boolean }) {
  if (article.cover) {
    return <Image src={article.cover} alt={article.coverAlt ?? article.title} fill priority={priority} sizes={sizes} style={{ objectFit: "cover" }} />;
  }
  return (
    <div className="diagram-fill">
      <SystemDiagram slug={article.coverSystem ?? "peb"} />
    </div>
  );
}
