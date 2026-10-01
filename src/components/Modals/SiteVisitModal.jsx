import React, { useState } from 'react';
import { X, Calendar, Clock, Car, CheckCircle2, User, Phone, MapPin, Loader2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROJECTS_DATA } from '../../data/projectsData';
import { COMPANY_INFO } from '../../data/companyData';

export const SiteVisitModal = ({ isOpen, onClose, defaultProject }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [project, setProject] = useState(defaultProject || PROJECTS_DATA[0].name);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [needCabPickup, setNeedCabPickup] = useState(true);
  const [pickupAddress, setPickupAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your full name');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    if (!date) {
      setError('Please select a preferred date for site visit');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {}
    }, 700);
  };

  const handleWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello Abhyant Group, I have booked a Site Visit for ${project} on ${date} (${timeSlot}). Name: ${name}, Phone: ${phone}. Pickup required: ${
        needCabPickup ? 'Yes (' + pickupAddress + ')' : 'No'
      }.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#064E3B]/20 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#042F24] text-white flex items-center justify-between border-b border-[#C5A059]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#064E3B] border border-[#C5A059]/40 flex items-center justify-center text-[#DFC07A]">
              <Car className="w-5 h-5 text-[#DFC07A]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display text-white">Book Free Site Visit</h3>
              <p className="text-xs text-[#DFC07A]">Complimentary AC Cab pick & drop in Lucknow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#F4F7F5] border border-[#C5A059]/40 text-[#064E3B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#064E3B]" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#042F24] font-display">
                  Site Visit Confirmed!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  Our site executive will coordinate with you at <strong className="text-slate-800">+91 {phone.slice(-10)}</strong> on <strong className="text-[#064E3B]">{date}</strong> for your guided tour to <strong>{project}</strong>.
                </p>
              </div>

              <div className="p-4 bg-[#F4F7F5] rounded-xl border border-[#064E3B]/15 text-xs text-left space-y-1 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Project:</span>
                  <span className="font-bold text-slate-900">{project}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Slot:</span>
                  <span className="font-bold text-slate-900">{timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Cab Pickup:</span>
                  <span className="font-bold text-[#064E3B]">{needCabPickup ? 'Yes (AC Cab Included)' : 'Self Drive'}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppConfirmation}
                  className="w-full py-3 bg-[#064E3B] hover:bg-[#042F24] text-white text-sm font-bold rounded-xl shadow-md border border-[#C5A059]/40 transition-colors cursor-pointer"
                >
                  Send Confirmation on WhatsApp
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2 text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {error && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Chandra"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Select Project
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <select
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                  >
                    {PROJECTS_DATA.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} - {p.location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Visit Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#064E3B] focus:bg-white focus:outline-none"
                    >
                      <option value="09:30 AM - 11:30 AM">Morning (09:30 AM - 11:30 AM)</option>
                      <option value="11:30 AM - 01:30 PM">Noon (11:30 AM - 01:30 PM)</option>
                      <option value="02:30 PM - 04:30 PM">Afternoon (02:30 PM - 04:30 PM)</option>
                      <option value="04:30 PM - 06:30 PM">Evening (04:30 PM - 06:30 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Cab Pickup Toggle */}
              <div className="p-3 bg-[#F4F7F5] border border-[#064E3B]/15 rounded-xl space-y-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={needCabPickup}
                    onChange={(e) => setNeedCabPickup(e.target.checked)}
                    className="w-4 h-4 accent-[#064E3B] rounded cursor-pointer"
                  />
                  <span>Need Free AC Cab Pick & Drop Service from your home</span>
                </label>

                {needCabPickup && (
                  <input
                    type="text"
                    placeholder="Enter pickup address or landmark in Lucknow"
                    value={pickupAddress}
                    onChange={(e) => setPickupAddress(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs bg-white border border-[#064E3B]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#064E3B]"
                  />
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-[#064E3B] hover:bg-[#042F24] text-white font-bold text-sm rounded-xl shadow-lg border border-[#C5A059]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#C5A059]" />
                    <span>Confirming Slot...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Free Site Visit</span>
                    <ArrowRight className="w-4 h-4 text-[#DFC07A]" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
