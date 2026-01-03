import { useState } from "react";
import { motion } from "framer-motion";
import Timeline from "../ui/Timeline";
import Modal from "../ui/Modal";
import { experienceData, ExperienceItem } from "../../data/experience";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const handleItemClick = (id: string) => {
    const experience = experienceData.find((exp) => exp.id === id);
    if (experience) {
      setSelectedExperience(experience);
    }
  };

  const timelineItems = experienceData.map((exp) => ({
    id: exp.id,
    role: exp.role,
    company: exp.company,
    startDate: exp.startDate,
    endDate: exp.endDate,
    impactSummary: exp.impactSummary,
  }));

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Experience<span className="text-accent">.</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          {/* Timeline */}
          <Timeline items={timelineItems} onItemClick={handleItemClick} />
        </motion.div>
      </div>

      {/* Experience Detail Modal */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        title={selectedExperience?.role}
      >
        {selectedExperience && (
          <div className="space-y-6">
            {/* Company & Location */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-sans font-medium text-foreground">
                {selectedExperience.company}
              </span>
              <span className="text-muted">•</span>
              <span className="text-muted">{selectedExperience.location}</span>
              <span className="text-muted">•</span>
              <span className="text-accent text-sm">
                {selectedExperience.startDate} — {selectedExperience.endDate}
              </span>
            </div>

            {/* Context */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                Context
              </h4>
              <p className="font-sans text-muted leading-relaxed">
                {selectedExperience.context}
              </p>
            </div>

            {/* Key Contributions */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                Key Contributions
              </h4>
              <ul className="space-y-3">
                {selectedExperience.bullets.map((bullet, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-accent mt-1.5">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </span>
                    <span className="font-sans text-muted leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedExperience.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

