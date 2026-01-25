import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { CtaSection } from "@/components/sections/CtaSection";
import { ImageCard, ImageCardGrid } from "@/components/ui/image-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import heroFactory from "@/assets/hero-factory.jpg";
import cuttingRoom from "@/assets/cutting-room.jpg";
import stitchingDetail from "@/assets/stitching-detail.jpg";
import samplingStudio from "@/assets/sampling-studio.jpg";
import bulkProduction from "@/assets/bulk-production.jpg";
import expoHero from "@/assets/expo-hero.jpg";
import facilityOverview from "@/assets/facility-overview.jpg";
import machinery from "@/assets/machinery.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const capabilities = [
  {
    image: facilityOverview,
    title: "Modern Manufacturing Facility",
    description: "State-of-the-art production floor with 200+ stitching units",
  },
  {
    image: machinery,
    title: "Advanced Machinery",
    description: "Industrial-grade equipment for precision manufacturing",
  },
  {
    image: cuttingRoom,
    title: "Professional Cutting Units",
    description: "Accurate cutting with minimal fabric wastage",
  },
  {
    image: stitchingDetail,
    title: "Expert Craftsmanship",
    description: "Skilled workforce delivering quality stitching",
  },
];

const services = [
  {
    image: cuttingRoom,
    title: "Cutting",
    description: "Precision fabric cutting with advanced equipment",
  },
  {
    image: stitchingDetail,
    title: "Stitching",
    description: "Expert stitching lines for all garment types",
  },
  {
    image: samplingStudio,
    title: "Sampling",
    description: "Rapid sample development and prototyping",
  },
  {
    image: bulkProduction,
    title: "Bulk Production",
    description: "Large-scale manufacturing with consistent quality",
  },
];

const expoImages = [
  {
    image: expoHero,
    title: "International Textile Expos",
    description: "Sri Lanka • Dubai • Baku • Azerbaijan",
  },
];

function CapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      title="Manufacturing Capabilities"
      subtitle="Our Facilities"
      description="A glimpse into our world-class garment manufacturing infrastructure designed for global fashion brands."
      background="default"
    >
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {capabilities.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ImageCard
              image={item.image}
              title={item.title}
              description={item.description}
              variant="cover"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function ServicesSection() {
  return (
    <Section
      title="CMT Services Overview"
      subtitle="What We Offer"
      description="Complete Cut, Make, and Trim services tailored to meet international fashion standards."
      background="secondary"
    >
      <ImageCardGrid columns={4}>
        {services.map((service) => (
          <ImageCard
            key={service.title}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </ImageCardGrid>
    </Section>
  );
}

function ExpoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section
      title="Global Expo Presence"
      subtitle="Meet Us Worldwide"
      description="We actively participate in leading international textile and fashion expos to connect with global partners."
      background="default"
    >
      <div ref={ref} className="grid grid-cols-1 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-sm group"
        >
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={expoHero}
              alt="International Textile Expo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 md:right-auto p-8 md:p-12 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              International Textile Expos
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-4">
              Building partnerships at premier fashion trade shows
            </p>
            <div className="flex flex-wrap gap-3">
              {["Sri Lanka", "Dubai", "Baku", "Azerbaijan"].map((location) => (
                <span
                  key={location}
                  className="px-4 py-2 bg-gold/90 text-primary-foreground text-sm font-medium rounded-sm"
                >
                  {location}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* Hero Section */}
      <HeroSection
        title="Reliable Garment Manufacturing Partner from Pakistan"
        subtitle="Stitch by Stitch"
        description="CMT Services for Global Fashion Brands. Quality craftsmanship, competitive pricing, and on-time delivery."
        backgroundImage={heroFactory}
        primaryCta={{ text: "Request a Quote", link: "/contact" }}
        secondaryCta={{ text: "View Capabilities", link: "/production" }}
        height="full"
      />

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Manufacturing Capabilities */}
      <CapabilitiesSection />

      {/* CMT Services Overview */}
      <ServicesSection />

      {/* Expo Section */}
      <ExpoSection />

      {/* CTA Section */}
      <CtaSection
        title="Looking for a reliable manufacturing partner?"
        description="Partner with us for your next collection. Get competitive quotes, expert craftsmanship, and reliable delivery."
        buttonText="Start Your Inquiry"
        buttonLink="/contact"
        variant="gold"
        backgroundImage={ctaBg}
      />
    </Layout>
  );
};

export default Index;
