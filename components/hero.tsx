"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/section-label";

export function Hero() {
  return (
    <section className="section-shell hero-shell" id="top">
      <SectionLabel index="00" title="Manifesto Opening" />
      <div className="page-grid">
        <motion.h1
          className="hero-headline display-font"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          Madison Avenue. For meat that means it.
        </motion.h1>
        <motion.p
          className="hero-subline"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
        >
          [AGENCY NAME] builds identity, DTC storefronts, acquisition, retention, and field-shot
          content for farms selling direct with standards.
        </motion.p>
        <motion.div
          className="hero-cta-row accent-font"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" }}
        >
          <Link href="#contact" className="btn-primary" data-cursor-hit="true">
            Start the conversation
          </Link>
          <Link href="#case-studies" className="text-link" data-cursor-hit="true">
            See the work
          </Link>
        </motion.div>
        <motion.div
          className="hero-image-shell"
          initial={{ clipPath: "inset(16% 0% 0% 0)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0)" }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
        >
          <Image
            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=1800&q=80"
            alt="Ranch landscape with early morning pasture haze"
            fill
            priority
            sizes="(max-width: 1040px) 100vw, 40vw"
            className="hero-image"
            data-parallax-image
          />
          <div className="image-noise" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
