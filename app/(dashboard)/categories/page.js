import CategoryCard from "@/components/categories/category-card";
import { Plus } from "lucide-react";

const CATEGORIES = [
  {
    id: "c1",
    name: "Grocery",
    icon: "🌾",
    productCount: 18,
    description: "Rice, lentils, staples",
  },
  {
    id: "c2",
    name: "Dairy",
    icon: "🥛",
    productCount: 9,
    description: "Milk, cheese, butter",
  },
  {
    id: "c3",
    name: "Snacks",
    icon: "🍪",
    productCount: 14,
    description: "Chips, biscuits, cookies",
  },
  {
    id: "c4",
    name: "Beverages",
    icon: "🥤",
    productCount: 11,
    description: "Tea, juice, soft drinks",
  },
  {
    id: "c5",
    name: "Household",
    icon: "🧹",
    productCount: 7,
    description: "Cleaning & home essentials",
  },
  {
    id: "c6",
    name: "Produce",
    icon: "🥦",
    productCount: 13,
    description: "Fresh fruits & vegetables",
  },
];

export default function CategoriesPage() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#241C14]">Categories</h1>
          <p className="mt-0.5 text-sm text-[#8A7B6C]">
            {CATEGORIES.length} categories
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-[#8140DC] px-4 py-2.5 text-sm font-semibold text-white">
          <Plus size={15} /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>

      {/* শুধুমাত্র ডিজাইনের জন্য — মডাল খোলার স্টেট (যেমন: editingCategory) যুক্ত করার পর conditional rendering ব্যবহার করে দেখাবেন। */}
      {/* <Modal title="Add Category">
       <CategoryForm />
       </Modal> */}
    </div>
  );
}
