"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Zap,
  ArrowRight,
  Heart,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function About() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { gsap, fadeIn, slideInLeft, slideInRight } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Page animations
      fadeIn('.hero-content', { delay: 0.2 });
      fadeIn('.mission-content', {
        scrollTrigger: {
          trigger: '.mission-section',
          start: "top 70%",
        }
      });

      // Team cards animation
      gsap.fromTo('.team-card', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.team-grid',
            start: "top 75%",
          }
        }
      );

      // Values animation
      gsap.fromTo('.value-item', 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.values-grid',
            start: "top 75%",
          }
        }
      );

    }, pageRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, slideInLeft, slideInRight]);

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former VP at Sequoia Capital with 15+ years in venture investing. Led investments in 50+ startups with 8 successful exits.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "Tech entrepreneur with 3 successful exits. Former engineering lead at Google and Stripe. Expert in AI and machine learning.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Partnerships",
      bio: "Former ecosystem development manager at Y Combinator. Built partnerships with 100+ VCs and accelerators globally.",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "David Park",
      role: "Head of Product",
      bio: "Product leader with experience at Airbnb and Uber. Passionate about building products that create meaningful connections.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Trust First",
      description: "Every connection is built on verified trust and mutual respect."
    },
    {
      icon: Zap,
      title: "Speed & Quality",
      description: "Fast matching without compromising on connection quality."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Connecting innovators worldwide to solve global challenges."
    },
    {
      icon: TrendingUp,
      title: "Mutual Success",
      description: "We succeed when our community members achieve their goals."
    }
  ];

  return (
    <div ref={pageRef} className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-blue-radial opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-content space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-fore ground leading-tight">
              Building the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Innovation Funding
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We believe that every groundbreaking idea deserves the right support to flourish. 
              i3 was born from the vision to democratize access to capital and create meaningful 
              connections between visionary entrepreneurs and strategic investors.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="mission-content space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  The traditional funding landscape is broken. Too many brilliant ideas never see the light 
                  of day because entrepreneurs can't find the right investors, and investors miss out on 
                  incredible opportunities buried in noise.
                </p>
                <p>
                  We're changing that by creating an intelligent platform that understands both sides of 
                  the equation. Our AI-powered matching system doesn't just connect people – it creates 
                  strategic partnerships that drive real results.
                </p>
                <p>
                  Since our launch, we've facilitated over $250M in funding connections and helped hundreds 
                  of startups find their perfect investor match. But we're just getting started.
                </p>
              </div>
              <Button className="bg-primary hover:bg-accent text-white group">
                Join Our Mission
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and every connection we facilitate.
            </p>
          </div>

          <div className="values-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-item text-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced entrepreneurs, investors, and technologists united by a shared vision 
              to transform how innovation gets funded.
            </p>
          </div>

          <div className="team-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="team-card text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to connecting innovation with capital.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$250M+</div>
              <div className="text-muted-foreground">Total Funding Facilitated</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Successful Connections</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Active Investors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Be Part of the Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're an entrepreneur with a world-changing idea or an investor looking 
            for the next big opportunity, we'd love to have you join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-accent text-white px-8 group">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}