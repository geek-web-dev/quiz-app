import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?: React.RefObject<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-slate-100 uppercase">
            {label}
          </label>
        )}
        <input
          {...props}
          ref={ref} // Attach the ref to the input
          className={`px-4 py-2 border-none rounded-md focus:ring-2 bg-white/25 focus:ring-slate-200 focus:outline-none placeholder:text-slate-500 ${
            error ? "border-red-500" : "border-gray-300"
          } ${className}`}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
