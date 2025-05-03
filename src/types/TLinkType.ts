import { NavLinkProps } from "react-router-dom";

export type LinkProType = Omit<NavLinkProps, "className" | "style"> & {
  className?:
    | string
    | ((props: {
        isActive: boolean;
        isPending: boolean;
        isTransitioning: boolean;
      }) => string);
      activeClassName?: string;
      pendingClassName?: string;
      transitioningClassName?: string;
  style?:
    | React.CSSProperties
    | ((props: {
        isActive: boolean;
        isPending: boolean;
        isTransitioning: boolean;
      }) => React.CSSProperties);
};
