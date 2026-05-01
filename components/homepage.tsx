"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { MarqueeStrip } from "@/components/marquee-strip";
import { SectionLabel } from "@/components/section-label";

type Capability = {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  alt: string;
};

type CaseStudy = {
  name: string;
  image: string;
  alt: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  blurb: string;
};

const capabilities: Capability[] = [
  {
    id: "01",
    title: "Brand & Identity",
    description:
      "Names, marks, packaging, and story that feel as grounded as your operation. Built to travel from freezer box to Instagram without losing the plot.",
    link: "See how it worked",
    image:
      "https://images.unsplash.com/photo-1525665452237-7a8e4a7f2a91?auto=format&fit=crop&w=1400&q=80",
    alt: "Farmer hands with leather and rope",
  },
  {
    id: "02",
    title: "DTC Storefront",
    description:
      "Shopify architecture made for cold-chain shipping, subscription rhythm, and farm pickup reality. Cart logic that respects both margin and muscle.",
    link: "See how it worked",
    image:
      "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1400&q=80",
    alt: "Butcher counter and wrapped cuts",
  },
  {
    id: "03",
    title: "Acquisition",
    description:
      "Paid social, email, SMS, and content systems tuned for premium AOV. We pull in buyers who care about origin and stick around for quality.",
    link: "See how it worked",
    image:
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=1400&q=80",
    alt: "Sunrise over pasture land",
  },
  {
    id: "04",
    title: "Photography & Film",
    description:
      "We come to the farm and capture what is actually true. Hands, process, land, and people documented with the gravity your work deserves.",
    link: "See how it worked",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1400&q=80",
    alt: "Rancher in shadow in barn doorway",
  },
  {
    id: "05",
    title: "Retention & Community",
    description:
      "Post-purchase flows, member offers, and referral mechanics that turn first orders into household habits and word-of-mouth into a channel.",
    link: "See how it worked",
    image:
      "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1400&q=80",
    alt: "Branding iron and workshop table",
  },
];

const caseStudies: CaseStudy[] = [
  {
    name: "Granite Ridge Beef Co.",
    image:
      "https://images.unsplash.com/photo-1525110182742-8ddc0ff5ec8c?auto=format&fit=crop&w=2000&q=80",
    alt: "Black and white cattle on open range",
    stats: [
      { value: "3.2×", label: "revenue" },
      { value: "41%", label: "subscription rate" },
      { value: "18", label: "month build" },
    ],
    blurb:
      "From local freezer trade to a national recurring revenue machine with a voice as serious as the ranch itself.",
  },
  {
    name: "Iron Creek Pastures",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80",
    alt: "Rancher profile at golden hour",
    stats: [
      { value: "2.6×", label: "AOV" },
      { value: "67%", label: "repeat customer rate" },
      { value: "12", label: "state shipping" },
    ],
    blurb:
      "Reframed product value, rebuilt the storefront, and turned educational storytelling into measurable conversion lift.",
  },
  {
    name: "South Fork Heritage Meats",
    image:
      "https://images.unsplash.com/photo-1420574443842-c1443c01a157?auto=format&fit=crop&w=2000&q=80",
    alt: "Butcher apron and workspace",
    stats: [
      { value: "$7.8M", label: "online sales" },
      { value: "29%", label: "email-attributed" },
      { value: "0", label: "feedlot claims" },
    ],
    blurb:
      "A full-funnel retention and community strategy that made monthly fulfillment predictable without discounting quality.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Field Notes",
    text: "We walk the operation, ask blunt questions, and map your margins before anyone talks about colors or campaigns.",
  },
  {
    number: "02",
    title: "Brand Ledger",
    text: "We define your market position with receipts: quality claims, production truth, and the story only your land can support.",
  },
  {
    number: "03",
    title: "Store Build",
    text: "We wire the storefront for subscriptions, shipping zones, farm pickup, and operations that do not break under growth.",
  },
  {
    number: "04",
    title: "Campaign Season",
    text: "We run acquisition and retention in parallel: paid, email, SMS, and content calibrated to buying windows and inventory.",
  },
  {
    number: "05",
    title: "Yield Review",
    text: "Monthly scorecards. Zero fluff. Keep what compounds. Cut what does not. Grow like an operator, not an influencer.",
  },
];

