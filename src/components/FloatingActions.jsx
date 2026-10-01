import React, { useState } from 'react';
import { MessageSquare, Phone, X, Send } from 'lucide-react';
import { AbhyantLogo } from './common/AbhyantLogo';
import { COMPANY_INFO } from '../data/companyData';
import { getDirectCallUrl, getWhatsAppUrl } from '../utils/formatters';

export const FloatingActions = () => {
  const [showQuickChat, setShowQuickChat] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleSendWhatsApp = (e) => {
    if (e) e.preventDefault();
    const url = getWhatsAppUrl(chatMessage.trim());
    window.open(url, '_blank');
    setShowQuickChat(false);
    setChatMessage('');
  };

  return (
    <>
      {/* Floating Action Buttons Container at Bottom Right */}
      <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Quick WhatsApp Pop-over Bubble */}
        {showQuickChat && (
          <div className="w-72 sm:w-80 bg-white rounded-lg shadow-2xl border border-[#C5A059]/40 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200 mb-2">
            <div className="p-3.5 bg-[#042F24] text-white flex items-center justify-between border-b border-[#C5A059]/30">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#C5A059]/60 flex items-center justify-center p-0.5 shadow-sm shrink-0 overflow-hidden">
                  <AbhyantLogo size={32} />
                </div>
                <div>
                  <h4 className="text-xs font-bold font-display text-white">Abhyant Group</h4>
                  <p className="text-[10px] text-[#DFC07A] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
                    Sign of Trust • Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowQuickChat(false)}
                className="p-1 hover:bg-[#064E3B] rounded-md text-emerald-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 bg-[#F4F7F5] text-xs text-slate-700 space-y-2.5 max-h-48 overflow-y-auto">
              <div className="p-2.5 bg-white rounded-md shadow-xs border border-slate-200 inline-block max-w-[90%]">
                Namaste! 🙏 Welcome to Abhyant Group. How can we assist you with our residential plots today?
              </div>
            </div>

            <form onSubmit={handleSendWhatsApp} className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5">
              <input
                type="text"
                placeholder="Type your query..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-[#F4F7F5] rounded-md border border-slate-200 focus:outline-none focus:border-[#064E3B]"
              />
              <button
                type="submit"
                className="p-2 bg-[#064E3B] hover:bg-[#042F24] text-[#DFC07A] rounded-md shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        {/* Action Button: Direct Phone Call */}
        <a
          id="floating-call-btn"
          href={getDirectCallUrl(COMPANY_INFO.phone)}
          className="w-12 h-12 rounded-full bg-[#042F24] hover:bg-[#064E3B] text-white shadow-xl flex items-center justify-center border border-[#C5A059] hover:scale-110 active:scale-95 transition-all duration-200 group"
          aria-label="Call Abhyant Group directly"
          title="Call Us Directly"
        >
          <Phone className="w-5 h-5 text-[#DFC07A] group-hover:animate-bounce" />
        </a>

        {/* Action Button: WhatsApp Floating Icon */}
        <button
          id="floating-whatsapp-btn"
          onClick={() => {
            if (window.innerWidth < 640) {
              handleSendWhatsApp();
            } else {
              setShowQuickChat(!showQuickChat);
            }
          }}
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-emerald-900/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 relative group border-2 border-white cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="Chat with us on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-white animate-pulse" />
        </button>
      </div>
    </>
  );
};
