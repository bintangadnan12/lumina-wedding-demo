import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

const VIDEO_SRC = "https://videos.pexels.com/video-files/4066419/4066419-hd_1920_1080_25fps.mp4";
const VIDEO_FALLBACK = "https://videos.pexels.com/video-files/3048526/3048526-hd_1920_1080_25fps.mp4";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(eyebrowRef.current,  { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
      .fromTo(headlineRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9 }, 0.5)
      .fromTo(descRef.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.75)
      .fromTo(ctaRef.current,      { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 0.95);
  }, []);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden flex items-end justify-start"
    >
      {/* Looping video background */}
      <video
        className="video-hero"
        autoPlay
        muted
        loop
        playsInline
        poster={BRAND.heroImg}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        <source src={VIDEO_FALLBACK} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="video-overlay-lumina" />

      {/* Content — bottom-left aligned for premium asymmetric feel */}
      <div className="relative z-10 container-x pb-24 md:pb-32">
        <span
          ref={eyebrowRef}
          className="eyebrow"
          style={{ color: "#e8cfa0", opacity: 0 }}
        >
          {BRAND.tagline}
        </span>

        <h1
          ref={headlineRef}
          className="font-display text-white mt-5 text-[52px] leading-[1.02] md:text-[80px] lg:text-[96px] max-w-3xl tracking-tight"
          style={{ opacity: 0 }}
        >
          Momen Indah,
          <br />
          <em style={{ color: "#e8cfa0", fontStyle: "italic" }}>Abadi Selamanya</em>
        </h1>

        <p
          ref={descRef}
          className="mt-7 max-w-lg text-white/80 text-base md:text-lg leading-relaxed"
          style={{ opacity: 0 }}
        >
          {BRAND.heroDesc}
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
          style={{ opacity: 0 }}
        >
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis pernikahan saya.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Konsultasi Gratis →
          </a>
          <a href="#galeri" className="btn-outline text-white border-white/70 hover:text-white">
            Lihat Karya Kami
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 right-10 text-white/60 z-10 flex flex-col items-center gap-2"
        aria-label="Scroll ke bawah"
      >
        <span className="eyebrow text-white/50" style={{ fontSize: "0.55rem" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
