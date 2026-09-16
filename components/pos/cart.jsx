import React from "react";
import CartItem from "./cart-item";
import OrderSummary from "./order-summary";

export default function Cart({
  cartItems,
  subtotal,
  tax,
  total,
  paymentMethods,
  selectedPayment,
  onSelectPayment,
  onClearCart,
  onCheckout,
}) {
  return (
    <div className="flex w-80 shrink-0 flex-col border-l border-[#ECE3D8] bg-white">
      <div className="flex items-center justify-between border-b border-[#ECE3D8] px-4 py-3.5">
        <h2 className="font-semibold text-[#241C14]">Cart</h2>
        <button
          onClick={onClearCart}
          className="rounded-lg bg-[#B33A1F]/8 px-2.5 py-1 text-xs text-[#B33A1F] hover:bg-[#B33A1F]/15"
        >
          Clear all
        </button>
      </div>

      {/* Customer Lookup */}
      <div className="border-b border-[#ECE3D8] px-4 py-3">
        <input
          placeholder="Customer phone / name (optional)"
          className="w-full rounded-xl border border-[#ECE3D8] px-3 py-2 text-xs text-[#241C14] outline-none"
        />
      </div>

      {/* Items List */}
      <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Order Summary Component */}
      <OrderSummary
        subtotal={subtotal}
        tax={tax}
        total={total}
        paymentMethods={paymentMethods}
        selectedPayment={selectedPayment}
        onSelectPayment={onSelectPayment}
        onCheckout={onCheckout}
      />
    </div>
  );
}