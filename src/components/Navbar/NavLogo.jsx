import React from 'react';
import { Link } from 'react-router-dom';
import { AbhyantLogo } from '../common/AbhyantLogo';

export const NavLogo = ({ isScrolled, isHomePage }) => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
      aria-label="Abhyant Group - Sign of Trust Home"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white p-1 flex items-center justify-center shadow-lg border border-[#C5A059]/60 group-hover:border-[#DFC07A] group-hover:scale-105 transition-all shrink-0 overflow-hidden">
        <AbhyantLogo size={46} />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold text-lg sm:text-xl tracking-tight leading-none ${
            isScrolled || !isHomePage ? 'text-[#064E3B]' : 'text-white'
          }`}
        >
          ABHYANT GROUP
        </span>
        <span className="text-[10px] tracking-[0.25em] font-semibold text-[#DFC07A] uppercase leading-tight mt-0.5">
          Sign of Trust
        </span>
      </div>
    </Link>
  );
};

