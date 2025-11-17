import { ShoppingBag } from "lucide-react";

export default function Hero({ onShop }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/20 z-10" />
      <img
        src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=1600&auto=format&fit=crop"
        alt="Hero"
        className="w-full h-[70vh] object-cover"
      />
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <p className="uppercase tracking-[0.3em] text-sm mb-4">New Drop</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Minimal style. Maximum comfort.
          </h1>
          <p className="mt-4 max-w-xl text-white/80">
            Elevated essentials crafted with premium fabrics and sustainable
            processes. Built for everyday movement.
          </p>
          <div className="mt-8 flex gap-4">
            <button
              onClick={onShop}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition transform shadow-sm"
            >
              <ShoppingBag size={18} /> Shop now
            </button>
            <a
              href="#collections"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
