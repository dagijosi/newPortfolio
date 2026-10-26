import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Copy, Check, Send, Github, Linkedin, ExternalLink, Phone, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<ContactFormData>();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Dagijossy18@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      // Submitting via FormSubmit AJAX service directly to your inbox
      const response = await fetch("https://formsubmit.co/ajax/Dagijossy18@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          _subject: `Portfolio Message: ${data.subject}`,
          message: data.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        const result = await response.json();
        throw new Error(result.message || "Failed to deliver message");
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        "Direct submission encountered a network block. You can click below to send via your email client."
      );
    }
  };

  const openMailtoFallback = () => {
    const values = getValues();
    const subject = encodeURIComponent(values.subject || "Portfolio Contact");
    const body = encodeURIComponent(
      `Name: ${values.name || ""}\nEmail: ${values.email || ""}\n\nMessage:\n${values.message || ""}`
    );
    window.location.href = `mailto:Dagijossy18@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary tracking-tight">
            Contact
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-2xl">
            Interested in discussing an engineering role, modular architecture, or a
            software collaboration? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-surface-card border border-surface-border rounded-xl">
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                Direct Contact
              </h3>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="truncate">
                      <span className="block text-[11px] font-mono text-text-muted">
                        Email Address
                      </span>
                      <a
                        href="mailto:Dagijossy18@gmail.com"
                        className="text-sm font-mono text-text-primary hover:underline truncate block"
                      >
                        Dagijossy18@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-md hover:bg-charcoal-700 text-text-secondary hover:text-text-primary transition-colors border border-surface-border flex-shrink-0"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 truncate">
                    <Phone className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <div className="truncate">
                      <span className="block text-[11px] font-mono text-text-muted">
                        Phone / WhatsApp
                      </span>
                      <a
                        href="tel:+251924406791"
                        className="text-sm font-mono text-text-primary hover:underline truncate block"
                      >
                        +251 924 406 791
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-lg bg-surface-elevated border border-surface-border flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  <div>
                    <span className="block text-[11px] font-mono text-text-muted">
                      Location
                    </span>
                    <span className="text-sm text-text-primary font-medium">
                      Addis Ababa, Ethiopia (UTC+3)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Profiles */}
            <div className="p-6 bg-surface-card border border-surface-border rounded-xl">
              <h3 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">
                Profiles & Repositories
              </h3>

              <div className="space-y-3">
                <a
                  href="https://github.com/dagijosi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-charcoal-700 border border-surface-border transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span className="text-sm font-mono text-text-primary">
                      github.com/dagijosi
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dagmawi-yoseph-4b4aa6296"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-elevated hover:bg-charcoal-700 border border-surface-border transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-white" />
                    <span className="text-sm font-mono text-text-primary">
                      linkedin.com/in/dagmawi-yoseph
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-surface-card border border-surface-border rounded-xl">
              <h3 className="text-lg font-display font-semibold text-text-primary mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-text-muted mb-6">
                Directly sends to <span className="font-mono text-slate-300">Dagijossy18@gmail.com</span>.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-emerald-950/50 border border-emerald-800 text-emerald-200 text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-medium block">Message delivered!</span>
                    <span className="text-xs text-emerald-300/80">
                      Thank you for reaching out. Your message has been sent to my inbox and I will respond promptly.
                    </span>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-200 text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span className="text-xs">{errorMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={openMailtoFallback}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-rose-900/60 hover:bg-rose-900 text-xs font-medium text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App with pre-filled message</span>
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      placeholder="Jane Doe"
                      disabled={status === "submitting"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-surface-border focus:border-slate-400 text-sm text-text-primary focus:outline-none transition-colors disabled:opacity-50"
                    />
                    {errors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      placeholder="jane@example.com"
                      disabled={status === "submitting"}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-surface-border focus:border-slate-400 text-sm text-text-primary focus:outline-none transition-colors disabled:opacity-50"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    type="text"
                    placeholder="Project Inquiry / Full Stack Role"
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-surface-border focus:border-slate-400 text-sm text-text-primary focus:outline-none transition-colors disabled:opacity-50"
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-text-secondary mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    rows={4}
                    placeholder="Tell me about your project, timeline, or engineering inquiry..."
                    disabled={status === "submitting"}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-surface-border focus:border-slate-400 text-sm text-text-primary focus:outline-none transition-colors resize-none disabled:opacity-50"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-navy hover:bg-navy-light text-text-primary font-medium text-sm border border-navy-border hover:border-slate-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "submitting" ? "Delivering Message..." : "Send Message"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={openMailtoFallback}
                    className="text-xs text-text-muted hover:text-text-primary underline font-mono"
                  >
                    Or open directly in mail app
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
