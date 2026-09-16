// শুধু স্ট্যাটিক ডিজাইন — components/ui/modal.js-এর চিল্ড্রেন হিসেবে রেন্ডার করা হয়েছে।
// ফর্মের স্টেট এবং সাবমিটের কাজ পরে যুক্ত করা হবে।

const FIELDS = [
  { name: "name", label: "Company Name" },
  { name: "contact", label: "Contact Person" },
  { name: "phone", label: "Phone" },
  { name: "email", label: "Email" },
  { name: "address", label: "Address" },
];

export default function SupplierForm() {
  return (
    <form className="space-y-4">
      {FIELDS.map((f) => (
        <div key={f.name}>
          <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
            {f.label}
          </label>
          <input
            name={f.name}
            className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
          />
        </div>
      ))}

      <div>
        <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
          Outstanding Balance (৳)
        </label>
        <input
          name="balance"
          type="number"
          defaultValue={0}
          className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
        />
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