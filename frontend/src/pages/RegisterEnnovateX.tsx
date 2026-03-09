import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { BackgroundLayer } from '../components/ui/BackgroundLayer';
import { StepIndicator } from '../components/ennovatex/StepIndicator';
import { BasicInfoStep } from '../components/ennovatex/BasicInfoStep';
import { EducationStep } from '../components/ennovatex/EducationStep';
import { ResumeSkillsStep } from '../components/ennovatex/ResumeSkillsStep';
import { ConfirmationStep } from '../components/ennovatex/ConfirmationStep';
import api from '../services/api';

export default function RegisterEnnovateX() {

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    alternatePhone: '',
    college: '',
    course: '',
    yearOfStudy: '',
    studentIdProof: null as File | null,
    resume: null as File | null,
    primarySkill: '',
    otherSkills: '',
    toolsKnown: '',
    portfolioURL: '',
    participationType: '',
    hackathonExperience: '',
    declarationName: '',
    declarationDate: new Date().toISOString().split('T')[0],
    agreedToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {

    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, checked } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, files } = e.target;

    if (files && files.length > 0) {

      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));

    }
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();

    setLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {

      if (!formData.resume || !formData.studentIdProof) {
        throw new Error("Resume and Student ID are required");
      }

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {

        if (value !== null && key !== "agreedToTerms") {
          data.append(key, value as any);
        }

      });

      await api.post("/ennovatex/register", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      setStatus('success');

    } catch (error: any) {

      console.error("Registration Error:", error);

      setStatus('error');

      setErrorMessage(
        error.response?.data?.message ||
        error.message ||
        'Registration failed. Please try again.'
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-navy-950 pt-24 md:pt-32 pb-20 md:pb-28 relative overflow-hidden antialiased">

      <BackgroundLayer />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Register for
            <span className="text-gold-400"> Ennovate'X</span>
          </h1>

          <p className="text-slate-300 text-lg">
            Join the 3-day immersive entrepreneurial experience.
          </p>

        </motion.div>

        {status === 'success' ? (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/5 border border-gold-500/30 rounded-3xl p-12 text-center"
          >

            <CheckCircle2 size={60} className="text-gold-400 mx-auto mb-6" />

            <h2 className="text-3xl text-white font-bold mb-4">
              Registration Successful 🎉
            </h2>

            <p className="text-slate-300">
              Thank you <span className="text-gold-400">{formData.name}</span> for registering.
            </p>

          </motion.div>

        ) : (

          <div>

            <StepIndicator currentStep={step} />

            {status === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl text-red-400 mb-6">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">

                {step === 1 && (
                  <BasicInfoStep
                    key="step1"
                    formData={formData}
                    handleChange={handleChange}
                    handleNext={() => setStep(2)}
                  />
                )}

                {step === 2 && (
                  <EducationStep
                    key="step2"
                    formData={formData}
                    handleChange={handleChange}
                    handleFileChange={handleFileChange}
                    handleNext={() => setStep(3)}
                    handleBack={() => setStep(1)}
                  />
                )}

                {step === 3 && (
                  <ResumeSkillsStep
                    key="step3"
                    formData={formData}
                    handleChange={handleChange}
                    handleFileChange={handleFileChange}
                    handleNext={() => setStep(4)}
                    handleBack={() => setStep(2)}
                  />
                )}

                {step === 4 && (
                  <ConfirmationStep
                    key="step4"
                    formData={formData}
                    handleChange={handleChange}
                    handleCheckboxChange={handleCheckboxChange}
                    handleBack={() => setStep(3)}
                    handleSubmit={handleSubmit}
                    loading={loading}
                  />
                )}

              </AnimatePresence>
            </form>

          </div>

        )}

      </div>

    </div>
  );
}