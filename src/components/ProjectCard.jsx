import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const ProjectCard = ({ project, onOpenSiteVisit, onOpenProjectDetails }) => {
  const [imgSrc, setImgSrc] = useState(
    project.images?.hero || '/Abhyant City.jpeg'
  );

  const handleImageError = () => {
    if (project.images?.fallbackHero && imgSrc !== project.images.fallbackHero) {
      setImgSrc(project.images.fallbackHero);
    }
  };

  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Ready to Register':
        return 'bg-[#064E3B] text-[#DFC07A] border-[#C5A059]/40';
      case 'Limited Plots Left':
      case 'Limited Units':
        return 'bg-[#C5A059] text-[#042F24] border-[#DFC07A] font-extrabold';
      case 'Fast Selling':
      case 'High Demand':
        return 'bg-[#042F24] text-amber-200 border-[#C5A059]/40';
      case 'Under Development':
      case 'New Launch':
        return 'bg-[#065F46] text-white border-[#C5A059]/30';
      default:
        return 'bg-[#064E3B] text-white border-[#C5A059]/30';
    }
  };

  return (
    <div
      id={`project-card-${project.id}`}
      className="group bg-white rounded-xl overflow-hidden border border-[#064E3B]/15 shadow-xs hover:shadow-xl hover:border-[#C5A059]/60 transition-all duration-300 flex flex-col hover:-translate-y-1 h-full"
    >
      {/* Image Container */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-[#042F24]">
        <img
          src={imgSrc}
          alt={`${project.name} in ${project.location}`}
          onError={handleImageError}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#042F24]/90 via-transparent to-black/20" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`px-3 py-1 rounded-md text-xs font-bold shadow-sm border ${getBadgeStyle(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>

        {/* Clear Title Pill */}
        <div className="absolute top-3 right-3 bg-[#042F24]/85 backdrop-blur-xs text-[#DFC07A] text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 border border-[#C5A059]/40">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Clear Title</span>
        </div>

        {/* Overlay Details */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="bg-[#042F24]/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-[#C5A059]/40 text-[#DFC07A] font-semibold">
            {project.availablePlots} Plots Left
          </span>
          <span className="text-[11px] text-slate-300 font-medium bg-[#042F24]/75 px-2.5 py-0.5 rounded-md border border-white/10">
            {project.bighaArea}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-bold text-[#042F24] font-display group-hover:text-[#064E3B] transition-colors">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
            <MapPin className="w-3.5 h-3.5 text-[#064E3B] shrink-0" />
            <span className="font-medium">{project.location}</span>
          </div>

          {/* About Project Preview */}
          <div className="mt-3 pt-3 border-t border-[#064E3B]/10">
            <div className="text-[11px] font-bold text-[#064E3B] uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <span>About Project</span>
            </div>
            <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
              {project.shortAbout || project.aboutProject || project.description}
            </p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="pt-2 border-t border-[#064E3B]/10 grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 p-2.5 bg-[#F4F7F5] rounded-lg border border-[#064E3B]/5">
            <Maximize2 className="w-4 h-4 text-[#064E3B] shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-500 font-medium truncate">Plot Size</div>
              <div className="font-bold text-[#042F24] truncate">{project.plotSize || project.areaRange}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 bg-[#F4F7F5] rounded-lg border border-[#C5A059]/30">
            <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0" />
            <div className="min-w-0">
              <div className="text-[10px] text-slate-500 font-medium truncate">Starting Price</div>
              <div className="font-bold text-[#064E3B] truncate">{project.startingPrice}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-1 flex items-center gap-2">
          {onOpenProjectDetails ? (
            <button
              type="button"
              onClick={() => onOpenProjectDetails(project)}
              className="flex-1 py-2.5 px-3 bg-[#064E3B] hover:bg-[#042F24] text-white text-xs font-bold rounded-md text-center flex items-center justify-center gap-1.5 transition-colors border border-[#C5A059]/30 group-hover:border-[#C5A059] cursor-pointer shadow-xs"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFC07A] group-hover:translate-x-0.5 transition-transform" />
            </button>
          ) : (
            <Link
              to={`/projects/${project.id}`}
              className="flex-1 py-2.5 px-3 bg-[#064E3B] hover:bg-[#042F24] text-white text-xs font-bold rounded-md text-center flex items-center justify-center gap-1.5 transition-colors border border-[#C5A059]/30 group-hover:border-[#C5A059]"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFC07A] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          )}

          {onOpenSiteVisit && (
            <button
              type="button"
              onClick={() => onOpenSiteVisit(project.name)}
              className="py-2.5 px-3 border border-[#064E3B]/20 hover:border-[#064E3B] text-[#064E3B] hover:bg-[#064E3B]/5 text-xs font-semibold rounded-md transition-colors shrink-0 cursor-pointer"
              title="Book Site Visit for this project"
            >
              Book Visit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
