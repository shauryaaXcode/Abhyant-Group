import React from 'react';

/**
 * Official Abhyant Group Company Logo
 * Renders the exact company logo JPEG with automatic fallback handling.
 */
export const AbhyantLogo = ({
  size = 48,
  className = '',
  imgClassName = '',
  showText = false,
  isScrolled = false,
  isHomePage = true,
  variant = 'default',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img
        src="/company-logo.jpeg"
        alt="Abhyant Group - Sign of Trust"
        width={size}
        height={size}
        referrerPolicy="no-referrer"
        className={`object-contain shrink-0 transition-transform duration-300 hover:scale-105 rounded-lg ${imgClassName}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-display font-extrabold text-lg sm:text-xl tracking-wider leading-none ${
              variant === 'footer'
                ? 'text-white'
                : isScrolled || !isHomePage
                ? 'text-[#064E3B]'
                : 'text-white'
            }`}
          >
            ABHYANT GROUP
          </span>
          <span className="text-[10px] sm:text-[11px] tracking-[0.25em] font-semibold text-[#DFC07A] uppercase leading-tight mt-1">
            Sign of Trust
          </span>
        </div>
      )}
    </div>
  );
};
