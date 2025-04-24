import { JSX } from "react";

export type ElementAndChildren = {
  path: string;
  element: JSX.Element;
  children: { path: string; element: JSX.Element }[];
} & { children: { path: string; element: JSX.Element }[] };
