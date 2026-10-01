import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const ProjectOverviewCards = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#064E3B]/15 shadow-xs space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-5 bg-[#064E3B] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-bold text-[#042F24] font-display">
            About Project
          </h2>
        </div>
        <div className="text-sm text-slate-600 leading-relaxed space-y-3 mt-3">
          {(project.aboutProject || project.description)
            .split('\n\n')
            .map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
        </div>
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div className="p-5 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/15 space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-[#042F24] font-display flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>{project.highlightsTitle || 'Why Choose This Project'}</span>
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10">
          <span className="text-[10px] text-slate-500 font-bold block uppercase">Plot Size</span>
          <span className="text-sm sm:text-base font-extrabold text-[#042F24]">{project.plotSize || project.areaRange}</span>
        </div>
        <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/20">
          <span className="text-[10px] text-[#064E3B] font-bold block uppercase">Available Plots</span>
          <span className="text-sm sm:text-base font-extrabold text-[#064E3B]">{project.availablePlots} Units</span>
        </div>
        <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10">
          <span className="text-[10px] text-slate-500 font-bold block uppercase">Starting Price</span>
          <span className="text-sm sm:text-base font-extrabold text-[#042F24]">{project.startingPrice}</span>
        </div>
        <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10">
          <span className="text-[10px] text-slate-500 font-bold block uppercase">Road Widths</span>
          <span className="text-sm sm:text-base font-extrabold text-[#042F24]">40ft & 30ft</span>
        </div>
      </div>
    </div>
  );
};
