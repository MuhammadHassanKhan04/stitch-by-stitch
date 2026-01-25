import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { motion } from "framer-motion";

import teamPhoto from "@/assets/team-photo.jpg";
import facilityOverview from "@/assets/facility-overview.jpg";

const contactInfo = [
  {
    title: "Phone",
    details: ["+92 300 000 0000", "+92 21 000 0000"],
  },
  {
    title: "Email",
    details: ["info@stitchbystitch.pk", "export@stitchbystitch.pk"],
  },
  {
    title: "Location",
    details: ["Industrial Zone, SITE Area", "Karachi, Pakistan"],
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get In Touch"
        description="Ready to start your manufacturing journey? Reach out to us for inquiries, quotes, or factory visits."
        backgroundImage={teamPhoto}
        height="medium"
      />

      {/* Contact Info */}
      <Section
        title="Contact Information"
        subtitle="Reach Us"
        description="Multiple ways to connect with our team."
        background="default"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-sm text-center shadow-soft border border-border"
            >
              <h3 className="font-serif text-xl font-semibold text-gold mb-4">
                {item.title}
              </h3>
              {item.details.map((detail) => (
                <p key={detail} className="text-muted-foreground">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section
        title="Send Us an Inquiry"
        subtitle="Manufacturing Inquiry"
        description="Fill out the form below and our team will get back to you within 24 hours."
        background="secondary"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 md:p-12 rounded-sm shadow-elevated"
          >
            <InquiryForm />
          </motion.div>
        </div>
      </Section>

      {/* Location Image */}
      <Section
        title="Our Facility"
        subtitle="Visit Us"
        description="Schedule a factory visit to see our manufacturing capabilities in person."
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
              src={facilityOverview}
              alt="Our Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-xl">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Industrial Zone, Karachi
            </h3>
            <p className="text-primary-foreground/80 text-lg">
              Factory visits available by appointment. Contact us to schedule.
            </p>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default Contact;
