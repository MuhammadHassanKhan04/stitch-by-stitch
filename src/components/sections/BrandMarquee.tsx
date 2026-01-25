import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import chanelLogo from "@/assets/brands/chanel.png";
import brand2Logo from "@/assets/brands/brand2.jpg";
import underArmourLogo from "@/assets/brands/under_armour.svg";
import gucciLogo from "@/assets/brands/gucci.png";
import versaceLogo from "@/assets/brands/versace.png";
import burberryLogo from "@/assets/brands/burberry.png";

const brandsData = [
  { name: "Chanel", src: chanelLogo },
  { name: "Under Armour", src: underArmourLogo },
  { name: "Gucci", src: gucciLogo },
  { name: "Versace", src: versaceLogo },
  { name: "Partner", src: brand2Logo },
  { name: "Burberry", src: burberryLogo },
];

// Create rows by repeating the brands to ensure we have enough items for the marquee
const row1 = [...brandsData, ...brandsData, ...brandsData];
const row2 = [...brandsData, ...brandsData, ...brandsData];
const row3 = [...brandsData, ...brandsData, ...brandsData];

function BrandItem({ brand }: { brand: { name: string; src: string } }) {
  return (
    <div className="flex items-center justify-center px-8 md:px-12 py-4 shrink-0">
      <div className="h-12 md:h-16 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
        <img
          src={brand.src}
          alt={brand.name}
          className="h-full w-auto object-contain max-w-[120px] mix-blend-multiply dark:mix-blend-screen"
        />
      </div>
    </div>
  );
}

function MarqueeRow({
  brands,
  reverse = false,
  speed = "normal",
}: {
  brands: { name: string; src: string }[];
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}) {
  const speedClass = {
    slow: "animate-[marquee_60s_linear_infinite]",
    normal: "animate-[marquee_40s_linear_infinite]",
    fast: "animate-[marquee_30s_linear_infinite]",
  };

  const reverseSpeedClass = {
    slow: "animate-[marquee-reverse_60s_linear_infinite]",
    normal: "animate-[marquee-reverse_40s_linear_infinite]",
    fast: "animate-[marquee-reverse_30s_linear_infinite]",
  };

  return (
    <div className="flex overflow-hidden py-4">
      <div
        className={`flex ${reverse ? reverseSpeedClass[speed] : speedClass[speed]
          }`}
        style={{ willChange: "transform" }}
      >
        {/* Duplicate items for seamless loop */}
        {[...brands, ...brands].map((brand, index) => (
          <BrandItem key={`${brand.name}-${index}`} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-10 bg-background relative z-20 overflow-hidden border-b border-border/10">

      <div className="container-wide mb-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-muted-foreground/80 text-xs md:text-sm uppercase tracking-[0.3em] font-medium border-b border-primary/10 pb-1">
            Trusted by Global Brands
          </span>
        </motion.div>
      </div>

      {/* Marquee Rows */}
      <div className="relative">
        {/* Gradient Masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="space-y-8 py-4">
          <MarqueeRow brands={row1} speed="normal" />
          <MarqueeRow brands={row2} reverse speed="slow" />
        </div>
      </div>
    </section>
  );
}
