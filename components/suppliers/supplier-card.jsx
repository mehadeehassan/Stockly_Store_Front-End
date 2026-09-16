import { Truck, Edit2, ShoppingCart } from "lucide-react";

// শুধু স্ট্যাটিক ডিজাইন — edit/create-PO ক্লিক হ্যান্ডলারের কাজ পরে যুক্ত করা হবে।

export default function SupplierCard({ supplier }) {
  const s = supplier;
  return (
    <div className="rounded-2xl border border-[#ECE3D8] bg-white p-5">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8140DC]/10">
            <Truck size={18} className="text-[#8140DC]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#241C14]">{s.name}</div>
            <div className="text-xs text-[#8A7B6C]">
              {s.contact} · {s.phone}
            </div>
          </div>
        </div>
        <button className="rounded-lg p-1.5 hover:bg-gray-100">
          <Edit2 size={14} className="text-[#8A7B6C]" />
        </button>
      </div>

      <div className="mb-3 text-xs text-[#8A7B6C]">{s.address}</div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4 text-xs">
          <div>
            <span className="text-[#8A7B6C]">Orders: </span>
            <span className="font-semibold text-[#241C14]">{s.orderCount}</span>
          </div>
          <div>
            <span className="text-[#8A7B6C]">Balance: </span>
            <span
              className={`font-semibold ${
                s.balance > 0 ? "text-[#B33A1F]" : "text-[#5B7553]"
              }`}
            >
              ৳{s.balance.toLocaleString()}
            </span>
          </div>
        </div>
        <button className="flex items-center gap-1.5 rounded-xl bg-[#8140DC]/10 px-3 py-1.5 text-xs font-medium text-[#8140DC]">
          <ShoppingCart size={12} /> Create PO
        </button>
      </div>
    </div>
  );
}