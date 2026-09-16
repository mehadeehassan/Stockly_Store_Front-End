import React from "react";
import { Search } from "lucide-react";

export default function ProductSearch() {
  return (
    <div className="flex gap-3 border-b border-[#ECE3D8] bg-white px-4 pb-3 pt-4">
      <div className="relative flex-1">
        <Search
          size={15}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A7B6C]"
        />
        <input
          placeholder="Search products…"
          className="w-full rounded-xl border border-[#ECE3D8] py-2 pl-9 pr-4 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
        />
      </div>
      <input
        placeholder="Scan barcode…"
        className="w-44 rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
      />
    </div>
  );
}