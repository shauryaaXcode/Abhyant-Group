import React from 'react';
import { X, MapPin, Compass, ShieldCheck, Car } from 'lucide-react';
import { formatIndianCurrency } from '../../utils/formatters';

export const PlotDetailModal = ({ plot, onClose, onBookSiteVisit }) => {
  if (!plot) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-[#064E3B]/20 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#042F24] text-white flex items-center justify-between border-b border-[#C5A059]/30">
          <div>
            <span className="text-xs text-[#DFC07A] font-semibold uppercase tracking-wider">
              {plot.status === 'available' ? 'Available Plot' : plot.status}
            </span>
            <h3 className="text-xl font-bold font-display text-white">{plot.plotNumber}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3 p-4 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/10">
            <div>
              <span className="text-slate-500 block">Total Area</span>
              <span className="text-sm font-bold text-[#042F24]">{plot.areaSqFt} Sq.Ft.</span>
            </div>
            <div>
              <span className="text-slate-500 block">Dimensions</span>
              <span className="text-sm font-bold text-[#042F24]">{plot.dimensionText}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Facing</span>
              <span className="text-sm font-bold text-[#064E3B]">{plot.facing}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Total Price</span>
              <span className="text-sm font-extrabold text-[#064E3B]">{plot.formattedPrice}</span>
            </div>
          </div>

          <div className="space-y-2 text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>Road Facing: {plot.roadFacingWidth}</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Corner Plot: {plot.isCorner ? 'Yes (Dual Road Access)' : 'Standard'}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#064E3B] shrink-0" />
              <span>Booking Token: {plot.bookingTokenAmount} (100% Refundable)</span>
            </div>
          </div>

          <button
            onClick={onBookSiteVisit}
            className="w-full py-3 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-sm rounded-xl shadow-lg border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            <Car className="w-4 h-4 text-[#DFC07A]" />
            <span>Book Site Visit for this Plot</span>
          </button>
        </div>
      </div>
    </div>
  );
};
