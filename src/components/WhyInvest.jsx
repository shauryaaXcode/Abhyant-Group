import React from 'react';
import { TrendingUp, Wrench, Home, Shield, Sparkles } from 'lucide-react';
import { WHY_INVEST_POINTS } from '../data/companyData';
import { ScrollReveal } from './common/ScrollReveal';

export const WhyInvest = () => {
  const getIcon = (id) => {
    switch (id) {
      case 'high-appreciation':
        return <TrendingUp className="w-6 h-6 text-[#064E3B]" />;
      case 'low-maintenance':
        return <Wrench className="w-6 h-6 text-[#064E3B]" />;
      case 'build-your-own-home':
        return <Home className="w-6 h-6 text-[#064E3B]" />;
      case 'secure-investment':
        return <Shield className="w-6 h-6 text-[#064E3B]" />;
      case 'multiple-benefits':
        return <Sparkles className="w-6 h-6 text-[#064E3B]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#064E3B]" />;
    }
  };

  return (
    <section id="why-invest-section" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F4F7F5] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#C5A059]/40">
              <span>Investment Wisdom</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#042F24] font-display tracking-tight">
              Why <span className="text-[#064E3B]">Invest</span> in Plots?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Plots are the smartest real estate investment for capital growth and land security.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 Cards Row / Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {WHY_INVEST_POINTS.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={idx * 80}
              duration={700}
              className="h-full"
            >
              <div
                className="group h-full p-5 bg-[#F4F7F5] hover:bg-white rounded-lg border border-[#064E3B]/10 hover:border-[#C5A059] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-[#064E3B] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-300 border border-[#C5A059]/30">
                    <div className="group-hover:brightness-200">
                      {getIcon(item.id)}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#042F24] font-display mb-2 group-hover:text-[#064E3B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#064E3B]/10">
                  <span className="text-[11px] font-bold text-[#064E3B] bg-[#064E3B]/10 border border-[#C5A059]/40 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
