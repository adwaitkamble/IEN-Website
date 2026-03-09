import React from 'react';
import { motion } from 'framer-motion';

interface EducationStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

export function EducationStep({ formData, handleChange, handleFileChange, handleNext, handleBack }: EducationStepProps) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.college.trim()) newErrors.college = 'College Name is required';
    if (!formData.course.trim()) newErrors.course = 'Course / Department is required';
    if (!formData.yearOfStudy.trim()) newErrors.yearOfStudy = 'Year of Study is required';
    if (!formData.studentIdProof) newErrors.studentIdProof = 'Student ID Proof is required';

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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">2</span>
          Education Verification
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">College / University Name *</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Your college name"
              className={inputClass}
            />
            {errors.college && <p className={errorClass}>{errors.college}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Course / Department *</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="e.g., BTech Computer Engineering, MBA, Design"
              className={inputClass}
            />
            {errors.course && <p className={errorClass}>{errors.course}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Year of Study *</label>
            <select
              name="yearOfStudy"
              value={formData.yearOfStudy}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
            {errors.yearOfStudy && <p className={errorClass}>{errors.yearOfStudy}</p>}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Upload College ID / Student ID *</label>
            <div className="relative">
              <input
                type="file"
                name="studentIdProof"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="block w-full text-sm text-neutral-400
                  file:mr-4 file:py-3 file:px-6
                  file:rounded-xl file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gold-500/10 file:text-gold-400
                  hover:file:bg-gold-500/20 file:transition-colors
                  cursor-pointer bg-black/50 border border-white/10 rounded-xl p-2"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-2">Allowed formats: PDF, JPG, PNG. Max size: 5MB.</p>
            {formData.studentIdProof && <p className="text-sm text-green-400 mt-2">File selected: {formData.studentIdProof.name}</p>}
            {errors.studentIdProof && <p className={errorClass}>{errors.studentIdProof}</p>}
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
          onClick={onNextClick}
          className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          Next Step
        </button>
      </div>
    </motion.div>
  );
}
