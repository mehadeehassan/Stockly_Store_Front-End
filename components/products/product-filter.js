import React from "react";
import ProductSearch from "./product-search";

export default function ProductFilter({
  searchQuery,
  onSearchChange,
  category,
  onCategoryChange,
  status,
  onStatusChange,
}) {
  return (
    <div className="mb-5 flex flex-wrap gap-3">
      <ProductSearch value={searchQuery} onChange={onSearchChange} />
      
      <select
        value={category}
        onChange={(e) => onCategoryChange?.(e.target.value)}
        className="rounded-xl border border-[#ECE3D8] bg-white px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
      >
        <option value="">All Categories</option>
        <option value="Grocery">Grocery</option>
        <option value="Dairy">Dairy</option>
        <option value="Snacks">Snacks</option>
        <option value="Beverages">Beverages</option>
        <option value="Household">Household</option>
        <option value="Produce">Produce</option>
      </select>

      <select
        value={status}
        onChange={(e) => onStatusChange?.(e.target.value)}
        className="rounded-xl border border-[#ECE3D8] bg-white px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
      >
        <option value="">All Status</option>
        <option value="in-stock">In Stock</option>
        <option value="low-stock">Low Stock</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>
    </div>
  );
}