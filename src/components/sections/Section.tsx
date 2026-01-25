import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "secondary" | "gradient";
}

export function Section({
  title,
  subtitle,
  description,
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const backgroundClasses = {
    default: "bg-background",
    secondary: "bg-secondary",
    gradient: "bg-gradient-section",
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`section-padding ${backgroundClasses[background]} ${className}`}
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {subtitle && (
            <p className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
