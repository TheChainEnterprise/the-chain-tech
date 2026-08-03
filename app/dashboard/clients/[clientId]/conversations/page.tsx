"use client";

import { useParams } from "next/navigation";
import BackButton from "@/components/BackButton";
import ConversationsView from "@/components/dashboard/ConversationsView";

export default function ClientConversationsPage() {
    const { clientId } = useParams();

    return (
        <div className="p-10">
            <BackButton
                href={`/dashboard/clients/${clientId}`}
                label="Back to Client"
            />

            <h1 className="mt-6 text-5xl font-black">
                Conversations
            </h1>
            <p className="mt-2 text-zinc-400">
                Client ID:
                <span className="ml-2 text-cyan-400">{clientId}</span>
            </p>

            <div className="mt-10">
                <ConversationsView tenantId={clientId as string} />
            </div>
        </div>
    );
}
