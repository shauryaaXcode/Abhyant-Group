import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Menu, X, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavLogo } from './Navbar/NavLogo';
import { DesktopNav } from './Navbar/DesktopNav';
import { MobileDrawer } from './Navbar/MobileDrawer';
import { getDirectCallUrl } from '../utils/formatters';

export const Navbar = ({ onOpenSiteVisit, onOpenEmiCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-[#F4F7F5]/95 backdrop-blur-md text-[#132A22] shadow-sm py-3 border-b border-[#064E3B]/15'
            : 'bg-gradient-to-b from-[#042F24]/90 via-[#042F24]/50 to-transparent text-white py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <NavLogo isScrolled={isScrolled} isHomePage={isHomePage} />

          {/* Desktop Navigation Links */}
          <DesktopNav isScrolled={isScrolled} isHomePage={isHomePage} />

          {/* Right Action Contacts & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getDirectCallUrl(COMPANY_INFO.phone)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs xl:text-sm font-semibold transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[#064E3B] hover:bg-[#064E3B]/5'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="w-7 h-7 rounded-md bg-[#064E3B]/15 flex items-center justify-center text-[#064E3B]">
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              </div>
              <span className="tracking-wide">{COMPANY_INFO.phone}</span>
            </a>

            {onOpenEmiCalculator && (
              <button
                onClick={onOpenEmiCalculator}
                className={`hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                  isScrolled || !isHomePage
                    ? 'border-[#064E3B]/20 text-[#064E3B] hover:bg-[#064E3B]/5'
                    : 'border-white/20 text-white/90 hover:text-white hover:bg-white/10'
                }`}
                title="Calculate Plot EMI"
              >
                <Calculator className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>EMI Calc</span>
              </button>
            )}

            <button
              id="nav-book-site-visit-btn"
              onClick={onOpenSiteVisit}
              className="px-4.5 py-2 bg-[#064E3B] hover:bg-[#042F24] text-white text-xs xl:text-sm font-semibold rounded-md shadow-sm border border-[#C5A059]/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="text-[#DFC07A]">Book</span>
              <span>Site Visit</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                isScrolled || !isHomePage
                  ? 'text-slate-800 hover:bg-[#064E3B]/10'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSiteVisit={onOpenSiteVisit}
        onOpenEmiCalculator={onOpenEmiCalculator}
      />
    </>
  );
};
