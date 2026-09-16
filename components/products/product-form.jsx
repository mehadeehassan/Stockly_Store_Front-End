import Modal from "@/components/ui/modal";

export default function ProductForm() {
  return (
    <Modal title="Add Product">
      <form className="space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
            Product Name
          </label>
          <input
            className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
            placeholder="e.g. Basmati Rice 5kg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              SKU / Code
            </label>
            <input className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              Barcode
            </label>
            <input className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]" />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
            Category
          </label>
          <select className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none">
            <option>Grocery</option>
            <option>Dairy</option>
            <option>Snacks</option>
            <option>Beverages</option>
            <option>Household</option>
            <option>Produce</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              Purchase Price (৳)
            </label>
            <input
              type="number"
              className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              Sale Price (৳)
            </label>
            <input
              type="number"
              className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              Stock Qty
            </label>
            <input
              type="number"
              className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              Reorder Threshold
            </label>
            <input
              type="number"
              className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
              Unit
            </label>
            <select className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none">
              <option>pcs</option>
              <option>kg</option>
              <option>liter</option>
              <option>pack</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
            Image URL
          </label>
          <input
            type="url"
            className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            className="flex-1 rounded-xl border border-[#ECE3D8] py-2.5 text-sm font-medium text-[#241C14]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-xl bg-[#8140DC] py-2.5 text-sm font-semibold text-white"
          >
            Save Product
          </button>
        </div>
      </form>
    </Modal>
  );
}