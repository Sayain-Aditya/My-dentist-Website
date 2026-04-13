import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Count({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = Math.ceil(end / 60);
      const timer = setInterval(() => {
        start += step;
        if (start >= end) { setCount(end); clearInterval(timer); }
        else setCount(start);
      }, 16);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { end: 500, suffix: "+", label: "Happy Patients" },
  { end: 20, suffix: "+", label: "Expert Doctors" },
  { end: 15, suffix: "+", label: "Years Experience" },
  { end: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function Stats() {
  return (
    <section className="bg-purple-700 px-6 md:px-16 py-14 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              <Count end={s.end} suffix={s.suffix} />
            </h2>
            <p className="text-green-300 mt-2 text-xs md:text-sm font-medium tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
