import React, { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, children, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-gray-800">{label}</label>
        )}
        <select
          {...props}
          ref={ref}
          className={`px-4 py-2 border rounded-md bg-white/15 focus:outline-none ${
            error ? "border-red-500" : "border-white/25"
          } ${className}`}
        >
          {children}
        </select>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
