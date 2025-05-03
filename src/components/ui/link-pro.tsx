import { NavLink } from "react-router";
import React, { memo } from "react";
import { cn } from "@/utils/helpers";
import { LinkProType } from "@/types/TLinkType";

const LinkPro = React.forwardRef<HTMLAnchorElement, LinkProType>(
  (
    {
      className,
      style,
      activeClassName,
      pendingClassName,
      transitioningClassName,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <NavLink
        ref={ref}
        {...props}
        end={true}
        className={({ isActive, isPending, isTransitioning }) => {
          // Handle function-based className
          const baseClasses =
            typeof className === "function"
              ? className({ isActive, isPending, isTransitioning })
              : className;

          return cn(
            baseClasses,
            "flex items-center gap-2 transition-colors duration-300 ease-in-out [&_svg]:h-4 [&_svg]:w-4",
            isActive ? activeClassName || "active" : "",
            isPending ? pendingClassName || "pending" : "",
            isTransitioning
              ? transitioningClassName || "transitioning animate-pulse"
              : "",
          );
        }}
        style={({ isActive, isPending, isTransitioning }) => ({
          ...(typeof style === "function"
            ? style({ isActive, isPending, isTransitioning })
            : style),
        })}
      >
        {children}
      </NavLink>
    );
  },
);

export default memo(LinkPro);
