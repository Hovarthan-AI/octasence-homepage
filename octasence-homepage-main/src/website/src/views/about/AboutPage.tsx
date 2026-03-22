import Link from 'next/link';

import { Button } from '@/components/ui/button';
import mainConfig from '@/configs/mainConfigs';

type Founder = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

const FOUNDERS: Founder[] = [
  {
    name: 'Shivaraj Choutagi',
    role: 'Founder & CEO',
    initials: 'SC',
    bio: 'Founder & CEO of OctaSence, an AI-powered geotechnical and structural health monitoring intelligence platform. Mining engineering background with deep field expertise in ground behavior and operational risk; experience in digital mining, AI-led industrial solutions, and product leadership. Co-founder of PiCake. At OctaSence, integrates mining expertise, AI, IoT, and hardware to build scalable infrastructure intelligence.',
  },
  {
    name: 'Harsh Vardhan',
    role: 'Co-Founder & CTO',
    initials: 'HV',
    bio: 'Chief Technology Officer and two-time founder with 20+ years leading PropTech, agentic AI for infrastructure, ERP/CRM, and digital marketing automation. Foundational role in India’s first PropTech wave (Housing.com); now drives OctaSence’s agentic platform for structural health monitoring and geotechnical intelligence. Mentor and advisor to AI-driven ventures on GTM, MVP refinement, and commercialization.',
  },
  {
    name: 'Wolfgang Staufer',
    role: 'Co-Founder · Business Development',
    initials: 'WS',
    bio: 'Entrepreneurial leader with 30+ years across high-end engineering, global management, and strategic growth. Degrees in Electrical Engineering (TU Vienna) and Business Administration (JKU Linz). Former Group CEO/CFO in industrial machinery; led global organizations to major revenue and profit growth. At Octasence, leads business development and turns ambitious visions into market-ready outcomes.',
  },
  {
    name: 'Vasiliy Bezlyudnyy',
    role: 'Co-Founder · Product',
    initials: 'VB',
    bio: 'Mechanical engineering graduate (TalTech) with certifications in management consulting and AI for business. Product owner and analyst background: launched brands, drove revenue and customer growth with data-backed decisions, analytics (SQL, Power BI), and customer research. At Octasence, leads product strategy from requirements and user stories to KPIs and continuous improvement.',
  },
];

type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  bio: string;
  initials: string;
};

const TEAM: TeamMember[] = [
  {
    name: 'Sandeep Vissapragada',
    role: 'Leadership',
    linkedin:
      'https://www.linkedin.com/in/sandeep-vissapragada-10b09b24a?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    bio: 'Key contributor to Octasence strategy and execution.',
    initials: 'SV',
  },
  {
    name: 'Hovarthan S.',
    role: 'Engineering',
    linkedin:
      'https://www.linkedin.com/in/hovarthan-s-06114b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    bio: 'Building reliable software for infrastructure intelligence.',
    initials: 'HS',
  },
  {
    name: 'Akshay Mali',
    role: 'Product & Engineering',
    linkedin: 'https://www.linkedin.com/in/akshay-mali-333129246/',
    bio: 'Shipping features that connect field data to decisions.',
    initials: 'AM',
  },
  {
    name: 'Prashant Paliwal',
    role: 'Operations',
    linkedin:
      'https://www.linkedin.com/in/prashant-paliwal-39914726a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    bio: 'Keeping delivery and partnerships aligned with customer needs.',
    initials: 'PP',
  },
  {
    name: 'Devanshi Jaiswal',
    role: 'Design & Experience',
    linkedin:
      'https://www.linkedin.com/in/devanshi-jaiswal-b83774217/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    bio: 'Crafting clear, accessible experiences across the platform.',
    initials: 'DJ',
  },
];

function Avatar({
  initials,
  className = '',
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-square w-full max-w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/40 to-sky-500/25 text-2xl font-black text-white/90 ${className}`}
    >
      {initials}
    </div>
  );
}

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060814] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.2),_transparent_50%)]" />
        <div
          className={`${mainConfig.containerClass} px-4 py-20 md:py-28 relative z-10`}
        >
          <p className="octa-pill mb-6">About Octasence</p>
          <h1 className="octa-heading text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            Agentic intelligence for the world&apos;s critical infrastructure
          </h1>
          <p className="octa-lead mt-6 max-w-3xl text-lg md:text-xl text-slate-300">
            Octasence builds AI-driven structural health monitoring and
            geotechnical intelligence so owners and operators can move from
            reactive inspection to predictive risk orchestration—across mining,
            dams, tunnels, metros, and complex built environments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              <Link href="/contact">Talk to us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/careers">Careers</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        className={`${mainConfig.containerClass} px-4 py-16 md:py-24 space-y-12`}
      >
        <div className="max-w-3xl">
          <h2 className="octa-heading text-3xl md:text-4xl">Founders</h2>
          <p className="mt-3 text-slate-400">
            The team bridging deep domain expertise in infrastructure, AI, and
            global go-to-market execution.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {FOUNDERS.map((f) => (
            <article
              key={f.name}
              className="octa-panel flex flex-col gap-4 rounded-3xl p-6 md:p-8"
            >
              <Avatar initials={f.initials} />
              <div>
                <h3 className="text-xl font-bold text-white">{f.name}</h3>
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300/90">
                  {f.role}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{f.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-white/[0.02] py-16 md:py-24">
        <div className={`${mainConfig.containerClass} px-4 space-y-12`}>
          <div className="max-w-3xl">
            <h2 className="octa-heading text-3xl md:text-4xl">Team</h2>
            <p className="mt-3 text-slate-400">
              Cross-functional builders across product, engineering, and
              operations—unified around safer, smarter infrastructure.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article
                key={m.name}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#0a1024]/80 p-6"
              >
                <Avatar initials={m.initials} />
                <div>
                  <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    {m.role}
                  </p>
                </div>
                <p className="text-sm text-slate-400 flex-1">{m.bio}</p>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300"
                >
                  LinkedIn →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${mainConfig.containerClass} px-4 py-16 md:py-24`}>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="octa-panel rounded-3xl p-8 md:p-10">
            <h2 className="octa-heading text-2xl md:text-3xl">Vision</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              A world where every critical structure is understood in real
              time—where risk is visible before failure, and operators act with
              confidence backed by agentic AI and trusted data.
            </p>
          </div>
          <div className="octa-panel rounded-3xl p-8 md:p-10">
            <h2 className="octa-heading text-2xl md:text-3xl">Mission</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Deliver industrial-grade monitoring and intelligence that unifies
              sensors, models, and workflows—so teams can prevent the
              unthinkable and keep communities and assets safe.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-b from-indigo-950/40 to-[#060814] py-16 md:py-24">
        <div
          className={`${mainConfig.containerClass} px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-8`}
        >
          <div>
            <h2 className="octa-heading text-2xl md:text-3xl">
              Ready to explore Octasence?
            </h2>
            <p className="mt-2 text-slate-400 max-w-xl">
              Whether you are deploying monitoring at scale or evaluating
              agentic workflows for your infrastructure program, we would like
              to hear from you.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-slate-900 hover:bg-slate-100 shrink-0"
          >
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
