export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`w-full py-3 text-sm font-semibold rounded-xl text-white bg-[#7c3aed] hover:bg-[#6d28d9] transition-opacity ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}