import { useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-background border border-accent/30 rounded-xl shadow-2xl pointer-events-auto m-2 sm:m-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title */}
              {title && (
                <div className="sticky top-0 bg-background border-b border-white/10 px-4 sm:px-6 py-4 z-[5]">
                  <h2 className="font-display font-semibold text-xl sm:text-2xl text-foreground pr-12 sm:pr-8">
                    {title}
                  </h2>
                </div>
              )}

              {/* Close Button */}
              <button
                onClick={onClose}
                className="fixed sm:absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-background/90 backdrop-blur-sm border border-white/20 rounded-full text-foreground hover:text-accent hover:border-accent/50 transition-all cursor-hover z-[110] shadow-lg"
                aria-label="Close modal"
              >
                <svg
                  className="w-6 h-6 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="p-4 sm:p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

