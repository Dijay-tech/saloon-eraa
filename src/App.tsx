import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { PriceList } from './components/PriceList';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCF9F5] text-[#2C1810] flex flex-col font-sans selection:bg-[#F2DFBA] selection:text-[#2C1810]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <PriceList />
        <Gallery />
        <BookingForm />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Contact Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
