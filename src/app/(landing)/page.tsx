/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
      },
    );

    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top center",
        },
      },
    );

    const statElements = statsRef.current?.querySelectorAll(".stat-number");
    if (statElements) {
      gsap.to(statElements, {
        innerText: (i: any) => statElements[i].getAttribute("data-value"),
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top center",
        },
      });

      gsap.fromTo(
        statElements,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top center",
          },
        },
      );
    }
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-green-medium to-base-green-dark"
      >
        <motion.div
          className="text-center space-y-8 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-text-on-dark">
            Smart Waste Management
            <br />
            <span className="text-base-sage-light">For Modern Communities</span>
          </h1>
          <motion.p
            className="text-xl md:text-2xl text-text-on-dark max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            Revolutionizing neighborhood recycling through AI-powered solutions
            and community engagement
          </motion.p>
          <motion.button
            className="bg-button-primary-bg text-button-primary-text px-8 py-4 rounded-full text-lg font-semibold hover:bg-bg-button-hover transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Smart Community
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-text-primary text-center mb-16">
            Our Smart Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="feature-card bg-bg-secondary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -10 }}
              >
                <div className="h-12 w-12 bg-base-green-medium rounded-lg mb-4" />
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  AI-Powered Sorting
                </h3>
                <p className="text-text-secondary">
                  Advanced machine learning algorithms to optimize waste
                  categorization and recycling processes
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
