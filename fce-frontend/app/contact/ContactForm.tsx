"use client";

import { useState, type FormEvent } from "react";
import { Input, TextArea, TextField, Label, Button } from "@heroui/react";
import { site } from "@/lib/site";

const topics = ["General question", "Prescription", "Wholesale order"];

// No backend yet: the form builds a pre-filled email in the visitor's mail app.
export default function ContactForm() {
    const [topic, setTopic] = useState(topics[0]);
    const [sent, setSent] = useState(false);

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`${topic}: website enquiry`)}&body=${encodeURIComponent(body)}`;
        setSent(true);
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6 rounded-xl border border-line bg-white p-6 md:p-8">
            <fieldset>
                <legend className="text-sm font-medium">What&apos;s this about?</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                    {topics.map((t) => (
                        <label
                            key={t}
                            className="cursor-pointer rounded-lg px-4 py-2 text-[15px] ring-1 ring-inset ring-line transition-colors hover:ring-ink/25 has-[:checked]:bg-brand-soft has-[:checked]:text-brand has-[:checked]:ring-brand has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand"
                        >
                            <input
                                type="radio"
                                name="topic"
                                value={t}
                                checked={topic === t}
                                onChange={() => setTopic(t)}
                                className="sr-only"
                            />
                            {t}
                        </label>
                    ))}
                </div>
            </fieldset>

            <div className="grid gap-5 md:grid-cols-2">
                <TextField name="name" isRequired>
                    <Label>Full name</Label>
                    <Input placeholder="Your name" autoComplete="name" />
                </TextField>
                <TextField name="email" type="email" isRequired>
                    <Label>Email</Label>
                    <Input placeholder="you@example.com" autoComplete="email" />
                </TextField>
            </div>

            <TextField name="message" isRequired>
                <Label>Message</Label>
                <TextArea
                    placeholder={topic === "Wholesale order" ? "Products, quantities and delivery location" : "How can we help?"}
                    rows={6}
                />
            </TextField>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted" aria-live="polite">
                    {sent
                        ? `Your email app should now be open. If not, email ${site.email}.`
                        : "Opens your email app with the message ready to send."}
                </p>
                <Button type="submit" variant="primary" size="lg" className="shrink-0">
                    Continue to email
                </Button>
            </div>
        </form>
    );
}
