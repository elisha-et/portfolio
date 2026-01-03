import { motion } from "framer-motion";
import clsx from "clsx";

interface TimelineItemData {
  id: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  impactSummary: string;
}

interface TimelineProps {
  items: TimelineItemData[];
  onItemClick: (id: string) => void;
}

export default function Timeline({ items, onItemClick }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical connecting line - spans from first to last dot */}
      <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-accent/30 md:-translate-x-1/2" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={clsx(
              "relative pl-12 md:pl-0",
              index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
            )}
          >
            {/* Timeline dot - positioned on the line */}
            <div
              className={clsx(
                "absolute top-2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10",
                "left-[8px] md:left-1/2 md:-translate-x-1/2",
                "shadow-[0_0_0_2px_rgba(34,211,238,0.2)]"
              )}
            />

            {/* Card */}
            <motion.button
              onClick={() => onItemClick(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={clsx(
                "w-full text-left p-6 rounded-xl",
                "bg-gradient-to-br from-white/5 to-white/[0.02]",
                "border border-white/10 hover:border-accent/50",
                "transition-all duration-300 cursor-hover",
                "group"
              )}
            >
              {/* Date badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {item.startDate} — {item.endDate}
                </span>
              </div>

              {/* Role */}
              <h3 className="font-display font-semibold text-xl text-foreground mb-1 group-hover:text-accent transition-colors">
                {item.role}
              </h3>

              {/* Company */}
              <p className="font-sans text-muted text-sm mb-3">{item.company}</p>

              {/* Impact Summary */}
              <p className="font-sans text-muted/80 text-sm leading-relaxed">
                {item.impactSummary}
              </p>

              {/* Click indicator */}
              <div className="mt-4 flex items-center gap-2 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View details</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

