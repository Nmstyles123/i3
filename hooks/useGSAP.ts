"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    return () => {
      // Cleanup timeline on unmount
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  const createTimeline = (options?: gsap.TimelineVars) => {
    const tl = gsap.timeline(options);
    timelineRef.current = tl;
    return tl;
  };

  const fadeIn = (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", ...options }
    );
  };

  const slideInLeft = (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", ...options }
    );
  };

  const slideInRight = (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", ...options }
    );
  };

  const scaleIn = (element: string | Element, options?: gsap.TweenVars) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", ...options }
    );
  };

  const parallax = (element: string | Element, speed: number = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  };

  return {
    gsap,
    ScrollTrigger,
    createTimeline,
    fadeIn,
    slideInLeft,
    slideInRight,
    scaleIn,
    parallax
  };
};