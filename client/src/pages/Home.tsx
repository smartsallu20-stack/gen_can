import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { ChevronRight, Leaf, Users, BookOpen, Zap } from "lucide-react";

/**
 * Home Page - Modern Eco-Minimalism Design
 * Features: Hero section, mission statement, featured content, CTA
 */
export default function Home() {
  const [, navigate] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="/images/gen_can_logo.png"
              alt="Gen Can Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-primary hidden sm:inline">
              Gen Can
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/blog");
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
              }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About Us
            </a>
            <Button
              onClick={() => navigate("/join")}
              className="eco-button"
            >
              Join Community
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/images/hero_environment.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-secondary/10 rounded-full">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  Youth Environmental Movement
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Let's Change the{" "}
                <span className="gradient-text">Environment</span>
              </h1>

              <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
                "Let's change the environment, 'cause in the end we are the ones who responsible for it."
              </p>

              <p className="text-lg text-foreground/60 mb-8">
                Join thousands of young activists making a real difference. Together, we can create a sustainable future for our planet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => navigate("/join")}
                  className="eco-button gap-2"
                >
                  Join Our Community
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => navigate("/blog")}
                  className="eco-button-secondary gap-2"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="hidden lg:block animate-slide-in-right">
              <img
                src="/images/hero_environment.jpg"
                alt="Young people planting trees"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/5">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Join Gen Can?
            </h2>
            <p className="text-lg text-foreground/60">
              Be part of a movement that's changing the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Community",
                description: "Connect with like-minded environmental activists",
              },
              {
                icon: BookOpen,
                title: "Education",
                description: "Learn about sustainability and environmental issues",
              },
              {
                icon: Zap,
                title: "Action",
                description: "Take concrete steps to make a real impact",
              },
              {
                icon: Leaf,
                title: "Growth",
                description: "Grow as a leader in the environmental movement",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="eco-card animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community of young environmental activists and be part of the solution. Your actions matter.
          </p>
          <Button
            onClick={() => navigate("/join")}
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Join Gen Can Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/images/gen_can_logo.png"
                alt="Gen Can Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-sm text-foreground/60">
                Empowering young generation to change the environment.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/");
                    }}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/blog");
                    }}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/about");
                    }}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <p className="text-sm text-foreground/60">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-foreground/60">
              All rights reserved by Pathan Tehzeeb Khan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
