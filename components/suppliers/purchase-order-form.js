import { Plus, X } from "lucide-react";

// শুধু স্ট্যাটিক ডিজাইন — লাইন-আইটেম অ্যাড/রিমুভ এবং সাবমিটের কাজ
// পরে যুক্ত করা হবে।

const PO_ITEMS = [
  { id: "1", product: "Basmati Rice 5kg", qty: 20, cost: 520 },
  { id: "2", product: "Cooking Oil 1L", qty: 30, cost: 150 },
];

export default function PurchaseOrderForm({ supplierName = "Supplier" }) {
  return (
    <div>
      <p className="mb-4 text-xs text-[#8A7B6C]">Supplier: {supplierName}</p>

      <div className="max-h-72 space-y-3 overflow-y-auto">
        {PO_ITEMS.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <select
              defaultValue={item.product}
              className="flex-1 rounded-lg border border-[#ECE3D8] px-2 py-1.5 text-xs text-[#241C14] outline-none"
            >
              <option>{item.product}</option>
            </select>
            <input
              type="number"
              min={1}
              defaultValue={item.qty}
              placeholder="Qty"
              className="w-20 rounded-lg border border-[#ECE3D8] px-2 py-1.5 text-xs text-[#241C14] outline-none"
            />
            <input
              type="number"
              min={0}
              defaultValue={item.cost}
              placeholder="Cost"
              className="w-24 rounded-lg border border-[#ECE3D8] px-2 py-1.5 text-xs text-[#241C14] outline-none"
            />
            <button className="text-[#B33A1F]">
              <X size={14} />
            </button>
          </div>
        ))}

        <button className="flex items-center gap-1.5 rounded-xl bg-[#8140DC]/8 px-3 py-2 text-xs text-[#8140DC]">
          <Plus size={12} /> Add Item
        </button>
      </div>

      <div className="mt-5 flex gap-3 border-t border-[#ECE3D8] pt-4">
        <button
          type="button"
          className="flex-1 rounded-xl border border-[#ECE3D8] py-2.5 text-sm text-[#241C14]"
        >
          Cancel
        </button>
        <button className="flex-1 rounded-xl bg-[#8140DC] py-2.5 text-sm font-semibold text-white">
          Submit PO
        </button>
      </div>
    </div>
  );
}