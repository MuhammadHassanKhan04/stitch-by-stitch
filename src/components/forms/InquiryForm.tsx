import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface InquiryFormProps {
  variant?: "default" | "compact";
  className?: string;
}

export function InquiryForm({ variant = "default", className = "" }: InquiryFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Your Name"
              required
              className="bg-background/50 border-border focus:border-gold"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Address"
              required
              className="bg-background/50 border-border focus:border-gold"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Company Name"
              className="bg-background/50 border-border focus:border-gold"
            />
          </div>
          <div>
            <Input
              placeholder="Country"
              className="bg-background/50 border-border focus:border-gold"
            />
          </div>
        </div>
        <div>
          <Textarea
            placeholder="Tell us about your requirements..."
            rows={4}
            className="bg-background/50 border-border focus:border-gold resize-none"
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 py-6 font-medium tracking-wide"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            placeholder="John Smith"
            required
            className="bg-card border-border focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            placeholder="Your Company"
            className="bg-card border-border focus:border-gold"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            required
            className="bg-card border-border focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            placeholder="United Kingdom"
            required
            className="bg-card border-border focus:border-gold"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="+1 234 567 8900"
            className="bg-card border-border focus:border-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Estimated Quantity</Label>
          <Input
            id="quantity"
            placeholder="e.g., 5,000 pieces"
            className="bg-card border-border focus:border-gold"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Requirements *</Label>
        <Textarea
          id="message"
          placeholder="Please describe your manufacturing requirements, product types, timeline, and any specific needs..."
          rows={6}
          required
          className="bg-card border-border focus:border-gold resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        size="lg"
        className="w-full md:w-auto bg-gradient-gold text-primary-foreground hover:opacity-90 px-12 py-6 font-medium tracking-wide shadow-gold"
      >
        {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
