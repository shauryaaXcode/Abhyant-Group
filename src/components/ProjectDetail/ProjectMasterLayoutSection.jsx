import React from 'react';
import { SAMPLE_PLOTS } from '../../data/projectsData';

export const ProjectMasterLayoutSection = ({ project, onSelectPlot }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#064E3B]/15 shadow-xs space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold text-[#042F24] font-display">
            Township Master Layout Plan
          </h2>
          <p className="text-xs text-slate-500">
            Standard Plot Type 1: 1250 SQFT (31'.25" × 40') with 40ft entry boulevard
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1 text-[#064E3B] font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B]" /> Available
          </span>
          <span className="flex items-center gap-1 text-amber-700 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" /> Reserved
          </span>
          <span className="flex items-center gap-1 text-rose-700 font-semibold">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500" /> Sold
          </span>
        </div>
      </div>

      {/* Interactive Plot Grid for this project */}
      <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10 max-h-72 overflow-y-auto">
        {SAMPLE_PLOTS.slice(0, project.totalPlots).map((plot) => (
          <button
            key={plot.id}
            onClick={() => onSelectPlot && onSelectPlot(plot)}
            className={`p-2 rounded-lg text-xs flex flex-col items-center justify-center border font-bold transition-all cursor-pointer ${
              plot.status === 'available'
                ? 'bg-emerald-100 hover:bg-emerald-200 text-[#042F24] border-emerald-300'
                : plot.status === 'reserved'
                ? 'bg-amber-100 hover:bg-amber-200 text-amber-950 border-[#C5A059]/50'
                : 'bg-rose-100 hover:bg-rose-200 text-rose-900 border-rose-300'
            }`}
          >
            <span className="text-[11px] leading-tight font-extrabold">{plot.plotNumber.replace('Plot ', '#')}</span>
            <span className="text-[9px] opacity-75">{plot.areaSqFt}sqft</span>
          </button>
        ))}
      </div>

      <div className="p-3 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/15 text-xs text-[#064E3B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>Click any plot above to view exact facing, dimensions & price breakdown.</span>
        <span className="font-bold shrink-0">40ft Entry Road • 100% Registry</span>
      </div>
    </div>
  );
};
