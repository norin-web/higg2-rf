import { img } from "../utils/img";

/** Flat app screen inside a CSS bezel (no plate, no shadow, no hover motion). */
export default function Phone({ src, alt, className = "", eager }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <img src={img(src)} alt={alt} width={402} height={874} loading={eager ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}
