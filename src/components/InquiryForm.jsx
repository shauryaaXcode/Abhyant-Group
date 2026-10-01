import React, { useState } from 'react';
import { User, Phone, MapPin, CheckCircle2, Loader2, ArrowRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECTS_DATA } from '../data/projectsData';
import { COMPANY_INFO } from '../data/companyData';

export const InquiryForm = ({
  initialProject,
  className = '',
  variant = 'floating-card',
  onSuccess,
  title = 'Quick Enquiry',
  subtitle = 'Get instant plot details, pricing brochure & free site visit.',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProject, setSelectedProject] = useState(
    initialProject || PROJECTS_DATA[0]?.name || 'Green Meadows Township'
  );
  const [preferredSize, setPreferredSize] = useState('1250 Sq.Ft.');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (err) {
        // Confetti fallback
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Abhyant Group team, my name is ${name || 'an interested buyer'}. I submitted an inquiry for ${selectedProject} (${preferredSize}). Please share the plot master layout and price list.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  if (isSuccess) {
    return (
      <div
        className={`bg-white rounded-xl p-6 sm:p-7 shadow-xl border border-[#064E3B]/20 flex flex-col items-center text-center animate-in fade-in zoom-in duration-300 ${className}`}
      >
        <div className="w-14 h-14 bg-[#F4F7F5] text-[#064E3B] border border-[#C5A059]/40 rounded-lg flex items-center justify-center mb-3">
          <CheckCircle2 className="w-8 h-8 text-[#064E3B]" />
        </div>
        <h3 className="text-xl font-bold text-[#042F24] font-display">
          Enquiry Received!
        </h3>
        <p className="text-sm text-slate-600 mt-1 mb-4">
          Thank you <span className="font-semibold text-[#064E3B]">{name}</span>. Our senior real estate advisor will call you within 15 minutes.
        </p>

        <div className="w-full bg-[#F4F7F5] border border-[#064E3B]/15 rounded-lg p-3.5 text-xs text-left mb-4 space-y-1 text-slate-700">
          <div className="flex justify-between">
            <span className="text-slate-500">Project:</span>
            <span className="font-semibold text-[#064E3B]">{selectedProject}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Plot Size:</span>
            <span className="font-semibold text-slate-800">{preferredSize}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Contact:</span>
            <span className="font-semibold text-slate-800">+91 {phone.slice(-10)}</span>
          </div>
        </div>

        <div className="w-full space-y-2">
          <button
            onClick={handleWhatsAppRedirect}
            className="w-full py-2.5 px-4 bg-[#064E3B] hover:bg-[#042F24] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center gap-2 border border-[#C5A059]/40 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#C5A059]" />
            <span>Chat on WhatsApp Instantly</span>
          </button>

          <button
            onClick={() => {
              setIsSuccess(false);
              setName('');
              setPhone('');
            }}
            className="w-full py-2 text-xs text-slate-500 hover:text-[#064E3B] font-medium cursor-pointer"
          >
            Submit another query
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="quick-inquiry-card"
      className={`bg-white rounded-xl shadow-xl p-5 sm:p-6 border border-[#064E3B]/20 ${
        variant === 'floating-card' ? 'shadow-2xl shadow-[#042F24]/20' : ''
      } ${className}`}
    >
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#042F24] font-display flex items-center gap-1.5">
          <span>Quick</span>
          <span className="text-[#064E3B] font-extrabold">Enquiry</span>
        </h3>
        {subtitle && (
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {errorMessage && (
        <div className="mb-3.5 p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-md font-medium">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Name Field */}
        <div>
          <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-700 mb-1">
            Your Name <span className="text-[#C5A059]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4 text-[#064E3B]" />
            </div>
            <input
              id="inquiry-name"
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-[#F4F7F5] border border-[#064E3B]/20 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="inquiry-phone" className="block text-xs font-semibold text-slate-700 mb-1">
            Phone Number <span className="text-[#C5A059]">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Phone className="w-4 h-4 text-[#064E3B]" />
            </div>
            <input
              id="inquiry-phone"
              type="tel"
              required
              maxLength={13}
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-[#F4F7F5] border border-[#064E3B]/20 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Project Select */}
        <div>
          <label htmlFor="inquiry-project" className="block text-xs font-semibold text-slate-700 mb-1">
            Select Project
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <MapPin className="w-4 h-4 text-[#064E3B]" />
            </div>
            <select
              id="inquiry-project"
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-sm bg-[#F4F7F5] border border-[#064E3B]/20 rounded-lg focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none appearance-none transition-all"
            >
              {PROJECTS_DATA.map((proj) => (
                <option key={proj.id} value={proj.name}>
                  {proj.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          id="inquiry-submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2.5 px-4 bg-[#064E3B] hover:bg-[#042F24] active:scale-[0.99] text-white font-bold text-sm rounded-lg shadow-sm border border-[#C5A059]/40 hover:border-[#C5A059] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Submit Now</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-500 pt-1 flex items-center justify-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          We will contact you soon! No spam promise.
        </p>
      </form>
    </div>
  );
};
