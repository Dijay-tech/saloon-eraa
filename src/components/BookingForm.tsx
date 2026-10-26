import React, { useState, useId } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, Sparkles, Send, AlertCircle, Info, CheckCircle2 } from 'lucide-react';
import { SERVICES, SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const BookingForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const fullNameId = useId();
  const phoneId = useId();
  const serviceId = useId();
  const dateId = useId();
  const timeId = useId();
  const messageId = useId();

  // Get current date string for min date (YYYY-MM-DD)
  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    'Morning: 10:00 AM - 12:00 PM',
    'Afternoon: 12:00 PM - 02:00 PM',
    'Afternoon: 02:00 PM - 04:00 PM',
    'Evening: 04:00 PM - 06:00 PM',
    'Evening: 06:00 PM - 08:00 PM',
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your contact phone number.';
    } else {
      // Clean up number
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      if (digitsOnly.length < 10 || digitsOnly.length > 13) {
        newErrors.phoneNumber = 'Please enter a valid phone number (e.g. 0329 1170623 or +92 329 1170623).';
      }
    }

    if (!selectedService) {
      newErrors.selectedService = 'Please select a salon service from the list.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please choose a preferred appointment date.';
    }

    if (!preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build WhatsApp URL
    const url = createWhatsAppBookingUrl(
      selectedService,
      preferredDate,
      preferredTime,
      fullName.trim(),
      additionalMessage.trim()
    );

    setSubmittedMessage(
      `Opening WhatsApp to submit your request for "${selectedService}". Please tap 'Send' in WhatsApp to finalize your inquiry with the salon.`
    );

    // Open WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-20 bg-white border-t border-[#F0E4D7] relative overflow-hidden">
      
      {/* Background Soft Photographic Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none opacity-15">
        <img
          src="/src/assets/images/hero_salon_interior_1792986286186.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover filter blur-3xl scale-120"
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B89047]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Appointment Request</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810] tracking-tight">
            Book Your Salon Visit
          </h2>
          <p className="text-base text-[#5C3D2E]">
            Fill in your preferred service and timing below to connect directly with Riwaj Beauty Salon via WhatsApp for slot confirmation.
          </p>
          <div className="w-16 h-0.5 bg-[#B89047] mx-auto rounded-full mt-2" />
        </div>

        {/* Form Card */}
        <div className="bg-[#FCF9F5] rounded-2xl border-2 border-[#EED8BA] p-6 sm:p-10 shadow-sm">
          
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor={fullNameId} className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#8C6D58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id={fullNameId}
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Fatima Ali"
                    className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-lg text-sm text-[#2C1810] placeholder-[#8C6D58]/60 focus:outline-hidden focus:ring-2 focus:ring-[#B89047] transition-all ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-[#E8D8C8]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label htmlFor={phoneId} className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                  Phone Number <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#8C6D58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id={phoneId}
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="0329 1170623"
                    className={`w-full pl-10 pr-4 py-2.5 bg-white border rounded-lg text-sm text-[#2C1810] placeholder-[#8C6D58]/60 focus:outline-hidden focus:ring-2 focus:ring-[#B89047] transition-all ${
                      errors.phoneNumber ? 'border-rose-400 bg-rose-50/20' : 'border-[#E8D8C8]'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Service Selection */}
            <div className="space-y-1.5">
              <label htmlFor={serviceId} className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                Select Service <span className="text-rose-600">*</span>
              </label>
              <select
                id={serviceId}
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);
                  if (errors.selectedService) setErrors({ ...errors, selectedService: '' });
                }}
                className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#B89047] transition-all ${
                  errors.selectedService ? 'border-rose-400 bg-rose-50/20' : 'border-[#E8D8C8]'
                }`}
              >
                <option value="">-- Choose a service from our menu --</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={`${s.name} (${s.priceFormatted})`}>
                    {s.name} — {s.priceFormatted} [{s.category}]
                  </option>
                ))}
              </select>
              {errors.selectedService && (
                <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  <span>{errors.selectedService}</span>
                </p>
              )}
            </div>

            {/* Date & Time Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label htmlFor={dateId} className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                  Preferred Date <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <input
                    id={dateId}
                    type="date"
                    min={today}
                    value={preferredDate}
                    onChange={(e) => {
                      setPreferredDate(e.target.value);
                      if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                    }}
                    className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#B89047] transition-all ${
                      errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-[#E8D8C8]'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>

              {/* Preferred Time */}
              <div className="space-y-1.5">
                <label htmlFor={timeId} className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                  Preferred Time Slot <span className="text-rose-600">*</span>
                </label>
                <select
                  id={timeId}
                  value={preferredTime}
                  onChange={(e) => {
                    setPreferredTime(e.target.value);
                    if (errors.preferredTime) setErrors({ ...errors, preferredTime: '' });
                  }}
                  className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-[#2C1810] focus:outline-hidden focus:ring-2 focus:ring-[#B89047] transition-all ${
                    errors.preferredTime ? 'border-rose-400 bg-rose-50/20' : 'border-[#E8D8C8]'
                  }`}
                >
                  <option value="">-- Choose preferred timing --</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.preferredTime && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>{errors.preferredTime}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Additional Message */}
            <div className="space-y-1.5">
              <label htmlFor={messageId} className="block text-xs font-semibold uppercase tracking-wider text-[#2C1810]">
                Additional Notes / Requests (Optional)
              </label>
              <textarea
                id={messageId}
                rows={3}
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                placeholder="Mention specific requirements such as hair length, bridal event date, or skin sensitivities..."
                className="w-full px-4 py-2.5 bg-white border border-[#E8D8C8] rounded-lg text-sm text-[#2C1810] placeholder-[#8C6D58]/60 focus:outline-hidden focus:ring-2 focus:ring-[#B89047] transition-all resize-none"
              />
            </div>

            {/* Confirmation Disclaimer Notice */}
            <div className="p-4 bg-[#F8EFE4] rounded-lg border border-[#EED8BA] flex items-start gap-3 text-xs text-[#5C3D2E]">
              <Info className="w-4 h-4 text-[#B89047] shrink-0 mt-0.5" />
              <p>
                Submitting this form prepares your details and opens WhatsApp with the salon's official number (<strong className="text-[#2C1810] tabular-nums">{SALON_INFO.phone}</strong>). Please tap <strong>Send</strong> in WhatsApp to deliver your inquiry. An appointment is confirmed once the salon responds to your message.
              </p>
            </div>

            {submittedMessage && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-2.5 text-xs text-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>{submittedMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 text-sm font-semibold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20BA5A] rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Send Appointment Request via WhatsApp
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};
