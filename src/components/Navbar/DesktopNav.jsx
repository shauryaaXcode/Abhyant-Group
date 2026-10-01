import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'About Us', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Why Invest', path: '/why-invest' },
  { name: 'Contact', path: '/contact' },
];

export const DesktopNav = ({ isScrolled, isHomePage }) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
      {NAV_LINKS.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              isActive
                ? isScrolled || !isHomePage
                  ? 'bg-[#064E3B] text-[#C5A059] font-semibold shadow-xs'
                  : 'bg-white/20 text-[#DFC07A] font-semibold backdrop-blur-xs'
                : isScrolled || !isHomePage
                ? 'text-slate-700 hover:text-[#064E3B] hover:bg-[#064E3B]/5'
                : 'text-slate-100 hover:text-white hover:bg-white/10'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
