import React from "react";
import { X } from "lucide-react";

export default function PaymentModal({ isOpen, onClose, total, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-[#ECE3D8] pb-3">
          <h3 className="text-lg font-semibold text-[#241C14]">Complete Payment</h3>
          <button onClick={onClose} className="text-[#8A7B6C] hover:text-[#241C14]">
            <X size={20} />
          </button>
        </div>
        <div className="py-4">
          <p className="text-sm text-[#8A7B6C]">Total Payable Amount:</p>
          <p className="text-2xl font-bold text-[#8140DC]">৳{total.toFixed(2)}</p>
        </div>
        <button
          onClick={onConfirm}
          className="w-full rounded-xl bg-[#8140DC] py-2.5 text-sm font-semibold text-white hover:bg-[#8140DC]/90"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}