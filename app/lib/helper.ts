import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
}
export const delay = (text: string, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), ms);
  });
};
