import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ThematicTag } from "./ThematicTag";

interface ThematicRowProps {
  items: string[];
  direction: "left" | "right";
  speed?: number;
  delay?: number;
}

export function ThematicRow({ items, direction, speed = 50, delay = 0 }: ThematicRowProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerInnerRef.current) {
        scrollerInnerRef.current.appendChild(duplicatedItem);
      }
    });

    const scrollSpeed = direction === "left" ? -speed : speed;
    let offset = 0;
    let paused = false;
    
    const animate = () => {
      if (!scrollerInnerRef.current || paused) return;
      offset = (offset + 0.5) % scrollerInnerRef.current.offsetWidth;
      scrollerInnerRef.current.style.transform = `translateX(${direction === "left" ? -offset : offset}px)`;
      requestAnimationFrame(animate);
    };

    // Add pause on hover
    const handleMouseEnter = () => {
      paused = true;
    };

    const handleMouseLeave = () => {
      paused = false;
      requestAnimationFrame(animate);
    };

    scrollerRef.current.addEventListener("mouseenter", handleMouseEnter);
    scrollerRef.current.addEventListener("mouseleave", handleMouseLeave);

    setTimeout(() => {
      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    }, delay);

    return () => {
      if (scrollerRef.current) {
        scrollerRef.current.removeEventListener("mouseenter", handleMouseEnter);
        scrollerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [direction, speed, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      ref={scrollerRef}
      className="group relative flex max-w-full overflow-hidden py-4"
    >
      <div
        ref={scrollerInnerRef}
        className="flex flex-nowrap gap-4 [--gap:1rem]"
      >
        {items.map((item, idx) => (
          <ThematicTag key={`${item}-${idx}`} title={item} />
        ))}
      </div>
    </motion.div>
  );
}