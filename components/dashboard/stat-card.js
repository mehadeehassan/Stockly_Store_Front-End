import React from "react";

export default function StatCard({ label, value, sub, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-[#ECE3D8] bg-white p-5">
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${color}18` }}
      >
        <Icon size={18} style={{ color }} />
      </div>
      <div className="mb-0.5 text-2xl font-semibold text-[#241C14]">
        {value}
      </div>
      <div className="mb-1 text-xs font-medium text-[#8A7B6C]">{label}</div>
      <div className="text-xs text-[#8A7B6C]">{sub}</div>
    </div>
  );
}