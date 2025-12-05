import Link from 'next/link';

export default function AdminLayout({
                                        children,
                                    }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
            <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full shadow-sm z-10">

                <div className="h-16 flex items-center justify-center border-b border-gray-200">
                    <h2 className="text-xl font-bold text-blue-600">Demirel Admin</h2>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    <Link
                        href="/admin"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                    >
                        {/* İkonlar için Lucide-react kullanabilirsin, şimdilik emoji/text */}
                        <span>📊</span>
                        <span className="font-medium">Dashboard</span>
                    </Link>

                    <Link
                        href="/admin/company"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                    >
                        <span>🏢</span>
                        <span className="font-medium">Şirket Bilgileri</span>
                    </Link>

                    <Link
                        href="/admin/projects"
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                    >
                        <span>🏗️</span>
                        <span className="font-medium">Projeler</span>
                    </Link>
                </nav>

                <div className="p-4 border-t border-gray-200">
                    <button className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm font-medium">
                        🚪 Çıkış Yap
                    </button>
                </div>
            </aside>

            <main className="flex-1 ml-64 p-8">
                <div className="max-w-5xl mx-auto">
                    {children}
                </div>
            </main>

        </div>
    );
}