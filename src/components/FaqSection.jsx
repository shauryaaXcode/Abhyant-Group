import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, HelpCircle, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { PLOT_BOOKING_FAQS } from '../data/faqData';
import { ScrollReveal } from './common/ScrollReveal';

export const FaqSection = ({ onOpenSiteVisit }) => {
  // Open the first question by default for clear interactivity affordance
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleEnquireClick = () => {
    if (onOpenSiteVisit) {
      onOpenSiteVisit('Plot Booking Enquiry');
    } else {
      const heroForm = document.getElementById('hero-inquiry-form');
      if (heroForm) {
        heroForm.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="faq-section"
      className="py-16 sm:py-24 bg-[#F8FAF9] relative overflow-hidden border-t border-[#064E3B]/10"
    >
      {/* Subtle ambient luxury grid texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#042F24_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EBF3EF] text-[#064E3B] text-xs font-bold uppercase tracking-wider mb-3 border border-[#C5A059]/40">
              <HelpCircle className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Plot Booking Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#042F24] font-display tracking-tight">
              Frequently Asked <span className="text-[#064E3B]">Questions</span>
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Find clear, concise answers to common questions about residential plot booking and land purchase with Abhyant Group.
            </p>
          </div>
        </ScrollReveal>

        {/* Compact & Premium Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {PLOT_BOOKING_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={faq.id}
                animation="fade-up"
                delay={index * 40}
                duration={600}
              >
                <div
                  className={`rounded-xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-[#C5A059] shadow-md ring-1 ring-[#C5A059]/30'
                      : 'bg-white/80 hover:bg-white border-[#064E3B]/10 hover:border-[#064E3B]/30 shadow-xs'
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    id={`faq-btn-${faq.id}`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#064E3B] rounded-xl"
                  >
                    <span
                      className={`font-display font-bold text-base sm:text-lg transition-colors leading-snug ${
                        isOpen ? 'text-[#064E3B]' : 'text-[#042F24] hover:text-[#064E3B]'
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Circular + / − Toggle Icon */}
                    <div
                      className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
                        isOpen
                          ? 'bg-[#064E3B] text-white border-[#064E3B] rotate-180'
                          : 'bg-[#F4F7F5] text-[#064E3B] border-[#064E3B]/20 group-hover:border-[#C5A059]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-200" />
                      )}
                    </div>
                  </button>

                  {/* Smooth Collapsible Answer Container */}
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100/80">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA Strip below the FAQs */}
        <ScrollReveal animation="fade-up" duration={700} delay={200}>
          <div
            id="faq-cta-box"
            className="mt-12 sm:mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-[#064E3B]/15 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-[#064E3B] font-semibold text-xs uppercase tracking-wider mb-1">
                <MessageSquare className="w-4 h-4 text-[#C5A059]" />
                <span>Dedicated Plot Advisors</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#042F24] tracking-tight">
                Still have questions? Talk to our team
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md">
                Our property consultants are ready to assist you with plot dimensions, site visits, and personalized booking guidance.
              </p>
            </div>

            {/* Action Buttons: Enquire Now and Contact Us */}
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                id="faq-enquire-now-btn"
                type="button"
                onClick={handleEnquireClick}
                className="w-full sm:w-auto px-5 py-3 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer flex items-center justify-center gap-2 border border-[#C5A059]/40"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-[#DFC07A]" />
              </button>

              <Link
                id="faq-contact-us-link"
                to="/contact"
                className="w-full sm:w-auto px-5 py-3 bg-[#F4F7F5] hover:bg-[#E5EAE7] text-[#042F24] hover:text-[#064E3B] font-bold text-xs sm:text-sm rounded-xl border border-[#064E3B]/20 transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#064E3B]" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
