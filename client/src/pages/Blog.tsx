import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Calendar, User, ArrowRight } from "lucide-react";

/**
 * Blog Page - Modern Eco-Minimalism Design
 * Features: Article listings, featured posts, animations
 */
export default function Blog() {
  const [, navigate] = useLocation();

  const articles = [
    {
      id: 1,
      title: "The Impact of Plastic Pollution on Marine Life",
      excerpt:
        "Discover how plastic pollution is affecting our oceans and what we can do to help. Learn about the Great Pacific Garbage Patch and innovative solutions.",
      image: "/images/blog_image_1.jpg",
      author: "Sarah Green",
      date: "December 28, 2025",
      category: "Ocean Conservation",
    },
    {
      id: 2,
      title: "Climate Change: What Young People Need to Know",
      excerpt:
        "Understanding the science behind climate change and how your generation can lead the fight against global warming.",
      image: "/images/hero_environment.jpg",
      author: "Alex Rivers",
      date: "December 25, 2025",
      category: "Climate Action",
    },
    {
      id: 3,
      title: "Sustainable Living: 10 Easy Steps to Start Today",
      excerpt:
        "Simple, practical steps you can take right now to reduce your carbon footprint and live more sustainably.",
      image: "/images/about_us_image.jpg",
      author: "Emma Eco",
      date: "December 20, 2025",
      category: "Sustainable Living",
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
              className="text-sm font-medium text-primary"
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
            Environmental Insights & Stories
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Explore articles, tips, and stories from our community of environmental activists.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 animate-fade-in">
            <div>
              <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">
                  Featured Article
                </span>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                {articles[0].title}
              </h2>
              <p className="text-lg text-foreground/60 mb-6">
                {articles[0].excerpt}
              </p>
              <div className="flex items-center gap-6 mb-6 text-sm text-foreground/60">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {articles[0].author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {articles[0].date}
                </div>
              </div>
              <Button className="eco-button gap-2">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 animate-fade-in">
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={article.id}
                className="eco-card group overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-foreground/60 mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4 border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                </div>

                <Button className="w-full eco-button-secondary">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">
            Have a Story to Share?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community and contribute your own environmental insights and experiences.
          </p>
          <Button
            onClick={() => navigate("/join")}
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Join Gen Can
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
