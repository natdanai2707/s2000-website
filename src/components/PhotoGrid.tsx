import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery";

export default function PhotoGrid({ photos }: { photos: GalleryPhoto[] }) {
  return (
    <div className="photo-grid">
      {photos.map((g) => (
        <div key={g.src} className="photo-grid-item">
          <Image src={g.src} alt={g.alt} fill loading="lazy" sizes="(max-width: 767px) 50vw, 25vw" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}
