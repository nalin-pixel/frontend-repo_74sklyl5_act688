import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-rose-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Perp • Samurai Cat Exchange</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-rose-700">Docs</a>
          <a href="#" className="hover:text-rose-700">Twitter</a>
          <a href="#" className="hover:text-rose-700">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
