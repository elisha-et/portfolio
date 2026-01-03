import { motion } from "framer-motion";
import Gallery from "../ui/Gallery";
import { aboutData } from "../../data/about";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              About<span className="text-accent">.</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Narrative Text */}
            <motion.div 
              variants={itemVariants} 
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-6"
            >
              {aboutData.narrative.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="font-sans text-muted text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Gallery */}
            <motion.div 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Gallery images={aboutData.galleryImages} columns={3} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

