export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-extrabold text-lg">Nordic Threads</h3>
          <p className="mt-3 text-gray-600">Sustainable. Minimal. Comfortable.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Shop</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Tops</a></li>
            <li><a href="#" className="hover:text-gray-900">Bottoms</a></li>
            <li><a href="#" className="hover:text-gray-900">Outerwear</a></li>
            <li><a href="#" className="hover:text-gray-900">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Sustainability</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-8">© {new Date().getFullYear()} Nordic Threads. All rights reserved.</div>
    </footer>
  );
}
