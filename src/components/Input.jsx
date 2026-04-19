import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const classes =
    "w-full px-3 py-2 rounded-md bg-[#111111] border border-[#262626] text-[#ededed] text-sm placeholder-[#525252] focus:outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6] transition-colors duration-150";

  return (
    <div className="flex flex-col gap-1.5 mb-5">
      <label className="text-xs font-medium text-[#737373] uppercase tracking-wider">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          ref={ref}
          className={`${classes} resize-none min-h-[100px]`}
          {...props}
        />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
