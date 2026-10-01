import React, { useState, useMemo, useEffect } from 'react';
import { X, Calculator, PieChart, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import { calculateEmi } from '../../utils/emiCalculations';
import { formatIndianCurrency } from '../../utils/formatters';

export const EmiCalculatorModal = ({
  isOpen,
  onClose,
  initialPrice = 1200000,
  onOpenSiteVisit,
}) => {
  const [plotPrice, setPlotPrice] = useState(initialPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(10);

  // Sync initial price when opened
  useEffect(() => {
    if (initialPrice && isOpen) {
      setPlotPrice(initialPrice);
    }
  }, [initialPrice, isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const downPaymentAmount = useMemo(() => {
    return Math.round((plotPrice * downPaymentPercent) / 100);
  }, [plotPrice, downPaymentPercent]);

  const financedPrincipal = useMemo(() => {
    return Math.max(0, plotPrice - downPaymentAmount);
  }, [plotPrice, downPaymentAmount]);

  const emiResult = useMemo(() => {
    return calculateEmi(financedPrincipal, interestRate, tenureYears);
  }, [financedPrincipal, interestRate, tenureYears]);

  const principalPercent = useMemo(() => {
    if (emiResult.totalPayment <= 0) return 100;
    return Math.round((financedPrincipal / emiResult.totalPayment) * 100);
  }, [financedPrincipal, emiResult.totalPayment]);

  const interestPercent = 100 - principalPercent;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Emerald Gradient */}
        <div className="bg-gradient-to-r from-[#042F24] via-[#064E3B] to-[#042F24] px-6 py-5 text-white flex items-center justify-between border-b border-[#C5A059]/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC07A]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white tracking-tight">
                Plot EMI & Budget Calculator
              </h3>
              <p className="text-xs text-emerald-100/80">
                Estimate monthly installments and financial planning for your plot
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[82vh] overflow-y-auto">
          {/* Top Result Card */}
          <div className="bg-gradient-to-br from-[#F4F7F5] to-white p-5 rounded-xl border border-[#064E3B]/15 shadow-xs">
            <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Estimated Monthly EMI
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#064E3B] font-display mt-0.5">
                  ₹{emiResult.emi.toLocaleString('en-IN')}
                  <span className="text-xs font-semibold text-slate-500 font-sans ml-1.5">
                    / month
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-right sm:border-l sm:border-slate-200 sm:pl-6 text-xs">
                <div>
                  <span className="text-slate-500 block">Financed Amount</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {formatIndianCurrency(financedPrincipal)}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Total Payable</span>
                  <span className="font-bold text-[#042F24] text-sm">
                    {formatIndianCurrency(emiResult.totalPayment)}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Ratio Bar */}
            <div className="mt-4 pt-3 border-t border-slate-200/80">
              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 mb-1.5">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B] inline-block" />
                  Financed Principal: {principalPercent}%
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] inline-block" />
                  Estimated Interest: {interestPercent}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-[#064E3B] transition-all duration-300"
                  style={{ width: `${principalPercent}%` }}
                />
                <div
                  className="h-full bg-[#C5A059] transition-all duration-300"
                  style={{ width: `${interestPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Sliders & Controls */}
          <div className="space-y-5">
            {/* 1. Plot Value */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700">
                  Plot Total Price:
                </label>
                <span className="font-extrabold text-[#064E3B] text-sm">
                  {formatIndianCurrency(plotPrice)}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="50000"
                value={plotPrice}
                onChange={(e) => setPlotPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#064E3B]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹5 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* 2. Down Payment */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700">
                  Down Payment ({downPaymentPercent}%):
                </label>
                <span className="font-bold text-slate-800 text-sm">
                  {formatIndianCurrency(downPaymentAmount)}
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#064E3B]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>10% (Min)</span>
                <span>25% (Standard)</span>
                <span>50%</span>
              </div>
            </div>

            {/* 3. Interest Rate */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700">
                  Estimated Interest Rate:
                </label>
                <span className="font-bold text-slate-800 text-sm">
                  {interestRate}% p.a.
                </span>
              </div>
              <input
                type="range"
                min="7.0"
                max="13.0"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#064E3B]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>7.0%</span>
                <span>8.5% (Typical)</span>
                <span>13.0%</span>
              </div>
            </div>

            {/* 4. Tenure in Years */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700">
                  Repayment Tenure:
                </label>
                <span className="font-bold text-slate-800 text-sm">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[3, 5, 7, 10, 15].map((yr) => (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => setTenureYears(yr)}
                    className={`py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                      tenureYears === yr
                        ? 'bg-[#064E3B] text-white border-[#064E3B] shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {yr} Yrs
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/70 border border-amber-200/60 text-[11px] text-amber-900 leading-relaxed">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              This calculator provides indicative estimates for general financial planning purposes. Exact installments, documentation fees, and applicable terms will be finalized directly during the booking agreement.
            </span>
          </div>

          {/* Bottom Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenSiteVisit) {
                  onOpenSiteVisit('Plot Budget & EMI Consultation');
                }
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-xs rounded-xl shadow-sm border border-[#C5A059]/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Schedule Advisor Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#DFC07A]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
