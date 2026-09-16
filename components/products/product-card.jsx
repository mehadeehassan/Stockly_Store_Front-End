import React from "react";
import { Package } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#ECE3D8]">
        <Package size={16} className="text-[#8A7B6C]" />
      </div>
      <div>
        <div className="text-xs font-medium text-[#241C14]">{product.name}</div>
        <div className="text-xs text-[#8A7B6C]">{product.unit}</div>
      </div>
    </div>
  );
}