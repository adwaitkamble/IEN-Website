import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { num: 1, label: 'Basic Info' },
    { num: 2, label: 'Education' },
    { num: 3, label: 'Skills' },
    { num: 4, label: 'Confirm' }
  ];

  return (
    <div className="flex items-center justify-center mb-12 px-2">
      <div className="flex items-center gap-1 sm:gap-2 md:gap-4 w-full max-w-2xl">
        {steps.map((step, index) => (
          <React.Fragment key={step.num}>
            <div className="flex flex-col items-center relative z-10 shrink-0">
              <div className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                currentStep >= step.num ? 'border-gold-500 bg-gold-500/20 text-gold-400' : 'border-neutral-700 text-neutral-500 bg-navy-950'
              }`}>
                {currentStep > step.num ? <CheckCircle2 size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" /> : <span className="font-bold text-xs sm:text-sm md:text-base">{step.num}</span>}
              </div>
              <span className={`text-[9px] sm:text-[10px] md:text-xs mt-2 uppercase tracking-wider md:tracking-widest font-bold absolute top-8 sm:top-10 md:top-12 whitespace-nowrap ${
                currentStep >= step.num ? 'text-gold-400' : 'text-neutral-500'
              }`}>
                {step.label}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-[2px] mb-5 sm:mb-6 md:mb-8 transition-colors duration-300 min-w-[10px] ${
                currentStep > step.num ? 'bg-gold-500' : 'bg-neutral-800'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
