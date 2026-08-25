import React from "react";

const RECENT_SALES = [
  { id: "s1024", customer: "Rahim Uddin", cashier: "Nadia", items: 4, total: 1250.0, method: "cash", status: "completed" },
  { id: "s1023", customer: "—", cashier: "Nadia", items: 2, total: 340.5, method: "card", status: "completed" },
  { id: "s1022", customer: "Karim Sheikh", cashier: "Tanvir", items: 7, total: 2180.0, method: "cash", status: "refunded" },
  { id: "s1021", customer: "—", cashier: "Nadia", items: 1, total: 90.0, method: "cash", status: "voided" },
  { id: "s1020", customer: "Fatima Begum", cashier: "Tanvir", items: 5, total: 1560.75, method: "mobile", status: "completed" },
];

const STATUS_STYLE = {
  completed: "bg-[#5B7553]/[0.12] text-[#5B7553]",
  refunded: "bg-[#C98A1B]/[0.12] text-[#C98A1B]",
  voided: "bg-[#B33A1F]/[0.12] text-[#B33A1F]",
};

export default function RecentSales() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ECE3D8] bg-white">
      <div className="border-b border-[#ECE3D8] px-5 py-4">
        <h2 className="text-base font-semibold text-[#241C14]">
          Recent Transactions
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#FAF6F0]">
              {["Order ID", "Customer", "Cashier", "Items", "Total", "Method", "Status"].map(
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
            {RECENT_SALES.map((s) => (
              <tr
                key={s.id}
                className="border-t border-[#ECE3D8] transition-colors hover:bg-gray-50"
              >
                <td className="px-5 py-3.5">
                  <span className="text-xs font-semibold text-[#8140DC]">
                    #{s.id.toUpperCase()}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-xs text-[#241C14]">
                  {s.customer}
                </td>
                <td className="px-5 py-3.5 text-xs text-[#8A7B6C]">
                  {s.cashier}
                </td>
                <td className="px-5 py-3.5 text-xs text-[#8A7B6C]">
                  {s.items} items
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-sm font-semibold text-[#241C14]">
                    ৳ {s.total.toFixed(2)}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span className="text-xs capitalize text-[#8A7B6C]">
                    {s.method}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLE[s.status]}`}
                  >
                    {s.status[0].toUpperCase() + s.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}