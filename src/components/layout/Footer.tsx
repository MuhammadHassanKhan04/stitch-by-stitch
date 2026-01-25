import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "CMT Services", path: "/services" },
  { name: "Production", path: "/production" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Cutting Services",
  "Stitching Lines",
  "Sampling",
  "Bulk Production",
  "Quality Control",
  "Export Packaging",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Main Footer */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Stitch by Stitch"
                className="h-16 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-ivory-dark/80 text-sm leading-relaxed">
              Your trusted CMT manufacturing partner from Pakistan. Delivering quality
              garments to global fashion brands since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ivory-dark/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-ivory-dark/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-gold">
              Contact Us
            </h4>
            <div className="space-y-4 text-sm text-ivory-dark/80">
              <div>
                <p className="font-medium text-ivory mb-1">Address</p>
                <p>Industrial Zone, Karachi</p>
                <p>Pakistan</p>
              </div>
              <div>
                <p className="font-medium text-ivory mb-1">Phone</p>
                <p>+92 300 000 0000</p>
              </div>
              <div>
                <p className="font-medium text-ivory mb-1">Email</p>
                <p>info@stitchbystitch.pk</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light/30">
        <div className="container-wide py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory-dark/60 text-sm">
            © {new Date().getFullYear()} Stitch by Stitch. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-ivory-dark/60 text-sm">
              Premium CMT Manufacturing Partner
            </span>
            <span className="text-gold">•</span>
            <span className="text-ivory-dark/60 text-sm">Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
