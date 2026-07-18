"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";

export default function ClientPage() {
    const { clientId } = useParams();

    const sections = [
        {
            title: "Business Profile",
            description: "Edit company information",
            href: "business",
        },
        {
            title: "Services",
            description: "Manage products and pricing",
            href: "services",
        },
        {
            title: "FAQs",
            description: "Teach Val common questions",
            href: "faq",
        },
        {
            title: "Knowledge Base",
            description: "Documents & business knowledge",
            href: "knowledge",
        },
        {
            title: "Website Import",
            description: "Import website automatically",
            href: "import",
        },
        {
            title: "AI Behaviour",
            description: "Control Val's personality",
            href: "behaviour",
        },
        {
            title: "Integrations",
            description: "Google Calendar, WhatsApp & Email",
            href: "integrations",
        },
        {
            title: "Widget",
            description: "Copy the AI widget installation code",
            href: "widget",
        },
    ];

    return (
        <div className="p-10">

            <BackButton
                href="/dashboard/clients"
                label="Back to AI Management"
            />

            <h1 className="mt-6 text-5xl font-black">
                AI Management
            </h1>

            <p className="mt-2 text-zinc-400">
                Client ID:
                <span className="ml-2 text-cyan-400">
                    {clientId}
                </span>
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

                {sections.map((section) => (

                    <Link
                        key={section.href}
                        href={`/dashboard/clients/${clientId}/${section.href}`}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-400 hover:bg-zinc-800"
                    >
                        <h2 className="text-2xl font-bold">
                            {section.title}
                        </h2>

                        <p className="mt-3 text-zinc-400">
                            {section.description}
                        </p>

                    </Link>

                ))}

            </div>

        </div>
    );
}