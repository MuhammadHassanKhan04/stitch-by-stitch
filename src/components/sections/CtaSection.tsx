import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CtaSectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  variant?: "gold" | "dark";
  backgroundImage?: string;
}

export function CtaSection({
  title,
  description,
  buttonText,
  buttonLink,
  variant = "gold",
  backgroundImage,
}: CtaSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variantClasses = {
    gold: "bg-gradient-gold text-primary-foreground",
    dark: "bg-charcoal text-ivory",
  };

  return (
    <section
      ref={ref}
      className={`section-padding relative overflow-hidden ${!backgroundImage ? variantClasses[variant] : "text-white"}`}
    >
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </>
      )}

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
              {description}
            </p>
          )}
          <Link to={buttonLink}>
            <Button
              size="lg"
              variant={variant === "gold" && !backgroundImage ? "outline" : "default"}
              className={
                variant === "gold" && !backgroundImage
                  ? "border-charcoal text-charcoal hover:bg-charcoal/10 px-10 py-6 text-base font-semibold tracking-wide"
                  : "bg-gold hover:bg-gold-dark text-charcoal px-10 py-6 text-base font-semibold tracking-wide shadow-gold"
              }
            >
              {buttonText}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
