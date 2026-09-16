import React from "react";
import { Edit2, Trash2, RefreshCw } from "lucide-react";
import ProductCard from "./product-card";
import Pagination from "@/components/ui/pagination";

const STATUS_STYLE = {
  "in-stock": { label: "In Stock", cls: "bg-[#5B7553]/[0.12] text-[#5B7553]" },
  "low-stock": { label: "Low Stock", cls: "bg-[#C98A1B]/[0.12] text-[#C98A1B]" },
  "out-of-stock": { label: "Out of Stock", cls: "bg-[#B33A1F]/[0.12] text-[#B33A1F]" },
};

export default function ProductTable({ products, onEdit, onDelete, onAdjustStock }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ECE3D8] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6F0]">
              {["Product", "SKU / Barcode", "Category", "Purchase", "Sale", "Stock", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-xs font-semibold text-[#8A7B6C]"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => {
              const status = STATUS_STYLE[p.status] || { label: p.status, cls: "bg-gray-100 text-gray-600" };
              return (
                <tr
                  key={p.id}
                  className="border-t border-[#ECE3D8] transition-colors hover:bg-gray-50"
                >
                  <td className="px-5 py-3.5">
                    <ProductCard product={p} />
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="text-xs font-medium text-[#241C14]">{p.sku}</div>
                    <div className="text-xs text-[#8A7B6C]">{p.barcode}</div>
                  </td>
                  <td className="px-5 py-3.5 text-xs text-[#8A7B6C]">
                    {p.category}
                  </td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-[#241C14]">
                    ৳{p.purchase}
                  </td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-[#8140DC]">
                    ৳{p.sale}
                  </td>
                  <td className="px-5 py-3.5 text-xs text-[#241C14]">
                    {p.stock} {p.unit}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${status.cls}`}
                    >
                      {status.label}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <button
                        title="Adjust stock"
                        onClick={() => onAdjustStock?.(p)}
                        className="rounded-lg p-1.5 transition-colors hover:bg-gray-100"
                      >
                        <RefreshCw size={14} className="text-[#8A7B6C]" />
                      </button>
                      <button
                        title="Edit product"
                        onClick={() => onEdit?.(p)}
                        className="rounded-lg p-1.5 transition-colors hover:bg-gray-100"
                      >
                        <Edit2 size={14} className="text-[#8A7B6C]" />
                      </button>
                      <button
                        title="Delete product"
                        onClick={() => onDelete?.(p.id)}
                        className="rounded-lg p-1.5 transition-colors hover:bg-red-50"
                      >
                        <Trash2 size={14} className="text-[#B33A1F]" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={1} totalPages={5} totalItems={products.length * 7} pageSize={10} />
    </div>
  );
}