import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { ImageCard, ImageCardGrid } from "@/components/ui/image-card";
import { CtaSection } from "@/components/sections/CtaSection";
import { motion } from "framer-motion";

import facilityOverview from "@/assets/facility-overview.jpg";
import machinery from "@/assets/machinery.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import cuttingRoom from "@/assets/cutting-room.jpg";
import stitchingDetail from "@/assets/stitching-detail.jpg";
import bulkProduction from "@/assets/bulk-production.jpg";

const facilities = [
  {
    image: facilityOverview,
    title: "Production Floor",
    description: "50,000+ sq ft of organized manufacturing space",
  },
  {
    image: cuttingRoom,
    title: "Cutting Department",
    description: "Automated cutting systems and CAD integration",
  },
  {
    image: machinery,
    title: "Stitching Units",
    description: "200+ industrial sewing machines",
  },
  {
    image: bulkProduction,
    title: "Finishing & Packing",
    description: "Quality finishing and export-ready packaging",
  },
];

const stats = [
  { value: "50,000+", label: "Sq Ft Facility" },
  { value: "200+", label: "Machines" },
  { value: "500+", label: "Workforce" },
  { value: "50,000+", label: "Monthly Capacity" },
];

const Production = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Production & Facilities"
        subtitle="Our Infrastructure"
        description="World-class manufacturing infrastructure designed for quality, efficiency, and scale."
        backgroundImage={machinery}
        height="large"
      />

      {/* Factory Overview */}
      <Section
        title="Factory Overview"
        subtitle="Our Facility"
        description="A modern manufacturing facility built to international standards, optimized for efficiency and quality."
        background="default"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-elevated">
              <img
                src={facilityOverview}
                alt="Factory Overview"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card p-6 rounded-sm shadow-soft text-center"
                >
                  <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Facility Sections */}
      <Section
        title="Facility Sections"
        subtitle="Infrastructure"
        description="Each department is designed for optimal workflow and quality output."
        background="secondary"
      >
        <ImageCardGrid columns={2}>
          {facilities.map((facility) => (
            <ImageCard
              key={facility.title}
              image={facility.image}
              title={facility.title}
              description={facility.description}
            />
          ))}
        </ImageCardGrid>
      </Section>

      {/* Machinery & Equipment */}
      <Section
        title="Machinery & Equipment"
        subtitle="Technology"
        description="Industrial-grade machinery for precision manufacturing and consistent quality."
        background="default"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our facility is equipped with the latest industrial machinery from 
              leading manufacturers, ensuring precision, efficiency, and reliability 
              in every production run.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-4 rounded-sm">
                <p className="font-semibold text-foreground">Single Needle</p>
                <p className="text-sm text-muted-foreground">120+ Units</p>
              </div>
              <div className="bg-card p-4 rounded-sm">
                <p className="font-semibold text-foreground">Overlock</p>
                <p className="text-sm text-muted-foreground">50+ Units</p>
              </div>
              <div className="bg-card p-4 rounded-sm">
                <p className="font-semibold text-foreground">Flatlock</p>
                <p className="text-sm text-muted-foreground">20+ Units</p>
              </div>
              <div className="bg-card p-4 rounded-sm">
                <p className="font-semibold text-foreground">Special Machines</p>
                <p className="text-sm text-muted-foreground">30+ Units</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src={machinery}
                alt="Machinery"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Quality Control */}
      <Section
        title="Quality Control"
        subtitle="QC Standards"
        description="Multi-stage quality inspection ensures every garment meets international standards."
        background="secondary"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-sm"
        >
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={qualityControl}
              alt="Quality Control"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Quality Assurance Process
            </h3>
            <ul className="space-y-2 text-primary-foreground/90">
              <li>• Fabric inspection before cutting</li>
              <li>• Inline quality checks during production</li>
              <li>• AQL-based final inspection</li>
              <li>• Pre-shipment audit</li>
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* Compliance */}
      <Section
        title="Compliance & Standards"
        subtitle="Certifications"
        description="We adhere to international compliance standards and ethical manufacturing practices."
        background="default"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Social Compliance", "Quality Systems", "Ethical Sourcing", "Environmental"].map(
            (item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-sm text-center shadow-soft border border-border"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-gold font-serif text-2xl font-bold">
                    {item.charAt(0)}
                  </span>
                </div>
                <p className="font-medium text-foreground">{item}</p>
              </motion.div>
            )
          )}
        </div>
      </Section>

      {/* CTA */}
      <CtaSection
        title="Visit Our Facility"
        description="Schedule a factory visit to see our manufacturing capabilities firsthand."
        buttonText="Schedule a Visit"
        buttonLink="/contact"
        variant="gold"
      />
    </Layout>
  );
};

export default Production;
