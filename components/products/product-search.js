import React from "react";
import { Search } from "lucide-react";

export default function ProductSearch({ value, onChange }) {
  return (
    <div className="relative">
      <Search
        size={14}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A7B6C]"
      />
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder="Search products…"
        className="w-60 rounded-xl border border-[#ECE3D8] bg-white py-2 pl-8 pr-4 text-sm outline-none focus:border-[#8140DC]"
      />
    </div>
  );
}