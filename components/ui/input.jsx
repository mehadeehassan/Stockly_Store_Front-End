export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm text-[#241C14]">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-[#E5E7EB] rounded-xl text-sm focus:outline-none focus:border-[#5f07d9]"
        {...props}
      />
    </div>
  );
}
