import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollScene = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 0.8]);

  return (
    <section id="markets" className="relative py-24 bg-gradient-to-b from-white to-rose-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {["Deep Liquidity", "Low Fees", "Cross-Margin"].map((title, i) => (
            <motion.div
              key={title}
              style={{ rotate, opacity }}
              whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(244,63,94,0.25)' }}
              className="rounded-2xl border border-rose-100/70 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Experience fast execution with an anime-inspired interface that makes trading feel fun.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollScene;
