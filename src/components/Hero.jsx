import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, FileCheck, Compass, MapPin, ChevronRight, Play, Star } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

export const Hero = ({ onOpenSiteVisit, onOpenVideoTour }) => {
  const trustBadges = [
    { icon: ShieldCheck, label: 'Verified Clear Titles' },
    { icon: FileCheck, label: 'Immediate Registry' },
    { icon: Compass, label: 'Planned Townships' },
    { icon: MapPin, label: 'Prime Locations' },
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Background Aerial / Grand Entrance Image with Contrast Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Abhyant City.jpeg"
          alt="Abhyant Group - Sign of Trust Township Entrance and Plotted Layout"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Luxury Vignette & Dark Contrast Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/60 sm:via-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headings, Badges, CTAs */}
          <div className="lg:col-span-7 text-white space-y-5">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-display tracking-tight leading-[1.15] text-white">
              Invest in Premium <br />
              Plots at <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] via-[#C5A059] to-[#DFC07A]">Prime Locations</span>
            </h1>

            {/* Subheadings */}
            <div className="space-y-1.5">
              <p className="text-[#DFC07A] text-base sm:text-lg font-semibold tracking-wide flex items-center flex-wrap gap-x-2 gap-y-1">
                <span>100% Legal Plots</span>
                <span className="text-slate-400">•</span>
                <span>Registry Available</span>
                <span className="text-slate-400">•</span>
                <span>Prime Connectivity</span>
              </p>
              <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
                Build your dream today for a better tomorrow with clear documentation and prime connectivity.
              </p>
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-[#042F24]/70 border border-[#C5A059]/30 backdrop-blur-xs text-xs font-medium text-slate-100 hover:border-[#C5A059] hover:bg-[#064E3B]/70 transition-all"
                  >
                    <Icon className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="truncate">{badge.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Link
                to="/projects"
                className="px-6 py-3.5 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-sm sm:text-base rounded-md shadow-lg shadow-[#042F24]/40 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center border border-[#C5A059]/40"
              >
                <span className="text-[#DFC07A] mr-1.5">Explore</span> Projects
              </Link>

              <button
                id="hero-book-site-visit-btn"
                onClick={onOpenSiteVisit}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 text-[#042F24] font-bold text-sm sm:text-base rounded-md shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center gap-1.5 border border-[#C5A059]/40 cursor-pointer"
              >
                <span>Book Site Visit</span>
                <ChevronRight className="w-4 h-4 text-[#064E3B]" />
              </button>

              <button
                onClick={onOpenVideoTour}
                className="px-4 py-3 bg-[#042F24]/80 hover:bg-[#064E3B]/90 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold rounded-md border border-[#C5A059]/30 backdrop-blur-xs inline-flex items-center gap-2 transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-md bg-[#C5A059] text-[#042F24] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-[#042F24] ml-0.5" />
                </div>
                <span>Watch Drone Video</span>
              </button>
            </div>

            {/* Happy Customers Avatar Pill */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#C5A059] object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Customer avatar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#C5A059] object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Customer avatar"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-[#C5A059] object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                  alt="Customer avatar"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                  <span className="text-xs font-bold text-[#DFC07A] ml-1">4.7 / 5.0</span>
                </div>
                <span className="text-xs text-slate-300 font-medium">Over 100+ Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Quick Inquiry Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <InquiryForm variant="floating-card" />
          </div>
        </div>
      </div>
    </section>
  );
};
