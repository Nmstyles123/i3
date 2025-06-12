"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Users,
  HelpCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "hello@i3platform.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with support",
      contact: "Available 9 AM - 6 PM PST",
      action: "Start Chat"
    }
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "San Francisco HQ",
      address: "123 Innovation Drive\nSan Francisco, CA 94105"
    },
    {
      icon: Clock,
      title: "Business Hours",
      address: "Monday - Friday: 9 AM - 6 PM PST\nWeekends: By appointment"
    }
  ];

  const supportTopics = [
    {
      icon: Users,
      title: "Partnership Inquiries",
      description: "Interested in partnering with i3?"
    },
    {
      icon: HelpCircle,
      title: "Platform Support",
      description: "Need help with your account?"
    },
    {
      icon: MessageCircle,
      title: "Media & Press",
      description: "Press inquiries and media requests"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-blue-radial opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about i3? Want to learn more about our platform? 
            We'd love to hear from you and help you get started.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-3">{method.description}</p>
                  <p className="font-medium text-foreground mb-4">{method.contact}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    {method.action}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company/Organization
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-accent text-white group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Office Info & Support Topics */}
            <div className="space-y-12">
              {/* Office Information */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Office Information</h3>
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-muted-foreground whitespace-pre-line">{info.address}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Support Topics */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Common Inquiries</h3>
                <div className="space-y-4">
                  {supportTopics.map((topic, index) => {
                    const Icon = topic.icon;
                    return (
                      <div key={index} className="bg-card/50 backdrop-blur-md rounded-xl p-6 border border-border/50">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{topic.title}</h4>
                            <p className="text-muted-foreground text-sm">{topic.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Support</span>
                    <span className="font-medium text-foreground">{"< 24 hours"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Live Chat</span>
                    <span className="font-medium text-foreground">{"< 5 minutes"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Support</span>
                    <span className="font-medium text-foreground">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Looking for Quick Answers?
          </h2>
          <p className="text-muted-foreground mb-8">
            Check out our FAQ section for immediate answers to common questions.
          </p>
          <Button className="bg-accent hover:bg-primary text-white">
            Visit FAQ Section
          </Button>
        </div>
      </section>
    </div>
  );
}