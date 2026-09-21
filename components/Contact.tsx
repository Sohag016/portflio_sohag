"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Linkedin, Github, Twitter, CheckCircle2, AlertCircle, Loader2, RotateCcw } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "New Inquiry from Portfolio",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mdsohaghossain138643@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `Portfolio Message from ${formData.name}`,
            message: formData.message,
            _subject: `Portfolio Contact Notification: ${formData.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || data.message)) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "New Inquiry from Portfolio",
          message: "",
        });
      } else {
        setStatus("error");
        setFeedbackMsg(
          data.message ||
            "Failed to send email notification. You can email directly using the button below."
        );
      }
    } catch (error) {
      setStatus("error");
      setFeedbackMsg(
        "Network connection issue. Please check your internet connection or email directly."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "New Inquiry from Portfolio",
      message: "",
    });
    setStatus("idle");
    setFeedbackMsg("");
  };

  return (
    <section
      id="contact"
      className="relative py-[50px] md:py-[50px] lg:py-[100px] bg-[#080a0f] text-white overflow-hidden scroll-mt-24"
    >
      {/* Glow background circles */}
      <div className="absolute -top-[100px] -right-[50px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none rounded-full" />
      <div className="absolute -bottom-[50px] -left-[50px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="relative z-10 container w-[90%] sm:w-[95%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Let's build{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
              together.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium">
            Transforming complex data into intelligent solutions.
          </p>
        </motion.div>

        {/* Contact Split Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12"
        >
          {/* Left Dark Info Panel */}
          <div className="lg:col-span-5 bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-10 text-slate-100">
                Contact Info
              </h3>

              <div className="space-y-8">
                {/* Email Box */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 group p-2 -m-2 rounded-2xl hover:bg-slate-800/60 transition-colors touch-manipulation"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                      Email Address
                    </p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors break-all">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>

                {/* Location Box */}
                <div className="flex items-start gap-4 p-2 -m-2">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-slate-200">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 mt-12">
              <a
                href="https://www.linkedin.com/in/sohag-a5550a374/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 touch-manipulation"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Sohag016"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 touch-manipulation"
              >
                <Github size={20} />
              </a>
              <a
                href="https://x.com/Sohag_H75"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1 touch-manipulation"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://orcid.org/0009-0003-8398-071X"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ORCID"
                title="ORCID"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-[#a6ce39] hover:text-white hover:border-[#a6ce39] transition-all hover:-translate-y-1 touch-manipulation"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
                </svg>
              </a>
              <a
                href="https://wa.me/8801640368708"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp: 01640368708"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all hover:-translate-y-1 touch-manipulation"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-slate-900">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-10 text-center bg-emerald-50/80 border border-emerald-200 rounded-3xl space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                    Email Notification Sent!
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                    Your message has been delivered to{" "}
                    <span className="font-semibold text-emerald-700">
                      {personalInfo.email}
                    </span>
                    . I have received an instant alert and will respond to your inquiry shortly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm rounded-xl transition-all shadow-md touch-manipulation"
                >
                  <RotateCcw size={16} /> Send Another Message
                </button>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3"
                  >
                    <AlertCircle size={20} className="shrink-0 text-rose-500 mt-0.5" />
                    <div className="space-y-2">
                      <p>{feedbackMsg}</p>
                      <a
                        href={`mailto:${personalInfo.email}?subject=Portfolio%20Inquiry`}
                        className="inline-block text-xs font-bold text-blue-600 underline hover:text-blue-800"
                      >
                        Click here to email directly via your mail client &rarr;
                      </a>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sohag Hossain"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all touch-manipulation"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sohag@example.com"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all touch-manipulation"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Collaboration, Research..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all touch-manipulation"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Let's talk about your vision, research project, or engineering challenge..."
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all resize-none touch-manipulation"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-4 px-8 font-bold text-base rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 touch-manipulation active:scale-[0.99] ${
                    status === "loading"
                      ? "bg-blue-500 text-white cursor-not-allowed opacity-90"
                      : "bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10 hover:shadow-blue-600/20 hover:-translate-y-0.5"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending Notification...
                    </>
                  ) : (
                    <>
                      Send Message & Notify <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

