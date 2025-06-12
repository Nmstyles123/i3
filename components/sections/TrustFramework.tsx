"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { 
  Shield, 
  FileCheck, 
  Users, 
  Award,
  CheckCircle,
  Eye
} from 'lucide-react';

export default function TrustFramework() {
  const sectionRef = useRef<HTMLElement>(null);
  const { gsap, fadeIn, scaleIn } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Title animation
      fadeIn('.trust-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Pillars animation with stagger
      gsap.fromTo('.trust-pillar', 
        { opacity: 0, scale: 0.8, y: 30 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0,
          duration: 0.6, 
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.trust-pillars',
            start: "top 75%",
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number', 
        { innerText: 0 },
        {
          innerText: (index: number, target: HTMLElement) => target.getAttribute('data-value'),
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: '.trust-stats',
            start: "top 80%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, scaleIn]);

  const pillars = [
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-level encryption and security protocols protect all user data and communications.",
      color: "primary"
    },
    {
      icon: FileCheck,
      title: "Due Diligence",
      description: "Comprehensive verification process ensures all participants meet our quality standards.",
      color: "accent"
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open communication channels and clear processes build trust between all parties.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Curated community of experienced investors and validated startup founders.",
      color: "accent"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous screening and ongoing monitoring maintain platform integrity.",
      color: "primary"
    },
    {
      icon: CheckCircle,
      title: "Verified Results",
      description: "Track record of successful connections and funded projects speaks for itself.",
      color: "accent"
    }
  ];

  // const stats = [
  //   { value: 500, label: "Verified Startups", suffix: "+" },
  //   { value: 150, label: "Active Investors", suffix: "+" },
  //   { value: 95, label: "Success Rate", suffix: "%" },
  //   { value: 50, label: "Million Funded", suffix: "M+" }
  // ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="trust-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Trust
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Pillars
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on a foundation of security, transparency, and results. Every connection 
            is backed by our commitment to excellence and integrity.
          </p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="trust-pillars grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const colorClasses = pillar.color === 'primary' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-accent/10 text-accent';
            
            return (
              <div key={index} className="trust-pillar text-center group hover-lift">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${colorClasses} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Trust Stats */}
        {/* <div className="trust-stats bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  <span className="stat-number" data-value={stat.value}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}