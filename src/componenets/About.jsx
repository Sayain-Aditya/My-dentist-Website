import { motion } from "framer-motion";
import { fadeUp } from "../animation";

export default function About({ onBook }) {
  return (
    <section className="bg-purple-700 px-6 md:px-16 py-16 md:py-24 relative">
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 mt-4 md:mt-10">

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white/50 text-xs font-bold tracking-widest uppercase md:mt-4 md:min-w-[120px]"
        >
          About Us
        </motion.p>

        <div className="max-w-2xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Meet Dr.<br />
            Abhishek <em className="text-green-400 not-italic font-light italic">Singh</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/70 mt-4 md:mt-6 text-sm md:text-base leading-relaxed"
          >
            Dr. Abhishek Singh is a highly experienced dental surgeon based in Lucknow with over 15 years of practice.
            He specializes in cosmetic dentistry, orthodontics, and restorative treatments — committed to giving every
            patient a healthy, confident smile using the latest dental technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-400 text-purple-900 font-semibold px-8 py-4 rounded-full hover:bg-green-300 transition"
              onClick={onBook}
            >
              Book Appointment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
