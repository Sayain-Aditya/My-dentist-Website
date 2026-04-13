import { motion } from "framer-motion";
import { stagger, fadeUp } from "../animation";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Patient since 2021",
    text: "Best dental experience I've ever had! The staff is incredibly professional and caring.",
    avatar: "https://i.pravatar.cc/60?img=47",
  },
  {
    name: "John D.",
    role: "Patient since 2020",
    text: "Professional staff and completely painless treatment. I actually look forward to my visits now!",
    avatar: "https://i.pravatar.cc/60?img=12",
  },
  {
    name: "Emily R.",
    role: "Patient since 2022",
    text: "My smile has never looked better. Highly recommend to anyone looking for quality dental care.",
    avatar: "https://i.pravatar.cc/60?img=32",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-6 md:px-16 py-16 md:py-24">
      <div className="mb-10 md:mb-14">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900">What Our Patients Say</h2>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-purple-50 rounded-3xl p-6 md:p-8 flex flex-col gap-4"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">"{t.text}"</p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-purple-100">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="font-bold text-purple-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
