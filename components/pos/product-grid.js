import React from "react";
import ProductCard from "./product-card";

export default function ProductGrid({ categories, products }) {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {/* Category tabs */}
      <div className="flex shrink-0 gap-2 overflow-x-auto border-b border-[#ECE3D8] bg-white px-4 py-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
              cat.active
                ? "bg-[#8140DC] text-white"
                : "border border-[#ECE3D8] bg-[#FAF6F0] text-[#8A7B6C]"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product grid list */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}