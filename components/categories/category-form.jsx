// শুধুমাত্র স্ট্যাটিক ডিজাইন — সাবমিট হ্যান্ডলিং এবং আইকন সিলেকশন পরে যুক্ত করা হবে।
// এটি <Modal title="Add Category"><CategoryForm /></Modal> এর ভেতর রেন্ডার করা হবে।
const ICONS = [
  "🌾",
  "🥛",
  "🍪",
  "🥤",
  "🧹",
  "🥦",
  "🍖",
  "🧴",
  "🥚",
  "🧀",
  "🍞",
  "🫙",
  "🧂",
  "🛒",
  "🍫",
  "🥩",
];

export default function CategoryForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
          Name
        </label>
        <input
          name="name"
          required
          className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
          Description
        </label>
        <input
          name="description"
          className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
        />
      </div>

      <div>
        <label className="mb-3 block text-xs font-medium text-[#241C14]">
          Icon
        </label>
        <div className="grid grid-cols-8 gap-2">
          {ICONS.map((ic, i) => (
            <label key={ic} className="cursor-pointer">
              <input
                type="radio"
                name="icon"
                value={ic}
                defaultChecked={i === 0}
                className="sr-only"
              />
              <div className="rounded-xl border border-[#ECE3D8] p-1.5 text-center text-2xl transition-all hover:border-[#8140DC]/50">
                {ic}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          className="flex-1 rounded-xl border border-[#ECE3D8] py-2.5 text-sm text-[#241C14]"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 rounded-xl bg-[#8140DC] py-2.5 text-sm font-semibold text-white"
        >
          Save
        </button>
      </div>
    </form>
  );
}
