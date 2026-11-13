import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { ProductCategories } from './components/ProductCategories';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CreativeCategories } from './components/CreativeCategories';
import { DesignToPlush } from './components/DesignToPlush';
import { Portfolio } from './components/Portfolio';
import { QuantitySection } from './components/QuantitySection';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cream-soft text-espresso selection:bg-honey/25 selection:text-cocoa-deep">
      <CustomCursor />
      <Navbar />

      <main className="flex-grow">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Brand Introduction */}
        <BrandIntro />

        {/* Section 4: Product Categories */}
        <ProductCategories />

        {/* Section 5: How It Works */}
        <HowItWorks />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 7: What Can We Create (Interactive Moodboard) */}
        <CreativeCategories />

        {/* Section 8: Before & After / Design to Plush */}
        <DesignToPlush />

        {/* Section 9: Portfolio Gallery */}
        <Portfolio />

        {/* Section 10: Flexible Quantity Section */}
        <QuantitySection />

        {/* Section 11: FAQ */}
        <FAQ />

        {/* Section 12: Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
