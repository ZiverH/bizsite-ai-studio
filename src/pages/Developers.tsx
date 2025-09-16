import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const developers = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "👩‍💻",
    title: "Full-Stack Developer",
    rating: 4.9,
    reviews: 127,
    location: "San Francisco, CA",
    hourlyRate: 85,
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description: "Experienced developer specializing in modern web applications with a focus on user experience and scalable architecture.",
    responseTime: "Within 2 hours",
    completedProjects: 89,
    verified: true
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    avatar: "👨‍💻",
    title: "Frontend Specialist",
    rating: 4.8,
    reviews: 94,
    location: "Austin, TX",
    hourlyRate: 75,
    skills: ["Vue.js", "React", "CSS", "Figma"],
    description: "Creative frontend developer with 5+ years experience creating beautiful, responsive websites that convert visitors to customers.",
    responseTime: "Within 1 hour",
    completedProjects: 156,
    verified: true
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: "👩‍🎨",
    title: "UI/UX Developer",
    rating: 4.9,
    reviews: 203,
    location: "New York, NY",
    hourlyRate: 90,
    skills: ["React", "Design Systems", "Tailwind", "Next.js"],
    description: "Designer-developer hybrid who creates stunning websites with perfect user experiences. Specialized in e-commerce and SaaS platforms.",
    responseTime: "Within 3 hours",
    completedProjects: 78,
    verified: true
  },
  {
    id: 4,
    name: "Marcus Thompson",
    avatar: "👨‍🔧",
    title: "Backend Developer",
    rating: 4.7,
    reviews: 156,
    location: "Seattle, WA",
    hourlyRate: 80,
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
    description: "Backend specialist focused on building robust, scalable web applications with clean architecture and optimal performance.",
    responseTime: "Within 4 hours",
    completedProjects: 67,
    verified: true
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar: "👩‍💼",
    title: "E-commerce Expert",
    rating: 5.0,
    reviews: 89,
    location: "Los Angeles, CA",
    hourlyRate: 95,
    skills: ["Shopify", "WooCommerce", "React", "Payment APIs"],
    description: "E-commerce specialist who has helped 50+ businesses launch successful online stores with integrated payment systems.",
    responseTime: "Within 1 hour",
    completedProjects: 134,
    verified: true
  },
  {
    id: 6,
    name: "David Park",
    avatar: "👨‍🎯",
    title: "WordPress Developer",
    rating: 4.6,
    reviews: 178,
    location: "Chicago, IL",
    hourlyRate: 65,
    skills: ["WordPress", "PHP", "MySQL", "Custom Themes"],
    description: "WordPress expert with 7+ years experience creating custom themes and plugins for businesses of all sizes.",
    responseTime: "Within 6 hours",
    completedProjects: 245,
    verified: true
  }
];

const Developers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Developer</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our curated network of verified developers ready to bring your business website to life
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Button variant="outline" size="sm">All Specialties</Button>
          <Button variant="outline" size="sm">Frontend</Button>
          <Button variant="outline" size="sm">Full-Stack</Button>
          <Button variant="outline" size="sm">E-commerce</Button>
          <Button variant="outline" size="sm">WordPress</Button>
          <Button variant="outline" size="sm">Under $80/hr</Button>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((developer) => (
            <Card key={developer.id} className="hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{developer.avatar}</div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {developer.name}
                        {developer.verified && (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        )}
                      </CardTitle>
                      <CardDescription>{developer.title}</CardDescription>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{developer.rating}</span>
                    <span className="ml-1">({developer.reviews})</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {developer.location}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {developer.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {developer.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Hourly Rate:</span>
                    <span className="font-semibold">${developer.hourlyRate}/hr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Projects:</span>
                    <span>{developer.completedProjects} completed</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{developer.responseTime}</span>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Profile
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline">Load More Developers</Button>
        </div>
      </main>
    </div>
  );
};

export default Developers;