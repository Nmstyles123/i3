"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users,
  ArrowRight,
  Play
} from 'lucide-react';

export default function BehindPlatform() {
  const sectionRef = useRef<HTMLSectionElement>(null);
  const { gsap, fadeIn, slideInLeft, slideInRight } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.platform-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      slideInLeft('.tech-content', {
        scrollTrigger: {
          trigger: '.tech-section',
          start: "top 75%",
        }
      });

      slideInRight('.tech-visual', {
        scrollTrigger: {
          trigger: '.tech-section',
          start: "top 75%",
        }
      });

      // Floating animation for tech icons
      gsap.to('.tech-float', {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, slideInLeft, slideInRight]);

  const techFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Advanced machine learning algorithms analyze hundreds of data points to create perfect investor-startup matches."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption, secure data storage, and compliance with international privacy regulations."
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Instant notifications, live chat, and real-time profile updates keep all parties connected and informed."
    },
    {
      icon: Users,
      title: "Scalable Network",
      description: "Cloud infrastructure designed to grow with our community, handling thousands of simultaneous connections."
    }
  ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-blue-radial opacity-20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="platform-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the advanced technology and thoughtful design that powers every connection on i3.
          </p>
        </div>

        {/* Main Technology Section */}
        <div className="tech-section grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="tech-content space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Built for Success
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform combines cutting-edge technology with deep industry expertise to create 
                meaningful connections that drive real results. Every feature is designed to maximize 
                the potential for successful partnerships.
              </p>
            </div>

            {/* Tech Features */}
            <div className="space-y-6">
              {techFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button className="bg-primary hover:bg-accent text-white group">
              Learn More About Our Technology
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Visual */}
          <div className="tech-visual relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 backdrop-blur-md border border-border/50">
              {/* Floating Tech Icons */}
              <div className="grid grid-cols-2 gap-8">
                <div className="tech-float text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">AI Matching</span>
                </div>
                <div className="tech-float text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Secure Platform</span>
                </div>
                <div className="tech-float text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Real-time Data</span>
                </div>
                <div className="tech-float text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Global Network</span>
                </div>
              </div>

              {/* Demo Video Placeholder */}
              <div className="mt-12 aspect-video bg-muted/50 rounded-2xl flex items-center justify-center group cursor-pointer hover:bg-muted/70 transition-colors">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <span className="text-foreground font-medium">Watch Platform Demo</span>
                  <p className="text-sm text-muted-foreground mt-1">3 min overview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">&lt;2s</div>
              <div className="text-muted-foreground">Load Time</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">256-bit</div>
              <div className="text-muted-foreground">Encryption</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}