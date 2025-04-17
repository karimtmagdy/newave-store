import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  cva as createVariants,
  type VariantProps,
} from "class-variance-authority";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const cva = createVariants;
export type { VariantProps };
