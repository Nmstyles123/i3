"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import TrustFramework from '@/components/sections/TrustFramework';
import ForStartups from '@/components/sections/ForStartups';
import ForInvestors from '@/components/sections/ForInvestors';
import Testimonials from '@/components/sections/Testimonials';
import VisualJourney from '@/components/sections/VisualJourney';
import FAQ from '@/components/sections/FAQ';
import PlatformPlans from '@/components/sections/PlatformPlans';
import BehindPlatform from '@/components/sections/BehindPlatform';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger, fadeIn } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize GSAP ScrollTrigger animations
    const ctx = gsap.context(() => {
      // Fade in sections as they come into view
      gsap.utils.toArray('.section-animate').forEach((section: any) => {
        fadeIn(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        });
      });

      // Parallax background elements
      gsap.utils.toArray('.parallax-bg').forEach((element: any) => {
        gsap.to(element, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: element.closest('section'),
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [gsap, ScrollTrigger, fadeIn]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />
      <HowItWorks />
      <TrustFramework />
      <ForStartups />
      <ForInvestors />
      <Testimonials />
      <VisualJourney />
      <FAQ />
      <PlatformPlans />
      <BehindPlatform />
      <CTA />
      <Footer />
    </div>
  );
}