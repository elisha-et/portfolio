import { useState } from "react";
import { motion } from "framer-motion";
import { contactData } from "../../data/contact";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Let's Connect<span className="text-accent">.</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
          </motion.div>

          {/* Closing Statement */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg sm:text-xl text-muted mb-12 max-w-2xl mx-auto px-4"
          >
            {contactData.closingStatement}
          </motion.p>

          {/* Email Button */}
          <motion.div variants={itemVariants} className="mb-12 px-4">
            <button
              onClick={copyEmail}
              className="group relative inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-xl hover:border-accent transition-all cursor-hover w-full sm:w-auto"
            >
              <svg
                className="w-5 h-5 text-accent flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-sans text-base sm:text-lg text-foreground break-all sm:break-normal">
                {contactData.email}
              </span>
              <span
                className={`text-xs sm:text-sm transition-all ${
                  copied ? "text-accent" : "text-muted group-hover:text-accent"
                }`}
              >
                {copied ? "Copied!" : "Click to copy"}
              </span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4"
          >
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg hover:border-accent/50 transition-all cursor-hover"
            >
              <i className="fa-brands fa-github text-2xl text-muted group-hover:text-accent transition-colors"></i>
              <span className="font-sans text-muted group-hover:text-foreground transition-colors">
                GitHub
              </span>
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 border border-white/10 rounded-lg hover:border-accent/50 transition-all cursor-hover"
            >
              <i className="fa-brands fa-linkedin-in text-2xl text-muted group-hover:text-accent transition-colors"></i>
              <span className="font-sans text-muted group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </a>

            {contactData.resumeLink && contactData.resumeLink !== "#" && (
              <a
                href={contactData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-all cursor-hover"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="font-sans font-medium">Resume</span>
              </a>
            )}
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-8 border-t border-white/10"
          >
            <p className="font-sans text-sm text-muted">
              © {new Date().getFullYear()} Elisha Etukudoh. Built with intention.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

