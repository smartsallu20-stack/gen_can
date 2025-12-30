import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Leaf } from "lucide-react";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container text-center animate-fade-in">
        <div className="flex justify-center mb-8">
          <Leaf className="w-16 h-16 text-primary opacity-50" />
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-foreground/60 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button
          onClick={() => navigate("/")}
          className="eco-button"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
