import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

function ProductCard({ p }) {
  return (
    <div className="group rounded-xl border border-gray-200 overflow-hidden bg-white">
      {p.image && (
        <div className="aspect-[4/5] overflow-hidden bg-gray-100">
          <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{p.title}</h3>
          {p.tag && <span className="text-xs px-2 py-1 rounded-full bg-gray-900 text-white">{p.tag}</span>}
        </div>
        <p className="text-sm text-gray-500 mt-1">{p.category}</p>
        <p className="font-bold mt-2">${p.price.toFixed(2)}</p>
        <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:opacity-90">Add to cart</button>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/api/products${category !== "all" ? `?category=${category}` : ""}`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch(`${API}/api/categories`);
        const data = await res.json();
        setCategories(["all", ...data]);
      } catch (e) {
        // ignore
      }
    };
    fetchCats();
  }, []);

  if (loading) return <div className="py-20 text-center">Loading...</div>;
  if (error) return <div className="py-20 text-center text-red-600">{error}</div>;

  return (
    <section id="collections" className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-extrabold">Featured</h2>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
