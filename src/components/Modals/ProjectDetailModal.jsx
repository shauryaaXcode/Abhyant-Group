import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  MapPin,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  Calculator,
  ExternalLink,
} from 'lucide-react';

export const ProjectDetailModal = ({
  project,
  onClose,
  onOpenSiteVisit,
  onOpenEmiCalculator,
}) => {
  const [imgSrc, setImgSrc] = useState(
    project?.images?.hero || '/Abhyant City.jpeg'
  );

  if (!project) return null;

  const handleImageError = () => {
    if (project.images?.fallbackHero && imgSrc !== project.images.fallbackHero) {
      setImgSrc(project.images.fallbackHero);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#064E3B]/20 my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-[#042F24] shrink-0">
          <img
            src={imgSrc}
            alt={project.name}
            onError={handleImageError}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#042F24] via-[#042F24]/50 to-black/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors cursor-pointer border border-white/20 z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges Overlay */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 bg-[#064E3B] text-[#DFC07A] font-bold text-xs rounded-md shadow-md border border-[#C5A059]/50">
              {project.status}
            </span>
            <span className="px-3 py-1 bg-[#042F24]/90 backdrop-blur-xs text-white text-xs font-semibold rounded-md border border-[#C5A059]/40 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#DFC07A]" />
              <span>Clear Title</span>
            </span>
          </div>

          {/* Bottom Title & Location */}
          <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white drop-shadow-sm">
              {project.name}
            </h2>
            <div className="flex items-center gap-1.5 text-xs text-slate-200 mt-1">
              <MapPin className="w-3.5 h-3.5 text-[#DFC07A] shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-700">
          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500 mb-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Plot Size</span>
              </div>
              <div className="text-sm font-extrabold text-[#042F24]">
                {project.plotSize || project.areaRange}
              </div>
            </div>

            <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#C5A059]/40">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Starting Price</span>
              </div>
              <div className="text-sm font-extrabold text-[#064E3B]">
                {project.startingPrice}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-500 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Documentation</span>
              </div>
              <div className="text-sm font-bold text-[#042F24]">
                Immediate Registry
              </div>
            </div>
          </div>

          {/* About Project Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-[#064E3B]/10 pb-2">
              <span className="w-1.5 h-5 bg-[#064E3B] rounded-full" />
              <h3 className="text-lg font-bold text-[#042F24] font-display">
                About Project
              </h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
              {(project.aboutProject || project.description)
                .split('\n\n')
                .map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
            </div>
          </div>

          {/* Project Highlights / Why Choose */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="p-4 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/15 space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-[#042F24] font-display flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>{project.highlightsTitle || 'Why Choose This Project'}</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-[#064E3B]/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {onOpenEmiCalculator && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenEmiCalculator(project.startingPriceNum);
                }}
                className="px-3.5 py-2.5 rounded-lg border border-[#064E3B]/20 text-[#064E3B] hover:bg-[#064E3B]/5 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Calculate EMI</span>
              </button>
            )}

            <Link
              to={`/projects/${project.id}`}
              onClick={onClose}
              className="px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:text-[#064E3B] hover:border-[#064E3B]/30 font-semibold text-xs flex items-center gap-1.5 transition-colors bg-white"
            >
              <span>Full Page</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>
            {onOpenSiteVisit && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSiteVisit(project.name);
                }}
                className="px-5 py-2.5 bg-[#064E3B] hover:bg-[#042F24] text-white text-xs font-bold rounded-lg shadow-sm border border-[#C5A059]/40 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#DFC07A]" />
                <span>Book Free Site Visit</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
