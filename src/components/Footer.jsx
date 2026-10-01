import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  Download
} from 'lucide-react';
import { AbhyantLogo } from './common/AbhyantLogo';
import { COMPANY_INFO } from '../data/companyData';
import { PROJECTS_DATA } from '../data/projectsData';
import { getDirectCallUrl } from '../utils/formatters';

export const Footer = ({ onOpenEmiCalculator }) => {
  const [newsletterPhone, setNewsletterPhone] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterPhone.trim().length >= 10) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterPhone('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#042F24] text-slate-300 pt-16 pb-8 border-t border-[#064E3B]/80 geometric-grid-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-[#064E3B]/60">
          
          {/* Column 1: Company Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-white p-1 flex items-center justify-center border border-[#C5A059]/60 shadow-lg group-hover:scale-105 transition-all shrink-0 overflow-hidden">
                <AbhyantLogo size={42} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-xl tracking-tight leading-tight">
                  ABHYANT GROUP
                </span>
                <span className="text-[10px] tracking-[0.2em] font-semibold text-[#DFC07A] uppercase">
                  Sign of Trust
                </span>
              </div>
            </Link>

            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Abhyant Group is a trusted name in real estate plotted developments across Lucknow. With clear titles, transparent documentation, and 100% registry assurance, we are your true Sign of Trust.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#064E3B]/80 border border-[#C5A059]/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#064E3B] hover:border-[#C5A059] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#064E3B]/80 border border-[#C5A059]/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#064E3B] hover:border-[#C5A059] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#064E3B]/80 border border-[#C5A059]/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#064E3B] hover:border-[#C5A059] transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#064E3B]/80 border border-[#C5A059]/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#064E3B] hover:border-[#C5A059] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#C5A059] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-[#C5A059] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#C5A059] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-300 hover:text-[#C5A059] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/why-invest" className="text-slate-300 hover:text-[#C5A059] transition-colors">
                  Why Invest
                </Link>
              </li>
              {onOpenEmiCalculator && (
                <li>
                  <button
                    type="button"
                    onClick={() => onOpenEmiCalculator()}
                    className="text-slate-300 hover:text-[#DFC07A] transition-colors cursor-pointer text-left"
                  >
                    Plot EMI Calculator
                  </button>
                </li>
              )}
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#C5A059] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="/abhyant-group-source.zip"
                  download="abhyant-group-source.zip"
                  className="text-[#DFC07A] hover:underline transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Code (.ZIP)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Projects (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              Our Projects
            </h4>
            <ul className="space-y-2 text-xs">
              {PROJECTS_DATA.map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={`/projects/${proj.id}`}
                    className="text-slate-300 hover:text-[#C5A059] transition-colors block"
                  >
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <a href={getDirectCallUrl(COMPANY_INFO.phone)} className="hover:text-[#C5A059] transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#C5A059] transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.officeTimings}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Enquiry / WhatsApp Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-display tracking-wider uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
              Enquiry
            </h4>
            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Enter your phone number to receive real-time plot layout updates and pricing alerts on WhatsApp.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#064E3B] border border-[#C5A059]/50 text-amber-200 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Subscribed! Check WhatsApp shortly.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex items-center gap-1.5 bg-[#064E3B]/60 border border-[#C5A059]/40 rounded-xl p-1 focus-within:ring-2 focus-within:ring-[#C5A059]">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    value={newsletterPhone}
                    onChange={(e) => setNewsletterPhone(e.target.value)}
                    className="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder:text-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-[#C5A059] hover:bg-[#DFC07A] text-[#042F24] font-bold text-xs rounded-lg transition-colors shrink-0 cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-200/60">
                  <MessageSquare className="w-3 h-3 text-[#C5A059]" />
                  <span>Get project updates on WhatsApp</span>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Verified 100% Legal Plots • Direct Sub-Registrar Registry</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Abhyant Group. All Rights Reserved.</span>
            <Link to="/about" className="hover:text-[#C5A059] transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-[#C5A059] transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
