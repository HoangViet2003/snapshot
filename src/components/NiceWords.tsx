'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

const testimonialImages = [
  'https://fixteamstudio.com/wp-content/uploads/2023/09/DSCF0345-2.jpg',
  'https://fixteamstudio.com/wp-content/uploads/2019/05/DSCF6037.jpg',
  'https://fixteamstudio.com/wp-content/uploads/2019/05/DSC_0310.jpg',
  'https://fixteamstudio.com/wp-content/uploads/2023/06/ql.jpg',
];

export default function NiceWords() {
  const t = useTranslations('NiceWords');
  const [pairIndex, setPairIndex] = useState(0);
  const [slideDir, setSlideDir] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const testimonials = (t.raw('testimonials') as Array<{ category: string; quote: string; author: string }>).map(
    (item, i) => ({ ...item, image: testimonialImages[i] })
  );

  const totalPairs = Math.ceil(testimonials.length / 2);
  const visiblePair = [
    testimonials[pairIndex * 2],
    testimonials[pairIndex * 2 + 1],
  ].filter(Boolean);

  const goTo = (index: number) => {
    setSlideDir(index > pairIndex ? 1 : -1);
    setPairIndex(index);
    setHoveredIndex(null);
  };

  const prev = () => goTo((pairIndex - 1 + totalPairs) % totalPairs);
  const next = () => goTo((pairIndex + 1) % totalPairs);


  return (
    <section className="bg-[#0e0e0e] text-white overflow-hidden py-20 md:py-28 px-8 md:px-14 lg:px-20">

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[0.58rem] uppercase tracking-[0.45em] text-white/30 mb-2">
            {t('sectionLabel')}
          </p>
          <h2
            className="text-3xl md:text-4xl font-light leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {t('sectionTitle')}
          </h2>
        </div>

        {/* Arrows + counter */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <span className="text-[0.6rem] tracking-[0.3em] text-white/25 tabular-nums px-1">
            {String(pairIndex + 1).padStart(2, '0')} / {String(totalPairs).padStart(2, '0')}
          </span>
          <button
            onClick={next}
            className="p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* ── Cards ───────────────────────────────────────────── */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pairIndex}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
            initial={{ x: slideDir * 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -slideDir * 80, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {visiblePair.map((item, i) => {
              const globalIndex = pairIndex * 2 + i;
              const isHovered = hoveredIndex === globalIndex;

              return (
                <div
                  key={globalIndex}
                  className="relative overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '0.72' }}
                  onMouseEnter={() => setHoveredIndex(globalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <AnimatePresence mode="wait">
                    {!isHovered ? (
                      /* ── Image face ── */
                      <motion.div
                        key="image"
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                      >
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        {/* Bottom gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                        {/* Author label */}
                        <div className="absolute bottom-0 left-0 right-0 px-7 pb-7">
                          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/45 mb-1.5">
                            {item.category}
                          </p>
                          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/85 font-medium">
                            — {item.author}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      /* ── Review face ── */
                      <motion.div
                        key="review"
                        className="absolute inset-0 bg-[#f5f3ef] text-[#2c2c2c] flex flex-col justify-center px-8 md:px-10 py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45, ease: 'easeInOut' }}
                      >
                        <p className="text-[0.55rem] uppercase tracking-[0.45em] text-[#2c2c2c]/35 mb-6">
                          {item.category}
                        </p>

                        <div
                          className="text-[3rem] leading-none text-[#2c2c2c]/15 mb-2 -ml-0.5 select-none"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          &ldquo;
                        </div>

                        <p
                          className="text-sm md:text-base leading-[1.9] text-[#2c2c2c]/70 italic mb-8"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.quote}
                        </p>

                        <div className="w-8 h-px bg-[#2c2c2c]/20 mb-5" />

                        <p className="text-[0.62rem] uppercase tracking-[0.35em] text-[#2c2c2c]/70 font-semibold">
                          {item.author}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dots ────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalPairs }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to pair ${i + 1}`}
            className="cursor-pointer"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === pairIndex
                  ? 'w-6 h-0.5 bg-white'
                  : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>

    </section>
  );
}

