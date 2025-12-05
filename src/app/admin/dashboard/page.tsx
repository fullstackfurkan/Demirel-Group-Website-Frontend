// src/app/admin/
// dashboard/page.tsx
export const runtime = 'edge';

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-800">Yönetim Paneli</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* İstatistik Kartı 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Toplam Proje</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
                </div>

                {/* İstatistik Kartı 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Aktif Şantiyeler</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">5</p>
                </div>

                {/* İstatistik Kartı 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-gray-500 text-sm font-medium">Okunmamış Mesaj</h3>
                    <p className="text-3xl font-bold text-orange-600 mt-2">3</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Son Aktiviteler</h2>
                <p className="text-gray-500">Henüz bir aktivite yok.</p>
            </div>
        </div>
    );
}