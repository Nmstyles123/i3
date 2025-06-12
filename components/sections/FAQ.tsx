"use client";

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const sectionRef = useRef<HTMLSectionElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { gsap, fadeIn } = useGSAP();

  const faqs = [
    {
      question: "How does i3's matching algorithm work?",
      answer: "Our AI-powered algorithm analyzes multiple factors including industry sector, funding stage, geographic preferences, investment size, and strategic focus areas. We also consider past investment patterns and success rates to ensure high-quality matches between startups and investors."
    },
    {
      question: "What types of startups can join the platform?",
      answer: "We welcome startups across all industries and stages, from pre-seed to Series B. However, all companies undergo a verification process to ensure they meet our quality standards, including having a viable business model, experienced team, and clear market opportunity."
    },
    {
      question: "How is investor quality maintained?",
      answer: "All investors are thoroughly vetted before joining our platform. We verify their investment history, available capital, and track record. We only accept accredited investors, VCs with active funds, and angel investors with proven experience in startup investments."
    },
    {
      question: "What fees does i3 charge?",
      answer: "i3 operates on a success-based model. Basic access to the platform is free for both startups and investors. We only charge a small percentage fee when a successful funding round is completed through connections made on our platform."
    },
    {
      question: "How long does it typically take to find matches?",
      answer: "Most users start seeing relevant matches within 24-48 hours of completing their profile. However, the quality of matches improves over time as our algorithm learns from your interactions and preferences. First meetings typically happen within 1-2 weeks."
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We use bank-level security and encryption to protect all user data. Your information is only shared with parties you explicitly choose to connect with. We also offer options for anonymous browsing and selective information disclosure."
    },
    {
      question: "Can international startups and investors participate?",
      answer: "Yes! i3 is a global platform supporting startups and investors worldwide. Our geographic filtering helps match parties based on location preferences, investment regions, and regulatory requirements."
    },
    {
      question: "What support is provided during the matching process?",
      answer: "We provide dedicated support throughout your journey, including profile optimization, pitch deck feedback, investor preparation sessions, and ongoing guidance. Our success team helps facilitate introductions and provides best practices for successful connections."
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      fadeIn('.faq-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        }
      });

      fadeIn('.faq-item', {
        scrollTrigger: {
          trigger: '.faq-list',
          start: "top 75%",
        },
        stagger: 0.1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [gsap, fadeIn]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section-animate py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="faq-title text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ask Us
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Anything
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about how i3 works and how we can help you succeed.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white hover:bg-accent rounded-lg transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}