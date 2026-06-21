import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

export function Hero() {
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const lineRef    = useRef<HTMLSpanElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
      .fromTo(titleRef.current,   { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0 }, 0.6)
      .fromTo(lineRef.current,    { scaleX: 0 },         { scaleX: 1, duration: 0.8 },        0.9)
      .fromTo(descRef.current,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
      .fromTo(ctaRef.current,     { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.2)
      .fromTo(statsRef.current,   { opacity: 0 },        { opacity: 1, duration: 0.8 },        1.4);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center text-center">

      {/* Dark base while video loads */}
      <div className="absolute inset-0" style={{ background: "#1C1814" }} />

      {/* Cinematic video — preload aggressively for fast start */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay muted loop playsInline
        preload="auto"
      >
        <source src="/video/wedding.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(28,24,20,0.52) 0%, rgba(28,24,20,0.28) 42%, rgba(28,24,20,0.68) 100%)"
      }} />

      {/* Content */}
      <div className="relative z-10 container-x flex flex-col items-center">
        <span ref={eyebrowRef} className="eyebrow text-gold mb-6" style={{ opacity: 0 }}>
          {BRAND.tagline}
        </span>

        <h1 ref={titleRef} className="font-display text-white text-[52px] leading-[1.02] md:text-[80px] lg:text-[100px] max-w-5xl" style={{ opacity: 0 }}>
          Momen Indah,
          <br />
          <em style={{ color: "#e8cfa0" }}>Abadi Selamanya</em>
        </h1>

        <span
          ref={lineRef}
          className="block my-8 mx-auto h-[1px] w-24"
          style={{ background: "linear-gradient(to right, transparent, #C49A5A, transparent)", transformOrigin: "center", transform: "scaleX(0)" }}
        />

        <p ref={descRef} className="max-w-xl text-white/82 text-base md:text-lg leading-relaxed" style={{ opacity: 0 }}>
          {BRAND.heroDesc}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis pernikahan saya.`)}
            target="_blank" rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gold text-white px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3"
          >
            <span className="absolute inset-0 bg-ink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative">Konsultasi Gratis</span>
            <span className="relative">→</span>
          </a>
          <a href="#galeri"
            className="group relative overflow-hidden border border-white/70 text-white px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3"
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative group-hover:text-ink transition-colors">Lihat Portofolio</span>
          </a>
        </div>

        <div ref={statsRef} className="mt-14 flex items-center gap-8 md:gap-14 text-white/60" style={{ opacity: 0 }}>
          {[["500+","Pasangan Bahagia"],["7+","Tahun Pengalaman"],["4.9★","Rating Klien"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span className="font-display text-[1.75rem] md:text-[2rem] text-gold leading-none">{val}</span>
              <span className="eyebrow text-white/45" style={{ fontSize: "0.55rem" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10 flex flex-col items-center gap-1.5">
        <span className="eyebrow text-white/35" style={{ fontSize: "0.5rem" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
