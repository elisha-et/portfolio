import { useState } from "react";
import { motion } from "framer-motion";
import AppleCarousel from "../ui/AppleCarousel";
import Modal from "../ui/Modal";
import { projectsData, Project } from "../../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const carouselCards = projectsData.map((project) => ({
    id: project.id,
    title: project.name,
    tagline: project.tagline,
    image: project.image,
  }));

  const handleCardClick = (id: string) => {
    const project = projectsData.find((p) => p.id === id);
    if (project) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="mb-12 px-4">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Projects<span className="text-accent">.</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          {/* Carousel */}
          <AppleCarousel cards={carouselCards} onCardClick={handleCardClick} />
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.name}
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Tagline & Date */}
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-accent font-medium">
                {selectedProject.tagline}
              </span>
              <span className="text-muted">•</span>
              <span className="text-muted text-sm">{selectedProject.date}</span>
            </div>

            {/* Project Image */}
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
              {selectedProject.image &&
              !selectedProject.image.includes("placeholder") ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted">
                  <svg
                    className="w-20 h-20 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  The Problem
                </h4>
                <p className="font-sans text-muted leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                  The Solution
                </h4>
                <p className="font-sans text-muted leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Role */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                My Role
              </h4>
              <p className="font-sans text-muted leading-relaxed">
                {selectedProject.role}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm font-medium bg-accent/10 text-accent rounded-lg border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-accent text-background font-medium rounded-lg hover:bg-accent/90 transition-colors cursor-hover"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-foreground font-medium rounded-lg hover:border-accent hover:text-accent transition-colors cursor-hover"
              >
                <i className="fa-brands fa-github text-lg"></i>
                View Code
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}

