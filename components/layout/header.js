import { Menu, Bell, ChevronDown } from "lucide-react";
export default function Header() {
  return (
    <header className="flex shrink-0 items-center gap-4 border-b border-[#ECE3D8] bg-white px-6 py-3.5">
      <button className="rounded-lg p-1.5 transition-colors hover:bg-gray-100 md:hidden">
        <Menu size={20} className="text-[#241C14]" />
      </button>

      <div className="flex-1" />

      <button className="relative rounded-xl p-2 transition-colors hover:bg-gray-50">
        <Bell size={18} className="text-[#8A7B6C]" />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#B33A1F]" />
      </button>

      <div className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-1.5 transition-colors hover:bg-gray-50">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#8140DC]/15 text-xs font-bold text-[#8140DC]">
          A
        </div>
        <span className="hidden text-sm font-medium text-[#241C14] sm:block">
          Admin User
        </span>
        <ChevronDown size={14} className="text-[#8A7B6C]" />
      </div>
    </header>
  );
}