import React from "react";
import PaymentMethod from "./payment-method";

export default function OrderSummary({
  subtotal,
  tax,
  total,
  paymentMethods,
  selectedPayment,
  onSelectPayment,
  onCheckout,
}) {
  return (
    <div className="space-y-3 border-t border-[#ECE3D8] px-4 py-4">
      {/* Discount input */}
      <div className="flex items-center gap-2">
        <select className="rounded-lg border border-[#ECE3D8] bg-[#FAF6F0] px-2 py-1.5 text-xs text-[#241C14] outline-none">
          <option>% Off</option>
          <option>৳ Off</option>
        </select>
        <input
          placeholder="Discount"
          className="flex-1 rounded-lg border border-[#ECE3D8] px-3 py-1.5 text-xs text-[#241C14] outline-none"
        />
      </div>

      {/* Calculations */}
      <div className="space-y-1.5 text-xs text-[#8A7B6C]">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (5%)</span>
          <span>৳{tax.toFixed(2)}</span>
        </div>
        <div className="mt-2 flex justify-between border-t border-[#ECE3D8] pt-2 text-sm font-bold text-[#241C14]">
          <span>Total</span>
          <span>৳{total.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Options */}
      <div className="grid grid-cols-4 gap-1.5">
        {paymentMethods.map((pm) => (
          <PaymentMethod
            key={pm.id}
            method={pm}
            isSelected={selectedPayment === pm.id}
            onSelect={onSelectPayment}
          />
        ))}
      </div>

      <input
        placeholder="Cash received…"
        className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-sm text-[#241C14] outline-none"
      />

      <button
        onClick={onCheckout}
        className="w-full rounded-xl bg-[#8140DC] py-3 text-sm font-semibold text-white hover:bg-[#8140DC]/90"
      >
        Checkout · ৳{total.toFixed(2)}
      </button>
    </div>
  );
}