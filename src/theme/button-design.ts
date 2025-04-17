import { cva } from "class-variance-authority";

const base = [
  "inline-flex items-center cursor-pointer justify-center gap-x-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
] as string[];
export const buttonVariants = cva(base, {
  variants: {
    fullWidth: { true: "w-full" } as const,
    shape: {
      default: "rounded-md",
      curved: "rounded-lg",
      rounded: "rounded-xl",
      pill: "rounded-full",
      square: "rounded-none",
    } as const,
    font: {
      normal: "normal-case",
      lower: "lowercase",
      upper: "uppercase",
      capitalize: "capitalize",
    } as const,
    variant: {
      default:
        "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive:
        "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary:
        "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost:
        "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
      success:
        "bg-success text-success-foreground shadow-xs hover:bg-success/80",
    } as const,
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-3",
      sm: "h-8 gap-x-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-10 px-6 has-[>svg]:px-4",
      icon: "h-9 w-9",
    } as const,
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    shape: "default",
  },
});
