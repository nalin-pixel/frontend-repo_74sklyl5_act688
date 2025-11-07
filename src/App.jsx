import React from 'react';
import StickyNav from './components/StickyNav';
import HeroSamuraiCat from './components/HeroSamuraiCat';
import ScrollScene from './components/ScrollScene';
import SakuraFall from './components/SakuraFall';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full text-gray-900 bg-white">
      <StickyNav />
      <main className="relative">
        <HeroSamuraiCat />
        <SakuraFall />
        <section id="trade" className="relative py-24 bg-white">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Trade with precision, vibe with petals
              </h2>
              <p className="mt-3 text-gray-600">
                Open long or short positions across top markets while enjoying a serene, animated experience.
              </p>
              <ul className="mt-6 space-y-2 text-gray-700">
                <li>• Up to 50x leverage</li>
                <li>• Gasless onboarding</li>
                <li>• Pro charts, simple UX</li>
              </ul>
              <button className="mt-6 rounded-lg bg-rose-600 text-white px-5 py-2.5 font-semibold shadow hover:bg-rose-700">Launch App</button>
            </div>
            <div className="relative">
              <div className="aspect-video w-full rounded-2xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-6 shadow-sm">
                <div className="h-full w-full rounded-xl bg-white/60 backdrop-blur flex items-center justify-center text-rose-700 font-semibold">
                  Live Markets Preview
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScrollScene />
      </main>
      <Footer />
    </div>
  );
}

export default App;
