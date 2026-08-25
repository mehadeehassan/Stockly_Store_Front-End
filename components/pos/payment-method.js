import React from "react";

export default function PaymentMethod({ method, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect?.(method.id)}
      className={`rounded-xl py-2 text-center transition-all ${
        isSelected
          ? "bg-[#8140DC] text-white"
          : "border border-[#ECE3D8] bg-[#FAF6F0] text-[#8A7B6C]"
      }`}
    >
      <div className="text-base leading-none">{method.icon}</div>
      <div className="mt-1 text-xs leading-tight">{method.label}</div>
    </button>
  );
}