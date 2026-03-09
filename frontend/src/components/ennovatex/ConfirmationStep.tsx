import React from 'react';
import { motion } from 'framer-motion';

interface ConfirmationStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBack: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function ConfirmationStep({ formData, handleChange, handleCheckboxChange, handleBack, handleSubmit, loading }: ConfirmationStepProps) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.participationType.trim()) newErrors.participationType = 'Participation Type is required';
    if (!formData.hackathonExperience.trim()) newErrors.hackathonExperience = 'Hackathon Experience is required';
    if (!formData.declarationName.trim()) newErrors.declarationName = 'Declaration Name is required';
    if (!formData.declarationDate.trim()) newErrors.declarationDate = 'Declaration Date is required';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'You must agree to the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
    }
  };

  const inputClass = "w-full p-4 bg-black/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder:text-neutral-600";
  const errorClass = "text-red-400 text-xs mt-1 ml-1";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">4</span>
          Participation Confirmation
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Participation Type *</label>
            <select
              name="participationType"
              value={formData.participationType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Select Participation Type</option>
              <option value="Idea Pitcher">Idea Pitcher (will pitch an idea on Day 1)</option>
              <option value="Participant">Participant (will join a team)</option>
            </select>
            {errors.participationType && <p className={errorClass}>{errors.participationType}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Have you participated in a hackathon or startup event before? *</label>
            <select
              name="hackathonExperience"
              value={formData.hackathonExperience}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.hackathonExperience && <p className={errorClass}>{errors.hackathonExperience}</p>}
          </div>

          <div className="md:col-span-2 mt-4 pt-4 border-t border-white/10">
            <h4 className="text-lg font-bold text-white mb-4">Declaration</h4>
            
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="agreedToTerms"
                name="agreedToTerms"
                checked={formData.agreedToTerms}
                onChange={handleCheckboxChange}
                className="mt-1 w-5 h-5 rounded border-white/20 bg-black/50 text-gold-500 focus:ring-gold-500/50"
              />
              <label htmlFor="agreedToTerms" className="text-sm text-neutral-300 leading-relaxed">
                I confirm that the information provided is correct and I will follow the rules of ENNOVATE’X.
              </label>
            </div>
            {errors.agreedToTerms && <p className={`${errorClass} -mt-4 mb-4`}>{errors.agreedToTerms}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name (for declaration) *</label>
                <input
                  type="text"
                  name="declarationName"
                  value={formData.declarationName}
                  onChange={handleChange}
                  placeholder="Type your full name"
                  className={inputClass}
                />
                {errors.declarationName && <p className={errorClass}>{errors.declarationName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Date *</label>
                <input
                  type="date"
                  name="declarationDate"
                  value={formData.declarationDate}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.declarationDate && <p className={errorClass}>{errors.declarationDate}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-4">
        <button
          type="button"
          onClick={handleBack}
          className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmitClick}
          disabled={loading}
          className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
          ) : (
            'Submit Registration'
          )}
        </button>
      </div>
    </motion.div>
  );
}
