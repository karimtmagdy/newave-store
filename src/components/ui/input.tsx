import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof inputVariants> & {
    variant?: (typeof inputVariants)[];
  };
const base = [
  "flex min-w-0 border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
] as string[];
export const inputVariants = cva(base, {
  variants: {
    fullWidth: { true: "w-full" } as const,
    shape: {
      default: "rounded-md",
      curved: "rounded-lg",
      rounded: "rounded-xl",
      pill: "rounded-full",
      square: "rounded-none",
    } as const,
    hight: {
      default: "h-9",
      sm: "h-8",
      lg: "h-10",
    },
  },
  defaultVariants: {
    shape: "default",
    hight: "default",
  },
});

function InputComponent({
  className,
  type,
  fullWidth,
  hight,
  shape,
  ...props
}: React.ComponentProps<"input"> & InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({ fullWidth, hight, shape }),
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input px-3 py-1",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}
const Input = React.memo(InputComponent);
export default Input;
