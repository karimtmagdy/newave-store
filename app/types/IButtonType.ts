import { cva, type VariantProps } from "class-variance-authority";
// export type ButtonVariants = VariantProps<typeof button>;

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

export const ButtonVariants = cva(
  [
    "flex items-center overflow-hidden cursor-pointer justify-center gap-2 whitespace-nowrap  text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      icon: {
        1: "h-6 w-6",
        2: "h-7 w-7",
        3: "h-8 w-8",
        4: "h-9 w-9",
        5: "h-10 w-10",
      },
      variant: {
        danger:
          "bg-danger text-primary-foreground hover:bg-danger/80 shadow-sm",
        warning: "bg-warning text-primary-foreground hover:bg-warning/90",
        soft: "bg-soft text-primary-foreground hover:bg-soft/90",
        success: "bg-success text-primary-foreground hover:bg-success/90",
        muted: "bg-muted text-muted-foreground hover:bg-muted/80",
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-2.5",
        xs: "h-7 px-2 py-0.5 has-[>svg]:px-1.5",
        sm: "h-8 rounded-md px-3 text-xs  has-[>svg]:px-2",
        lg: "h-10 rounded-md px-8 has-[>svg]:px-4",
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
      elevation: {
        0: "shadow-none",
        1: "shadow-sm",
        2: "shadow",
        3: "shadow-md",
        4: "shadow-lg",
        5: "shadow-xl",
      },
      font: {
        normal: "normal-case",
        lower: "lowercase",
        upper: "uppercase",
        capitalize: "capitalize",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "curved",
      align: "center",
      elevation: 0,
    },
  },
);
