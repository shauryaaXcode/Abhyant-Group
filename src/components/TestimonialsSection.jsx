import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';
import { ScrollReveal } from './common/ScrollReveal';

export const TestimonialsSection = () => {
  // 3 customer reviews
  const customerReviews = TESTIMONIALS.slice(0, 3);

  return (
    <section id="testimonials-section" className="py-16 sm:py-24 bg-[#F4F7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#064E3B]/10 text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-2.5 border border-[#C5A059]/40">
              <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
              <span>Customer Stories</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#042F24] font-display tracking-tight">
              What Our <span className="text-[#064E3B]">Customers</span> Say
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Trusted by hundreds of happy plot owners in Lucknow.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials 3-Card Layout with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={idx * 120}
              duration={700}
              className="h-full"
            >
              <div
                className="h-full bg-white rounded-lg p-6 sm:p-7 shadow-sm hover:shadow-lg border border-[#064E3B]/15 hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 5 Gold Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.text}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#064E3B]/10">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C5A059] shrink-0"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#042F24] text-sm font-display">
                        {item.name}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#064E3B] shrink-0" title="Verified Buyer" />
                    </div>
                    <span className="text-xs text-slate-500 font-medium">Customer</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#064E3B]" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span className="w-2 h-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
};
