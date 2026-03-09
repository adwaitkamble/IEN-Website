import React from 'react';
import { motion } from 'framer-motion';

interface BasicInfoStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

export function BasicInfoStep({ formData, handleChange, handleNext }: BasicInfoStepProps) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid Email is required';
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid 10-digit Phone is required';
    }

    if (formData.alternatePhone.trim() && !phoneRegex.test(formData.alternatePhone)) {
      newErrors.alternatePhone = 'Valid 10-digit Phone is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onNextClick = () => {
    if (validate()) {
      handleNext();
    }
  };

  const inputClass = "w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder:text-neutral-600";
  const errorClass = "text-red-400 text-xs mt-1 ml-1";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="space-y-6"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">1</span>
          Basic Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              className={inputClass}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit phone number"
              maxLength={10}
              className={inputClass}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Alternate Phone Number (Optional)</label>
            <input
              type="tel"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleChange}
              placeholder="10-digit alternate phone"
              maxLength={10}
              className={inputClass}
            />
            {errors.alternatePhone && <p className={errorClass}>{errors.alternatePhone}</p>}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={onNextClick}
          className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Next Step
        </button>
      </div>
    </motion.div>
  );
}
