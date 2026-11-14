import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CharacterCollection } from './components/CharacterCollection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomPlushCTA } from './components/CustomPlushCTA';
import { CraftDetailsGallery } from './components/CraftDetailsGallery';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-soft text-espresso selection:bg-honey/25 selection:text-cocoa-deep">
      {/* Custom Tactile Cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. CHARACTER COLLECTION */}
        <CharacterCollection />

        {/* 3. HOW IT WORKS (3 Simple Steps) */}
        <HowItWorks />

        {/* 4. WHY HONEY BY S CRAFT (Consolidated 4 Core Values) */}
        <WhyChooseUs />

        {/* 5. CUSTOM PLUSH CTA (Punchy Conversion Section) */}
        <CustomPlushCTA />

        {/* 6. GALLERY / CRAFT DETAILS (Compact Bento Showcase) */}
        <CraftDetailsGallery />

        {/* 7. TESTIMONIALS (Max 3 Authentic Reviews) */}
        <Testimonials />

        {/* 8. FINAL CTA */}
        <FinalCTA />
      </main>

      {/* Clean Boutique Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
