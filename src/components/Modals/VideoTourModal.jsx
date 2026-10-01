import React, { useState } from 'react';
import { X, Play, MapPin, CheckCircle2, Car, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/projectsData';

export const VideoTourModal = ({ isOpen, onClose, onBookSiteVisit }) => {
  const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative bg-[#042F24] text-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#C5A059]/40 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 bg-[#064E3B] border-b border-[#C5A059]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#042F24] border border-[#C5A059]/50 flex items-center justify-center text-[#DFC07A]">
              <Play className="w-4 h-4 fill-[#DFC07A]" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-display text-white">
                360° Drone Video & Aerial Survey
              </h3>
              <p className="text-[11px] text-[#DFC07A]">
                High Definition live ground progress view
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Mock View */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src={activeProject.images.hero}
            alt={activeProject.name}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

          {/* Video Center Play Overlay */}
          <div className="relative z-10 text-center space-y-3 p-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C5A059] text-[#042F24] flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform cursor-pointer border-4 border-white/20">
              <Play className="w-8 h-8 fill-[#042F24] ml-1" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold font-display text-white">
                {activeProject.name} - Aerial Tour
              </h4>
              <p className="text-xs text-[#DFC07A]">
                Includes 40ft Internal Roads, Electrification & Surrounding Greenery
              </p>
            </div>
          </div>

          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] text-slate-300 border border-white/10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Recorded February 2025 • 4K Drone Footage</span>
          </div>
        </div>

        {/* Project Selector Bar */}
        <div className="p-4 bg-[#042F24] border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
            {PROJECTS_DATA.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(p)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeProject.id === p.id
                    ? 'bg-[#C5A059] text-[#042F24] font-bold'
                    : 'bg-[#064E3B] text-slate-300 hover:text-white border border-[#C5A059]/20'
                }`}
              >
                {p.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              onClose();
              if (onBookSiteVisit) onBookSiteVisit();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#C5A059] hover:bg-[#DFC07A] text-[#042F24] font-bold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Car className="w-4 h-4" />
            <span>Book In-Person Site Visit</span>
          </button>
        </div>
      </div>
    </div>
  );
};
