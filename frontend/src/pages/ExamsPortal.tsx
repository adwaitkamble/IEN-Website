import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, Clock, FileText, CheckCircle, AlertCircle, ChevronRight, PlayCircle, LogOut } from 'lucide-react';
import api from '../services/api';

const exams = [
  { id: 1, title: 'Innovation Aptitude Test', duration: '60 mins', questions: 50, status: 'Active', date: 'Today' },
  { id: 2, title: 'IPR Basics Certification', duration: '45 mins', questions: 30, status: 'Upcoming', date: 'Tomorrow' },
  { id: 3, title: 'Entrepreneurship Quiz', duration: '30 mins', questions: 20, status: 'Completed', date: 'Last Week', score: '85%' },
];

export default function ExamsPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'instructions' | 'exam'>('dashboard');
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 mins

  const [studentIdInput, setStudentIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Exam Interaction State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  // Mock Questions Data
  const mockQuestions = [
    {
      question: "Which of the following is considered the primary goal of the Institution Innovation Council (IIC)?",
      options: ['To conduct regular exams', 'To foster a culture of innovation and startups', 'To manage sports events', 'To handle administrative tasks']
    },
    {
      question: "What does IPR stand for?",
      options: ['Internet Protocol Routing', 'Intellectual Property Rights', 'International Public Relations', 'Internal Process Review']
    },
    {
      question: "Which of these is a key characteristic of an entrepreneur?",
      options: ['Aversion to risk', 'Preference for routine', 'Innovation and risk-taking', 'Avoiding decision-making']
    }
  ];

  // Simulate timer
  useEffect(() => {
    if (activeTab === 'exam' && timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [activeTab, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    try {
      const response = await api.post('/exam/login', { studentId: studentIdInput, password: passwordInput });
      if (response.data.success) {
        setIsLoggedIn(true);
      } else {
        setLoginError(response.data.message || 'Login failed');
      }
    } catch (err) {
      setLoginError('Could not connect to server.');
    }
  };

  const startExam = (exam: any) => {
    setSelectedExam(exam);
    setActiveTab('instructions');
  };

  const beginTest = () => {
    setActiveTab('exam');
    setTimeLeft(60 * parseInt(selectedExam.duration)); // Parse duration
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentQuestionIndex]: option }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < mockQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-navy-950 py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-navy-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden relative z-10"
        >
          <div className="p-8 bg-white/5 text-center border-b border-white/10">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
              <Lock className="text-navy-950" size={32} />
            </div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">Exams Portal</h2>
            <p className="text-slate-400 text-sm">Secure login for IEN assessments</p>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-6">
            {loginError && <div className="text-red-400 text-sm text-center font-medium bg-red-500/10 py-2 rounded-lg border border-red-500/20">{loginError}</div>}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Student ID</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  required
                  value={studentIdInput}
                  onChange={(e) => setStudentIdInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-navy-950/50 text-white placeholder-slate-500"
                  placeholder="Enter your PRN"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all bg-navy-950/50 text-white placeholder-slate-500"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold shadow-lg hover:shadow-gold-glow hover:scale-[1.02] transition-all"
            >
              Secure Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-950 pb-20 relative overflow-hidden text-slate-300">
      <div className="fixed inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 z-0 pointer-events-none" />

      {/* Portal Header */}
      <header className="bg-navy-900/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gold-500/20 text-gold-400 rounded-lg flex items-center justify-center border border-gold-500/30">
              <FileText size={18} />
            </div>
            <h1 className="text-xl font-display font-bold text-white">Assessment Dashboard</h1>
          </div>

          <div className="flex items-center gap-6">
            {activeTab === 'exam' && (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-red-500/10 text-red-400 rounded-full font-mono font-bold border border-red-500/20">
                <Clock size={16} className="animate-pulse" />
                {formatTime(timeLeft)}
              </div>
            )}

            <div className="flex items-center gap-3 border-l border-white/10 pl-6">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-bold text-white">Student Name</div>
                <div className="text-xs text-slate-400">PRN: 12345678</div>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="p-2 text-slate-400 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5"
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 relative z-10">
        <AnimatePresence mode="wait">

          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Available Exams */}
                <div className="md:col-span-2 space-y-6">
                  <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                    <PlayCircle className="text-gold-500" /> Available Assessments
                  </h2>

                  <div className="grid gap-4">
                    <AnimatePresence>
                      {exams.filter(e => e.status !== 'Completed').map((exam, i) => (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          key={exam.id}
                          className="bg-navy-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-gold-500/30 transition-colors"
                        >
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${exam.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                }`}>
                                {exam.status}
                              </span>
                              <span className="text-sm text-slate-400 font-medium">{exam.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{exam.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-slate-400">
                              <span className="flex items-center gap-1"><Clock size={14} /> {exam.duration}</span>
                              <span className="flex items-center gap-1"><FileText size={14} /> {exam.questions} Questions</span>
                            </div>
                          </div>

                          <button
                            onClick={() => startExam(exam)}
                            disabled={exam.status !== 'Active'}
                            className={`shrink-0 px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${exam.status === 'Active'
                              ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-105'
                              : 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
                              }`}
                          >
                            {exam.status === 'Active' ? 'Start Exam' : 'Not Available'} <ChevronRight size={18} />
                          </button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Results/History */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                    <CheckCircle className="text-emerald-400" /> Recent Results
                  </h2>

                  <div className="bg-navy-900/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm overflow-hidden">
                    {exams.filter(e => e.status === 'Completed').map(exam => (
                      <div key={exam.id} className="p-5 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-white text-sm">{exam.title}</h4>
                          <span className="text-xs text-slate-400">{exam.date}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-slate-400">Score</span>
                          <span className="text-lg font-display font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-lg">
                            {exam.score}
                          </span>
                        </div>
                      </div>
                    ))}
                    {exams.filter(e => e.status === 'Completed').length === 0 && (
                      <div className="p-8 text-center text-slate-500 text-sm">
                        No recent results found.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Instructions View */}
          {activeTab === 'instructions' && selectedExam && (
            <motion.div
              key="instructions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-navy-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-lg">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                  <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/20 rounded-2xl flex items-center justify-center text-gold-400">
                    <AlertCircle size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-white mb-1">Exam Instructions</h2>
                    <p className="text-slate-400">{selectedExam.title}</p>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-sm text-slate-400 mb-1">Duration</div>
                      <div className="font-bold text-white flex items-center gap-2"><Clock size={16} className="text-gold-400" /> {selectedExam.duration}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-sm text-slate-400 mb-1">Total Questions</div>
                      <div className="font-bold text-white flex items-center gap-2"><FileText size={16} className="text-gold-400" /> {selectedExam.questions}</div>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex gap-3"><CheckCircle size={20} className="text-emerald-400 shrink-0" /> Ensure you have a stable internet connection before starting.</li>
                      <li className="flex gap-3"><CheckCircle size={20} className="text-emerald-400 shrink-0" /> Do not refresh the page or navigate away during the exam.</li>
                      <li className="flex gap-3"><CheckCircle size={20} className="text-emerald-400 shrink-0" /> The timer will continue running even if you lose connection.</li>
                      <li className="flex gap-3"><CheckCircle size={20} className="text-emerald-400 shrink-0" /> Once submitted, answers cannot be changed.</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 pt-6 border-t border-white/10">
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className="px-6 py-3 rounded-xl font-bold text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={beginTest}
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold shadow-lg hover:shadow-gold-glow transition-all flex items-center gap-2"
                  >
                    I Understand, Begin Test <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Exam View (Placeholder) */}
          {activeTab === 'exam' && selectedExam && (
            <motion.div
              key="exam"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-navy-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-lg overflow-hidden flex flex-col h-[600px]">
                <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-center">
                  <h3 className="font-bold text-white">Question {currentQuestionIndex + 1} of {mockQuestions.length}</h3>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-lg border border-white/20 text-sm font-medium hover:bg-white/10 text-white transition-colors">Mark for Review</button>
                  </div>
                </div>

                <div className="p-8 flex-grow overflow-y-auto">
                  <p className="text-lg text-white font-medium mb-8 leading-relaxed">
                    {mockQuestions[currentQuestionIndex].question}
                  </p>

                  <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                      {mockQuestions[currentQuestionIndex].options.map((opt, i) => {
                        const isSelected = answers[currentQuestionIndex] === opt;
                        return (
                          <motion.label
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                            key={opt}
                            className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-colors group ${isSelected
                              ? 'border-gold-400 bg-gold-500/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                              : 'border-white/10 hover:border-gold-500/50 hover:bg-white/5'
                              }`}
                            onClick={() => handleOptionSelect(opt)}
                          >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${isSelected ? 'border-gold-400' : 'border-slate-500 group-hover:border-gold-400'
                              }`}>
                              <motion.div
                                initial={false}
                                animate={{ scale: isSelected ? 1 : 0, opacity: isSelected ? 1 : 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="w-2.5 h-2.5 rounded-full bg-gold-400"
                              />
                            </div>
                            <span className={`font-medium transition-colors duration-300 ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                              }`}>{opt}</span>
                          </motion.label>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="p-6 border-t border-white/10 bg-white/5 flex justify-between items-center">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className={`px-6 py-3 rounded-xl font-bold transition-colors ${currentQuestionIndex === 0
                      ? 'text-slate-500 cursor-not-allowed'
                      : 'text-white hover:bg-white/10'
                      }`}
                  >
                    Previous
                  </button>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className="px-6 py-3 rounded-xl font-bold text-red-400 hover:bg-red-500/10 hover:border-red-500/20 border border-transparent transition-colors"
                    >
                      End Test
                    </button>
                    {currentQuestionIndex < mockQuestions.length - 1 ? (
                      <button
                        onClick={handleNext}
                        className="px-8 py-3 rounded-xl bg-white text-navy-950 font-bold hover:bg-gold-400 transition-colors shadow-md"
                      >
                        Next Question
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          alert(`Test Submitted! You answered ${Object.keys(answers).length} out of ${mockQuestions.length} questions.`);
                          setActiveTab('dashboard');
                        }}
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-bold hover:shadow-gold-glow transition-colors shadow-md flex items-center gap-2"
                      >
                        Submit Test <CheckCircle size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
}
