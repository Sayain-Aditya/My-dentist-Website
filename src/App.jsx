import { useState } from "react";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import About from "./componenets/About";
import Services from "./componenets/service";
import Stats from "./componenets/stat";
import Testimonials from "./componenets/Testimonials";
import Footer from "./componenets/Footer";
import BookingModal from "./componenets/BookingModal";
import WhatsAppButton from "./componenets/WhatsAppButton";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openBooking = (service = "") => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar onBook={openBooking} />
      <Hero onBook={() => openBooking()} />
      <About onBook={() => openBooking()} />
      <Services onBook={openBooking} />
      <Stats />
      <Testimonials />
      <Footer onBook={() => openBooking()} />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedService={selectedService} />
      <WhatsAppButton />
    </>
  );
}

export default App;
