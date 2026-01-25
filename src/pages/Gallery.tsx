import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { motion } from "framer-motion";
import { useState } from "react";

import heroFactory from "@/assets/hero-factory.jpg";
import facilityOverview from "@/assets/facility-overview.jpg";
import machinery from "@/assets/machinery.jpg";
import cuttingRoom from "@/assets/cutting-room.jpg";
import stitchingDetail from "@/assets/stitching-detail.jpg";
import samplingStudio from "@/assets/sampling-studio.jpg";
import bulkProduction from "@/assets/bulk-production.jpg";
import qualityControl from "@/assets/quality-control.jpg";
import teamPhoto from "@/assets/team-photo.jpg";
import expoHero from "@/assets/expo-hero.jpg";

type GalleryTab = "factory" | "production" | "garments" | "expo";

const galleryImages = {
  factory: [
    { src: facilityOverview, caption: "Main Production Floor" },
    { src: machinery, caption: "Industrial Machinery" },
    { src: heroFactory, caption: "Stitching Units" },
    { src: teamPhoto, caption: "Our Team" },
  ],
  production: [
    { src: cuttingRoom, caption: "Cutting Department" },
    { src: stitchingDetail, caption: "Precision Stitching" },
    { src: samplingStudio, caption: "Sampling Studio" },
    { src: qualityControl, caption: "Quality Inspection" },
  ],
  garments: [
    { src: samplingStudio, caption: "Sample Collection" },
    { src: bulkProduction, caption: "Finished Garments" },
    { src: cuttingRoom, caption: "Fabric Preparation" },
    { src: stitchingDetail, caption: "Detail Work" },
  ],
  expo: [
    { src: expoHero, caption: "International Textile Expo" },
    { src: teamPhoto, caption: "Expo Team" },
    { src: facilityOverview, caption: "Trade Show Display" },
    { src: machinery, caption: "Product Showcase" },
  ],
};

const tabs: { id: GalleryTab; label: string }[] = [
  { id: "factory", label: "Factory & Units" },
  { id: "production", label: "Production Process" },
  { id: "garments", label: "Finished Garments" },
  { id: "expo", label: "Expo & Events" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>("factory");

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Gallery"
        subtitle="Visual Story"
        description="A visual journey through our manufacturing excellence, facilities, and global presence."
        backgroundImage={bulkProduction}
        height="medium"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? "bg-gradient-gold text-primary-foreground shadow-gold"
                    : "bg-secondary text-foreground hover:bg-muted"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {galleryImages[activeTab].map((image, index) => (
              <motion.div
                key={image.caption}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                  {/* Image: Visible by default, fades out on hover */}
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
                  />

                  {/* Text Overlay: Hidden by default, reveals on hover */}
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gold/90 scale-95 group-hover:scale-100">
                    <div className="space-y-4">
                      <div className="w-12 h-0.5 bg-charcoal/30 mx-auto" />
                      <p className="font-serif text-xl md:text-2xl font-bold text-charcoal leading-tight">
                        {image.caption}
                      </p>
                      <div className="w-12 h-0.5 bg-charcoal/30 mx-auto" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
