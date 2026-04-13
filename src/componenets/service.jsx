import { motion } from "framer-motion";

const services = [
  {
    title: "Braces",
    desc: "Traditional metal braces are the most common type of orthodontic treatment.",
    bg: "bg-purple-50",
    img: "https://images.unsplash.com/photo-1588776814546-1ffedbe47425?w=400&auto=format&fit=crop",
  },
  {
    title: "Invisalign",
    desc: "Invisalign is a popular alternative to traditional braces.",
    bg: "bg-green-50",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&auto=format&fit=crop",
  },
  {
    title: "Ceramic Braces",
    desc: "Ceramic braces blend with your teeth for a more discreet look.",
    bg: "bg-blue-50",
    img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&auto=format&fit=crop",
  },
  {
    title: "Prosthodontics Dentures",
    desc: "Custom dentures designed for comfort, function, and a natural smile.",
    bg: "bg-orange-50",
    img: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&auto=format&fit=crop",
  },
];

function Card({ s, index, x }) {
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
      className={`${s.bg} rounded-3xl overflow-hidden flex flex-col`}
    >
      <div className="px-5 pt-5">
        <img src={s.img} alt={s.title} className="w-full h-36 md:h-44 object-cover rounded-2xl" />
      </div>
      <div className="px-5 md:px-6 py-4 md:py-5">
        <h3 className="text-base md:text-lg font-bold text-purple-900">{s.title}</h3>
        <p className="text-gray-400 text-xs md:text-sm mt-1 leading-relaxed">{s.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-16 py-16 md:py-24 bg-white">

      {/* header */}
      <div className="mb-8 md:mb-0">
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-purple-900 leading-tight mb-8 md:mb-0">What We Offer You</h2>
      </div>

      {/* mobile: single column, desktop: original layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:mb-6">
        <div className="hidden md:flex flex-col justify-center">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Our Services</p>
          <h2 className="text-4xl font-extrabold text-purple-900 leading-tight">What We <br />Offer You</h2>
        </div>
        <Card s={services[0]} index={0} x={-60} />
        <Card s={services[1]} index={1} x={60} />
      </div>

      <div className="hidden md:grid grid-cols-3 gap-5">
        <div />
        <Card s={services[2]} index={2} x={-60} />
        <Card s={services[3]} index={3} x={60} />
      </div>

      {/* mobile row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden">
        <Card s={services[2]} index={2} x={0} />
        <Card s={services[3]} index={3} x={0} />
      </div>
    </section>
  );
}
