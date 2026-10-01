import React, { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/companyData';

export const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="pt-24 pb-16 bg-[#F8FAF9] min-h-screen">
      {/* Header */}
      <div className="bg-[#042F24] text-white py-12 px-4 text-center border-b border-[#064E3B]">
        <h1 className="text-3xl font-bold tracking-tight text-white">Project Gallery</h1>
        <p className="mt-2 text-slate-300 text-sm max-w-md mx-auto">
          On-ground photographs and development updates across our projects.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-shadow cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[11px] font-medium text-[#064E3B] bg-emerald-50 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-slate-800 mt-2">
                    {item.title}
                  </h3>
                </div>
                {item.description && (
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-[#042F24] text-white flex items-center justify-between">
              <h4 className="text-sm font-semibold">{selectedImage.title}</h4>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            {selectedImage.description && (
              <p className="p-3 text-xs text-slate-600 bg-slate-50 border-t border-slate-200">
                {selectedImage.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
