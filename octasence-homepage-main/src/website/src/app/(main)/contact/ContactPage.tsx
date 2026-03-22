'use client';
import { motion, Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FiDatabase, FiMessageCircle, FiStar, FiTablet } from 'react-icons/fi';

const IndiaFlag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="24" height="16" style={{ borderRadius: 2, flexShrink: 0 }}>
    <rect width="900" height="200" y="0" fill="#FF9933" />
    <rect width="900" height="200" y="200" fill="#FFFFFF" />
    <rect width="900" height="200" y="400" fill="#138808" />
    <circle cx="450" cy="300" r="60" fill="none" stroke="#000080" strokeWidth="4" />
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 360) / 24;
      const rad = (angle * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={450 + 20 * Math.cos(rad)}
          y1={300 + 20 * Math.sin(rad)}
          x2={450 + 58 * Math.cos(rad)}
          y2={300 + 58 * Math.sin(rad)}
          stroke="#000080"
          strokeWidth="3"
        />
      );
    })}
    <circle cx="450" cy="300" r="10" fill="#000080" />
  </svg>
);

const EstoniaFlag: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="24" height="16" style={{ borderRadius: 2, flexShrink: 0 }}>
    <rect width="900" height="200" y="0" fill="#0072CE" />
    <rect width="900" height="200" y="200" fill="#000000" />
    <rect width="900" height="200" y="400" fill="#FFFFFF" />
  </svg>
);

const ContactPage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = (detail: string) => {
    router.push(
      `/contact/form?category=${detail.toLowerCase().replace(/ /g, '-')}`,
    );
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const cards = [
    { icon: <FiTablet size={20} />, question: 'I have a question about', detail: 'SHM Sensors', accent: '#2563EB' },
    { icon: <FiDatabase size={20} />, question: 'I have a question about', detail: 'SHM Data & Analytics', accent: '#0EA5E9' },
    { icon: <FiStar size={20} />, question: 'I have some', detail: 'feedback', accent: '#6366F1' },
    { icon: <FiMessageCircle size={20} />, question: 'I have a', detail: 'general inquiry', accent: '#0000FF' },
  ];

  return (
    <div
      className="flex w-full flex-col lg:flex-row"
      style={{ height: 'calc(100vh - 132px)', fontFamily: "'Outfit', sans-serif" }}
    >
      {/* ── LEFT: Video Panel ── */}
      <section className="flex-1 relative flex items-center justify-center p-8 overflow-hidden min-h-[300px] lg:min-h-0">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/career_bg.mp4"
        />
        <div className="absolute inset-0 bg-[#07070f]/80" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full blur-[100px] opacity-20 bg-blue-600 pointer-events-none" />

        <motion.div
          className="relative z-10 max-w-sm w-full text-white"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-blue-400 text-xs px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Contact Us
          </div>

          <h2 className="text-3xl font-bold mb-6 tracking-tight leading-tight">Get in touch</h2>

          <div className="mb-4 p-4 rounded-xl border border-white/[0.12] bg-white/[0.06]">
            <p className="text-sm font-bold mb-1.5 flex items-center gap-2 text-white">
              <IndiaFlag />
              India Office
            </p>
            <p className="text-white/80 text-sm font-medium leading-relaxed">
              No 589, 14th Main Road,<br />
              Kumaraswamy Layout,<br />
              Bengaluru 560078.
            </p>
          </div>

          <div className="mb-5 p-4 rounded-xl border border-white/[0.12] bg-white/[0.06]">
            <p className="text-sm font-bold mb-1.5 flex items-center gap-2 text-white">
              <EstoniaFlag />
              Estonia Office
            </p>
            <p className="text-white/80 text-sm font-medium leading-relaxed">
              Ahtri 12, Tallinn 15551,<br />
              Estonia.
            </p>
          </div>

          <p className="text-white/80 text-sm font-medium">
            E:{' '}
            <a
              href="mailto:admin@octasence.com"
              className="text-blue-300 hover:text-blue-200 transition-colors underline font-semibold"
            >
              admin@octasence.com
            </a>
          </p>
        </motion.div>
      </section>

      {/* Inquiry Options Section */}
      <motion.section
        className="flex-1 w-full flex flex-col justify-center p-8 space-y-4 bg-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          {
            icon: <FiTablet size={24} className="text-blue-500" />,
            question: 'I have a question about',
            detail: 'SHM Sensors',
          },
          {
            icon: <FiDatabase size={24} className="text-blue-500" />,
            question: 'I have a question about',
            detail: 'SHM Data & Analytics',
          },
          {
            icon: <FiStar size={24} className="text-blue-500" />,
            question: 'I have some',
            detail: 'feedback',
          },
          {
            icon: <FiMessageCircle size={24} className="text-blue-500" />,
            question: 'I have a',
            detail: 'general inquiry',
          },
        ].map((item, index) => (
          <div
            role="button"
            tabIndex={0}
            key={index}
            onClick={() => handleButtonClick(item.detail)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleButtonClick(item.detail);
            }}
            className="flex w-full cursor-pointer items-center border border-gray-300 bg-white p-6 text-left shadow-sm hover:bg-blue-50"
          >
            <div className="flex-shrink-0 p-4 bg-blue-100 rounded-full mr-4">
              {item.icon}
            </div>
            <div>
              <p className="text-gray-600">{item.question}</p>
              <p className="text-[#08162C]">{item.detail}</p>
            </div>
          </div>
        ))}
      </motion.section>
    </div>
  );
};

export default ContactPage;