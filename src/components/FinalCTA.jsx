import React from 'react';
import { ChevronRight, Phone, Car } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { getDirectCallUrl } from '../utils/formatters';
import { ScrollReveal } from './common/ScrollReveal';

export const FinalCTA = ({ onOpenSiteVisit }) => {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden border-y border-[#C5A059]/40">
      {/* Background Image with Dark Green Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Plotted Real Estate Community"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#042F24]/95 via-[#064E3B]/90 to-[#042F24]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={750}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            {/* Left Text */}
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#042F24] border border-[#C5A059]/50 text-[#DFC07A] text-xs font-semibold">
                <Car className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Complimentary AC Cab Pickup Available</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
                Ready to Invest in Your Dream Plot?
              </h2>
              <p className="text-base sm:text-lg text-emerald-100/90 font-medium">
                Book your free site visit today. 100% transparent pricing and registry assistance.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                id="cta-book-site-visit-btn"
                onClick={onOpenSiteVisit}
                className="px-8 py-4 bg-[#C5A059] hover:bg-[#DFC07A] text-[#042F24] font-extrabold text-base sm:text-lg rounded-md shadow-xl shadow-black/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 border border-[#DFC07A] cursor-pointer"
              >
                <span>Book Site Visit Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href={getDirectCallUrl(COMPANY_INFO.phone)}
                className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-base rounded-md border border-[#C5A059]/40 backdrop-blur-xs transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#DFC07A]" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
