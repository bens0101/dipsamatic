// src/components/Reveal.jsx
import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  animation = "fade-up", // "fade-up" | "fade-left" | "fade-right"
  className = "",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate once
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = `reveal reveal-${animation} ${
    isVisible ? "is-visible" : ""
  } ${className}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}