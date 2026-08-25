import Modal from "@/components/ui/modal";
export default function StockAdjustment() {
  return (
    <Modal
      title="Stock Adjustment"
      subtitle="Basmati Rice 5kg · Current: 24 pcs"
      maxWidth="max-w-sm"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          <button className="rounded-xl bg-[#8140DC] py-2 text-xs font-medium capitalize text-white">
            add
          </button>
          <button className="rounded-xl border border-[#ECE3D8] bg-[#FAF6F0] py-2 text-xs font-medium capitalize text-[#8A7B6C]">
            damage
          </button>
          <button className="rounded-xl border border-[#ECE3D8] bg-[#FAF6F0] py-2 text-xs font-medium capitalize text-[#8A7B6C]">
            return
          </button>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
            Quantity
          </label>
          <input
            type="number"
            min={1}
            defaultValue={1}
            className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-[#241C14]">
            Reason
          </label>
          <input
            placeholder="e.g. Restocked from supplier"
            className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none focus:border-[#8140DC]"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 rounded-xl border border-[#ECE3D8] py-2.5 text-sm text-[#241C14]">
            Cancel
          </button>
          <button className="flex-1 rounded-xl bg-[#8140DC] py-2.5 text-sm font-semibold text-white">
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
}