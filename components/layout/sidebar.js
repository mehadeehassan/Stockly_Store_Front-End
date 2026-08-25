import {
  BarChart3,
  LayoutDashboard,
  LogOut,
  Package,
  Receipt,
  Settings,
  ShoppingCart,
  Tag,
  Truck,
  UserCog,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/pos", icon: ShoppingCart, label: "POS" },
  { href: "/products", icon: Package, label: "Products" },
  { href: "/categories", icon: Tag, label: "Categories" },
  { href: "/suppliers", icon: Truck, label: "Suppliers" },
  { href: "/customers", icon: Users, label: "Customers" },
  { href: "/sales", icon: Receipt, label: "Sales" },
  { href: "/reports", icon: BarChart3, label: "Reports" },
  { href: "/staff", icon: UserCog, label: "Staff" },
  { href: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-[#1C1410]">
      {/* Logo */}
      <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
        <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src="/stocklyLogo.png"
            alt="Stockly logo"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div>
          <div className="font-bold uppercase text-[#f7f0fa]">
            Stockly Store
          </div>
          <div className="text-xs text-[#8A7B6C]">Powered by Stockly Inc.</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {NAV.map((item, i) => {
          const Icon = item.icon;
          const isActive = i === 0; // Now active page is dashboard 
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                isActive
                  ? "bg-[#8140DC]/18 text-[#c9a6f5]"
                  : "text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="border-t border-white/10 px-3 pb-4 pt-3">
        <div className="flex items-center gap-3 rounded-xl px-3 py-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8140DC]/30 text-xs font-bold text-[#c9a6f5]">
            A
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-[#FAF6F0]">
              Admin User
            </div>
            <div className="truncate text-xs text-[#8A7B6C]">Administrator</div>
          </div>
          <button className="rounded-lg p-1.5 transition-colors hover:bg-white/10">
            <LogOut size={14} className="text-[#8A7B6C]" />
          </button>
        </div>
      </div>
    </aside>
  );
}
