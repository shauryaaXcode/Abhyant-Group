import React from 'react';
import { MapPin, ShieldCheck, Leaf } from 'lucide-react';
import { AMENITIES_DATA, AMENITY_CORE_FEATURES } from '../data/amenitiesData';
import { ScrollReveal } from './common/ScrollReveal';

// Custom icons matching the user's exact UI design
const AmenityCardIcon = ({ type }) => {
  switch (type) {
    case 'highway':
      // Lucknow-Sultanpur Highway Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20L8 4M20 20L16 4" />
          <path d="M12 4v4M12 11v3M12 17v3" strokeDasharray="1 1" />
        </svg>
      );
    case 'ring-road':
      // Outer Ring Road Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 21L7 3M19 21L17 3" />
          <path d="M10 4v16M14 4v16" strokeDasharray="2 2" />
        </svg>
      );
    case 'expressway':
      // Purvanchal Ballia Expressway Icon (Expressway Bridge / Road)
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 21L8 3M20 21L16 3" />
          <path d="M2 13h20" />
          <path d="M12 5v3M12 15v5" />
        </svg>
      );
    case 'police':
      // Police Headquarter Shield Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'factory':
      // Amul Plant Industrial Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V10l5 3V8l6 4V4l3 2v15" />
          <path d="M8 18h1M13 18h1M18 18h1" />
        </svg>
      );
    case 'stadium':
      // Ekana Stadium Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="8" rx="9" ry="4" />
          <path d="M3 8v6c0 2.5 4 4.5 9 4.5s9-2 9-4.5V8" />
          <path d="M6 11v4M9 12v4.5M15 12v4.5M18 11v4" />
        </svg>
      );
    case 'hospital':
      // Medanta Hospital Circle with Cross Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7v10M7 12h10" />
        </svg>
      );
    case 'it-city':
      // HCL IT City Office Building Icon
      return (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M12 6h.01M8 10h.01M16 10h.01M12 10h.01M8 14h.01M16 14h.01M12 14h.01" />
        </svg>
      );
    default:
      return null;
  }
};

export const AmenitiesSection = () => {
  return (
    <section id="amenities-section" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#C5A059] uppercase font-sans mb-3">
              WORLD CLASS FACILITIES
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4">
              <div className="h-[1px] w-10 sm:w-16 bg-slate-400/50" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#042F24] font-normal tracking-tight">
                Amenities
              </h2>
              <div className="h-[1px] w-10 sm:w-16 bg-slate-400/50" />
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Thoughtfully planned amenities to ensure a comfortable, secure and high-quality living experience for you and your family.
            </p>
          </div>
        </ScrollReveal>

        {/* 8 Amenities Grid (2 rows x 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {AMENITIES_DATA.map((item, index) => (
            <ScrollReveal
              key={item.id}
              animation="fade-up"
              delay={index * 60}
              duration={600}
            >
              <div
                id={`amenity-card-${item.id}`}
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-400 border border-slate-200/80 bg-slate-900 cursor-default"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-105 transition-transform duration-700 ease-out`}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to high quality unsplash if local image fails
                    if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                      e.currentTarget.src = item.fallbackImage;
                    }
                  }}
                />

                {/* Dark Scrim / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021f18]/95 via-[#021f18]/75 via-45% to-transparent pointer-events-none" />

                {/* Card Content at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center shrink-0">
                      <AmenityCardIcon type={item.iconType} />
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-xs">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-200/90 text-xs sm:text-[13px] leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 4 Core Features Horizontal Strip */}
        <ScrollReveal animation="fade-up" delay={250} duration={650}>
          <div className="mt-10 sm:mt-12 bg-[#FAFBF9] border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-200/80">
              {AMENITY_CORE_FEATURES.map((feature, idx) => (
                <div
                  key={feature.id}
                  className={`flex flex-col items-center text-center px-4 ${
                    idx > 0 ? 'pt-5 sm:pt-0' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#064E3B]/8 flex items-center justify-center mb-2.5 text-[#064E3B]">
                    {feature.iconType === 'location' && (
                      <MapPin className="w-5 h-5 text-[#064E3B]" />
                    )}
                    {feature.iconType === 'security' && (
                      <ShieldCheck className="w-5 h-5 text-[#064E3B]" />
                    )}
                    {feature.iconType === 'roads' && (
                      <svg className="w-5 h-5 text-[#064E3B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 21L7 3M19 21L17 3" />
                        <path d="M10 4v16M14 4v16" strokeDasharray="2 2" />
                      </svg>
                    )}
                    {feature.iconType === 'greenery' && (
                      <Leaf className="w-5 h-5 text-[#064E3B]" />
                    )}
                  </div>

                  <h4 className="font-bold text-[#042F24] text-sm sm:text-base">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-[210px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
export default AmenitiesSection;
