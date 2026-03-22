'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="WebsiteFooter"
      className={`relative py-12 md:py-14 px-4 ${mainConfig.containerClass} text-[14px]`}
    >
      <ScrollToTopButton />
      <div className="octa-card relative overflow-hidden rounded-[2rem] px-6 py-12 md:px-12 md:py-14">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(96,165,250,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -top-20 right-0 h-44 w-44 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
        {/* Top Section with Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Logo and Social Media */}
          <div className="flex flex-col space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/logo.avif"
                  alt="OctaSence logo"
                  width={72}
                  height={72}
                  className="h-[4.5rem] w-[4.5rem] rounded-2xl object-contain"
                />
              </div>
              <h1 className="text-white/72 font-semibold mt-5 max-w-md leading-relaxed">
                AI-Powered Infrastructure Intelligence
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:gap-5 mt-2">
              <Link
                href="https://www.linkedin.com/company/octasence"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 bg-white/5 border border-white/15 rounded-full p-3.5 hover:bg-blue-500/15 hover:border-blue-400/35 hover:text-white transition-all shadow-sm"
              >
                <FaLinkedinIn size={22} className="drop-shadow-sm" />
              </Link>
              <Link
                href="https://www.youtube.com/@octasence"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 bg-white/5 border border-white/15 rounded-full p-3.5 hover:bg-blue-500/15 hover:border-blue-400/35 hover:text-white transition-all shadow-sm"
              >
                <FaYoutube size={22} className="drop-shadow-sm" />
              </Link>
              <Link
                href="https://x.com/octasence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-sky-300 bg-white/5 border border-white/15 rounded-full p-3.5 hover:bg-blue-500/15 hover:border-blue-400/35 hover:text-white transition-all shadow-sm"
              >
                <FaXTwitter size={22} className="drop-shadow-sm" />
              </Link>
              <Link
                href="https://www.instagram.com/octasence"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-sky-300 bg-white/5 border border-white/15 rounded-full p-3.5 hover:bg-blue-500/15 hover:border-blue-400/35 hover:text-white transition-all shadow-sm"
              >
                <FaInstagram size={22} className="drop-shadow-sm" />
              </Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-bold text-white text-xl mb-6">Platform</h3>
            <ul className="space-y-4 text-base">
              <li><Link href="/products" className="text-white/85 font-medium hover:text-white transition-colors">Smart Sensors</Link></li>
              <li><Link href="/products" className="text-white/85 font-medium hover:text-white transition-colors">AI Platform</Link></li>
              <li><Link href="/products" className="text-white/85 font-medium hover:text-white transition-colors">Data APIs</Link></li>
              <li><Link href="/products" className="text-white/85 font-medium hover:text-white transition-colors">Digital Twin</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-white text-xl mb-6">Solutions</h3>
            <ul className="space-y-4 text-base">
              <li><Link href="/solutions" className="text-white/85 font-medium hover:text-white transition-colors">Infrastructure Intelligence</Link></li>
              <li><Link href="/solutions" className="text-white/85 font-medium hover:text-white transition-colors">Mining</Link></li>
              <li><Link href="/solutions" className="text-white/85 font-medium hover:text-white transition-colors">Tunnels & Bridges</Link></li>
              <li><Link href="/solutions" className="text-white/85 font-medium hover:text-white transition-colors">Dams & Reservoirs</Link></li>
              <li><Link href="/solutions" className="text-white/85 font-medium hover:text-white transition-colors">Industrial IoT</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold text-white text-xl mb-6">About</h3>
            <ul className="space-y-4 text-base">
              <li><Link href="/about-us" className="text-white/85 font-medium hover:text-white transition-colors">About OctaSence</Link></li>
              <li><Link href="/careers" className="text-white/85 font-medium hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-white/85 font-medium hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/press" className="text-white/85 font-medium hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 border-t border-white/10 my-10"></div>

        {/* Bottom Section */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 text-[14px] md:text-[15px]">

          <div className="flex flex-wrap gap-5 text-white/60">
            &copy; {currentYear} OctaSence. All rights reserved.
            <Link href="/legal/terms-of-service" className="hover:text-white transition">Terms</Link>
            <Link href="/legal/privacy-policy" className="hover:text-white transition">Privacy</Link>
          </div>

          <div className="text-white/40 text-xs md:text-sm tracking-[0.25em] uppercase">
            AI-Powered Infrastructure Intelligence
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;