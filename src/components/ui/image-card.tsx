import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ImageCardProps {
  image: string;
  title: string;
  description?: string;
  className?: string;
  variant?: "default" | "cover";
}

export function ImageCard({ image, title, description, className = "", variant = "default" }: ImageCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (variant === "cover") {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className={`group relative overflow-hidden rounded-sm h-[300px] md:h-[350px] bg-charcoal border border-white/10 ${className}`}
      >
        {/* Text Content (Visible by default, fades out on hover) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center transition-opacity duration-500 group-hover:opacity-0 bg-charcoal">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-3">
            {title}
          </h3>
          {description && (
            <p className="text-ivory/70 text-sm md:text-base leading-relaxed max-w-xs">
              {description}
            </p>
          )}
          <div className="mt-6 w-12 h-1 bg-white/10 rounded-full" />
        </div>

        {/* Image (Hidden by default, fades in on hover) */}
        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80" />

          {/* Text overlaid on image (Optional, essentially same as default card but purely for hover state) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            <h3 className="font-serif text-xl font-semibold text-white mb-1 shadow-black DROP-SHADOW-MD">
              {title}
            </h3>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-sm ${className}`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export function ImageCardGrid({ children, columns = 4 }: { children: React.ReactNode; columns?: 2 | 3 | 4 }) {
  const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6`}>
      {children}
    </div>
  );
}
