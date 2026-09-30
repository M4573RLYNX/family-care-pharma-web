import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
    return (
        <Container className="py-24 md:py-32">
            <Eyebrow>404</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight">We couldn&apos;t find that page.</h1>
            <p className="mt-4 max-w-md text-lg text-muted">It may have moved. Try the home page, or get in touch if you need help.</p>
            <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/">Go to home page</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">Contact us</ButtonLink>
            </div>
        </Container>
    );
}
