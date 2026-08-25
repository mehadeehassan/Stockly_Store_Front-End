import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage = 1,
  totalPages = 5,
  totalItems = 47,
  pageSize = 10,
}) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-between gap-3 border-t border-[#ECE3D8] px-5 py-3.5 sm:flex-row">
      <p className="text-xs text-[#8A7B6C]">
        Showing <span className="font-medium text-[#241C14]">{start}</span>–
        <span className="font-medium text-[#241C14]">{end}</span> of{" "}
        <span className="font-medium text-[#241C14]">{totalItems}</span>
      </p>

      <div className="flex items-center gap-1.5">
        <button
          disabled={currentPage === 1}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#ECE3D8] text-[#8A7B6C] disabled:opacity-40"
        >
          <ChevronLeft size={14} />
        </button>

        {pages.map((p) => (
          <button
            key={p}
            className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-medium ${
              p === currentPage
                ? "bg-[#8140DC] text-white"
                : "border border-[#ECE3D8] text-[#8A7B6C] hover:bg-gray-50"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#ECE3D8] text-[#8A7B6C] disabled:opacity-40"
        >
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}