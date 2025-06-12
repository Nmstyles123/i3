"use client";

import { useEffect, useRef } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Award,
  ArrowRight
} from 'lucide-react';

export default function VisualJourney() {
  const sectionRef = useRef<HTMLSectionElement>(null);
  const { gsap, fadeIn, parallax } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.journey-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      // Story timeline animation
      gsap.utils.toArray('.journey-step').forEach((step: any, index) => {
        gsap.fromTo(step,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            }
          }
        );
      });

      // Parallax for background elements
      parallax('.journey-bg', 0.2);

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, parallax]);

  const journeySteps = [
    {
      icon: Lightbulb,
      title: "The Idea",
      company: "EcoFlow - Smart Water Management",
      description: "Sarah had a vision to revolutionize water conservation through IoT sensors and AI analytics. With a background in environmental engineering, she knew the problem was real, but needed capital to scale.",
      image: "https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "Initial Concept"
    },
    {
      icon: Users,
      title: "The Connection",
      company: "Meeting Green Ventures",
      description: "Through i3's smart matching, Sarah connected with Green Ventures, a VC fund focused on environmental technology. The platform's detailed founder profile helped investors understand her expertise immediately.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "48 hours to first meeting"
    },
    {
      icon: TrendingUp,
      title: "The Growth",
      company: "Series A Success",
      description: "With strategic guidance and $3.2M in funding, EcoFlow scaled rapidly. The investor network helped secure partnerships with major municipalities and expand internationally.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "$3.2M Series A"
    },
    {
      icon: Award,
      title: "The Impact",
      company: "Transforming Industries",
      description: "Today, EcoFlow's technology monitors water usage across 200+ cities, saving millions of gallons annually. The company is preparing for Series B to expand globally.",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      stats: "200+ cities served"
    }
  ];

  return (
    <section ref={sectionRef} className="section-animate py-24 relative overflow-hidden">
      {/* Background */}
      <div className="journey-bg absolute inset-0 gradient-blue-radial opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="journey-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Idea to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow the inspiring journey of EcoFlow, from initial concept to industry transformation, 
            made possible through strategic connections on i3.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="space-y-24">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`journey-step flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-accent font-medium">{step.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">{step.stats}</span>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="relative group">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-12">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">EcoFlow's Success by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">50M+</div>
              <div className="text-muted-foreground">Gallons Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">$3.2M</div>
              <div className="text-muted-foreground">Series A Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">15</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}