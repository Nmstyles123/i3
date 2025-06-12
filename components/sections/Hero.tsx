"use client";

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useGSAP } from '@/hooks/useGSAP';
import { ArrowRight, Zap, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { gsap, createTimeline, parallax } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Hero timeline animation
      const tl = createTimeline();
      
      tl.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo('.hero-buttons',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo('.hero-icons',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.4"
      );

      // Parallax background
      parallax('.hero-bg', 0.3);

      // Floating icons animation
      gsap.to('.floating-icon', {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, heroRef);

    return () => ctx.revert();
  }, [gsap, createTimeline, parallax]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="hero-bg absolute inset-0 gradient-blue-radial"></div>
      
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Zap className="floating-icon absolute top-20 left-20 w-8 h-8 text-primary/20" />
        <TrendingUp className="floating-icon absolute top-40 right-32 w-6 h-6 text-accent/20" />
        <Users className="floating-icon absolute bottom-40 left-32 w-7 h-7 text-primary/20" />
        <Zap className="floating-icon absolute bottom-20 right-20 w-5 h-5 text-accent/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
            Fuel the Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              of Ideas
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect visionary startups with strategic investors through our curated matchmaking platform. 
            Where innovation meets capital, and dreams become reality.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-white px-8 py-6 text-lg hover-lift group"
            >
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-white hover-lift"
            >
              Join the Platform
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="hero-icons grid grid-cols-3 gap-8 max-w-md mx-auto pt-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Fast Matching</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Growth Focus</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Trusted Network</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}