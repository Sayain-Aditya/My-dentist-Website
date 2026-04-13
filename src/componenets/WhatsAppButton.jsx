import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "917704866437";
const QUICK_MESSAGES = [
  "Hi Dr. Abhishek, I'd like to book an appointment",
  "What are your clinic timings?",
  "How much do braces cost?",
  "I need a dental checkup",
];

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  const sendMessage = (msg) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* popup card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden"
          >
            {/* header */}
            <div className="bg-green-500 px-4 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 00.916.916l5.573-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.25-1.385l-.372-.217-3.875 1.023 1.023-3.875-.217-.372A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">Dr. Abhishek Singh</p>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full inline-block"></span>
                  <p className="text-green-100 text-xs">Online · Typically replies fast</p>
                </div>
              </div>
            </div>

            {/* chat bubble */}
            <div className="px-4 py-4 bg-[#e5ddd5]">
              <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">
                  👋 Hi! Welcome to <strong>Dr. Abhishek Singh's Dental Clinic</strong>, Lucknow.<br /><br />
                  How can we help you today?
                </p>
                <p className="text-gray-400 text-xs mt-1 text-right">9:00 AM ✓✓</p>
              </div>
            </div>

            {/* quick messages */}
            <div className="px-4 py-3 flex flex-col gap-2 bg-white">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Quick Messages</p>
              {QUICK_MESSAGES.map((msg, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(msg)}
                  className="text-left text-sm text-green-700 border border-green-200 rounded-xl px-3 py-2 hover:bg-green-50 transition"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* custom message input */}
            <div className="px-4 pb-4 bg-white">
              <div className="flex gap-2 mt-1">
                <input
                  id="wa-input"
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-green-400"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.target.value.trim()) {
                      sendMessage(e.target.value.trim());
                      e.target.value = "";
                    }
                  }}
                />
                <button
                  onClick={() => {
                    const input = document.getElementById("wa-input");
                    if (input.value.trim()) {
                      sendMessage(input.value.trim());
                      input.value = "";
                    }
                  }}
                  className="bg-green-500 text-white w-9 h-9 rounded-xl flex items-center justify-center hover:bg-green-600 transition shrink-0"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: open ? 45 : 0 }}
        transition={{ duration: 0.2 }}
        className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="wa"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              viewBox="0 0 24 24" className="w-7 h-7 fill-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 00.916.916l5.573-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.7-.504-5.25-1.385l-.372-.217-3.875 1.023 1.023-3.875-.217-.372A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* pulse ring */}
      {!open && (
        <span className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-green-400 opacity-40 animate-ping pointer-events-none" />
      )}
    </div>
  );
}
