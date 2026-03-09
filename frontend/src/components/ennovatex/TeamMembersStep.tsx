import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2, Users } from 'lucide-react';

interface TeamMembersStepProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  addMember: () => void;
  removeMember: (index: number) => void;
  handleBack: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function TeamMembersStep({
  formData,
  handleChange,
  addMember,
  removeMember,
  handleBack,
  handleSubmit,
  loading
}: TeamMembersStepProps) {
  const inputClass = "w-full p-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/50 transition-all placeholder:text-neutral-600 text-sm";
  
  const teamSize = formData.members.length + 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h3 className="text-xl font-display font-bold text-white flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center text-sm">3</span>
            Team Members
          </h3>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300">
            <Users size={16} className="text-gold-400" />
            <span>Team Size: <strong className="text-white">{teamSize} / 5</strong></span>
          </div>
        </div>

        <div className="space-y-6">
          <AnimatePresence>
            {formData.members.map((member: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 md:p-6 rounded-xl bg-white/[0.02] border border-white/5 relative group">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-gold-400 font-medium text-sm uppercase tracking-wider">Member {index + 1}</h4>
                    <button
                      type="button"
                      onClick={() => removeMember(index)}
                      className="text-neutral-500 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-white/5"
                      title="Remove Member"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={member.fullName}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Full Name *"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={member.email}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Email Address *"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={member.phone}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Phone Number *"
                        maxLength={10}
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="branch"
                        value={member.branch}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Branch / Program *"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {formData.members.length < 4 && (
          <motion.button
            type="button"
            onClick={addMember}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 py-4 border-2 border-dashed border-white/10 rounded-xl text-neutral-400 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all flex items-center justify-center gap-2 font-medium"
          >
            <Plus size={20} />
            Add Team Member
          </motion.button>
        )}
        
        {formData.members.length === 4 && (
          <p className="text-center text-sm text-neutral-500 mt-6">
            Maximum team size reached (Leader + 4 Members)
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-4">
        <button
          type="button"
          onClick={handleBack}
          className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-gold-500 text-black font-bold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center min-w-[160px]"
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
