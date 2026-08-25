import { Edit2, Trash2 } from "lucide-react";

// শুধুমাত্র স্ট্যাটিক ডিজাইন — এডিট এবং ডিলিট ক্লিক হ্যান্ডলারগুলো পরে যুক্ত করা হবে।

export default function CategoryCard({ category }) {
  return (
    <div className="group relative rounded-2xl border border-[#ECE3D8] bg-white p-5 text-center transition-all hover:border-[#8140DC]/40">
      <div className="mb-3 text-4xl">{category.icon}</div>
      <div className="mb-1 text-sm font-semibold text-[#241C14]">
        {category.name}
      </div>
      <div className="text-xs text-[#8A7B6C]">
        {category.productCount} products
      </div>
      {category.description && (
        <p className="mt-1.5 line-clamp-2 text-xs text-[#8A7B6C]">
          {category.description}
        </p>
      )}

      <div className="absolute right-3 top-3 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        <button className="rounded-lg border border-[#ECE3D8] bg-white p-1.5 shadow-sm">
          <Edit2 size={12} className="text-[#8A7B6C]" />
        </button>
        <button className="rounded-lg border border-[#ECE3D8] bg-white p-1.5 shadow-sm">
          <Trash2 size={12} className="text-[#B33A1F]" />
        </button>
      </div>
    </div>
  );
}