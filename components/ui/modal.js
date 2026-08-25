export default function Modal({ title, subtitle, maxWidth = "max-w-lg", children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div
        className={`max-h-[85vh] w-full ${maxWidth} overflow-hidden rounded-2xl border border-[#ECE3D8] bg-white shadow-2xl`}
      >
        <div className="border-b border-[#ECE3D8] px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#241C14]">{title}</h2>
            <button className="rounded-lg p-1.5 text-[#8A7B6C] hover:bg-gray-100">
              ✕
            </button>
          </div>
          {subtitle && (
            <p className="mt-0.5 text-xs text-[#8A7B6C]">{subtitle}</p>
          )}
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">{children}</div>
      </div>
    </div>
  );
}