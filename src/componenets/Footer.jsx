export default function Footer({ onBook }) {
  return (
    <footer className="bg-purple-900 text-white px-6 md:px-16 py-12 md:py-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-10">
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-extrabold mb-1">
            Dr. Abhishek <span className="text-green-400">Singh</span>
          </h2>
          <p className="text-white/40 text-xs tracking-widest uppercase mb-3">Dental Clinic · Lucknow</p>
          <p className="text-white/50 text-sm leading-relaxed">
            Providing trusted, compassionate dental care to the people of Lucknow since 2009.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xs tracking-widest uppercase text-white/50 mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Braces & Invisalign</li>
            <li>Teeth Whitening</li>
            <li>Dental Implants</li>
            <li>Root Canal</li>
            <li>Dentures</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs tracking-widest uppercase text-white/50 mb-4">Clinic</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>About Dr. Singh</li>
            <li>Our Facility</li>
            <li>Patient Reviews</li>
            <li className="cursor-pointer hover:text-green-400 transition" onClick={onBook}>Book Appointment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs tracking-widest uppercase text-white/50 mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>📍 Lucknow, Uttar Pradesh</li>
            <li>📞 +91 77048 66437</li>
            <li>✉️ drabhishek@dental.com</li>
            <li className="pt-1 text-white/40 text-xs">Mon–Sat: 9am – 7pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} Dr. Abhishek Singh Dental Clinic, Lucknow. All rights reserved.
      </div>
    </footer>
  );
}
