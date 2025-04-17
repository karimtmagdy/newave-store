import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/theme/button-design";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      font,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonClassName = cn(
      buttonVariants({ variant, size, fullWidth, font, className }),
    );

    if (asChild && React.isValidElement(children)) {
      // Type assertion to handle the className prop
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        className: cn(buttonClassName, (children.props as any).className),
        ref,
      });
    }

    return (
      <button className={buttonClassName} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

// function ButtonComponent({
//   className,
//   variant,
//   size,
//   fullWidth,
//   asChild = false,
//   ...props
// }: React.ComponentProps<"button"> &
//   VariantProps<typeof buttonVariants> & {
//     asChild?: boolean;
//   }) {
//   const Comp = asChild ? Slot : "button";

//   return (
//     <Comp
//       data-slot="button"
//       className={cn(buttonVariants({ variant, size, fullWidth, className }))}
//       {...props}
//     />
//   );
// }
ButtonComponent.displayName = "Button";
const Button = React.memo(ButtonComponent);

export { buttonVariants };

export default Button;
