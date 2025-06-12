"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Filter, 
  Heart, 
  BarChart3,
  Shield,
  Target,
  ArrowRight
} from 'lucide-react';

export default function ForInvestors() {
  const sectionRef = useRef<HTMLSectionElement>(null);
  const { gsap, fadeIn } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.investor-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Interactive cards animation
      gsap.fromTo('.investor-card', 
        { opacity: 0, x: -30 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.investor-cards',
            start: "top 75%",
          }
        }
      );

      // Filter options hover effects
      gsap.utils.toArray('.filter-option').forEach((option: any) => {
        option.addEventListener('mouseenter', () => {
          gsap.to(option, { scale: 1.05, duration: 0.2 });
        });
        
        option.addEventListener('mouseleave', () => {
          gsap.to(option, { scale: 1, duration: 0.2 });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn]);

  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Advanced search and AI-powered recommendations help you find startups that align with your investment thesis.",
      stats: "500+ Curated Startups"
    },
    {
      icon: Filter,
      title: "Precision Filtering",
      description: "Filter by sector, stage, geography, funding needs, and dozens of other criteria to find perfect matches.",
      stats: "25+ Filter Options"
    },
    {
      icon: Heart,
      title: "Save & Track",
      description: "Build your watchlist, save interesting opportunities, and track startup progress over time.",
      stats: "Real-time Updates"
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Access comprehensive startup metrics, financial data, and market analysis to make informed decisions.",
      stats: "100+ Data Points"
    },
    {
      icon: Shield,
      title: "Verified Deals",
      description: "All startups undergo rigorous verification to ensure quality and legitimacy of opportunities.",
      stats: "99% Verification Rate"
    },
    {
      icon: Target,
      title: "Direct Access",
      description: "Connect directly with founders, schedule meetings, and move from interest to investment faster.",
      stats: "No Middlemen"
    }
  ];

  const filterOptions = [
    { label: "Technology", count: "180+" },
    { label: "Healthcare", count: "95+" },
    { label: "Fintech", count: "120+" },
    { label: "E-commerce", count: "85+" },
    { label: "SaaS", count: "140+" },
    { label: "Green Tech", count: "65+" },
    { label: "AI/ML", count: "110+" },
    { label: "Biotech", count: "45+" }
  ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-blue-linear"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="investor-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Find What
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Aligns
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover high-potential startups that match your investment criteria and strategic focus areas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="investor-cards grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="investor-card group">
                <div className="bg-card/50 backdrop-blur-md rounded-2xl p-8 h-full border border-border/50 hover:border-accent/30 transition-all duration-300 hover-lift">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Preview */}
        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-3xl p-12 mb-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Browse by Sector
            </h3>
            <p className="text-muted-foreground">
              Explore startups across various industries and find your perfect investment match
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filterOptions.map((option, index) => (
              <div key={index} className="filter-option cursor-pointer">
                <div className="bg-card/80 backdrop-blur-md rounded-xl p-4 text-center border border-border/50 hover:border-accent/50 transition-colors">
                  <div className="text-lg font-semibold text-foreground">{option.label}</div>
                  <div className="text-sm text-accent font-medium">{option.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Start Discovering Opportunities
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our exclusive network of investors and get first access to the most promising startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-primary text-white px-8 group">
                Create Investor Profile
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                Browse Startups
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}