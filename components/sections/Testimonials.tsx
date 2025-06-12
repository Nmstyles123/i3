"use client";

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  amount: string;
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { gsap, fadeIn } = useGSAP();

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Solutions",
      company: "Series A Startup",
      content: "i3 connected us with exactly the right investors who understood our vision. Within 3 months, we closed our Series A with strategic partners who continue to add incredible value.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      amount: "$2.5M raised"
    },
    {
      name: "Michael Rodriguez",
      role: "Managing Partner, Venture Dynamics",
      company: "Early Stage VC",
      content: "The quality of startups on i3 is exceptional. The platform's filtering system helps us find companies that align perfectly with our investment thesis. It's become an essential part of our deal flow.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      amount: "15+ investments"
    },
    {
      name: "Emily Thompson",
      role: "Founder, GreenTech Innovations",
      company: "Seed Stage Startup",
      content: "As a first-time founder, i3's support was invaluable. Not only did we find our lead investor, but the platform's resources helped us refine our pitch and business model.",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      amount: "$800K raised"
    },
    {
      name: "David Park",
      role: "Angel Investor",
      company: "Tech Executive",
      content: "i3 streamlines the investment process beautifully. I can quickly identify promising startups in my areas of expertise and connect directly with founders. The due diligence tools are fantastic.",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      amount: "25+ angel investments"
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.testimonials-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Auto-advance testimonials
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background with wave animation */}
      <div className="absolute inset-0">
        <div className="wave-animation absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Voices of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from successful startups and investors who have found their perfect matches through i3.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-md rounded-3xl p-12 border border-border/50">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{testimonials[currentSlide].content}"
              </p>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img 
                src={testimonials[currentSlide].avatar} 
                alt={testimonials[currentSlide].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-center">
                <h4 className="font-semibold text-foreground">{testimonials[currentSlide].name}</h4>
                <p className="text-muted-foreground">{testimonials[currentSlide].role}</p>
                <p className="text-sm text-accent font-medium">{testimonials[currentSlide].company}</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{testimonials[currentSlide].amount}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$250M+</div>
            <div className="text-muted-foreground">Total Funding</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">48h</div>
            <div className="text-muted-foreground">Avg. Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
}