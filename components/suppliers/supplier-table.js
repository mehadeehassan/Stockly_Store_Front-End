const PURCHASE_ORDERS = [
  { id: "po1001", supplier: "City Wholesale Traders", items: 4, total: 12400, status: "received", date: "18 Aug 2026" },
  { id: "po1002", supplier: "Green Valley Farms", items: 2, total: 5600, status: "pending", date: "20 Aug 2026" },
  { id: "po1003", supplier: "Dhaka Dairy Suppliers", items: 6, total: 21300, status: "pending", date: "22 Aug 2026" },
];

const STATUS_STYLE = {
  received: "bg-[#5B7553]/[0.12] text-[#5B7553]",
  pending: "bg-[#C98A1B]/[0.12] text-[#C98A1B]",
};

// শুধু স্ট্যাটিক ডিজাইন — "Mark Received" অ্যাকশনের কাজ পরে যুক্ত করা হবে।
export default function PurchaseOrderTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ECE3D8] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6F0]">
              {["PO ID", "Supplier", "Items", "Total", "Status", "Created", ""].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-[#8A7B6C]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PURCHASE_ORDERS.map((po) => (
              <tr key={po.id} className="border-t border-[#ECE3D8] transition-colors hover:bg-gray-50">
                <td className="px-5 py-3.5 text-xs font-semibold text-[#8140DC]">
                  #{po.id.toUpperCase()}
                </td>
                <td className="px-5 py-3.5 text-xs text-[#241C14]">{po.supplier}</td>
                <td className="px-5 py-3.5 text-xs text-[#8A7B6C]">{po.items} items</td>
                <td className="px-5 py-3.5 text-sm font-semibold text-[#241C14]">
                  ৳{po.total.toLocaleString()}
                </td>
                <td className="px-5 py-3.5">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLE[po.status]}`}>
                    {po.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-[#8A7B6C]">{po.date}</td>
                <td className="px-5 py-3.5">
                  {po.status === "pending" && (
                    <button className="rounded-xl bg-[#5B7553]/10 px-3 py-1.5 text-xs font-medium text-[#5B7553]">
                      Mark Received
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}