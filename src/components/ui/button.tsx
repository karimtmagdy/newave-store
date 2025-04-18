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
      shape,
      icon,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const applied = {
      variant,
      font,
      ...(icon ? { icon } : { size, fullWidth }),
    };

    const buttonClassName = cn(
      buttonVariants({ shape, ...applied, className }),
    );

    if (asChild && React.isValidElement(children)) {
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

ButtonComponent.displayName = "Button";
const Button = React.memo(ButtonComponent);

export { buttonVariants };

export default Button;
