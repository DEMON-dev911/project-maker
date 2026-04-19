const Button = ({ children, variant = "primary", ...props }) => {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6]";

  const variants = {
    primary: "bg-[#3b82f6] hover:bg-[#2563eb] text-white",
    secondary:
      "bg-[#1a1a1a] hover:bg-[#262626] text-[#ededed] border border-[#262626]",
    ghost: "text-[#737373] hover:text-[#ededed] hover:bg-[#1a1a1a]",
    danger: "bg-[#1a1a1a] hover:bg-[#ef4444]/10 text-[#ef4444] border border-[#262626] hover:border-[#ef4444]/30",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
