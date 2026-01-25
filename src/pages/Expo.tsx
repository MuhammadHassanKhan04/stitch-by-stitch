import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { BrandMarquee } from "@/components/sections/BrandMarquee";
import { ImageCard, ImageCardGrid } from "@/components/ui/image-card";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import expoHero from "@/assets/expo-hero.jpg";
import heroFactory from "@/assets/hero-factory.jpg";
import cuttingRoom from "@/assets/cutting-room.jpg";
import stitchingDetail from "@/assets/stitching-detail.jpg";
import samplingStudio from "@/assets/sampling-studio.jpg";
import bulkProduction from "@/assets/bulk-production.jpg";
import facilityOverview from "@/assets/facility-overview.jpg";
import machinery from "@/assets/machinery.jpg";
import qualityControl from "@/assets/quality-control.jpg";

const whatWeManufacture = [
  { image: samplingStudio, title: "Women's Wear", description: "Dresses, tops, blouses, and ethnic wear" },
  { image: bulkProduction, title: "Men's Wear", description: "Shirts, trousers, and casual wear" },
  { image: cuttingRoom, title: "Kidswear", description: "Comfortable and durable children's clothing" },
  { image: stitchingDetail, title: "Workwear", description: "Uniforms and professional attire" },
];

const factoryProof = [
  { image: facilityOverview, title: "Modern Facility", description: "50,000+ sq ft production space" },
  { image: heroFactory, title: "Skilled Workforce", description: "500+ trained professionals" },
  { image: machinery, title: "Advanced Machinery", description: "200+ industrial machines" },
  { image: qualityControl, title: "Quality Control", description: "Rigorous QC standards" },
];

const whyChooseUs = [
  { title: "15+ Years Experience", description: "Decades of manufacturing expertise" },
  { title: "International Standards", description: "Compliance with global quality norms" },
  { title: "Competitive Pricing", description: "Cost-effective manufacturing solutions" },
  { title: "On-Time Delivery", description: "Reliable production schedules" },
  { title: "Expo Presence", description: "Active at international trade shows" },
  { title: "Custom Solutions", description: "Tailored manufacturing services" },
];

const Expo = () => {
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const scrollToInquiry = () => {
    document.getElementById("expo-inquiry")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${expoHero})` }}
        />
        
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        
        {/* Animated Gold Border */}
        <div className="absolute inset-4 md:inset-8 border border-gold/30 rounded-sm pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10 container-wide text-center px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="shimmer-gold text-gold tracking-[0.3em] uppercase text-sm md:text-base font-semibold px-6 py-2 rounded-full border border-gold/50">
                International Fashion Expos 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6"
            >
              Your Trusted Garment
              <br />
              <span className="text-gold">Manufacturing Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              Meet us at international fashion expos in Sri Lanka, Dubai, Baku, and Azerbaijan.
              Premium CMT manufacturing for global fashion brands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {["Sri Lanka", "Dubai", "Baku", "Azerbaijan"].map((location, index) => (
                <motion.span
                  key={location}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="px-5 py-2.5 bg-gold/20 border border-gold/40 text-gold text-sm font-medium rounded-sm backdrop-blur-sm"
                >
                  {location}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                size="lg"
                onClick={scrollToInquiry}
                className="bg-gold hover:bg-gold-dark text-charcoal px-12 py-7 text-lg font-semibold tracking-wide shadow-gold"
              >
                Discuss Your Order
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* What We Manufacture */}
      <Section
        title="What We Manufacture"
        subtitle="Our Expertise"
        description="Premium garment manufacturing for all categories, tailored to your brand's specifications."
        background="default"
      >
        <ImageCardGrid columns={4}>
          {whatWeManufacture.map((item) => (
            <ImageCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </ImageCardGrid>
      </Section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Factory Proof */}
      <Section
        title="Factory Proof"
        subtitle="Our Infrastructure"
        description="World-class manufacturing facilities designed for quality and scale."
        background="default"
      >
        <ImageCardGrid columns={4}>
          {factoryProof.map((item) => (
            <ImageCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </ImageCardGrid>
      </Section>

      {/* Why Choose Us */}
      <Section
        title="Why Choose Us"
        subtitle="Our Advantage"
        description="What makes Stitch by Stitch your ideal manufacturing partner."
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-sm shadow-soft border-l-4 border-gold"
            >
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quick Inquiry Section */}
      <section
        id="expo-inquiry"
        ref={formRef}
        className="section-padding bg-gradient-to-b from-charcoal to-charcoal/95 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-gold tracking-[0.2em] uppercase text-sm font-medium mb-4 block">
              Quick Inquiry
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-6">
              Let's Discuss Your Order
            </h2>
            <p className="text-ivory/80 text-lg max-w-2xl mx-auto">
              Fill out the form below or reach us directly via WhatsApp for a quick response.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-ivory/5 backdrop-blur-sm rounded-sm p-8 md:p-10 border border-gold/20">
              <InquiryForm variant="compact" />
              
              {/* WhatsApp CTA */}
              <div className="mt-8 pt-6 border-t border-ivory/10 text-center">
                <p className="text-ivory/60 text-sm mb-4">Or connect with us directly</p>
                <Button
                  variant="outline"
                  className="border-gold/50 text-gold hover:bg-gold/10 px-8"
                  onClick={() => window.open("https://wa.me/923000000000", "_blank")}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Expo;
