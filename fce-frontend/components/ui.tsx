import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ className = "", ...props }: ComponentProps<"div">) {
    return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`} {...props} />;
}

const buttonStyles = {
    primary: "bg-brand text-white hover:bg-brand-hover",
    secondary: "bg-white text-ink ring-1 ring-inset ring-line hover:ring-ink/25",
    inverse: "bg-white text-brand hover:bg-brand-soft",
};

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: keyof typeof buttonStyles };

// Internal links go through next/link; tel:/mailto: links are plain anchors.
export function ButtonLink({ variant = "primary", className = "", href, ...props }: ButtonLinkProps) {
    const classes = `inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-[15px] font-medium transition-colors ${buttonStyles[variant]} ${className}`;
    if (typeof href === "string" && /^(tel|mailto):/.test(href)) {
        return <a href={href} className={classes} {...(props as ComponentProps<"a">)} />;
    }
    return <Link href={href} className={classes} {...props} />;
}

export function Eyebrow({ children }: { children: ReactNode }) {
    return <p className="text-sm font-medium text-brand">{children}</p>;
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
    return (
        <header className="border-b border-line bg-[radial-gradient(50rem_25rem_at_0%_0%,#dbe8ff_0%,transparent_60%)] bg-subtle">
            <Container className="py-16 md:py-20">
                <div className="hero-in">
                    <Eyebrow>{eyebrow}</Eyebrow>
                </div>
                <h1 className="hero-in mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl" style={{ ["--delay" as string]: "100ms" }}>
                    {title}
                </h1>
                {intro && (
                    <p className="hero-in mt-5 max-w-2xl text-lg leading-relaxed text-muted" style={{ ["--delay" as string]: "200ms" }}>
                        {intro}
                    </p>
                )}
            </Container>
        </header>
    );
}
