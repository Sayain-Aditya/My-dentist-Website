import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = ["Braces", "Invisalign", "Ceramic Braces", "Teeth Whitening", "Dental Implants", "Root Canal", "Dentures"];

export default function Navbar({ onBook }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastY = { current: 0 };

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      setScrolled(y > 50);
      lastY.current = y;
      setServicesOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 md:py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled || menuOpen ? "bg-black/60 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* logo */}
      <div>
        <h1 className="text-white font-extrabold text-lg md:text-xl tracking-tight leading-none">
          Dr. Abhishek <span className="text-green-400">Singh</span>
        </h1>
        <p className="text-white/50 text-[10px] tracking-widest uppercase">Dental Clinic · Lucknow</p>
      </div>

      {/* desktop menu */}
      <div className="hidden md:flex items-center gap-3">

        {/* Our Services dropdown */}
        <div className="relative">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition"
          >
            Our Services
            <motion.svg
              animate={{ rotate: servicesOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-2xl py-2 w-52 overflow-hidden"
              >
                {services.map((s, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => {
                      setServicesOpen(false);
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                      setTimeout(() => onBook(s), 600);
                    }}
                    className="w-full text-left px-5 py-2.5 text-sm text-purple-900 font-medium hover:bg-purple-50 transition flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    {s}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="flex items-center gap-1 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition">
          Treatments
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
        </button>
        <button onClick={onBook} className="bg-green-400 text-purple-900 font-semibold px-5 py-2 rounded-full text-sm hover:bg-green-300 transition">
          Book Appointment
        </button>
      </div>

      {/* mobile hamburger */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {menuOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {/* mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col px-6 py-4 gap-1 md:hidden"
          >
            <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Our Services</p>
            {services.map((s, i) => (
              <button key={i} className="text-white/80 text-sm text-left py-2 border-b border-white/5 hover:text-green-400 transition">
                {s}
              </button>
            ))}
            <button onClick={() => { onBook(); setMenuOpen(false); }} className="bg-green-400 text-purple-900 font-semibold px-5 py-3 rounded-full text-sm mt-3">
              Book Appointment
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
