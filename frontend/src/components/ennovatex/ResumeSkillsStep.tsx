import React from 'react';
import { motion } from 'framer-motion';

interface ResumeSkillsStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

export function ResumeSkillsStep({ formData, handleChange, handleFileChange, handleNext, handleBack }: ResumeSkillsStepProps) {
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.resume) newErrors.resume = 'Resume is required';
    if (!formData.primarySkill.trim()) newErrors.primarySkill = 'Primary Skill is required';

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
          <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">3</span>
          Resume & Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Upload Resume *</label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf"
                className="block w-full text-sm text-neutral-400
                  file:mr-4 file:py-3 file:px-6
                  file:rounded-xl file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gold-500/10 file:text-gold-400
                  hover:file:bg-gold-500/20 file:transition-colors
                  cursor-pointer bg-black/50 border border-white/10 rounded-xl p-2"
              />
            </div>
            <p className="text-xs text-neutral-500 mt-2">Allowed formats: PDF only. Max size: 10MB.</p>
            {formData.resume && <p className="text-sm text-green-400 mt-2">File selected: {formData.resume.name}</p>}
            {errors.resume && <p className={errorClass}>{errors.resume}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Primary Skill *</label>
            <select
              name="primarySkill"
              value={formData.primarySkill}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="" disabled>Select Primary Skill</option>
              <option value="Coding / Technical">Coding / Technical</option>
              <option value="Business / Strategy">Business / Strategy</option>
              <option value="Marketing / Growth">Marketing / Growth</option>
              <option value="Design / UI/UX">Design / UI/UX</option>
              <option value="Research / Analysis">Research / Analysis</option>
              <option value="Operations">Operations</option>
            </select>
            {errors.primarySkill && <p className={errorClass}>{errors.primarySkill}</p>}
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Other Skills (Optional)</label>
            <textarea
              name="otherSkills"
              value={formData.otherSkills}
              onChange={handleChange}
              placeholder="e.g., Public Speaking, Video Editing, Data Analysis"
              className={`${inputClass} min-h-[100px] resize-y`}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Tools or Software You Know (Optional)</label>
            <input
              type="text"
              name="toolsKnown"
              value={formData.toolsKnown}
              onChange={handleChange}
              placeholder="e.g., Python, Figma, Excel, React"
              className={inputClass}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-neutral-400 mb-2">Portfolio / GitHub / LinkedIn Link (Optional)</label>
            <input
              type="url"
              name="portfolioURL"
              value={formData.portfolioURL}
              onChange={handleChange}
              placeholder="https://..."
              className={inputClass}
            />
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
