"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "Web Sitesi", "Marka Kimliği", "SEO", "Sosyal Medya",
  "Mobil Uygulama", "Fotoğraf & Video", "Dijital Dönüşüm",
  "Web Sitesi", "Marka Kimliği", "SEO", "Sosyal Medya",
  "Mobil Uygulama", "Fotoğraf & Video", "Dijital Dönüşüm",
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const halfW = track.scrollWidth / 2;
    let animId: number;

    function tick() {
      posRef.current -= 0.6;
      if (Math.abs(posRef.current) >= halfW) posRef.current = 0;
      track!.style.transform = `translateX(${posRef.current}px)`;
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="border-t border-b overflow-hidden py-4" style={{ borderColor: "rgba(255,255,255,0.08)", background: "#1A1A1A" }}>
      <div ref={trackRef} className="flex whitespace-nowrap w-max">
        {ITEMS.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-12 px-12 text-xs font-display font-semibold tracking-widest uppercase" style={{ color: "#888" }}>
            {item}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
