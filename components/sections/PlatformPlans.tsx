"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  Zap, 
  Crown, 
  Handshake,
  ArrowRight
} from 'lucide-react';

export default function PlatformPlans() {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap, fadeIn, scaleIn } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.plans-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      gsap.fromTo('.plan-card', 
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.plans-grid',
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, scaleIn]);

  const plans = [
    {
      name: "Freemium",
      icon: Zap,
      price: "Free",
      period: "Forever",
      description: "Perfect for getting started and exploring opportunities",
      features: [
        "Browse 100+ startups/investors",
        "Basic profile creation",
        "3 connections per month",
        "Standard search filters",
        "Community access",
        "Email support"
      ],
      limitations: [
        "Limited to 3 connections monthly",
        "Basic profile features only",
        "Standard support response time"
      ],
      buttonText: "Get Started Free",
      popular: false,
      color: "primary"
    },
    {
      name: "Growth",
      icon: Crown,
      price: "$99",
      period: "per month",
      description: "Ideal for active investors and scaling startups",
      features: [
        "Unlimited connections",
        "Advanced search & filters",
        "Premium profile features",
        "Analytics & insights",
        "Priority support",
        "Monthly market reports",
        "Video call scheduling",
        "CRM integration",
        "Custom matching preferences"
      ],
      limitations: [],
      buttonText: "Start 14-Day Trial",
      popular: true,
      color: "accent"
    },
    {
      name: "Partner",
      icon: Handshake,
      price: "Custom",
      period: "Enterprise",
      description: "For VCs, accelerators, and institutional investors",
      features: [
        "Everything in Growth",
        "White-label platform",
        "Dedicated success manager",
        "Custom integrations",
        "Advanced analytics dashboard",
        "Bulk operations",
        "Team collaboration tools",
        "Custom reporting",
        "API access",
        "24/7 priority support"
      ],
      limitations: [],
      buttonText: "Contact Sales",
      popular: false,
      color: "primary"
    }
  ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-blue-linear opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="plans-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Access Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Way
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade as you grow your network.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="plans-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            
            return (
              <div key={index} className={`plan-card relative ${isPopular ? 'transform scale-105' : ''}`}>
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent to-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`bg-card/80 backdrop-blur-md rounded-3xl p-8 h-full border-2 ${
                  isPopular ? 'border-accent/50' : 'border-border/50'
                } hover:border-primary/50 transition-all duration-300 hover-lift`}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-primary/10 text-primary'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period !== "Enterprise" && (
                        <span className="text-muted-foreground">/{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      isPopular 
                        ? 'bg-accent hover:bg-primary' 
                        : 'bg-primary hover:bg-accent'
                    } text-white group`}
                    size="lg"
                  >
                    {plan.buttonText}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include our core matching technology and secure platform access.
          </p>
          <p className="text-sm text-muted-foreground">
            Enterprise pricing starts at $500/month. Contact our sales team for custom packages.
          </p>
        </div>
      </div>
    </section>
  );
}