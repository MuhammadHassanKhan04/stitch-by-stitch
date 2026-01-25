import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
  overlay?: "dark" | "light" | "none";
  height?: "full" | "large" | "medium";
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
  overlay = "dark",
  height = "full",
  children,
}: HeroSectionProps) {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[85vh]",
    medium: "min-h-[70vh]",
  };

  const overlayClasses = {
    dark: "bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/70",
    light: "bg-gradient-to-b from-ivory/30 via-transparent to-ivory/50",
    none: "",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay with radial gradient for focus */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]} bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]`} />

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4 py-32">
        <motion.div
          className="max-w-4xl mx-auto"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gold tracking-[0.3em] uppercase text-sm md:text-base font-medium mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-8"
          >
            {title.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + (i * 0.1) }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
            >
              {description}
            </motion.p>
          )}

          {(primaryCta || secondaryCta) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              {primaryCta && (
                <Link to={primaryCta.link}>
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-charcoal px-8 py-6 text-base font-semibold tracking-wide shadow-gold group overflow-hidden relative"
                  >
                    <span className="relative z-10">{primaryCta.text}</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                    />
                  </Button>
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.link}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent border-ivory text-ivory hover:bg-ivory/10 px-8 py-6 text-base font-semibold tracking-wide"
                  >
                    {secondaryCta.text}
                  </Button>
                </Link>
              )}
            </motion.div>
          )}

          {children}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
