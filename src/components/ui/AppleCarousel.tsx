import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import clsx from "clsx";

interface CarouselCard {
  id: string;
  title: string;
  tagline: string;
  image: string;
}

interface AppleCarouselProps {
  cards: CarouselCard[];
  onCardClick: (id: string) => void;
}

export default function AppleCarousel({ cards, onCardClick }: AppleCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 300 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setContainerWidth(container.offsetWidth);
        setScrollWidth(container.scrollWidth);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cards]);

  useEffect(() => {
    const unsubscribe = springX.on("change", (latest) => {
      const maxScroll = -(scrollWidth - containerWidth);
      setCanScrollLeft(latest < -10);
      setCanScrollRight(latest > maxScroll + 10);
      
      // Calculate current index based on scroll position
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth < 768;
      const cardWidth = (isMobile ? 300 : isTablet ? 350 : 400) + 24; // card width + gap
      const index = Math.round(Math.abs(latest) / cardWidth);
      setCurrentIndex(Math.min(index, cards.length - 1));
    });

    return () => unsubscribe();
  }, [springX, scrollWidth, containerWidth, cards.length]);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    // Calculate card width based on viewport
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 768;
    const cardWidth = isMobile ? 300 : isTablet ? 350 : 400;
    const gap = 24;
    const scrollAmount = direction === "left" ? (cardWidth + gap) : -(cardWidth + gap);
    const currentX = springX.get();
    const newX = Math.max(
      -(scrollWidth - containerWidth),
      Math.min(0, currentX + scrollAmount)
    );

    animate(springX, newX, {
      type: "spring",
      damping: 30,
      stiffness: 300,
    });
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x: springX }}
          className="flex gap-6 px-4"
        >
          {cards.map((card) => (
            <CarouselCardComponent
              key={card.id}
              card={card}
              onClick={() => onCardClick(card.id)}
              parentX={springX}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-8 px-4">
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={clsx(
            "w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all cursor-hover",
            canScrollRight
              ? "border-accent text-accent hover:bg-accent/10 hover:scale-110"
              : "border-muted/30 text-muted/30 cursor-not-allowed"
          )}
          aria-label="Scroll left"
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          {cards.map((_, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={clsx(
                  "h-2 rounded-full transition-all duration-300",
                  isActive ? "bg-accent w-6" : "bg-muted/30 w-2"
                )}
              />
            );
          })}
        </div>

        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={clsx(
            "w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all cursor-hover",
            canScrollLeft
              ? "border-accent text-accent hover:bg-accent/10 hover:scale-110"
              : "border-muted/30 text-muted/30 cursor-not-allowed"
          )}
          aria-label="Scroll right"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

interface CarouselCardComponentProps {
  card: CarouselCard;
  onClick: () => void;
  parentX: ReturnType<typeof useSpring>;
}

function CarouselCardComponent({
  card,
  onClick,
  parentX,
}: CarouselCardComponentProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardCenter, setCardCenter] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardCenter(rect.left + rect.width / 2);
    }
  }, []);

  // Calculate rotation based on position
  const rotateY = useTransform(parentX, (latest) => {
    const cardPosition = cardCenter + latest;
    const viewportCenter = window.innerWidth / 2;
    const distance = cardPosition - viewportCenter;
    return distance * 0.02; // Subtle rotation
  });

  const scale = useTransform(parentX, (latest) => {
    const cardPosition = cardCenter + latest;
    const viewportCenter = window.innerWidth / 2;
    const distance = Math.abs(cardPosition - viewportCenter);
    const maxDistance = window.innerWidth / 2;
    return 1 - Math.min(distance / maxDistance, 0.5) * 0.15;
  });

  return (
    <motion.div
      ref={cardRef}
      style={{ rotateY, scale }}
      onClick={onClick}
      className={clsx(
        "flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px]",
        "cursor-hover"
      )}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative group"
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
              {card.image && !card.image.includes("placeholder") ? (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-muted">
                  <svg
                    className="w-16 h-16 mb-2 opacity-50"
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
                  <span className="text-sm">Project preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
              {card.title}
            </h3>
            <p className="font-sans text-muted text-sm leading-relaxed line-clamp-2">
              {card.tagline}
            </p>
          </div>

          {/* Click indicator */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-accent"
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
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

