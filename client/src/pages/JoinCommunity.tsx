import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

/**
 * Join Community Page - Modern Eco-Minimalism Design
 * Features: Registration form with Google Forms integration, animations
 */
export default function JoinCommunity() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    reason: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare form data for Google Forms
      const formBody = new URLSearchParams({
        "entry.2005620554": formData.name,
        "entry.1045781291": formData.email,
        "entry.1065046570": formData.address,
        "entry.1166974658": formData.phone,
        "entry.1572424973": formData.reason,
      });

      // Submit to Google Forms
      const response = await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfs_48jTV0jYBIDihScNLakSsuOMVlx9cN2PC_16chre5LlyQ/formResponse",
        {
          method: "POST",
          body: formBody,
          mode: "no-cors",
        }
      );

      // Google Forms always returns 200 with no-cors mode
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        address: "",
        phone: "",
        reason: "",
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container text-center animate-fade-in">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Become part of a global movement of young environmental activists. Together, we can create lasting change.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="eco-card animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Register Now
              </h2>
              <p className="text-foreground/60">
                Fill out the form below to join Gen Can and start making a difference.
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-scale-in">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900">
                    Registration Successful!
                  </h3>
                  <p className="text-sm text-green-800">
                    Thank you for joining Gen Can. We'll be in touch soon with more information about our community and upcoming events.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-scale-in">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-900">
                    Submission Error
                  </h3>
                  <p className="text-sm text-red-800">
                    There was an error submitting your form. Please try again.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Your address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Why do you want to join Gen Can?
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Tell us about your environmental interests and goals..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full eco-button justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join Gen Can"
                )}
              </Button>

              <p className="text-xs text-foreground/50 text-center">
                By joining, you agree to receive updates about Gen Can's initiatives and environmental campaigns.
              </p>
            </form>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Connect",
                description: "Join thousands of young environmental activists",
              },
              {
                title: "Learn",
                description: "Access educational resources and expert insights",
              },
              {
                title: "Act",
                description: "Participate in campaigns and community initiatives",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="eco-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
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
