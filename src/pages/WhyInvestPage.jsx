import React from 'react';
import { TrendingUp, Landmark, ShieldCheck, Banknote, Sparkles, Building2, Check, X, ArrowRight, Calculator } from 'lucide-react';
import { WHY_INVEST_POINTS } from '../data/companyData';
import { Link } from 'react-router-dom';

export const WhyInvestPage = ({
  onOpenSiteVisit,
  onOpenEmiCalculator,
}) => {
  const comparisonData = [
    {
      feature: 'Land Ownership',
      plots: '100% Freehold Land with Clear Title Registry in your name',
      apartments: 'Fractional UDS (Undivided Share of Land) on shared structure',
    },
    {
      feature: 'Appreciation Potential',
      plots: 'Historically 18% - 25% CAGR in Lucknow growth corridors',
      apartments: 'Moderate 5% - 8% due to building depreciation',
    },
    {
      feature: 'Construction Freedom',
      plots: 'Build custom floors (G+3), duplex villa or hold as asset',
      apartments: 'Fixed blueprint, no room additions possible',
    },
    {
      feature: 'Maintenance Cost',
      plots: 'Zero monthly maintenance till you construct',
      apartments: 'High recurring monthly society maintenance charges',
    },
    {
      feature: 'Delivery & Possession',
      plots: 'Immediate physical demarcation and instant possession',
      apartments: 'Possession often delayed by 3-5 years',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-[#F4F7F5] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#042F24] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C5A059]/30 geometric-grid-pattern-dark">
        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#064E3B] border border-[#C5A059]/40 text-[#DFC07A] text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>High Return Real Estate Assets</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Why Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] to-[#C5A059]">Residential Plots</span>?
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Land is the only asset class that never depreciates. Discover how plotted investments in Lucknow outperform apartments and fixed deposits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        {/* 4 Key Benefit Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {WHY_INVEST_POINTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#064E3B]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[#F4F7F5] text-[#064E3B] flex items-center justify-center mb-4 border border-[#C5A059]/40">
                  <TrendingUp className="w-7 h-7 text-[#064E3B]" />
                </div>
                <h3 className="text-lg font-bold text-[#042F24] font-display mb-2">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-[#064E3B] font-bold">
                100% Guaranteed Asset
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Table: Plots vs Apartments */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#064E3B]/15 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#064E3B] uppercase tracking-widest block mb-1">
              Smart Asset Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#042F24] font-display">
              Plotted Land vs. High-Rise Apartments
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 px-4 font-bold text-[#042F24] uppercase">Investment Metric</th>
                  <th className="py-3 px-4 font-bold text-[#064E3B] bg-[#F4F7F5] rounded-t-xl uppercase border-t border-x border-[#064E3B]/20">
                    Abhyant Residential Plots
                  </th>
                  <th className="py-3 px-4 font-bold text-slate-500 uppercase">High-Rise Apartments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-4 px-4 font-bold text-slate-800">{row.feature}</td>
                    <td className="py-4 px-4 bg-[#F4F7F5]/80 font-semibold text-[#042F24] border-x border-[#064E3B]/10">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                        <span>{row.plots}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.apartments}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Growth Corridor Highlight */}
        <div className="bg-[#042F24] rounded-2xl p-8 sm:p-10 text-white border border-[#C5A059]/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 bg-[#064E3B] text-[#DFC07A] rounded-md text-xs font-bold uppercase tracking-wider border border-[#C5A059]/40">
              Lucknow Master Plan 2031
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              Why Sultanpur Highway & Kisan Path Are Lucknow's Goldmines
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              With the operational Purvanchal Expressway, Ring Road Kisan Path, IT City, Medanta Hospital, and Atal Bihari Stadium in immediate proximity, land values in this corridor have grown at 22% annual rate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={onOpenSiteVisit}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A059] hover:bg-[#DFC07A] text-[#042F24] font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Book Site Visit Now
            </button>
            <button
              onClick={() => onOpenEmiCalculator && onOpenEmiCalculator()}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#DFC07A]" />
              <span>Calculate Plot EMI</span>
            </button>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all text-center"
            >
              Explore Plots
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
