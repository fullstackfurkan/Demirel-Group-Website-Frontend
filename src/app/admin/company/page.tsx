'use client';

import React, { useEffect, useState } from 'react';

export default function AdminCompany() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    companyAdress: '',
    contactNumber1: '',
    contactNumber2: '',
    companyEmail: '',
    aboutUsText: '',
    footerText: ''
  });

  useEffect(() => {
    const API_URL = 'https://demirel-group-website-backend.onrender.com' || 'https://demirel-group-website-backend.onrender.com';
    fetch(`${API_URL}/CompanyInformation`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setFormData({
            companyName: data.companyName || '',
            companyAdress: data.companyAdress || '',
            contactNumber1: data.contactNumber1 || '',
            contactNumber2: data.contactNumber2 || '',
            companyEmail: data.companyEmail || '',
            aboutUsText: data.aboutUsText || '',
            footerText: data.footerText || ''
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    const token = getCookie('token');

    try {
      const API_URL = 'https://demirel-group-website-backend.onrender.com' || 'https://demirel-group-website-backend.onrender.com';
      const res = await fetch(`${API_URL}/CompanyInformation`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setMessage('Şirket bilgileri başarıyla güncellendi!');
      } else {
        setMessage('Güncelleme sırasında bir hata oluştu.');
      }
    } catch (err) {
      setMessage('Sunucu bağlantı hatası.');
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Şirket Bilgileri</h1>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6">
        {message && (
          <div className={`p-4 rounded-lg font-medium text-sm ${message.includes('başarıyla') ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Şirket Adı</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
            <input type="email" name="companyEmail" value={formData.companyEmail} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon 1</label>
            <input type="text" name="contactNumber1" value={formData.contactNumber1} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon 2</label>
            <input type="text" name="contactNumber2" value={formData.contactNumber2} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Açık Adres</label>
          <textarea name="companyAdress" value={formData.companyAdress} onChange={handleChange} rows={2} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hakkımızda Yazısı</label>
          <textarea name="aboutUsText" value={formData.aboutUsText} onChange={handleChange} rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none"></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Footer (Alt Kısım) Yazısı</label>
          <input type="text" name="footerText" value={formData.footerText} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
        </div>

        <div className="pt-4 flex justify-end">
          <button type="submit" disabled={saving} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors disabled:opacity-70">
            {saving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
}
