import React from "react";

export default function Receipt({ cartItems, subtotal, tax, total, customerName }) {
  return (
    <div className="w-72 rounded-xl border border-[#ECE3D8] bg-white p-4 font-mono text-xs shadow-sm">
      <div className="text-center font-bold text-sm mb-1">STORE RECEIPT</div>
      {customerName && <div className="text-center text-[10px] text-[#8A7B6C] mb-2">Cust: {customerName}</div>}
      <div className="border-b border-dashed border-[#ECE3D8] pb-2 mb-2">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between my-1">
            <span>{item.name} x{item.qty}</span>
            <span>৳{(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>৳{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (5%):</span>
          <span>৳{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-sm border-t border-dashed border-[#ECE3D8] pt-1 mt-1">
          <span>Total:</span>
          <span>৳{total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}