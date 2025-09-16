import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Zap, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container py-24 md:py-32">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your Business Website
              <br />
              <span className="text-blue-200">with Expert Developers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Connect with verified developers and get AI-powered recommendations to create the perfect website for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-assistant">
                <Button variant="secondary" size="lg" className="min-w-[200px]">
                  Start with AI Assistant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/developers">
                <Button variant="outline" size="lg" className="min-w-[200px] border-white/30 text-white hover:bg-white/10">
                  Browse Developers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WebCraft AI?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy to find the right developer and build exactly what your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg-custom transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle>AI-Powered Matching</CardTitle>
                <CardDescription>
                  Our AI analyzes your requirements and matches you with the perfect developer for your project
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg-custom transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle>Verified Developers</CardTitle>
                <CardDescription>
                  All developers are thoroughly vetted with proven track records and verified portfolios
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center hover:shadow-lg-custom transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <CardTitle>End-to-End Support</CardTitle>
                <CardDescription>
                  From initial consultation to project completion, we guide you through every step
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">
              Three simple steps to get your business online
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Describe Your Vision</h3>
              <p className="text-muted-foreground">
                Tell our AI about your business, goals, and what you need from your website
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-muted-foreground">
                Our AI recommends the best developers based on your specific requirements and budget
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Launch Your Site</h3>
              <p className="text-muted-foreground">
                Work directly with your chosen developer to bring your vision to life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by 500+ Businesses</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-semibold">4.9/5 average rating</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Martinez",
                business: "Local Restaurant",
                review: "WebCraft AI matched me with the perfect developer. My restaurant's website now brings in 40% more reservations!"
              },
              {
                name: "David Chen",
                business: "E-commerce Store",
                review: "The AI recommendations were spot-on. My online store launched in just 3 weeks and sales have tripled."
              },
              {
                name: "Emily Rodriguez",
                business: "Consulting Firm",
                review: "Professional, efficient, and the end result exceeded my expectations. Highly recommend this platform!"
              },
              {
                name: "Mike Johnson",
                business: "Photography Studio",
                review: "Found an amazing developer who understood my creative vision. My portfolio site is absolutely stunning."
              },
              {
                name: "Lisa Wang",
                business: "Tech Startup",
                review: "The AI assistant helped clarify our requirements and connected us with a developer who delivered perfectly."
              },
              {
                name: "James Wilson",
                business: "Law Firm",
                review: "Professional service from start to finish. Our new website has significantly improved our client acquisition."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg-custom transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Business Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of successful businesses who have found their perfect developer through WebCraft AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-assistant">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/developers">
              <Button variant="outline" size="lg" className="min-w-[200px] border-white/30 text-white hover:bg-white/10">
                View Developers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">WebCraft AI</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 WebCraft AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;