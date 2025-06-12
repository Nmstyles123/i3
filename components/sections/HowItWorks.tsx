"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Target, 
  HandHeart, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap, fadeIn, slideInLeft, slideInRight } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Section title animation
      fadeIn('.section-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Cards stagger animation
      gsap.fromTo('.work-card', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.work-cards',
            start: "top 75%",
          }
        }
      );

      // Parallax icons
      gsap.utils.toArray('.parallax-icon').forEach((icon) => {
        gsap.to(icon as HTMLElement, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, slideInLeft, slideInRight]);

  const startupSteps = [
    {
      icon: Rocket,
      title: "Submit Your Vision",
      description: "Share your innovative project with detailed pitch materials and business metrics."
    },
    {
      icon: Target,
      title: "Get Discovered",
      description: "Our algorithm matches you with investors aligned to your sector and stage."
    },
    {
      icon: HandHeart,
      title: "Build Relationships",
      description: "Connect directly with interested investors and build lasting partnerships."
    }
  ];

  const investorSteps = [
    {
      icon: Target,
      title: "Define Your Focus",
      description: "Set investment criteria including sectors, stages, and geographic preferences."
    },
    {
      icon: TrendingUp,
      title: "Discover Opportunities",
      description: "Browse curated startups that match your investment thesis and goals."
    },
    {
      icon: HandHeart,
      title: "Make Your Impact",
      description: "Connect with founders and fuel the next generation of innovation and build a strong network"
    }
  ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-blue-linear"></div>
      <div className="parallax-icon absolute top-20 right-20 opacity-5">
        <TrendingUp className="w-32 h-32 text-primary" />
      </div>
      <div className="parallax-icon absolute bottom-20 left-20 opacity-5">
        <Rocket className="w-24 h-24 text-accent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connecting Visions
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              to Capital
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process brings together ambitious startups and strategic investors 
            through intelligent matching and seamless collaboration tools.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="work-cards grid lg:grid-cols-2 gap-16">
          {/* For Startups Column */}
          <div className="work-card">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For Startups</h3>
              <p className="text-muted-foreground">Launch your vision with the right support</p>
            </div>

            <div className="space-y-8">
              {startupSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button 
                className="w-full bg-primary hover:bg-accent text-white group"
                onClick={() => window.location.href = '/signup/startup'}
              >
                Get Started as Startup
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* For Investors Column */}
          <div className="work-card">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">For Investors</h3>
              <p className="text-muted-foreground">Discover high-potential opportunities</p>
            </div>

            <div className="space-y-8">
              {investorSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button 
                className="w-full bg-accent hover:bg-primary text-white group"
                onClick={() => window.location.href = '/signup/investor'}
              >
                Get Started as Investor
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}