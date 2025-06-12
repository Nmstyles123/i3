"use client";

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  TrendingUp, 
  Users, 
  Eye,
  Upload,
  Edit,
  Bell,
  BarChart3,
  DollarSign,
  Calendar,
  MessageCircle,
  Star,
  Filter,
  Download
} from 'lucide-react';

export default function StartupDashboard() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Green Ventures viewed your profile", time: "2 hours ago", read: false },
    { id: 2, message: "Your pitch deck was downloaded by TechFlow Capital", time: "1 day ago", read: false },
    { id: 3, message: "New investor match found: Climate Investors", time: "2 days ago", read: true },
    { id: 4, message: "Profile completion: 85% - Add team information", time: "3 days ago", read: true }
  ]);

  const { gsap, fadeIn, slideInLeft, slideInRight } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Welcome header animation
      fadeIn('.welcome-header', { delay: 0.2 });
      
      // Project summary card
      slideInLeft('.project-summary', {
        scrollTrigger: {
          trigger: '.project-summary',
          start: "top 80%",
        }
      });

      // Investors list animation
      gsap.fromTo('.investor-card', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.investors-section',
            start: "top 75%",
          }
        }
      );

      // Analytics cards animation
      gsap.fromTo('.analytics-card', 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: '.analytics-section',
            start: "top 75%",
          }
        }
      );

      // Floating background elements
      gsap.to('.float-element', {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, dashboardRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, slideInLeft, slideInRight]);

  // FIREBASE: Fetch project details here
  const projectData = {
    name: "EcoFlow Solutions",
    description: "Smart water management system using IoT sensors and AI analytics to reduce water waste in commercial buildings by up to 40%.",
    stage: "Series A",
    fundingGoal: "$2.5M",
    raised: "$800K",
    industry: "CleanTech",
    location: "San Francisco, CA",
    founded: "2023"
  };

  // FIREBASE: Fetch interested investors here
  const interestedInvestors = [
    {
      id: 1,
      name: "Green Ventures",
      avatar: "GV",
      status: "Interested",
      focus: "Climate Tech",
      lastActivity: "Viewed pitch deck",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      name: "TechFlow Capital",
      avatar: "TC",
      status: "Contacted",
      focus: "Early Stage",
      lastActivity: "Downloaded financials",
      timeAgo: "1 day ago"
    },
    {
      id: 3,
      name: "Climate Investors",
      avatar: "CI",
      status: "Interested",
      focus: "Sustainability",
      lastActivity: "Saved project",
      timeAgo: "2 days ago"
    },
    {
      id: 4,
      name: "Blue Ocean VC",
      avatar: "BO",
      status: "Reviewing",
      focus: "Water Tech",
      lastActivity: "Viewed profile",
      timeAgo: "3 days ago"
    }
  ];

  const analyticsData = {
    profileViews: 127,
    pitchDownloads: 23,
    investorMatches: 8,
    responseRate: 85
  };

  const toggleNotification = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  return (
    <div ref={dashboardRef} className="pt-20 min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Rocket className="float-element absolute top-20 right-20 w-8 h-8 text-primary/10" />
        <TrendingUp className="float-element absolute top-1/3 left-10 w-6 h-6 text-accent/10" />
        <Users className="float-element absolute bottom-1/3 right-32 w-7 h-7 text-primary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="welcome-header mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Welcome back,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {projectData.name}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your investment journey starts here
            </p>
          </div>
        </div>

        {/* Project Summary Card */}
        <div className="project-summary mb-12">
          <Card className="bg-card/80 backdrop-blur-md border-border/50 p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div className="flex-1 space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">{projectData.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">{projectData.description}</p>
                  </div>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Project
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Stage</p>
                    <Badge className="bg-primary/10 text-primary">{projectData.stage}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Industry</p>
                    <Badge className="bg-accent/10 text-accent">{projectData.industry}</Badge>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">{projectData.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Founded</p>
                    <p className="font-medium text-foreground">{projectData.founded}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 min-w-[280px]">
                <h3 className="text-lg font-semibold text-foreground mb-4">Funding Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Raised</span>
                      <span className="font-medium text-foreground">{projectData.raised}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '32%'}}></div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Goal</span>
                    <span className="font-bold text-primary">{projectData.fundingGoal}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Investors & Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interested Investors */}
            <div className="investors-section">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Interested Investors</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Badge className="bg-primary/10 text-primary">{interestedInvestors.length} Active</Badge>
                </div>
              </div>

              <div className="grid gap-4">
                {interestedInvestors.map((investor) => (
                  <Card key={investor.id} className="investor-card bg-card/50 backdrop-blur-md border-border/50 p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-white font-semibold">{investor.avatar}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{investor.name}</h4>
                          <p className="text-sm text-muted-foreground">{investor.focus}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge 
                          className={
                            investor.status === 'Interested' ? 'bg-green-100 text-green-700' :
                            investor.status === 'Contacted' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }
                        >
                          {investor.status}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{investor.timeAgo}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground">{investor.lastActivity}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Engagement Analytics */}
            <div className="analytics-section">
              <h3 className="text-2xl font-bold text-foreground mb-6">Engagement Analytics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="analytics-card bg-card/50 backdrop-blur-md border-border/50 p-6 text-center">
                  <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{analyticsData.profileViews}</div>
                  <p className="text-sm text-muted-foreground">Profile Views</p>
                </Card>
                
                <Card className="analytics-card bg-card/50 backdrop-blur-md border-border/50 p-6 text-center">
                  <Download className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{analyticsData.pitchDownloads}</div>
                  <p className="text-sm text-muted-foreground">Pitch Downloads</p>
                </Card>
                
                <Card className="analytics-card bg-card/50 backdrop-blur-md border-border/50 p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{analyticsData.investorMatches}</div>
                  <p className="text-sm text-muted-foreground">Investor Matches</p>
                </Card>
                
                <Card className="analytics-card bg-card/50 backdrop-blur-md border-border/50 p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">{analyticsData.responseRate}%</div>
                  <p className="text-sm text-muted-foreground">Response Rate</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Right Column - Pitch Upload & Notifications */}
          <div className="space-y-8">
            {/* Pitch Upload Section */}
            <Card className="bg-card/50 backdrop-blur-md border-border/50 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Pitch Materials</h3>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">Upload your pitch deck</p>
                  <Button className="bg-primary hover:bg-accent text-white">
                    Choose File
                  </Button>
                  {/* FIREBASE: Handle file upload here */}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">EcoFlow_Pitch_v2.pdf</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                        <DollarSign className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Financial_Model.xlsx</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">Updated</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Notifications */}
            <Card className="bg-card/50 backdrop-blur-md border-border/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Notifications</h3>
                <Bell className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      notification.read ? 'bg-muted/30' : 'bg-primary/10'
                    }`}
                    onClick={() => toggleNotification(notification.id)}
                  >
                    <p className={`text-sm ${notification.read ? 'text-muted-foreground' : 'text-foreground font-medium'}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Help Section */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50 p-6 text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Need Help?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to support your funding journey
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}