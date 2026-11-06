"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useConcierge } from "@/context/ConciergeContext";

export default function ConciergePanel() {
  const { isConciergeOpen, setIsConciergeOpen } = useConcierge();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", interest: "" });

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/propsmartrealty@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "VIP Lead: The Reserve Concierge Panel",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          Interest: formData.interest || "General Enquiry"
        })
      });
    } catch (error) {
      console.warn("Concierge lead submission note:", error);
    } finally {
      setIsSubmitting(false);
      setStep(3); // Success step
    }
    
    // Marketing Bridge: Push conversion event to DataLayer (GTM/GA4/Meta)
    const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
    if (typeof window !== "undefined" && win.dataLayer) {
      win.dataLayer.push({
        event: "generate_lead",
        lead_source: formData.interest || "Organic SEO",
        project: "The Reserve"
      });
    }

    setTimeout(() => {
      setIsConciergeOpen(false);
      setStep(1);
      setFormData({ name: "", phone: "", email: "", interest: "" });
    }, 6000);
  };

  return (
    <AnimatePresence>
      {isConciergeOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#06160E]/95 backdrop-blur-2xl p-4"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsConciergeOpen(false)}
            aria-label="Close Concierge Panel"
            className="absolute top-8 right-8 md:top-12 md:right-12 text-[#D4AF37] hover:text-white transition-colors z-10 px-4 py-2 rounded-full bg-white/5 border border-white/10"
          >
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase">Close [✕]</span>
          </button>

          <div className="w-full max-w-3xl px-6 relative">
            <AnimatePresence mode="wait">
              {/* Step 1: Contact Info */}
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col gap-12"
                >
                  <div>
                    <span className="font-sans text-[10px] tracking-[0.3em] text-[#d4af37] uppercase mb-4 block">VIP Concierge</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-4">How may we address you?</h2>
                  </div>
                  
                  <div className="flex flex-col gap-8">
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-transparent border-b border-white/20 pb-4 text-3xl font-serif text-white focus:outline-none focus:border-[#d4af37] placeholder:text-white/20 transition-colors"
                    />
                    <input 
                      type="tel" 
                      placeholder="Contact No" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-transparent border-b border-white/20 pb-4 text-3xl font-serif text-white focus:outline-none focus:border-[#d4af37] placeholder:text-white/20 transition-colors"
                    />
                    <input 
                      type="email" 
                      placeholder="Email ID" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-transparent border-b border-white/20 pb-4 text-3xl font-serif text-white focus:outline-none focus:border-[#d4af37] placeholder:text-white/20 transition-colors"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button 
                      onClick={handleNext}
                      aria-label="Continue to next step"
                      disabled={!formData.name || (!formData.email && !formData.phone)}
                      className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#06160E] font-sans text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      Continue &rarr;
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Interests */}
              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col gap-12"
                >
                  <div>
                    <button onClick={handleBack} aria-label="Go back to previous step" className="text-[#D4AF37] text-xs mb-8 hover:text-white flex items-center gap-2 cursor-pointer">&larr; Back</button>
                    <h2 className="font-serif text-5xl md:text-7xl text-white mb-4">What brings you to The Reserve?</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["2 BHK Luxury", "3 BHK Premium", "Schedule Private Tour", "Investment Details"].map((opt) => (
                      <button 
                        key={opt}
                        onClick={() => setFormData({...formData, interest: opt})}
                        aria-label={`Select ${opt}`}
                        className={`p-8 text-left border rounded-2xl transition-all duration-300 cursor-pointer ${formData.interest === opt ? 'border-[#D4AF37] bg-[#D4AF37]/15' : 'border-white/10 hover:border-white/30 bg-white/5'}`}
                      >
                        <h4 className="font-serif text-2xl text-white">{opt}</h4>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end mt-8">
                    <button 
                      onClick={handleSubmit}
                      disabled={!formData.interest || isSubmitting}
                      aria-label="Submit Concierge Request"
                      className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#06160E] font-sans text-xs tracking-[0.2em] uppercase font-bold hover:bg-white transition-colors disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? "Transmitting..." : "Request Callback"}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <motion.div 
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6"
                >
                  <div className="w-20 h-20 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] text-3xl">
                    ✓
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-white">Request Received</h2>
                  <p className="font-serif text-lg md:text-xl text-white/70 max-w-md">
                    Thank you, {formData.name.split(' ')[0]}. A member of our concierge team will contact you shortly.
                  </p>
                  <a
                    href={`https://wa.me/917744009295?text=${encodeURIComponent(`Hi, I requested concierge callback for The Reserve by Kolte-Patil (${formData.interest || 'Luxury Residences'}). My name is ${formData.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 px-8 py-3 rounded-full bg-[#25D366] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
                  >
                    <span>Instant WhatsApp VIP Connect 💬</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
