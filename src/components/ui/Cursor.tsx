"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const expand = () => cursor.classList.add("expanded");
    const shrink = () => cursor.classList.remove("expanded");

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id="cursor" />
      <style>{`
        #cursor {
          position: fixed;
          width: 10px;
          height: 10px;
          background: #C8F135;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s, width 0.2s, height 0.2s;
          mix-blend-mode: difference;
        }
        #cursor.expanded {
          width: 40px;
          height: 40px;
        }
        @media (hover: none) and (pointer: coarse) {
          #cursor { display: none; }
          body { cursor: auto; }
        }
        body { cursor: none; }
        a, button { cursor: none; }
      `}</style>
    </>
  );
}
