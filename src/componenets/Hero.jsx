import { motion } from "framer-motion";
import { fadeUp } from "../animation";

export default function Hero({ onBook }) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1600&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex flex-col justify-between min-h-screen pb-0">

        <div className="flex-1 flex items-end px-6 md:px-12 pb-10 md:pb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-green-400 text-xs md:text-sm font-semibold tracking-widest uppercase mb-3 md:mb-4"
            >
              Welcome to Dr. Abhishek Singh's Clinic
            </motion.p>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-white font-extrabold text-5xl md:text-7xl leading-tight max-w-2xl"
            >
              Dedicated to<br />
              Your <em className="not-italic font-light italic text-green-300">Dental</em><br />
              Health
            </motion.h1>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between px-6 md:px-12 pb-0 gap-6 md:gap-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative translate-y-6 md:translate-y-10 w-24 h-24 md:w-28 md:h-28"
          >
            <div className="absolute inset-0 rounded-full bg-green-300 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" viewBox="0 0 64 64" fill="currentColor">
                <path d="M32 4c-5 0-9 2-11 5-2-3-6-5-11-5C4 4 2 10 2 16c0 8 4 20 8 28 2 4 4 6 6 6s3-2 4-6l2-8c0-2 1-4 2-4h1c1 0 2 2 2 4l2 8c1 4 2 6 4 6s4-2 6-6c4-8 8-20 8-28 0-6-2-12-7-12z" />
              </svg>
            </div>
            <svg className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="10" fill="white" fontWeight="600" letterSpacing="2.5">
                <textPath href="#circle">LUCKNOW'S TRUSTED DENTAL CARE · </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="text-left md:text-right mb-4 md:mb-6 max-w-xs"
          >
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              Expert dental care in the heart of Lucknow. Book your appointment with Dr. Abhishek Singh today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-400 text-purple-900 font-semibold px-6 py-3 rounded-full text-sm hover:bg-green-300 transition"
              onClick={onBook}
            >
              Book Appointment →
            </motion.button>
          </motion.div>
        </div>

        <div className="h-8 md:h-10 bg-purple-700 w-full" />
      </div>
    </section>
  );
}
