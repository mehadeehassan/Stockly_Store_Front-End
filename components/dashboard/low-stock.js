import React from "react";

const LOW_STOCK = [
  { id: "p1", name: "Basmati Rice 5kg", qty: 3, min: 10, status: "low" },
  { id: "p2", name: "Cooking Oil 1L", qty: 0, min: 15, status: "out" },
  { id: "p3", name: "Sugar 1kg", qty: 5, min: 20, status: "low" },
  { id: "p4", name: "Milk Powder 400g", qty: 2, min: 10, status: "low" },
];

export default function LowStockAlerts() {
  return (
    <div className="rounded-2xl border border-[#ECE3D8] bg-white p-5">
      <h2 className="mb-4 text-base font-semibold text-[#241C14]">
        Low Stock Alerts
      </h2>
      <div className="space-y-3">
        {LOW_STOCK.map((p) => (
          <div key={p.id} className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-[#ECE3D8]" />
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-medium text-[#241C14]">
                {p.name}
              </div>
              <div className="text-xs text-[#8A7B6C]">
                Qty: {p.qty} / Min: {p.min}
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                p.status === "out"
                  ? "bg-[#B33A1F]/12 text-[#B33A1F]"
                  : "bg-[#C98A1B]/12 text-[#C98A1B]"
              }`}
            >
              {p.status === "out" ? "Out" : "Low"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}