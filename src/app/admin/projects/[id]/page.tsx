'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { UploadCloud, X } from 'lucide-react';

export default function ProjectForm() {
  const router = useRouter();
  const params = useParams();
  const isNew = params.id === 'new';

  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    startDate: '',
    endDate: '',
    area: '',
    apartmentType: '',
    contactNumber: '',
    details: '',
    location: '',
    mapEmbedUrl: ''
  });
  
  const [existingPhotos, setExistingPhotos] = useState<any[]>([]);
  const [deletedPhotoIds, setDeletedPhotoIds] = useState<number[]>([]);
  const [newPhotos, setNewPhotos] = useState<File[]>([]);

  useEffect(() => {
    if (!isNew) {
      const API_URL = 'https://demirel-group-website-backend.onrender.com' || 'https://demirel-group-website-backend.onrender.com';
      fetch(`${API_URL}/projects/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setFormData({
            title: data.title || '',
            category: data.category || '',
            startDate: data.startDate?.split('T')[0] || '',
            endDate: data.endDate?.split('T')[0] || '',
            area: data.area || '',
            apartmentType: data.apartmentType || '',
            contactNumber: data.contactNumber || '',
            details: data.details || '',
            location: data.location || '',
            mapEmbedUrl: data.mapEmbedUrl || ''
          });
          setExistingPhotos(data.photos || []);
        });
    }
  }, [isNew, params.id]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewPhotos([...newPhotos, ...Array.from(e.target.files)]);
    }
  };

  const removeExistingPhoto = (id: number) => {
    setExistingPhotos(existingPhotos.filter(p => p.id !== id));
    setDeletedPhotoIds([...deletedPhotoIds, id]);
  };

  const removeNewPhoto = (index: number) => {
    setNewPhotos(newPhotos.filter((_, i) => i !== index));
  };

  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const token = getCookie('token');

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    newPhotos.forEach(file => {
      submitData.append('NewPhotos', file);
    });

    deletedPhotoIds.forEach(id => {
      submitData.append('DeletedPhotoIds', id.toString());
    });

    const API_URL = 'https://demirel-group-website-backend.onrender.com' || 'https://demirel-group-website-backend.onrender.com';
    const url = isNew 
      ? `${API_URL}/projects` 
      : `${API_URL}/projects/${params.id}`;
      
    const method = isNew ? 'POST' : 'PUT';

    try {
      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: submitData
      });

      if (res.ok) {
        router.push('/admin/projects');
      } else {
        alert('İşlem başarısız oldu.');
      }
    } catch (err) {
      alert('Sunucu hatası.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {isNew ? 'Yeni Proje Ekle' : 'Projeyi Düzenle'}
        </h1>
        <button 
          onClick={() => router.back()}
          className="text-gray-500 hover:text-black font-medium transition-colors"
        >
          İptal Et
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-8">
        
        {/* Temel Bilgiler */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Temel Bilgiler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Proje Başlığı</label>
              <input required type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kategori (Örn: Tamamlanan, Devam Eden)</label>
              <input required type="text" name="category" value={formData.category} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Başlangıç Tarihi</label>
              <input required type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bitiş Tarihi</label>
              <input required type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
          </div>
        </div>

        {/* Detay Bilgiler */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Detaylar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alan (m²)</label>
              <input type="text" name="area" value={formData.area} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Daire Tipi (Örn: 3+1, 4+1)</label>
              <input type="text" name="apartmentType" value={formData.apartmentType} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">İletişim Numarası</label>
              <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lokasyon / Adres</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama / Detaylar</label>
            <textarea name="details" value={formData.details} onChange={handleChange} rows={4} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Google Harita Kodu (Embed URL)</label>
            <input type="text" name="mapEmbedUrl" value={formData.mapEmbedUrl} onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black outline-none" placeholder="https://www.google.com/maps/embed?..." />
          </div>
        </div>

        {/* Fotoğraf Yükleme */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Fotoğraflar</h2>
          
          {/* Mevcut Fotoğraflar */}
          {!isNew && existingPhotos.length > 0 && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Mevcut Fotoğraflar</p>
              <div className="flex flex-wrap gap-4">
                {existingPhotos.map(photo => (
                  <div key={photo.id} className="relative group w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
                    <img src={photo.photoUrl} alt="Project" className="w-full h-full object-cover" />
                    <button 
                      type="button"
                      onClick={() => removeExistingPhoto(photo.id)}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Yeni Fotoğraf Yükleme */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">Yeni Fotoğraf Ekle</p>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="w-8 h-8 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 font-medium">Tıklayın veya fotoğrafları sürükleyin</p>
              </div>
              <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
          </div>

          {/* Eklenecek Fotoğrafların Önizlemesi */}
          {newPhotos.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {newPhotos.map((file, index) => (
                <div key={index} className="relative group w-24 h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-500 px-2 text-center truncate w-full">{file.name}</span>
                  <button 
                    type="button"
                    onClick={() => removeNewPhoto(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-6 flex justify-end">
          <button type="submit" disabled={saving} className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition-colors disabled:opacity-70">
            {saving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
          </button>
        </div>
      </form>
    </div>
  );
}
