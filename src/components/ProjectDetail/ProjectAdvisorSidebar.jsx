import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { InquiryForm } from '../InquiryForm';
import { getDirectCallUrl, getWhatsAppUrl } from '../../utils/formatters';

export const ProjectAdvisorSidebar = ({ project }) => {
  return (
    <div className="lg:col-span-4 space-y-6">
      <InquiryForm
        initialProject={project.name}
        title="Enquire About This Project"
        subtitle="Get instant price list, layout map & book site visit."
        variant="floating-card"
      />

      {/* Direct Sales Desk Contact Card */}
      <div className="bg-[#042F24] rounded-2xl p-6 text-white border border-[#C5A059]/40 shadow-lg space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#064E3B] text-[#DFC07A] font-extrabold flex items-center justify-center font-display text-lg border border-[#C5A059]/50">
            AL
          </div>
          <div>
            <h4 className="font-bold font-display text-base text-white">Project Sales Desk</h4>
            <p className="text-xs text-[#DFC07A]">Dedicated Property Consultant</p>
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Need customized plot combinations, commercial corner plots, or legal registry verification assistance? Call us directly.
        </p>

        <div className="space-y-2 pt-2">
          <a
            href={getDirectCallUrl(COMPANY_INFO.phone)}
            className="w-full py-2.5 px-4 bg-[#C5A059] hover:bg-[#DFC07A] text-[#042F24] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 text-[#042F24]" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>

          <a
            href={getWhatsAppUrl(`Hello, I am interested in knowing more about ${project.name}. Please connect with me.`)}
            target="_blank"
            rel="noreferrer"
            className="w-full py-2.5 px-4 bg-[#064E3B] hover:bg-[#064E3B]/80 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors border border-[#C5A059]/40"
          >
            <MessageSquare className="w-4 h-4 text-[#DFC07A]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
