import React from 'react';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { AmenitiesSection } from '../components/AmenitiesSection';
import { WhyInvest } from '../components/WhyInvest';
import { FaqSection } from '../components/FaqSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BuyingProcess } from '../components/BuyingProcess';
import { FinalCTA } from '../components/FinalCTA';

export const HomePage = ({
  onOpenSiteVisit,
  onOpenVideoTour,
  onOpenProjectDetails,
}) => {
  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero section with headline, trust badges, and Quick Enquiry form */}
      <Hero
        onOpenSiteVisit={onOpenSiteVisit}
        onOpenVideoTour={onOpenVideoTour}
      />

      {/* 2. Trust stats bar (Happy Customers, Active Projects, Legal Plots, Years Experience, Customer Satisfaction) */}
      <StatsSection />

      {/* 3. Featured Projects section showing exactly 3 project cards in a 3-column grid */}
      <FeaturedProjects
        onOpenSiteVisit={onOpenSiteVisit}
        onOpenProjectDetails={onOpenProjectDetails}
      />

      {/* World Class Facilities / Amenities Section */}
      <AmenitiesSection />

      {/* 4. Why Invest in Plots section with short benefit points */}
      <WhyInvest />

      {/* 5. Accordion FAQ Section specifically for plot booking & purchase */}
      <FaqSection onOpenSiteVisit={onOpenSiteVisit} />

      {/* 6. Testimonials section with only 2-3 customer reviews */}
      <TestimonialsSection />

      {/* 7. How to Buy Your Plot process steps */}
      <BuyingProcess />

      {/* 8. Final call-to-action banner ('Ready to Invest in Your Dream Plot?') */}
      <FinalCTA onOpenSiteVisit={onOpenSiteVisit} />
    </main>
  );
};
