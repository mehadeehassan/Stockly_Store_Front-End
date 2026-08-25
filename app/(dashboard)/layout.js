import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/header";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#FAF6F0]">
      <div className="hidden shrink-0 md:flex">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}