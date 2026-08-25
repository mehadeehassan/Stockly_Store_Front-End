import React from "react";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 shrink-0 rounded-lg bg-[#ECE3D8]" />
      <div className="min-w-0 flex-1">
        <div className="truncate text-xs font-medium text-[#241C14]">
          {item.name}
        </div>
        <div className="text-xs text-[#8A7B6C]">
          ৳{item.price} × {item.qty}
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <button 
          onClick={() => onDecrease?.(item.id)}
          className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FAF6F0] text-[#8A7B6C] hover:bg-[#ECE3D8]"
        >
          <Minus size={12} />
        </button>
        <span className="w-5 text-center text-xs font-semibold text-[#241C14]">
          {item.qty}
        </span>
        <button 
          onClick={() => onIncrease?.(item.id)}
          className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#FAF6F0] text-[#8A7B6C] hover:bg-[#ECE3D8]"
        >
          <Plus size={12} />
        </button>
        <button 
          onClick={() => onRemove?.(item.id)}
          className="ml-1 flex h-6 w-6 items-center justify-center rounded-lg text-[#B33A1F] hover:bg-[#B33A1F]/10"
        >
          <Trash2 size={12} />
        </button>
      </div>
    </div>
  );
}