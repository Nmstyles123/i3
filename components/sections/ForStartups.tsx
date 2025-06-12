"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { 
  Rocket, 
  Target, 
  BarChart3, 
  Users,
  Zap,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function ForStartups() {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap, fadeIn } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Section animation
      fadeIn('.startup-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Cards hover animation
      gsap.utils.toArray('.startup-card').forEach((card) => {
        const element = card as HTMLElement;
        const icon = element.querySelector('.card-icon');
        const content = element.querySelector('.card-content');
        
        element.addEventListener('mouseenter', () => {
          if (icon) gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3 });
          if (content) gsap.to(content, { y: -5, duration: 0.3 });
        });
        
        element.addEventListener('mouseleave', () => {
          if (icon) gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3 });
          if (content) gsap.to(content, { y: 0, duration: 0.3 });
        });
      });

      // Stagger animation for cards
      gsap.fromTo('.startup-card', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.startup-cards',
            start: "top 75%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn]);

  const benefits = [
    {
      icon: Target,
      title: "Maximum Visibility",
      description: "Get your startup in front of qualified investors actively seeking opportunities in your sector.",
      features: ["Curated investor matching", "Premium profile placement", "Industry categorization"]
    },
    {
      icon: BarChart3,
      title: "Powerful Analytics",
      description: "Track investor interest, engagement metrics, and optimize your pitch with real-time insights.",
      features: ["Investor engagement tracking", "Pitch performance metrics", "Market interest analysis"]
    },
    {
      icon: Users,
      title: "Direct Connections",
      description: "Skip the gatekeepers and connect directly with decision-makers who can fuel your growth.",
      features: ["One-on-one messaging", "Video call scheduling", "Follow-up automation"]
    },
    {
      icon: Zap,
      title: "Fast-Track Process",
      description: "Accelerate your funding journey with streamlined processes and dedicated support.",
      features: ["Quick profile setup", "Instant investor matching", "Priority support"]
    },
    {
      icon: TrendingUp,
      title: "Growth Tools",
      description: "Access resources and tools designed to help startups scale and succeed.",
      features: ["Pitch deck templates", "Financial modeling tools", "Market research access"]
    },
    {
      icon: Rocket,
      title: "Launch Support",
      description: "Get ongoing guidance and support throughout your funding and growth journey.",
      features: ["Dedicated success manager", "Investor preparation", "Post-funding support"]
    }
  ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-blue-radial opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="startup-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Launch with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Support
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to connect with the right investors and accelerate your startup's growth journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="startup-cards grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="startup-card group cursor-pointer">
                <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="card-icon mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                    
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Launch Your Startup?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful startups who have found their perfect investor match on i3.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-accent text-white px-8 group">
                Create Startup Profile
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}