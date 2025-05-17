import * as React from "react";
import { cn } from "~/lib/utils";
import { ButtonVariants, type ButtonProps } from "~/types/IButtonType";

const Slot = React.forwardRef<HTMLSpanElement, any>(
  ({ children, ...props }, ref) => (
    <span ref={ref} {...props}>
      {children}
    </span>
  ),
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      icon,
      shape,
      align,
      font,
      fullWidth,
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
      ...(icon ? { icon } : { size, fullWidth }),
    };
    const Comp = asChild ? Slot : "button";
    const dataProps: Record<string, string> = {};
    if (dataAttributes) {
      Object.entries(dataAttributes).forEach(([key, value]) => {
        dataProps[`data-${key}`] = value;
      });
    }
    return (
      <Comp
        className={cn(ButtonVariants(applied) , className)}
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

export default Button; //React.memo();
