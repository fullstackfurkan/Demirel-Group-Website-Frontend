'use client';

import React, { useEffect, useState } from 'react';
import { Building2, MousePointerClick, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, loading: true });

  useEffect(() => {
    // Projeleri çekip sayısını gösterelim
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://demirel-group-website-backend.onrender.com';
    fetch(`${API_URL}/projects`)
      .then(res => res.json())
      .then(data => setStats({ projects: data.length || 0, loading: false }))
      .catch(() => setStats({ projects: 0, loading: false }));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat Card 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center space-x-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Building2 size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Toplam Proje</p>
            <h3 className="text-2xl font-bold text-gray-800">
              {stats.loading ? '...' : stats.projects}
            </h3>
          </div>
        </div>

        {/* Stat Card 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center space-x-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg">
            <MousePointerClick size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Aylık Ziyaretçi</p>
            <h3 className="text-2xl font-bold text-gray-800">1,248</h3>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp size={12} className="mr-1" /> +12% bu ay
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hoş Geldiniz!</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Sol taraftaki menüyü kullanarak projelerinizi güncelleyebilir, silebilir veya yeni projeler ekleyebilirsiniz. Şirket iletişim bilgilerinizi de tek tıkla değiştirebilirsiniz.
        </p>
      </div>
    </div>
  );
}