const team = [
  {
    name: "Elena Cross",
    role: "Strategy Director",
    quote: "If your story is true, it should survive a spreadsheet.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Reid Holloway",
    role: "Creative Lead",
    quote: "We do not style farms. We frame institutions.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Nora Bell",
    role: "Email & Lifecycle",
    quote: "Retention is respect, written one message at a time.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Cal Finch",
    role: "Film Director",
    quote: "A good frame can smell like the barn if you shoot it right.",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=900&q=80",
  },
];

export function Homepage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-parallax-image]").forEach((image) => {
        gsap.fromTo(
          image,
          { yPercent: -6 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-case-study]").forEach((block) => {
        const overlay = block.querySelector<HTMLElement>("[data-case-overlay]");
        if (!overlay) return;

        gsap.fromTo(
          overlay,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
              trigger: block,
              start: "top 75%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-marquee-track]").forEach((track) => {
        const speed = Number(track.dataset.speed ?? "42");
        gsap.to(track, {
          xPercent: -50,
          duration: speed,
          ease: "none",
          repeat: -1,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="site-shell"
      id="top"
    >
      <Hero />
      <MarqueeStrip
        items={[
          "DTC IS A CRAFT",
          "EVERY FARM IS A BRAND",
          "WE DO NOT DO LOGOS. WE DO LEGACIES.",
          "OPERATIONS FIRST, AESTHETICS SECOND",
          "BETTER STORY. BETTER MARGINS.",
        ]}
      />

      <section className="section-shell" id="what-we-do">
        <SectionLabel index="01" title="What We Do" />
        <div className="page-grid">
          <h2 className="display-font feature-title" style={{ gridColumn: "2 / span 8", marginBottom: "0.8rem" }}>
            Work that moves product and protects provenance.
          </h2>
          <p className="feature-body" style={{ gridColumn: "2 / span 7", marginBottom: "1rem" }}>
            Call it capability if you need a label. We call it the exact set of levers that
            make direct sales grow without sanding down what makes your farm rare.
          </p>
        </div>
        <div className="page-grid">
          {capabilities.map((item, index) => (
            <article
              className={`feature-row ${index % 2 === 1 ? "is-reverse" : ""}`}
              key={item.id}
            >
              <div className="feature-copy">
                <p className="feature-number accent-font">№ {item.id}</p>
                <h3 className="display-font feature-title">{item.title}</h3>
                <p className="feature-body">{item.description}</p>
                <a className="feature-link accent-font" href="#case-studies" data-cursor-hit="true">
                  {item.link}
                </a>
              </div>
              <div className="feature-image-shell">
                <img className="hero-image" src={item.image} alt={item.alt} data-parallax-image />
                <div className="image-noise" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="case-studies">
        <SectionLabel index="02" title="Proof" />
        <div className="page-grid">
          <h2 className="display-font feature-title" style={{ gridColumn: "2 / span 8" }}>
            Receipts, not reassurance.
          </h2>
        </div>

        <div className="page-grid">
          {caseStudies.map((item) => (
            <article className="case-shell" data-case-study key={item.name}>
              <div className="case-image-wrap">
                <img src={item.image} alt={item.alt} data-parallax-image />
                <div className="image-noise" aria-hidden="true" />
                <div className="case-overlay" data-case-overlay>
                  <p className="case-label accent-font">{item.name}</p>
                  <p className="case-title display-font">{item.blurb}</p>
                </div>
              </div>
              <div className="case-stat-grid">
                {item.stats.map((stat) => {
                  return (
                    <div className="case-stat" key={`${item.name}-${stat.value}`}>
                      <p className="case-stat-value display-font">{stat.value}</p>
                      <p className="case-stat-copy accent-font">{stat.label}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="page-grid">
          <a className="text-link accent-font" style={{ gridColumn: "2 / span 4" }} href="#footer" data-cursor-hit="true">
            View full case study index
          </a>
        </div>
      </section>

      <section className="dark-band" aria-label="Agency outcomes">
        <MarqueeStrip
          className="stats-ticker"
          speedSeconds={52}
          items={[
            "$47M revenue generated for client farms",
            "1.2M lbs shipped",
            "14 farms",
            "6 states",
            "0 feedlots",
            "92% retention on subscription cohorts",
          ]}
        />
      </section>

      <section className="section-shell">
        <SectionLabel index="03" title="Almanac" />
        <div className="page-grid">
          <div className="almanac-shell">
            <h2 className="display-font feature-title" style={{ marginBottom: "1.2rem" }}>
              A process with opinions.
            </h2>
            <div className="almanac-grid">
          {processSteps.map((step) => (
                <article key={step.number} className="almanac-step">
                  <p className="almanac-index accent-font">{step.number}</p>
                  <h3 className="almanac-title display-font">{step.title}</h3>
                  <p className="almanac-copy">{step.text}</p>
                </article>
          ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="team">
        <SectionLabel index="04" title="Team" />
        <div className="page-grid">
          <div className="team-shell">
            <h2 className="display-font feature-title" style={{ gridColumn: "1 / -1", marginBottom: "1rem" }}>
              People you can put on the ground.
            </h2>
            <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
                  <img src={member.image} alt={member.name} />
                  <div className="image-noise" aria-hidden="true" />
              <div className="team-meta">
                    <p className="team-name display-font">{member.name}</p>
                    <p className="team-role accent-font">{member.role}</p>
              </div>
                  <p className="team-quote display-font">
                    <em>{member.quote}</em>
                  </p>
            </article>
          ))}
            </div>
          </div>
        </div>
      </section>

      <section className="closing-shell section-shell">
        <SectionLabel index="05" title="Manifesto" tone="light" />
        <div className="page-grid">
          <div className="closing-manifesto">
          <motion.h2
              className="closing-title display-font"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
          >
              Good meat deserves serious storytelling.
          </motion.h2>
            <p className="closing-copy">
            We believe land stewardship should command premium margins. We believe farmers should
            own their audience instead of renting attention. We believe origin stories only matter
            when operations can back them. We believe brand and logistics are one conversation, not
            two departments. We believe ethical claims must survive scrutiny. We believe the best
            customer is educated, not manipulated. We believe direct-to-consumer is a craft that
            compounds over seasons. We believe your farm can look and perform like a cultural
            institution. We build for that standard.
          </p>
            <a className="btn-primary accent-font" href="#contact" data-cursor-hit="true">
            Start the conversation
          </a>
          </div>
        </div>
      </section>

      <footer className="footer-shell" id="footer">
        <div className="page-grid">
          <div className="footer-grid">
            <section>
              <p className="wordmark display-font">[AGENCY NAME]</p>
              <p className="masthead-label accent-font">Office</p>
              <p className="masthead-copy">
                128 Stockyard Row, Nashville, TN 37206
              </p>
              <p className="masthead-label accent-font">Land we admire</p>
              <p className="masthead-copy">
                White Oak Pastures (GA), Polyface Farm (VA), Rome Ranch (TX)
              </p>
            </section>
            <section>
              <p className="masthead-label accent-font">Navigate</p>
              <ul className="footer-links">
                <li>
                  <a href="#what-we-do" data-cursor-hit="true">What We Do</a>
                </li>
                <li>
                  <a href="#case-studies" data-cursor-hit="true">Case Studies</a>
                </li>
                <li>
                  <a href="#team" data-cursor-hit="true">Team</a>
                </li>
              </ul>
            </section>
            <section id="contact">
              <p className="masthead-label accent-font">The Almanac - monthly</p>
              <p className="masthead-copy">
                One issue. Real numbers. Hard lessons. One move to run this month.
              </p>
              <form className="newsletter-form">
                <label htmlFor="newsletter-email" className="masthead-label accent-font">
                  Email
                </label>
                <input id="newsletter-email" name="email" type="email" placeholder="you@farm.com" />
                <button type="submit" className="accent-font" data-cursor-hit="true">
                  Subscribe
                </button>
              </form>
            </section>
          </div>
        </div>
      </footer>
    </main>
  );
}
