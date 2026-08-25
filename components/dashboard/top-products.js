import React from "react";
import { Package } from "lucide-react";

const TOP_PRODUCTS = [
  { id: "tp1", name: "Miniket Rice 25kg", sold: 142, revenue: 21300 },
  { id: "tp2", name: "Soyabean Oil 5L", sold: 98, revenue: 16170 },
  { id: "tp3", name: "Flour (Ata) 2kg", sold: 85, revenue: 9350 },
  { id: "tp4", name: "Lentil (Masoor) 1kg", sold: 64, revenue: 8960 },
];

export default function TopProducts() {
  return (
    <div className="rounded-2xl border border-[#ECE3D8] bg-white p-5">
      <h2 className="mb-4 text-base font-semibold text-[#241C14]">
        Top Selling Products
      </h2>
      <div className="space-y-4">
        {TOP_PRODUCTS.map((product) => (
          <div key={product.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8140DC]/10 text-[#8140DC]">
                <Package size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#241C14]">{product.name}</p>
                <p className="text-xs text-[#8A7B6C]">{product.sold} units sold</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-[#241C14]">
              ৳ {product.revenue.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}