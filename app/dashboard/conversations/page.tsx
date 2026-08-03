"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ConversationsView from "@/components/dashboard/ConversationsView";

// Your own company's tenant ID — same one set as DEFAULT_TENANT_ID on Render.
const THE_CHAIN_TENANT_ID = "The-Chain-Technologies";

export default function ConversationsPage() {
    return (
        <DashboardLayout>
            <div className="space-y-8">
                <div>
                    <h1 className="text-5xl font-black text-white">
                        Conversations
                    </h1>
                    <p className="mt-3 text-lg text-zinc-400">
                        Every customer conversation handled by Val for The Chain.
                    </p>
                </div>

                <ConversationsView tenantId={THE_CHAIN_TENANT_ID} />
            </div>
        </DashboardLayout>
    );
}
