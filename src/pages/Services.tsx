import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { CtaSection } from "@/components/sections/CtaSection";
import { motion } from "framer-motion";

import stitchingDetail from "@/assets/stitching-detail.jpg";
import cuttingRoom from "@/assets/cutting-room.jpg";
import samplingStudio from "@/assets/sampling-studio.jpg";
import bulkProduction from "@/assets/bulk-production.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import ctaBg from "@/assets/cta-bg.jpg";

const workflowSteps = [
  { step: "01", title: "Inquiry", description: "Share your requirements and specifications" },
  { step: "02", title: "Sampling", description: "We develop samples based on your design" },
  { step: "03", title: "Approval", description: "Review and approve the samples" },
  { step: "04", title: "Production", description: "Bulk manufacturing begins" },
  { step: "05", title: "QC", description: "Rigorous quality control checks" },
  { step: "06", title: "Delivery", description: "On-time shipment to your destination" },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Our CMT Manufacturing Services"
        subtitle="Services"
        description="Complete Cut, Make, and Trim solutions tailored to meet the demands of global fashion brands."
        backgroundImage={stitchingDetail}
        height="large"
      />

      {/* Cutting Section */}
      <Section
        title="Cutting Services"
        subtitle="Precision Cutting"
        description="Our cutting department uses advanced equipment to ensure accurate fabric cutting with minimal wastage."
        background="default"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our cutting room is equipped with state-of-the-art CAD systems and
              automated cutting machines. We handle all types of fabrics including
              woven, knit, denim, and specialty materials.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Computerized pattern making and grading</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Automated spreading and cutting systems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Optimized marker planning for fabric efficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Bundle preparation and tracking</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src={cuttingRoom}
                alt="Cutting Room"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Stitching Section */}
      <Section
        title="Stitching Lines"
        subtitle="Expert Stitching"
        description="Multiple production lines with skilled operators ensuring consistent quality across all garments."
        background="secondary"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src={stitchingDetail}
                alt="Stitching Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our stitching units are the heart of our manufacturing operations.
              With 200+ industrial sewing machines and experienced operators, we
              deliver precision stitching for all garment types.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Single needle, double needle, and overlock machines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Specialized machines for buttonholes and bartacking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>In-line quality checkpoints</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                <span>Modular production layout for efficiency</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Sampling & Bulk Production */}
      <Section
        title="Sampling & Bulk Production"
        subtitle="From Concept to Container"
        description="We handle everything from initial samples to full-scale production runs."
        background="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card rounded-sm overflow-hidden shadow-soft"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={samplingStudio}
                alt="Sampling Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Sampling Department
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our dedicated sampling team develops proto samples, fit samples,
                and pre-production samples with quick turnaround times. We work
                closely with your design team to ensure perfect execution.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-sm overflow-hidden shadow-soft"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={bulkProduction}
                alt="Bulk Production"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Bulk Production
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With capacity to handle orders from 500 to 50,000+ pieces, our
                production planning ensures on-time delivery without compromising
                quality. We support both seasonal and continuous production models.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Production Workflow */}
      <Section
        title="Production Workflow"
        subtitle="Our Process"
        description="A streamlined process from inquiry to delivery, ensuring transparency and efficiency at every step."
        background="secondary"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="h-full bg-card border border-border/50 hover:border-gold/50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                {/* Step Number Watermark */}
                <div className="absolute -right-4 -top-6 text-[120px] font-serif font-bold text-foreground/5 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-300 select-none">
                  {step.step}
                </div>

                {/* Connector Line (Desktop) */}
                {index < workflowSteps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-gold/50 to-transparent z-10" />
                )}

                {/* Content */}
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-wider rounded-sm mb-4">
                    STEP {step.step}
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Quality Control Visual */}
      <Section
        title="Quality Assurance"
        subtitle="Our Commitment"
        description="Every garment passes through multiple quality checkpoints before shipment."
        background="default"
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
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Rigorous Quality Standards
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              AQL-based inspection, inline checks, and final audit ensure every
              piece meets international quality standards.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <CtaSection
        title="Ready to Start Your Production?"
        description="Get in touch with our team to discuss your manufacturing requirements."
        buttonText="Request a Quote"
        buttonLink="/contact"
        variant="gold"
        backgroundImage={ctaBg}
      />
    </Layout>
  );
};

export default Services;
