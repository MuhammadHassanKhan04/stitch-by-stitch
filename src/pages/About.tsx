import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { ImageCard, ImageCardGrid } from "@/components/ui/image-card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import facilityOverview from "@/assets/facility-overview.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import machinery from "@/assets/machinery.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import expoHero from "@/assets/expo-hero.jpg";

const philosophy = [
  {
    image: qualityControl,
    title: "Quality First",
    description: "Every garment passes through rigorous quality checks",
  },
  {
    image: machinery,
    title: "Modern Technology",
    description: "Investment in latest manufacturing equipment",
  },
];

const About = () => {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Who We Are"
        subtitle="About Us"
        description="A leading garment manufacturing company dedicated to excellence, quality, and building lasting partnerships with global fashion brands."
        backgroundImage={facilityOverview}
        height="large"
      />

      {/* Company Overview */}
      <Section
        title="Company Overview"
        subtitle="Our Story"
        description="Stitch by Stitch is a premier CMT manufacturing company based in Pakistan, serving international fashion brands with dedication and excellence."
        background="default"
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
                src={facilityOverview}
                alt="Our Facility"
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
              With decades of experience in garment manufacturing, we have established 
              ourselves as a trusted partner for fashion brands worldwide. Our commitment 
              to quality, precision, and timely delivery has earned us the trust of 
              leading international labels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our state-of-the-art facility spans over 50,000 square feet, equipped 
              with 200+ industrial sewing machines and a workforce of 500+ skilled 
              professionals. We specialize in woven and knit garments, catering to 
              both fast fashion and premium segments.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-gold">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Skilled Workers</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-gold">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Machines</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-4xl font-bold text-gold">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Manufacturing Philosophy */}
      <Section
        title="Manufacturing Philosophy"
        subtitle="Our Approach"
        description="We believe in combining traditional craftsmanship with modern technology to deliver garments that exceed expectations."
        background="secondary"
      >
        <ImageCardGrid columns={2}>
          {philosophy.map((item) => (
            <ImageCard
              key={item.title}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </ImageCardGrid>
      </Section>

      {/* Our Team */}
      <Section
        title="Skilled Workforce"
        subtitle="Our Team"
        description="Our strength lies in our dedicated team of tailors, supervisors, and quality control experts."
        background="default"
      >
        <div ref={teamRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-sm"
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src={teamPhoto}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                500+ Dedicated Professionals
              </h3>
              <p className="text-primary-foreground/80 text-lg max-w-2xl">
                From skilled tailors to experienced supervisors, our team is the backbone of our manufacturing excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* International Exposure */}
      <Section
        title="International Exposure"
        subtitle="Global Reach"
        description="We actively participate in international fashion expos, connecting with brands from around the world."
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
              src={expoHero}
              alt="International Expo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Expo Presence
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {["Sri Lanka", "Dubai", "Baku", "Azerbaijan"].map((location) => (
                  <span
                    key={location}
                    className="px-6 py-3 bg-gold text-primary-foreground font-medium rounded-sm"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default About;
