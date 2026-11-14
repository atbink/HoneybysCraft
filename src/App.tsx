import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CharacterCollection } from './components/CharacterCollection';
import { DesignToPlush } from './components/DesignToPlush';
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

        {/* 3. BEFORE & AFTER SLIDER (2D Sketch to 3D Plush Transformation) */}
        <DesignToPlush />

        {/* 4. HOW IT WORKS (3 Simple Steps) */}
        <HowItWorks />

        {/* 5. WHY HONEY BY S CRAFT (4 Core Values) */}
        <WhyChooseUs />

        {/* 6. CUSTOM PLUSH CTA (Punchy Conversion Section) */}
        <CustomPlushCTA />

        {/* 7. GALLERY / CRAFT DETAILS (Compact Bento Showcase) */}
        <CraftDetailsGallery />

        {/* 8. TESTIMONIALS (Max 3 Authentic Reviews) */}
        <Testimonials />

        {/* 9. FINAL CTA */}
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
