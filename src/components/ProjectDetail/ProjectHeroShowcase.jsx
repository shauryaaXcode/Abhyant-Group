import React, { useState } from 'react';
import { Compass, MapPin, CheckCircle2, Car, Download, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { getWhatsAppUrl } from '../../utils/formatters';

export const ProjectHeroShowcase = ({
  project,
  onOpenSiteVisit,
  onOpenEmiCalculator,
}) => {
  const [activeImageTab, setActiveImageTab] = useState('hero');
  const [downloadedBrochure, setDownloadedBrochure] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadedBrochure(true);
    const text = `Hello Abhyant Group team, I requested the official PDF Brochure and Price Matrix for ${project.name}. Please share it on WhatsApp.`;
    setTimeout(() => {
      window.open(getWhatsAppUrl(text), '_blank');
      setDownloadedBrochure(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-[#064E3B]/15 shadow-xl mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left: Gallery Showcase */}
        <div className="lg:col-span-7 bg-[#042F24] flex flex-col justify-between relative min-h-[380px] sm:min-h-[460px]">
          <img
            src={project.images[activeImageTab] || project.images.hero}
            alt={project.name}
            onError={(e) => {
              if (project.images.fallbackHero && e.currentTarget.src !== project.images.fallbackHero) {
                e.currentTarget.src = project.images.fallbackHero;
              }
            }}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042F24]/90 via-transparent to-[#042F24]/40" />

          {/* Status Badge */}
          <div className="relative z-10 p-5 flex items-center justify-between">
            <span className="px-3.5 py-1.5 bg-[#064E3B] text-[#DFC07A] font-bold text-xs rounded-md shadow-md border border-[#C5A059]/50">
              {project.status}
            </span>
            <span className="px-3 py-1 bg-black/60 backdrop-blur-xs text-[#DFC07A] text-xs font-semibold rounded-md border border-white/20">
              {project.bighaArea}
            </span>
          </div>

          {/* Image Tabs */}
          <div className="relative z-10 p-4 bg-black/50 backdrop-blur-md border-t border-white/10 flex items-center gap-2 overflow-x-auto">
            {['hero', 'entrance', 'roads', 'parks', 'aerial'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveImageTab(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeImageTab === tab
                    ? 'bg-[#064E3B] text-white border border-[#C5A059] shadow-xs'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Project Highlights & Booking Box */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-1 text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Plotted Residential Township</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#042F24] font-display">
              {project.name}
            </h1>

            <div className="flex items-center gap-2 text-xs text-slate-600 mt-2">
              <MapPin className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>{project.location}</span>
            </div>

            <div className="mt-5 p-4 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/15 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Starting Price</span>
                <span className="text-2xl font-extrabold text-[#064E3B] font-display">
                  {project.startingPrice}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Plot Dimensions</span>
                <span className="text-sm font-bold text-slate-800">
                  {project.areaRange}
                </span>
              </div>
            </div>

            {/* Key Points */}
            <div className="mt-5 space-y-2 text-xs">
              {project.highlightPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => onOpenSiteVisit(project.name)}
              className="w-full py-3.5 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-sm rounded-xl shadow-md border border-[#C5A059]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Car className="w-4 h-4 text-[#DFC07A]" />
              <span>Book Free Site Visit (AC Cab Pick-Up)</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onOpenEmiCalculator && onOpenEmiCalculator(project.startingPriceNum)}
                className="py-2.5 px-3 bg-[#F4F7F5] hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-[#064E3B]/10"
              >
                <Calculator className="w-4 h-4 text-[#064E3B]" />
                <span>Calculate EMI</span>
              </button>

              <button
                onClick={handleDownloadBrochure}
                className="py-2.5 px-3 border border-[#064E3B]/30 hover:bg-[#F4F7F5] text-[#064E3B] font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#064E3B]" />
                <span>{downloadedBrochure ? 'Opening...' : 'Brochure'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
