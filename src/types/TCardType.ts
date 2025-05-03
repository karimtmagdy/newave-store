import { cardVariants } from "@/components/ui/card";
import { VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ImgHTMLAttributes } from "react";

export type TCardType = {
  card: HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardVariants> & {
      className?: string;
    };
  title: HTMLAttributes<HTMLHeadingElement> & {
    title: string;
    className?: string;
  };
  content: HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };
  image: ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
  };
  description: HTMLAttributes<HTMLParagraphElement> & {
    description: string;
    className?: string;
  };
  footer: HTMLAttributes<HTMLDivElement> & {
    className?: string;
  };
};
