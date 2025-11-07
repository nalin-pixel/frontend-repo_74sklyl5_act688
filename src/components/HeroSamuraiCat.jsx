import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Rocket } from 'lucide-react';

const HeroSamuraiCat = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 0.4, 1], [0, 200, 400]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.95, 0.9]);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 12 } });
  }, [controls]);

  return (
    <section className="relative flex min-h-[80vh] md:min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-b from-rose-50 via-white to-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,192,203,0.35),transparent_60%)] pointer-events-none" />
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={controls}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-rose-600 shadow-sm backdrop-blur">
          <Rocket className="h-4 w-4" />
          <span className="text-xs font-medium">Perp · Anime-style Crypto Exchange</span>
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Samurai Cat Perps
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Trade perps with style. Scroll to watch the samurai cat descend as cherry blossoms fall.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#trade" className="rounded-lg bg-rose-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-rose-700 transition">
            Start Trading
          </a>
          <a href="#learn" className="rounded-lg bg-white text-rose-700 px-5 py-2.5 font-semibold border border-rose-200 hover:bg-rose-50 transition">
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?q=80&w=1000&auto=format&fit=crop"
        alt="Samurai Cat"
        className="absolute bottom-0 select-none pointer-events-none"
        style={{ y, scale }}
      />
    </section>
  );
};

export default HeroSamuraiCat;
