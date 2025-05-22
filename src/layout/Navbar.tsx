"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../public/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.nav className="fixed top-0 left-0 z-50 bg-bg-secondary shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex-shrink-0"
          >
            <Link href="/" className="text-3xl font-semibold text-text-primary">
              <Image
                src={logo}
                alt="WiseWaste Logo"
                width={37}
                height={37}
                priority
                className="inline-block mr-2"
              />
              WiseWaste
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {/* Auth Buttons */}
              <div className="ml-auto flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/login"
                    className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${pathname === "/login"
                      ? "bg-bg-success text-text-success"
                      : "bg-button-secondary-bg text-button-secondary-text hover:bg-bg-button-hover hover:text-white"
                      }`}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/register"
                    className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${pathname === "/register"
                      ? "bg-bg-success text-text-success"
                      : "bg-button-primary-bg text-button-primary-text hover:bg-bg-button-hover hover:text-white"
                      }`}
                  >
                    Register
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-text-primary hover:bg-bg-button-hover hover:text-white"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* Mobile Auth Links */}
                <motion.div
                  key="login"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  exit={{ x: -20 }}
                >
                  <Link
                    href="/login"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === "/login"
                      ? "bg-bg-success text-text-success"
                      : "text-text-secondary hover:bg-bg-button-hover hover:text-white"
                      }`}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div
                  key="register"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  exit={{ x: -20 }}
                >
                  <Link
                    href="/register"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === "/register"
                      ? "bg-[var(--color-bg-success)] text-[var(--color-text-success)]"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-button-hover)] hover:text-white"
                      }`}
                  >
                    Register
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
