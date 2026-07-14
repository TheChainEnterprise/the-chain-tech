import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-black text-white flex">

            <aside className="w-72 border-r border-neutral-800 p-6">

                <h1 className="text-2xl font-bold mb-8">
                    The Chain
                </h1>

                <nav className="space-y-3">

                    <Link
                        href="/admin"
                        className="block hover:text-cyan-400"
                    >
                        Dashboard
                    </Link>

                    <div className="pt-4">

                        <p className="text-sm text-neutral-500 uppercase mb-2">
                            Business Brain
                        </p>

                        <div className="space-y-2 ml-3">

                            <Link
                                href="/admin/business"
                                className="block hover:text-cyan-400"
                            >
                                General
                            </Link>

                            <Link
                                href="/admin/services"
                                className="block text-neutral-500"
                            >
                                Services
                            </Link>

                            <Link
                                href="/admin/knowledge"
                                className="block text-neutral-500"
                            >
                                Knowledge Sources
                            </Link>

                            <Link
                                href="/admin/faqs"
                                className="block text-neutral-500"
                            >
                                FAQs
                            </Link>

                        </div>

                    </div>

                    <div className="pt-6">

                        <Link
                            href="/admin/leads"
                            className="block text-neutral-500"
                        >
                            Leads
                        </Link>

                        <Link
                            href="/admin/conversations"
                            className="block text-neutral-500 mt-2"
                        >
                            Conversations
                        </Link>

                        <Link
                            href="/admin/calendar"
                            className="block text-neutral-500 mt-2"
                        >
                            Calendar
                        </Link>

                        <Link
                            href="/admin/settings"
                            className="block text-neutral-500 mt-2"
                        >
                            Settings
                        </Link>

                    </div>

                </nav>

            </aside>

            <section className="flex-1">
                {children}
            </section>

        </main>
    );
}