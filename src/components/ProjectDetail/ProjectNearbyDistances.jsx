import React from 'react';

export const ProjectNearbyDistances = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#064E3B]/15 shadow-xs space-y-4">
      <h2 className="text-xl font-bold text-[#042F24] font-display">
        Location & Accessibility Advantage
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {project.nearbyDistances.map((item, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-[#F4F7F5] border border-[#064E3B]/10 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800">{item.landmark}</span>
            <div className="text-right">
              <span className="text-xs font-bold text-[#064E3B] block">{item.distance}</span>
              <span className="text-[10px] text-slate-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
