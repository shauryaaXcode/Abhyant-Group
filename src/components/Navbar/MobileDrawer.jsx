import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ShieldCheck, Phone, Calculator } from 'lucide-react';
import { AbhyantLogo } from '../common/AbhyantLogo';
import { COMPANY_INFO } from '../../data/companyData';
import { NAV_LINKS } from './DesktopNav';
import { getDirectCallUrl } from '../../utils/formatters';

export const MobileDrawer = ({ isOpen, onClose, onOpenSiteVisit, onOpenEmiCalculator }) => {
  const location = useLocation();

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      {/* Dim backdrop overlay behind drawer covering the rest of the screen */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Solid non-transparent Drawer panel */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] sm:max-w-sm bg-white shadow-2xl z-50 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right duration-300 border-l border-slate-200">
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white p-1 flex items-center justify-center border border-[#C5A059]/60 shadow-md shrink-0 overflow-hidden">
              <AbhyantLogo size={36} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-[#064E3B] text-base leading-tight">
                ABHYANT GROUP
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C5A059] uppercase">
                Sign of Trust
              </span>
            </div>
          </div>
          {/* Close button with ample padding */}
          <button
            onClick={onClose}
            className="p-2 -mr-1 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="py-6 flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={onClose}
                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  isActive
                    ? 'bg-[#064E3B] text-[#DFC07A] font-semibold shadow-xs'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Footer actions inside drawer */}
        <div className="mt-auto pt-6 border-t border-slate-200 flex flex-col gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#064E3B] bg-slate-50 p-3 rounded-lg border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span className="font-medium">100% Clear Titles & Immediate Registry</span>
          </div>

          {onOpenEmiCalculator && (
            <button
              onClick={() => {
                onClose();
                onOpenEmiCalculator();
              }}
              className="w-full py-2.5 px-4 rounded-lg border border-[#064E3B]/20 text-[#064E3B] font-semibold text-xs flex items-center justify-center gap-2 bg-[#064E3B]/5 hover:bg-[#064E3B]/10 transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#C5A059]" />
              <span>Plot EMI & Budget Calculator</span>
            </button>
          )}

          <a
            href={getDirectCallUrl(COMPANY_INFO.phone)}
            className="w-full py-3 px-4 rounded-lg border border-[#064E3B]/30 text-[#064E3B] font-semibold text-center flex items-center justify-center gap-2 bg-white hover:bg-slate-50 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C5A059]" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenSiteVisit();
            }}
            className="w-full py-3.5 px-4 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold rounded-lg shadow-md text-center transition-all border border-[#C5A059]/40 cursor-pointer"
          >
            Book Free Site Visit
          </button>
        </div>
      </div>
    </div>
  );
};
