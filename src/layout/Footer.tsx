'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-base-green-dark)] ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-[var(--color-text-on-dark)]">
          {/* Brand Column */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">WiseWaste</h3>
            <p className="text-sm opacity-90">
              Cultivating cleaner communities through smart waste solutions
            </p>
            <div className="flex space-x-4">
              {['🌿', '♻️', '🌎'].map((icon, i) => (
                <motion.span
                  key={i}
                  className="text-xl"
                  whileHover={{ scale: 1.2 }}
                >
                  {icon}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['About', 'Services', 'Blog', 'Contact'].map((link) => (
                <Link
                  href={`/${link.toLowerCase()}`}
                  key={link}
                  className="hover:text-[var(--color-base-sage-light)] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>123 Green Way</p>
              <p>Eco City, EC 12345</p>
              <p>hello@wisewaste.com</p>
              <p>(555) 123-4567</p>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h4 className="font-semibold text-lg">Eco Updates</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[var(--color-base-sage-light)] rounded-lg px-4 py-2 text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none"
              />
              <motion.button
                className="bg-[var(--color-button-primary-bg)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-bg-button-hover)] transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[var(--color-base-green-medium)] mt-12 pt-6 text-center text-sm text-[var(--color-text-on-dark)] opacity-80">
          <p>© {new Date().getFullYear()} WiseWaste. Cultivating greener communities</p>
          <div className="mt-2">
            <Link href="/privacy" className="hover:text-[var(--color-base-sage-light)] transition-colors">
              Privacy Policy
            </Link>
            <span className="mx-2">•</span>
            <Link href="/terms" className="hover:text-[var(--color-base-sage-light)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};