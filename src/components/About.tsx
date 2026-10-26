import { FileText, GraduationCap, Terminal, Code2, Award, Phone, Mail, MapPin } from "lucide-react";
import { education, certificates } from "../data/experience";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Background & Credentials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-Column Grid: Text & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p>
              Hi, I'm <strong className="text-text-primary font-semibold">Dagmawi Yoseph</strong>.
              I am a Frontend and Full-Stack Developer with 3+ years of experience
              building production web applications, enterprise SaaS, ERP platforms, and
              developer tools.
            </p>

            <p>
              I graduated from{" "}
              <strong className="text-text-primary font-semibold">
                HiLCoE School of Computer Science and Technology
              </strong>{" "}
              in 2023 with a degree in Computer Science. While my strongest core has
              been architecting high-complexity frontend systems, I am continuously
              expanding my backend engineering capabilities with Node.js, NestJS, and
              relational database design to deliver end-to-end full-stack applications.
            </p>

            <p>
              Currently, I serve as Lead Frontend Developer for{" "}
              <strong className="text-text-primary font-semibold">LoomERP</strong>, and also
              work on independent systems engineering projects like{" "}
              <strong className="text-text-primary font-semibold">EYTAA</strong> (Tauri 2 + Rust)
              and <strong className="text-text-primary font-semibold">DevOS</strong> (local offline
              LLM workflows).
            </p>

            {/* Quick Contact & Info Grid */}
            <div className="p-4 rounded-lg bg-surface-card border border-surface-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="tel:+251924406791" className="hover:underline text-text-primary">
                  +251 924 406 791
                </a>
              </div>
              <div className="flex items-center gap-2 text-text-secondary sm:col-span-2">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="mailto:Dagijossy18@gmail.com" className="hover:underline text-text-primary">
                  Dagijossy18@gmail.com
                </a>
              </div>
            </div>

            {/* Core Principles */}
            <div className="pt-4 border-t border-surface-border">
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                Engineering Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface-card border border-surface-border">
                  <div className="flex items-center gap-2 text-text-primary font-medium text-sm mb-1.5">
                    <Code2 className="w-4 h-4 text-slate-400" />
                    <span>Predictable Architecture</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Prioritizing clean separation of concerns, strict TypeScript contracts, and modular composition over quick shortcuts.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface-card border border-surface-border">
                  <div className="flex items-center gap-2 text-text-primary font-medium text-sm mb-1.5">
                    <Terminal className="w-4 h-4 text-slate-400" />
                    <span>End-to-End System Thinking</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Bridging client state with clean backend APIs using Node.js, NestJS, and structured data validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certification Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Education */}
              <div className="p-4 rounded-lg bg-surface-card border border-surface-border flex items-start gap-3">
                <div className="p-2 rounded bg-navy border border-navy-border text-slate-300 flex-shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-display font-semibold text-text-primary">
                    {education.institution}
                  </h4>
                  <p className="text-[11px] text-text-secondary mt-0.5">
                    {education.degree}
                  </p>
                  <p className="text-[10px] font-mono text-text-muted mt-1">
                    {education.period}
                  </p>
                </div>
              </div>

              {/* AWS Certification */}
              {certificates.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-lg bg-surface-card border border-surface-border flex items-start gap-3"
                >
                  <div className="p-2 rounded bg-navy border border-navy-border text-amber-300 flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-display font-semibold text-text-primary">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-text-secondary mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-[10px] font-mono text-emerald-400 mt-1">
                      {cert.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Download Action */}
            <div className="pt-2">
              <a
                href="/Dagmawi_Yoseph_CV_main.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-navy hover:bg-navy-light text-text-primary text-sm font-medium border border-navy-border hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Download Latest Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Portrait Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-xl overflow-hidden border border-surface-border bg-charcoal-950 shadow-card">
                <img
                  src="/image/pic.png"
                  alt="Dagmawi Yoseph portrait"
                  className="w-full h-auto object-cover object-top"
                />
                <div className="p-4 bg-charcoal-900 border-t border-surface-border">
                  <p className="text-xs font-mono text-text-muted">
                    Dagmawi Yoseph · Frontend & Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
