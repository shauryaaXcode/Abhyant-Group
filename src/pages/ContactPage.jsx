import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { AbhyantLogo } from '../components/common/AbhyantLogo';
import { COMPANY_INFO } from '../data/companyData';
import { PROJECTS_DATA } from '../data/projectsData';
import { getDirectCallUrl, getWhatsAppUrl } from '../utils/formatters';

export const ContactPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedProject, setSelectedProject] = useState(PROJECTS_DATA[0].name);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim().length >= 10) {
      setSubmitted(true);
      const text = `Hello Abhyant Group, I sent a contact enquiry. Name: ${name}, Phone: ${phone}, Email: ${email}, Interested Project: ${selectedProject}. Message: ${message}`;
      setTimeout(() => {
        window.open(getWhatsAppUrl(text), '_blank');
      }, 500);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-[#F4F7F5] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#042F24] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#C5A059]/30 geometric-grid-pattern-dark">
        <div className="max-w-7xl mx-auto relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B] border border-[#C5A059]/40 text-[#DFC07A] text-xs font-semibold mb-3 shadow-sm">
            <span className="w-6 h-6 rounded-full bg-white border border-[#C5A059]/60 flex items-center justify-center p-0.5 shadow-xs shrink-0 overflow-hidden">
              <AbhyantLogo size={18} />
            </span>
            <span>Sign of Trust • We Are Here to Assist You</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC07A] to-[#C5A059]">Abhyant Group</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Reach out to our sales experts, book a free site visit with complimentary AC cab pickup, or visit our head office in Hazratganj, Lucknow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Contact Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#064E3B]/15 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#042F24] font-display">
                Corporate Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#064E3B] flex items-center justify-center shrink-0 border border-[#C5A059]/40">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Head Office Address</span>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#064E3B] flex items-center justify-center shrink-0 border border-[#C5A059]/40">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Phone Line</span>
                    <a href={getDirectCallUrl(COMPANY_INFO.phone)} className="text-[#064E3B] font-bold hover:underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#064E3B] flex items-center justify-center shrink-0 border border-[#C5A059]/40">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Address</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#064E3B] font-medium hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F4F7F5] text-[#064E3B] flex items-center justify-center shrink-0 border border-[#C5A059]/40">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <p className="text-slate-600 text-xs mt-0.5">{COMPANY_INFO.officeTimings}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Connect */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppUrl(COMPANY_INFO.whatsappDefaultMsg)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Site Office Location Card */}
            <div className="bg-[#042F24] text-white rounded-2xl p-6 border border-[#C5A059]/40 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-[#DFC07A] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>On-Site Sales Lounge</span>
              </div>
              <h4 className="text-base font-bold font-display text-white">
                Abhyant Green Valley Site Office
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                National Highway-56 (Sultanpur Road), Near Gosainganj Toll Plaza, Lucknow. Open all 7 days with live demarcation maps and legal counselors.
              </p>
            </div>

          </div>

          {/* Right: Detailed Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#064E3B]/15 shadow-sm">
            <div className="mb-6">
              <span className="text-xs font-bold text-[#064E3B] uppercase tracking-widest block mb-1">
                Get In Touch
              </span>
              <h3 className="text-2xl font-extrabold text-[#042F24] font-display">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill the form below and our property advisor will contact you within 15 minutes.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#F4F7F5] rounded-2xl border border-[#064E3B]/20 text-center space-y-3">
                <div className="w-14 h-14 bg-[#064E3B] text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#042F24] font-display">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Abhyant Group. Our senior investment consultant is reviewing your request and will call you at +91 {phone.slice(-10)}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 bg-[#064E3B] text-white font-bold text-xs rounded-xl cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. anand@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project of Interest
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    >
                      {PROJECTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Requirements / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what size plot, budget or timeline you are considering..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#DFC07A]" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
