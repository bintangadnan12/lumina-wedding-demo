import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

// Reliable Pexels wedding cinematic videos
const VIDEOS = [
  "https://videos.pexels.com/video-files/4066419/4066419-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/3048526/3048526-hd_1920_1080_25fps.mp4",
];

export function Hero() {
  const wrapRef     = useRef<HTMLDivElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(eyebrowRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
      .fromTo(titleRef.current,    { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.0 }, 0.6)
      .fromTo(descRef.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85)
      .fromTo(ctaRef.current,      { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.05)
      .fromTo(statsRef.current,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 1.25);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center text-center">

      {/* Looping video background */}
      <video className="video-hero" autoPlay muted loop playsInline poster={BRAND.heroImg}>
        {VIDEOS.map((v) => <source key={v} src={v} type="video/mp4" />)}
      </video>

      {/* Gradient overlay — champagne tinted */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(28,24,20,0.50) 0%, rgba(28,24,20,0.30) 45%, rgba(28,24,20,0.65) 100%)"
      }} />

      {/* Content */}
      <div ref={wrapRef} className="relative z-10 container-x flex flex-col items-center px-6">
        <span ref={eyebrowRef} className="eyebrow mb-6" style={{ color: "#e8cfa0", opacity: 0 }}>
          {BRAND.tagline}
        </span>

        <h1 ref={titleRef} className="font-display text-white text-[52px] leading-[1.02] md:text-[82px] lg:text-[100px] max-w-5xl" style={{ opacity: 0 }}>
          Momen Indah,
          <br />
          <em style={{ color: "#e8cfa0" }}>Abadi Selamanya</em>
        </h1>

        <span className="gold-line mt-8 mb-8 w-24 mx-auto" />

        <p ref={descRef} className="max-w-xl text-white/80 text-base md:text-lg leading-relaxed" style={{ opacity: 0 }}>
          {BRAND.heroDesc}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya ingin konsultasi gratis pernikahan saya.`)}
            target="_blank" rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gold text-white px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3 transition-colors"
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

        {/* Mini stats bar */}
        <div ref={statsRef} className="mt-14 flex items-center gap-8 md:gap-12 text-white/70" style={{ opacity: 0 }}>
          {[["500+","Pasangan Bahagia"],["7+","Tahun Pengalaman"],["4.9★","Rating Klien"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl md:text-3xl text-gold">{val}</span>
              <span className="text-[0.58rem] tracking-[0.2em] uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 z-10 flex flex-col items-center gap-1.5">
        <span className="eyebrow text-white/40" style={{ fontSize: "0.5rem" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
