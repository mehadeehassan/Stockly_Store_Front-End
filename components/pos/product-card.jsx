import React from "react";

function stockColor(p) {
  if (p.stock === 0) return "text-[#B33A1F]";
  if (p.stock <= 10) return "text-[#C98A1B]";
  return "text-[#5B7553]";
}

export default function ProductCard({ product }) {
  const outOfStock = product.stock === 0;

  return (
    <button
      disabled={outOfStock}
      className={`relative overflow-hidden rounded-2xl border bg-white text-left transition-all ${
        outOfStock
          ? "cursor-not-allowed opacity-50"
          : "hover:border-[#8140DC]/50 hover:shadow-sm"
      } ${product.inCart ? "border-[#8140DC]" : "border-[#ECE3D8]"}`}
    >
      <div className="aspect-square bg-[#ECE3D8]" />
      <div className="p-2.5">
        <div className="mb-1 truncate text-xs font-medium leading-tight text-[#241C14]">
          {product.name}
        </div>
        <div className="text-sm font-semibold text-[#8140DC]">
          ৳{product.price}
        </div>
        <div className={`mt-0.5 text-xs ${stockColor(product)}`}>
          {outOfStock ? "Out of stock" : `${product.stock} ${product.unit}`}
        </div>
      </div>
      {product.inCart && (
        <div className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#8140DC] text-xs font-bold text-white">
          {product.inCart}
        </div>
      )}
    </button>
  );
}