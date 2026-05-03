/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Volume2, 
  VolumeX, 
  ArrowLeft,
  Search,
  CheckCircle2,
  XCircle,
  ShieldAlert,
  HeartPulse,
  Wind,
  Flame,
  Bone,
  Droplets,
  Zap,
  Sun,
  Waves,
  Activity,
  Skull,
  Stethoscope,
  CloudRain,
  Thermometer,
  Eye,
  AlertTriangle
} from 'lucide-react';
import { emergencies, EmergencyType, EmergencyInfo, hospitals } from './data/emergencies';

import { TextToSpeech } from '@capacitor-community/text-to-speech';

type Language = 'en' | 'kn';

const iconMap: Record<string, any> = {
  Snake: ShieldAlert,
  HeartPulse,
  Wind,
  Flame,
  Bone,
  Droplets,
  Zap,
  Sun,
  Waves,
  Activity,
  Skull,
  Brain: Activity,
  Stethoscope,
  CloudRain,
  Thermometer,
  Eye,
  AlertTriangle
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedEmergency, setSelectedEmergency] = useState<EmergencyInfo | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [isAudioMode, setIsAudioMode] = useState(false);
  const [showHospitals, setShowHospitals] = useState(false);

  const speak = useCallback(async (text: string) => {
    if (!isAudioMode) return;
    
    try {
      // Try Native Capacitor TTS first
      await TextToSpeech.stop();
      await TextToSpeech.speak({
        text: text,
        lang: lang === 'en' ? 'en-US' : 'kn-IN',
        rate: 1.0,
        pitch: 1.0,
        volume: 1.0,
        category: 'ambient',
      });
    } catch (nativeError) {
      console.warn('Native TTS failed, falling back to Web API:', nativeError);
      // Fallback to Web Speech API if native fails (like in standard browser)
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'en' ? 'en-US' : 'kn-IN';
        window.speechSynthesis.speak(utterance);
      }
    }
  }, [isAudioMode, lang]);

  useEffect(() => {
    if (selectedEmergency && isAudioMode) {
      const stepText = selectedEmergency.steps[currentStep][lang];
      speak(stepText);
    }
  }, [currentStep, selectedEmergency, lang, isAudioMode, speak]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'kn' : 'en');
  };

  const handleEmergencySelect = (emergency: EmergencyInfo) => {
    setSelectedEmergency(emergency);
    setCurrentStep(0);
    setShowHospitals(false);
  };

  const nextStep = () => {
    if (selectedEmergency && currentStep < selectedEmergency.steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const t = (en: string, kn: string) => lang === 'en' ? en : kn;

  return (
    <div className="min-h-screen max-w-md mx-auto bg-zinc-50 border-x border-zinc-200 shadow-xl overflow-hidden relative font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {selectedEmergency || showHospitals ? (
            <button 
              onClick={() => { setSelectedEmergency(null); setShowHospitals(false); }}
              className="p-2 -ml-2 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-zinc-900" />
            </button>
          ) : (
            <div className="w-10 h-10 bg-rose-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-rose-200">
              P
            </div>
          )}
          <h1 className="font-extrabold text-xl tracking-tight text-zinc-900">
            {t('Pratham-Chikitse', 'ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ')}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsAudioMode(!isAudioMode)}
            className={`p-2 rounded-full transition-all ${isAudioMode ? 'bg-rose-100 text-rose-600 shadow-inner' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'}`}
          >
            {isAudioMode ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
          <button 
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold tracking-widest uppercase hover:bg-zinc-800 transition-colors shadow-md"
          >
            {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
          </button>
        </div>
      </header>

      <main className="pb-24 overflow-y-auto max-h-[calc(100vh-64px)]">
        <AnimatePresence mode="wait">
          {!selectedEmergency && !showHospitals && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-4 space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
                  {t('Emergency? Choose one:', 'ತುರ್ತು ಪರಿಸ್ಥಿತಿ? ಒಂದನ್ನು ಆಯ್ಕೆಮಾಡಿ:')}
                </h2>
                <p className="text-zinc-500 text-sm font-medium">
                  {t(' medically accurate, step-by-step guidance.', 'ವೈದ್ಯಕೀಯವಾಗಿ ನಿಖರವಾದ ಮಾರ್ಗದರ್ಶನ')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {emergencies.map((item) => {
                  const Icon = iconMap[item.icon] || AlertTriangle;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleEmergencySelect(item)}
                      className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-3xl border-2 border-zinc-100 shadow-sm hover:border-rose-500 hover:shadow-xl hover:shadow-rose-100 transition-all text-center aspect-square"
                    >
                      <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors mb-3">
                        <Icon className="w-8 h-8" />
                      </div>
                      <span className="font-bold text-zinc-900 leading-tight text-sm">
                        {item.title[lang]}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="bg-zinc-900 rounded-3xl p-6 text-white overflow-hidden relative shadow-2xl">
                <div className="relative z-10 space-y-3">
                  <h3 className="font-bold text-lg">{t('Need a Hospital?', 'ಆಸ್ಪತ್ರೆ ಬೇಕೇ?')}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {t('Find the nearest emergency centers simulated for demo.', 'ನಡೆದ ಸನಿಹದ ತುರ್ತು ಕೇಂದ್ರಗಳನ್ನು ಹುಡುಕಿ')}
                  </p>
                  <button 
                    onClick={() => setShowHospitals(true)}
                    className="w-full py-3 bg-white text-zinc-900 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-white transition-all shadow-lg"
                  >
                    <MapPin className="w-5 h-5" />
                    {t('Locate Hospitals', 'ಆಸ್ಪತ್ರೆಗಳನ್ನು ಗುರುತಿಸಿ')}
                  </button>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <Plus className="w-48 h-48" />
                </div>
              </div>
            </motion.div>
          )}

          {selectedEmergency && (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-4 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                  {(() => {
                    const Icon = iconMap[selectedEmergency.icon] || AlertTriangle;
                    return <Icon className="w-10 h-10" />;
                  })()}
                </div>
                <div>
                  <h2 className="text-3xl font-black text-rose-600 tracking-tight leading-none uppercase">
                    {selectedEmergency.title[lang]}
                  </h2>
                  <p className="text-zinc-500 font-bold mt-1">
                    {t('Follow steps carefully', 'ಹಂತಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಅನುಸರಿಸಿ')}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="flex gap-1 h-2">
                {selectedEmergency.steps.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`flex-1 rounded-full transition-all duration-300 ${idx <= currentStep ? 'bg-rose-600' : 'bg-zinc-200'}`}
                  />
                ))}
              </div>

              {/* Step Card */}
              <div className="bg-white rounded-3xl border-2 border-zinc-100 shadow-2xl p-8 min-h-[300px] flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-4 right-6 text-zinc-100 font-black text-8xl -z-0">
                  {currentStep + 1}
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-zinc-900 text-white text-[10px] font-black rounded-lg mb-6 tracking-widest uppercase">
                    {t('Current Step', 'ಪ್ರಸ್ತುತ ಹಂತ')} {currentStep + 1}
                  </span>
                  <p className="text-2xl font-bold text-zinc-900 leading-tight">
                    {selectedEmergency.steps[currentStep][lang]}
                  </p>
                </div>

                <div className="flex flex-col gap-4 relative z-10">
                  <button 
                    onClick={() => {
                      setIsAudioMode(!isAudioMode);
                      if (!isAudioMode) speak(selectedEmergency.steps[currentStep][lang]);
                    }}
                    className={`w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-black text-sm uppercase tracking-widest transition-all ${isAudioMode ? 'bg-rose-600 text-white shadow-lg shadow-rose-200' : 'bg-zinc-100 text-zinc-600 border-2 border-dashed border-zinc-300'}`}
                  >
                    {isAudioMode ? <Volume2 className="w-6 h-6 animate-pulse" /> : <VolumeX className="w-6 h-6 outline-zinc-300" />}
                    {isAudioMode ? t('Audio On', 'ಧ್ವನಿ ಸಕ್ರಿಯ') : t('Enable Audio Guide', 'ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ ಸಕ್ರಿಯಗೊಳಿಸಿ')}
                  </button>

                  <div className="flex gap-3">
                    <button 
                      onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex-1 py-4 bg-zinc-100 text-zinc-400 font-bold rounded-2xl disabled:opacity-50 hover:bg-zinc-200 transition-colors"
                  >
                    {t('Back', 'ಹಿಂದಕ್ಕೆ')}
                  </button>
                  <button 
                    onClick={nextStep}
                    disabled={currentStep === selectedEmergency.steps.length - 1}
                    className="flex-[2] py-4 bg-rose-600 text-white font-black rounded-2xl shadow-lg shadow-rose-200 hover:bg-rose-700 transition-all flex items-center justify-center gap-2 disabled:bg-zinc-200 disabled:text-zinc-400 disabled:shadow-none"
                  >
                    {t('Next Step', 'ಮುಂದಿನ ಹಂತ')}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

              {/* Do's and Don'ts */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                  <h4 className="font-bold text-emerald-900 flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    {t("Do's", "ಮಾಡಬೇಕಾದವುಗಳು")}
                  </h4>
                  <ul className="space-y-2">
                    {selectedEmergency.dos.map((item, idx) => (
                      <li key={idx} className="text-sm text-emerald-800 font-medium list-disc ml-4">
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100">
                  <h4 className="font-bold text-rose-900 flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 text-rose-600" />
                    {t("Don'ts", "ಮಾಡಬಾರದವುಗಳು")}
                  </h4>
                  <ul className="space-y-2">
                    {selectedEmergency.donts.map((item, idx) => (
                      <li key={idx} className="text-sm text-rose-800 font-medium list-disc ml-4">
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call Emergency Button */}
              <a 
                href="tel:108"
                className="block w-full py-5 bg-rose-600/10 text-rose-600 font-black rounded-3xl border-2 border-rose-600/20 text-center transition-all hover:bg-rose-600 hover:text-white"
              >
                {t('Emergency? Call 108', 'ತುರ್ತು? 108 ಕ್ಕೆ ಕರೆ ಮಾಡಿ')}
              </a>
            </motion.div>
          )}

          {showHospitals && (
            <motion.div 
              key="hospitals"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 space-y-6"
            >
              <div className="space-y-1">
                <h2 className="text-3xl font-black text-zinc-900 tracking-tight">
                  {t('Nearest Hospitals', 'ಸನಿಹದ ಆಸ್ಪತ್ರೆಗಳು')}
                </h2>
                <p className="text-zinc-500 font-medium">
                  {t('Showing 3 results within range.', 'ಸಮೀಪದ 3 ಫಲಿತಾಂಶಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ')}
                </p>
              </div>

              <div className="space-y-4">
                {hospitals.map((hospital) => (
                  <div key={hospital.id} className="bg-white p-5 rounded-3xl border border-zinc-100 shadow-lg flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-zinc-900">{hospital.name}</h4>
                      <p className="text-xs text-zinc-400 font-medium flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {hospital.distance} {t('away', 'ದೂರ')}
                      </p>
                    </div>
                    <a 
                      href={`tel:${hospital.phone}`}
                      className="w-12 h-12 bg-rose-600 rounded-2xl flex items-center justify-center text-white hover:bg-rose-700 transition-colors shadow-lg shadow-rose-200"
                    >
                      <Phone className="w-6 h-6" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-zinc-100 rounded-3xl text-center space-y-3">
                <Search className="w-12 h-12 text-zinc-300 mx-auto" />
                <p className="text-zinc-400 text-sm font-medium leading-tight">
                  {t('Network is simulated. In a real emergency, call local help lines first.', 'ನೆಟ್‌ವರ್ಕ್ ಸಿಮ್ಯುಲೇಟೆಡ್ ಆಗಿದೆ. ನಿಜವಾದ ತುರ್ತು ಸಮಯದಲ್ಲಿ ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ.')}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Bar - Only on Home */}
      {!selectedEmergency && !showHospitals && (
        <div className="absolute bottom-6 left-6 right-6 flex justify-center pointer-events-none">
          <div className="bg-zinc-900 p-2 rounded-full flex gap-2 shadow-2xl pointer-events-auto border border-white/20">
            <button className="px-6 py-3 rounded-full bg-rose-600 text-white font-black text-sm tracking-widest uppercase flex items-center gap-2">
              <Phone className="w-4 h-4" />
              108
            </button>
            <div className="w-[1px] bg-white/20 my-2" />
            <button className="px-6 py-3 rounded-full bg-white/10 text-white font-black text-sm tracking-widest uppercase">
              {t('Help', 'ಸಹಾಯ')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

