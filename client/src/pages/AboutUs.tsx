import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Target, Heart, Zap } from "lucide-react";

/**
 * About Us Page - Modern Eco-Minimalism Design
 * Features: Mission statement, team info, values, animations
 */
export default function AboutUs() {
  const [, navigate] = useLocation();

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower young people to take meaningful action on environmental issues and create lasting positive change for our planet.",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description:
        "A world where every young person is equipped with the knowledge and passion to be an environmental leader.",
    },
    {
      icon: Zap,
      title: "Our Impact",
      description:
        "Building a global community of youth activists working together to create a sustainable future.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
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
              className="text-sm font-medium text-primary"
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
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            About Gen Can
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            A movement of young environmental activists dedicated to creating positive change.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="/images/about_us_image.jpg"
                alt="Gen Can Team"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-lg text-foreground/70 mb-4">
                Gen Can was founded on a simple belief: young people have the power to change the world. We recognized that the environmental crisis requires urgent action, and who better to lead that charge than the generation that will live with the consequences?
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                Our community brings together passionate youth from around the globe who are committed to environmental sustainability. We believe in education, action, and community—three pillars that guide everything we do.
              </p>
              <p className="text-lg text-foreground/70">
                "Let's change the environment, 'cause in the end we are the ones who responsible for it." This isn't just our motto—it's our commitment to a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/60">
              These principles guide our work and community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="eco-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center animate-fade-in">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Education & Awareness
              </h3>
              <p className="text-lg text-foreground/70 mb-4">
                We provide comprehensive resources and articles to help young people understand environmental issues. From climate change to sustainable living, we cover topics that matter.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">Regular blog posts and educational content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">Webinars and workshops with environmental experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">Community discussions and knowledge sharing</span>
                </li>
              </ul>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Action & Impact
              </h3>
              <p className="text-lg text-foreground/70 mb-4">
                We don't just talk about environmental change—we take action. Our community organizes initiatives, campaigns, and projects that create real-world impact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">Community cleanup events and tree planting drives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">Advocacy campaigns for environmental policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span className="text-foreground/70">Sustainable living challenges and initiatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Join the Gen Can Movement
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of a global community of young environmental leaders making a real difference.
          </p>
          <Button
            onClick={() => navigate("/join")}
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Join Us Today
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
