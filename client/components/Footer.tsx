import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    {
      title: "Shop",
      links: ["Home", "Products", "Categories", "New Arrivals"],
    },
    {
      title: "Support",
      links: ["Contact Us", "FAQ", "Shipping Info", "Returns"],
    },
    {
      title: "Company",
      links: ["About Us", "Blog", "Careers", "Press"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookies", "Accessibility"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Instagram, label: "Instagram" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-12"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="font-semibold text-gray-900">TechHub</span>
          </div>

          {/* Center - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
            <a
              href="mailto:support@techhub.com"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-4 h-4" />
              support@techhub.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-gray-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +1 (234) 567-890
            </a>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-8 pt-8 border-t border-gray-200"
        >
          &copy; 2024 TechHub. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
