import React from 'react';
import { 
  Building2, 
  Car, 
  MapPin, 
  FileText, 
  CreditCard, 
  KeyRound, 
  ArrowRight 
} from 'lucide-react';
import { BUYING_PROCESS_STEPS } from '../data/companyData';
import { ScrollReveal } from './common/ScrollReveal';

export const BuyingProcess = () => {
  const getStepIcon = (step) => {
    switch (step) {
      case 1:
        return <Building2 className="w-5 h-5 text-[#064E3B]" />;
      case 2:
        return <Car className="w-5 h-5 text-[#064E3B]" />;
      case 3:
        return <MapPin className="w-5 h-5 text-[#064E3B]" />;
      case 4:
        return <FileText className="w-5 h-5 text-[#064E3B]" />;
      case 5:
        return <CreditCard className="w-5 h-5 text-[#064E3B]" />;
      case 6:
        return <KeyRound className="w-5 h-5 text-[#064E3B]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#064E3B]" />;
    }
  };

  return (
    <section id="process-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F7F5] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#C5A059]/40">
              <span>Seamless Buying Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#042F24] font-display tracking-tight">
              How to Buy Your <span className="text-[#064E3B]">Plot</span>?
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Simple steps to own your plot with complete documentation transparency.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Steps Horizontal Flow with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {BUYING_PROCESS_STEPS.map((item, idx) => (
            <ScrollReveal
              key={item.step}
              animation="fade-up"
              delay={idx * 90}
              duration={650}
              className="h-full"
            >
              <div className="flex flex-col items-center text-center group relative h-full">
                {/* Desktop Connecting Arrow (between steps) */}
                {idx < BUYING_PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-3 z-0 text-slate-300">
                    <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                  </div>
                )}

                {/* Numbered Icon Badge */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-lg bg-[#F4F7F5] group-hover:bg-[#064E3B] group-hover:text-white border border-[#C5A059]/40 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-105">
                    <div className="group-hover:text-[#DFC07A] transition-colors">
                      {getStepIcon(item.step)}
                    </div>
                  </div>

                  {/* Step Number Tag */}
                  <div className="absolute -bottom-2 -right-1 w-6 h-6 rounded-md bg-[#042F24] text-[#DFC07A] font-extrabold text-xs flex items-center justify-center border border-[#C5A059]/50 shadow-xs">
                    {item.step}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#042F24] font-display mb-1.5 group-hover:text-[#064E3B] transition-colors">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-slate-500 leading-relaxed max-w-[170px]">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
