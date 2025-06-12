"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, TrendingUp } from 'lucide-react';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap, fadeIn, scaleIn } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.cta-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      scaleIn('.cta-buttons', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        delay: 0.3
      });

      // Floating background elements
      gsap.to('.cta-float', {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, scaleIn]);

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Rocket className="cta-float absolute top-20 left-20 w-8 h-8 text-primary/20" />
        <TrendingUp className="cta-float absolute top-40 right-32 w-6 h-6 text-accent/20" />
        <Rocket className="cta-float absolute bottom-40 right-20 w-7 h-7 text-primary/20" />
        <TrendingUp className="cta-float absolute bottom-20 left-32 w-5 h-5 text-accent/20" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="cta-content space-y-8">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Start Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              i3 Journey
            </span>
          </h2>

          {/* Emotional Prompt */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of visionary entrepreneurs and strategic investors who are already 
            building the future together. Your next breakthrough connection is just one click away.
          </p>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 my-12">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Free to Start</div>
              <p className="text-muted-foreground">Begin exploring opportunities immediately</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-accent">Verified Network</div>
              <p className="text-muted-foreground">Connect with quality, pre-screened partners</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Proven Results</div>
              <p className="text-muted-foreground">$250M+ in successful funding connections</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-accent text-white px-10 py-6 text-lg font-semibold hover-lift group"
            >
              Join as Startup
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              className="bg-accent hover:bg-primary text-white px-10 py-6 text-lg font-semibold hover-lift group"
            >
              Join as Investor
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by leading organizations worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold">TechStars</div>
              <div className="text-lg font-semibold">Y Combinator</div>
              <div className="text-lg font-semibold">500 Startups</div>
              <div className="text-lg font-semibold">Andreessen Horowitz</div>
              <div className="text-lg font-semibold">Sequoia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}