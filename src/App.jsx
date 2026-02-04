import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleBookNow = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-glam-dark selection:bg-glam-gold selection:text-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services onBookNow={handleBookNow} />
      <Gallery />
      <Testimonials />
      <Booking selectedService={selectedService} />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
