import React from 'react';

const StickyNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/60 border-b border-rose-100/60">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-extrabold text-rose-700 tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-rose-600 mr-1" />
          Perp
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#trade" className="hover:text-rose-700">Trade</a>
          <a href="#markets" className="hover:text-rose-700">Markets</a>
          <a href="#learn" className="hover:text-rose-700">Learn</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex rounded-lg border border-rose-200 px-3 py-1.5 text-sm font-medium text-rose-700 hover:bg-rose-50">Log in</button>
          <button className="rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-rose-700">Launch App</button>
        </div>
      </div>
    </header>
  );
};

export default StickyNav;
