export default function Button({
  children,
  className = "",
  variant,
  disabled,
  ...props
}) {
  const baseStyles =
    "w-full py-3 text-sm font-semibold rounded-xl transition-all duration-200";
  const outlineStyles =
    "border border-[#E5E7EB] text-[#241C14] hover:bg-gray-50";

  return (
    <button
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variant === "outline" ? outlineStyles : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}