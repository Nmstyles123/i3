"use client";

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@/hooks/useGSAP';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Heart, 
  MapPin,
  DollarSign,
  TrendingUp,
  Users,
  Star,
  Bookmark,
  Eye,
  Calendar,
  Building,
  Target,
  Globe,
  Zap,
  X
} from 'lucide-react';

export default function InvestorDashboard() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    industry: [],
    stage: [],
    location: [],
    fundingRange: ''
  });
  const [savedProjects, setSavedProjects] = useState([1, 3, 5]);
  const [selectedStartup, setSelectedStartup] = useState(null);

  const { gsap, fadeIn, slideInLeft, slideInRight } = useGSAP();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Welcome banner animation
      fadeIn('.welcome-banner', { delay: 0.2 });
      
      // Filter section animation
      slideInLeft('.filter-section', {
        scrollTrigger: {
          trigger: '.filter-section',
          start: "top 80%",
        }
      });

      // Startup cards animation
      gsap.fromTo('.startup-card', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.startup-explorer',
            start: "top 75%",
          }
        }
      );

      // Parallax background shapes
      gsap.to('.parallax-shape', {
        y: -20,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.7
      });

    }, dashboardRef);

    return () => ctx.revert();
  }, [gsap, fadeIn, slideInLeft, slideInRight]);

  // FIREBASE: Fetch startups based on filters here
  const startups = [
    {
      id: 1,
      name: "EcoFlow Solutions",
      description: "Smart water management system using IoT sensors and AI analytics to reduce water waste in commercial buildings.",
      industry: "CleanTech",
      stage: "Series A",
      location: "San Francisco, CA",
      fundingGoal: "$2.5M",
      team: 8,
      founded: "2023",
      logo: "EF"
    },
    {
      id: 2,
      name: "HealthAI Diagnostics",
      description: "AI-powered medical imaging platform that helps radiologists detect early-stage diseases with 95% accuracy.",
      industry: "HealthTech",
      stage: "Seed",
      location: "Boston, MA",
      fundingGoal: "$1.2M",
      team: 5,
      founded: "2024",
      logo: "HD"
    },
    {
      id: 3,
      name: "FinanceFlow",
      description: "Automated financial planning platform for small businesses with real-time cash flow predictions.",
      industry: "FinTech",
      stage: "Pre-Seed",
      location: "New York, NY",
      fundingGoal: "$800K",
      team: 4,
      founded: "2024",
      logo: "FF"
    },
    {
      id: 4,
      name: "GreenLogistics",
      description: "Carbon-neutral delivery network using electric vehicles and optimized routing algorithms.",
      industry: "Logistics",
      stage: "Series A",
      location: "Seattle, WA",
      fundingGoal: "$3.5M",
      team: 12,
      founded: "2022",
      logo: "GL"
    },
    {
      id: 5,
      name: "EduTech Pro",
      description: "Personalized learning platform that adapts to individual student needs using machine learning.",
      industry: "EdTech",
      stage: "Seed",
      location: "Austin, TX",
      fundingGoal: "$1.8M",
      team: 7,
      founded: "2023",
      logo: "EP"
    },
    {
      id: 6,
      name: "AgriSmart",
      description: "Precision agriculture platform using drones and sensors to optimize crop yields and reduce pesticide use.",
      industry: "AgTech",
      stage: "Series A",
      location: "Denver, CO",
      fundingGoal: "$4.2M",
      team: 15,
      founded: "2022",
      logo: "AS"
    }
  ];

  const investmentFocus = [
    { id: 'climate', label: 'Climate Tech', checked: true },
    { id: 'health', label: 'HealthTech', checked: false },
    { id: 'fintech', label: 'FinTech', checked: true },
    { id: 'ai', label: 'AI/ML', checked: false },
    { id: 'early', label: 'Early Stage', checked: true },
    { id: 'growth', label: 'Growth Stage', checked: false }
  ];

  const toggleSaveProject = (projectId) => {
    setSavedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const openStartupModal = (startup) => {
    setSelectedStartup(startup);
  };

  const closeStartupModal = () => {
    setSelectedStartup(null);
  };

  return (
    <div ref={dashboardRef} className="pt-20 min-h-screen bg-gradient-to-br from-background to-accent/5">
      {/* Parallax Background Shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Target className="parallax-shape absolute top-20 right-20 w-8 h-8 text-primary/10" />
        <Globe className="parallax-shape absolute top-1/3 left-10 w-6 h-6 text-accent/10" />
        <Zap className="parallax-shape absolute bottom-1/3 right-32 w-7 h-7 text-primary/10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="welcome-banner mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Welcome back,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Alex Chen
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find high-potential creators worth backing
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-section mb-8">
          <Card className="bg-card/80 backdrop-blur-md border-border/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Filter Startups</h3>
              <Badge className="bg-primary/10 text-primary">{startups.length} Results</Badge>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                <div className="flex flex-wrap gap-2">
                  {['CleanTech', 'HealthTech', 'FinTech', 'EdTech'].map(industry => (
                    <Badge 
                      key={industry}
                      className="cursor-pointer bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Stage</label>
                <div className="flex flex-wrap gap-2">
                  {['Pre-Seed', 'Seed', 'Series A'].map(stage => (
                    <Badge 
                      key={stage}
                      className="cursor-pointer bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      {stage}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                <Input placeholder="Enter city or state" className="border-border/50" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Funding Range</label>
                <select className="w-full p-2 border border-border/50 rounded-md bg-background text-foreground">
                  <option>Any amount</option>
                  <option>Under $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
            </div>
            {/* FIREBASE: Apply filters to query here */}
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Startup Explorer - Main Content */}
          <div className="lg:col-span-3">
            <div className="startup-explorer">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-foreground">Startup Explorer</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Search className="w-4 h-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {startups.map((startup) => (
                  <Card 
                    key={startup.id} 
                    className="startup-card bg-card/50 backdrop-blur-md border-border/50 p-6 hover:border-primary/30 transition-all duration-300 cursor-pointer"
                    onClick={() => openStartupModal(startup)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <span className="text-white font-bold">{startup.logo}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{startup.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{startup.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveProject(startup.id);
                        }}
                        className={savedProjects.includes(startup.id) ? 'text-red-500' : 'text-muted-foreground'}
                      >
                        <Heart className={`w-4 h-4 ${savedProjects.includes(startup.id) ? 'fill-current' : ''}`} />
                      </Button>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {startup.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <Badge className="bg-primary/10 text-primary">{startup.industry}</Badge>
                        <Badge className="bg-accent/10 text-accent">{startup.stage}</Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <DollarSign className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Goal</p>
                        <p className="text-sm font-medium text-foreground">{startup.fundingGoal}</p>
                      </div>
                      <div>
                        <Users className="w-4 h-4 text-accent mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Team</p>
                        <p className="text-sm font-medium text-foreground">{startup.team}</p>
                      </div>
                      <div>
                        <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Founded</p>
                        <p className="text-sm font-medium text-foreground">{startup.founded}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Saved Projects */}
            <Card className="bg-card/50 backdrop-blur-md border-border/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">Saved Projects</h3>
                <Bookmark className="w-5 h-5 text-primary" />
              </div>
              
              <div className="space-y-3">
                {startups.filter(s => savedProjects.includes(s.id)).map((startup) => (
                  <div key={startup.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{startup.logo}</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{startup.name}</p>
                        <p className="text-xs text-muted-foreground">{startup.stage}</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSaveProject(startup.id)}
                      className="text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
                
                {savedProjects.length === 0 && (
                  <p className="text-muted-foreground text-sm text-center py-4">
                    No saved projects yet
                  </p>
                )}
              </div>
            </Card>

            {/* Investment Focus */}
            <Card className="bg-card/50 backdrop-blur-md border-border/50 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Investment Focus</h3>
              
              <div className="space-y-3">
                {investmentFocus.map((focus) => (
                  <div key={focus.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={focus.id}
                      defaultChecked={focus.checked}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <label htmlFor={focus.id} className="text-sm text-foreground">
                      {focus.label}
                    </label>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4 bg-primary hover:bg-accent text-white">
                Save Preferences
              </Button>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-border/50 p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Your Activity</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Projects Viewed</span>
                  <span className="font-medium text-foreground">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saved Projects</span>
                  <span className="font-medium text-foreground">{savedProjects.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Connections Made</span>
                  <span className="font-medium text-foreground">5</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Startup Detail Modal */}
      {selectedStartup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-card/95 backdrop-blur-md border-border/50 p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedStartup.logo}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedStartup.name}</h2>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedStartup.location}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" onClick={closeStartupModal}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">About</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedStartup.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Industry</h4>
                  <Badge className="bg-primary/10 text-primary">{selectedStartup.industry}</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Stage</h4>
                  <Badge className="bg-accent/10 text-accent">{selectedStartup.stage}</Badge>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Funding Goal</h4>
                  <p className="text-foreground font-semibold">{selectedStartup.fundingGoal}</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Team Size</h4>
                  <p className="text-foreground font-semibold">{selectedStartup.team} members</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-primary hover:bg-accent text-white">
                  Connect with Founder
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => toggleSaveProject(selectedStartup.id)}
                  className={savedProjects.includes(selectedStartup.id) ? 'border-red-500 text-red-500' : 'border-primary text-primary'}
                >
                  <Heart className={`w-4 h-4 mr-2 ${savedProjects.includes(selectedStartup.id) ? 'fill-current' : ''}`} />
                  {savedProjects.includes(selectedStartup.id) ? 'Saved' : 'Save'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}