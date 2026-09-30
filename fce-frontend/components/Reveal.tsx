"use client";

import { useEffect, useRef, type ComponentProps } from "react";

type RevealProps = ComponentProps<"div"> & { delay?: number };

// Fades children up once they scroll into view. Styles live in globals.css
// (.reveal), which only hide content when JS is running and motion is allowed.
export default function Reveal({ delay = 0, className = "", style, ...props }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    observer.disconnect();
                }
            },
            { rootMargin: "0px 0px -10% 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={{ ...style, ["--reveal-delay" as string]: `${delay}ms` }}
            {...props}
        />
    );
}
