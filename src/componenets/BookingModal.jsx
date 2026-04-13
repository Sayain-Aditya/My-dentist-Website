import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BookingModal({ isOpen, onClose, selectedService = "" }) {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm(f => ({ ...f, service: selectedService }));
      setSubmitted(false);
    }
  }, [isOpen, selectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* header */}
            <div className="bg-purple-700 px-8 py-6 flex justify-between items-start">
              <div>
                <p className="text-green-400 text-xs font-bold tracking-widest uppercase mb-1">Dr. Abhishek Singh</p>
                <h2 className="text-white text-2xl font-extrabold">Book an Appointment</h2>
                <p className="text-white/60 text-sm mt-1">Dental Clinic · Lucknow</p>
              </div>
              <button onClick={onClose} className="text-white/60 hover:text-white transition mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* body */}
            <div className="px-8 py-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Full Name</label>
                      <input
                        name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Phone</label>
                      <input
                        name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Date</label>
                      <input
                        type="date" name="date" required value={form.date} onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Time</label>
                      <select
                        name="time" required value={form.time} onChange={handleChange}
                        className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition bg-white"
                      >
                        <option value="">Select time</option>
                        {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Service</label>
                    <select
                      name="service" required value={form.service} onChange={handleChange}
                      className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition bg-white"
                    >
                      <option value="">Select a service</option>
                      <option>Braces</option>
                      <option>Invisalign</option>
                      <option>Teeth Whitening</option>
                      <option>Dental Implants</option>
                      <option>Root Canal</option>
                      <option>Ceramic Braces</option>
                      <option>Dentures</option>
                      <option>General Checkup</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Message (optional)</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      placeholder="Any specific concerns or notes..."
                      rows={3}
                      className="mt-1 w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 transition resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-purple-700 text-white font-semibold py-4 rounded-xl hover:bg-purple-800 transition mt-1"
                  >
                    Confirm Appointment
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-purple-900 mb-2">Appointment Booked!</h3>
                  <p className="text-gray-400 text-sm mb-1">Thank you, <span className="font-semibold text-purple-700">{form.name}</span>.</p>
                  <p className="text-gray-400 text-sm">We'll confirm your appointment on <span className="font-semibold text-purple-700">{form.date}</span> at <span className="font-semibold text-purple-700">{form.time}</span>.</p>
                  <p className="text-gray-400 text-sm mt-1">Dr. Abhishek Singh's team will call you at <span className="font-semibold text-purple-700">{form.phone}</span>.</p>
                  <button onClick={onClose} className="mt-6 bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-800 transition">
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
