import { Menu, ShoppingCart, Search } from "lucide-react";

export default function Navbar({ onCart }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-md hover:bg-gray-100"><Menu size={20} /></button>
          <a href="#" className="text-xl font-extrabold tracking-tight">Nordic Threads</a>
        </div>
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-md mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              placeholder="Search products"
              className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={onCart} className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full font-semibold hover:-translate-y-0.5 transition transform">
            <ShoppingCart size={18} />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}
