import * as React from "react";
import { cn } from "@/lib/helper";
// import { ButtonVariants, type ButtonProps } from "@/types/TButtonType";
import { cva, type VariantProps } from "class-variance-authority";
// export type ButtonVariants = VariantProps<typeof button>;
import { Slot } from "@radix-ui/react-slot";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  asChild?: boolean;
  dataAttributes?: Record<string, string>;
  onClick?: React.MouseEventHandler<HTMLButtonElement | void>; //<void>; // React.MouseEventHandler<HTMLButtonElement> | undefined;
}

// type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
//   ButtonVariants & {
//     dataAttributes?: Record<string, string>;
//   };

export const ButtonVariants = cva([""], {
  variants: {
    icon: {
      1: "h-6 w-6",
      2: "h-7 w-7",
      3: "h-8 w-8",
      4: "h-9 w-9",
      5: "h-10 w-10",
    },
    size: {
      default: "h-9 px-4 py-2 has-[>svg]:px-2.5",
      xs: "h-7 px-2 py-0.5 has-[>svg]:px-1.5",
      sm: "h-8 px-3 has-[>svg]:px-2",
      lg: "h-10 px-8 has-[>svg]:px-4",
      // xl: "h-12 px-8 py-2.5",
    },
    shape: {
      default: "rounded-md",
      square: "rounded-lg",
      curved: "rounded-xl",
      circle: "rounded-full aspect-square p-0",
    },
    align: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
    fullWidth: {
      true: "w-full",
    },
    font: {
      normal: "normal-case",
      lower: "lowercase",
      upper: "uppercase",
      capitalize: "capitalize",
    },
    variant: {
      danger: "bg-danger text-primary-foreground hover:bg-danger/80 shadow-sm",
      warning: "bg-warning text-primary-foreground hover:bg-warning/90",
      soft: "bg-soft text-primary-foreground hover:bg-soft/90",
      success: "bg-success text-primary-foreground hover:bg-success/90",
      muted: "bg-muted text-muted-foreground hover:bg-muted/50",
      default: "bg-foreground text-background  hover:bg-foreground/90",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      destructive:
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline:
        "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary:
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    },
    border: {
      default: "border border-border",
      none: "border-none",
      dashed: "border border-dashed",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "square",
    align: "center",
    // size:'default'
  },
});

// const Slot = React.forwardRef<HTMLSpanElement, any>(
//   ({ children, ...props }, ref) => (
//     <span ref={ref} {...props}>
//       {children}
//     </span>
//   ),
// );

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size = "default",
      icon,
      shape,
      align,
      font,
      fullWidth,
      border,
      onClick,
      asChild = false,
      dataAttributes,
      ...props
    },
    ref,
  ) => {
    const applied = {
      variant,
      shape,
      align,
      font,
      border,
      ...(icon ? { icon } : { size, fullWidth }),
    };
    console.log("Button rendered");
    const Comp = asChild ? Slot : "button";
    const dataProps: Record<string, string> = {};
    if (dataAttributes) {
      Object.entries(dataAttributes).forEach(([key, value]) => {
        dataProps[`data-${key}`] = value;
      });
    }
    return (
      <Comp
        className={cn(ButtonVariants(applied), className)}
        ref={ref}
        onClick={onClick}
        aria-label={icon ? "Icon button" : undefined}
        {...dataProps}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
// Button.whyDidYouRender = true;
export default React.memo(Button);

//  [&_svg:not([class*='size-'])]:size-4
