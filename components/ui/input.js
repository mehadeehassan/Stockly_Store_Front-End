export default function Input({ label, className = "", ...props }) {
  return (
    <div>
      {label && (
        <label className="block text-xs font-medium mb-1.5 text-[#241C14]">{label}</label>
      )}
      <input
        className={`w-full px-4 py-2.5 text-sm rounded-xl border border-[#ECE3D8] bg-white text-[#241C14] outline-none transition-colors focus:border-[#7c3aed] ${className}`}
        {...props}
      />
    </div>
  );
}