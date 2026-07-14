import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="p-10">

            <h1 className="text-4xl font-bold">
                Dashboard
            </h1>

            <p className="mt-2 text-neutral-400">
                Welcome to The Chain Technologies Business Dashboard.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

                <div className="rounded-xl border border-neutral-800 p-6">
                    <h2 className="text-lg font-semibold">
                        Business
                    </h2>

                    <p className="text-neutral-400 mt-2">
                        Configure your AI employee.
                    </p>

                    <Link
                        href="/admin/business"
                        className="inline-block mt-6 rounded bg-cyan-500 px-4 py-2 font-semibold text-black"
                    >
                        Open
                    </Link>
                </div>

                <div className="rounded-xl border border-neutral-800 p-6">
                    <h2 className="text-lg font-semibold">
                        Knowledge Sources
                    </h2>

                    <p className="text-neutral-400 mt-2">
                        Import your website, PDFs and documents.
                    </p>

                    <button
                        disabled
                        className="mt-6 rounded bg-neutral-800 px-4 py-2 text-neutral-500"
                    >
                        Coming Soon
                    </button>
                </div>

                <div className="rounded-xl border border-neutral-800 p-6">
                    <h2 className="text-lg font-semibold">
                        Services
                    </h2>

                    <p className="text-neutral-400 mt-2">
                        Manage what Val can sell.
                    </p>

                    <button
                        disabled
                        className="mt-6 rounded bg-neutral-800 px-4 py-2 text-neutral-500"
                    >
                        Coming Soon
                    </button>
                </div>

            </div>

            <div className="mt-12">

                <h2 className="text-2xl font-semibold">
                    Product Roadmap
                </h2>

                <div className="mt-6 space-y-3">

                    <div>✅ Business Profile</div>
                    <div>🔄 Knowledge Sources</div>
                    <div>⏳ Services</div>
                    <div>⏳ FAQ</div>
                    <div>⏳ Website Import</div>
                    <div>⏳ Conversation History</div>
                    <div>⏳ Calendar</div>

                </div>

            </div>

        </div>
    );
}