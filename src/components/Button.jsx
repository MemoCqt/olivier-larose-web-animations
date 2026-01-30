import { cn } from "../libs/utils";

export function Button({ children, className, disabled, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md bg-blue-500 text-white",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}