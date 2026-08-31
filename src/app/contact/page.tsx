"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Vyana 3 BHK (1,016 sq.ft.)",
  });

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
          _subject: "New Lead from The Reserve Website!",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          Interest: formData.interest || "Contact Page Request"
        })
      });
    } catch (error) {
      console.error(error);
    }
    
    // Push conversion event to DataLayer (Marketing Analytics)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer.push({
        event: "generate_lead_contact_page",
        lead_source: formData.interest,
        project: "The Reserve"
      });
    }

    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Optional: Reset form after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: "", email: "", phone: "", interest: "3 BHK Premium" });
    }, 5000);
  };

  return (
    <>
      <main className="flex-1 w-full flex flex-col bg-[#0B2B1B] text-white">
        
        {/* HERO SECTION */}
        <section className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/gallery/interior-deck.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B2B1B] via-transparent to-[#0B2B1B]"></div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#d4af37] tracking-[0.3em] uppercase text-xs font-bold mb-6 block"
            >
              VIP Concierge
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl mb-8 leading-tight text-white"
            >
              Schedule a <span className="italic font-light text-white/70">Private Viewing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-sans text-white/50 max-w-xl mx-auto"
            >
              Connect with our dedicated relationship managers to discover the unparalleled lifestyle that awaits you at The Reserve.
            </motion.p>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl bg-white/5 backdrop-blur-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 rounded-2xl relative overflow-hidden"
            >
              {/* Luxury Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col gap-10" 
                    onSubmit={handleSubmit}
                  >
                    
                    {/* Input Field: Name */}
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-2 block font-bold transition-colors group-focus-within:text-white">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full border-b border-white/20 pb-3 focus:outline-none focus:border-[#d4af37] bg-transparent text-xl font-serif text-white transition-colors" 
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="flex flex-col md:flex-row gap-10">
                      {/* Input Field: Phone */}
                      <div className="relative group flex-1">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-2 block font-bold transition-colors group-focus-within:text-white">Contact No *</label>
                        <input 
                          type="tel" 
                          required 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full border-b border-white/20 pb-3 focus:outline-none focus:border-[#d4af37] bg-transparent text-xl font-serif text-white transition-colors" 
                          placeholder="+91 77440 09295"
                        />
                      </div>

                      {/* Input Field: Email */}
                      <div className="relative group flex-1">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-2 block font-bold transition-colors group-focus-within:text-white">Email ID *</label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full border-b border-white/20 pb-3 focus:outline-none focus:border-[#d4af37] bg-transparent text-xl font-serif text-white transition-colors" 
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>

                    {/* Input Field: Configuration */}
                    <div className="relative group">
                      <label className="text-[9px] uppercase tracking-[0.2em] text-[#d4af37] mb-4 block font-bold transition-colors group-focus-within:text-white">Configuration Interest</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {["Vyana 2 BHK (791 sq.ft.)", "Vyana 3 BHK (1,016 sq.ft.)", "Site Visit & VIP Tour", "Download Brochure & Cost Sheet"].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({...formData, interest: opt})}
                            className={`py-3 px-4 text-left border text-xs font-sans tracking-wide transition-all duration-300 rounded-xl ${formData.interest === opt ? 'border-[#d4af37] bg-[#d4af37]/10 text-white' : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 py-5 bg-white text-[#0B2B1B] text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-[#d4af37] transition-all duration-300 disabled:opacity-50 flex justify-center items-center gap-4"
                    >
                      {isSubmitting ? "Processing Request..." : "Submit Enquiry"}
                      {!isSubmitting && <span>&rarr;</span>}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20 gap-6"
                  >
                    <div className="w-24 h-24 rounded-full border-2 border-[#d4af37] flex items-center justify-center text-[#d4af37] text-4xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      ✓
                    </div>
                    <h2 className="font-serif text-4xl text-white">Enquiry Received</h2>
                    <p className="font-sans text-white/50 text-sm tracking-wide max-w-sm">
                      Thank you, {formData.name.split(' ')[0]}. A member of our concierge team will contact you on {formData.phone} shortly to schedule your private viewing.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </section>

        {/* EXPERIENCE CENTRE GOOGLE MAPS LOCATION */}
        <section className="pb-28 px-6 md:px-12 relative z-10">
          <div className="container mx-auto max-w-4xl p-8 md:p-12 rounded-[2.5rem] bg-[#05140D] border border-white/10 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <span className="text-[#d4af37] text-xs uppercase tracking-widest font-bold block mb-2">Sales Experience Centre</span>
                <h3 className="font-serif text-3xl text-white">Visit The Reserve On Site</h3>
                <p className="text-white/60 text-xs font-light mt-1">Survey Nos. 39/41/42/43/44/45/46/59/parts, Vadgaon Khurd, Sinhgad Road, Pune - 411041</p>
              </div>
              <a 
                href="https://www.google.com/maps/place/The+Reserve+by+Kolte+Patil/@18.4622871,73.8013712,15z/data=!4m6!3m5!1s0x3bc29503207d73ff:0xbcace0773986e884!8m2!3d18.4622871!4d73.8013712!16s%2Fg%2F11ywbwz1k0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#d4af37] text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors shrink-0 shadow-lg"
              >
                Open in Google Maps 📍
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs font-light text-white/70">
              <div>
                <span className="text-[#d4af37] font-bold block mb-1">GPS Coordinates</span>
                <p className="font-mono text-white/90">18.4622871, 73.8013712</p>
              </div>
              <div>
                <span className="text-[#d4af37] font-bold block mb-1">Operating Hours</span>
                <p className="text-white/90">Mon – Sun: 09:00 AM – 08:00 PM</p>
              </div>
              <div>
                <span className="text-[#d4af37] font-bold block mb-1">VIP Concierge</span>
                <p className="text-white/90">+91 77440 09295</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
