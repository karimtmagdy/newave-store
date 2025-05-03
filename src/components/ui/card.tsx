import { memo } from "react";
import { cn, cva } from "@/utils/helpers";
import { TCardType } from "@/types/TCardType";

export const cardVariants = cva(
  "bg-card text-card-foreground rounded-lg border shadow-sm",
  {
    variants: {
      variant: {
        default: "border-border",
        primary: "border-primary bg-primary text-primary-foreground",
        destructive:
          "border-destructive bg-destructive text-destructive-foreground",
        outline: "border-2",
      },
      size: {
        sm: "p-3",
        default: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const CardRoot = memo(function CardRoot({
  className,
  variant,
  size,
  ...props
}: TCardType["card"]) {
  return (
    <div
      className={cn(cardVariants({ variant, size }), className)}
      {...props}
    />
  );
});

const CardTitle = memo(function CardTitle({
  title,
  className,
}: TCardType["title"]) {
  return (
    <h3
      className={cn(
        "mb-2 text-2xl leading-none font-semibold tracking-tight",
        className,
      )}
    >
      {title}
    </h3>
  );
});

const CardContent = memo(function CardContent({
  className,
  ...props
}: TCardType["content"]) {
  return <div className={cn("px-1", className)} {...props} />;
});

const CardImage = memo(function CardImage({
  src,
  alt,
  className,
  ...props
}: TCardType["image"]) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn("h-auto w-full rounded-t-lg", className)}
      {...props}
    />
  );
});

const CardDescription = memo(function CardDescription({
  description,
  className,
}: TCardType["description"]) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>
      {description}
    </p>
  );
});

const CardFooter = memo(function CardFooter({
  className,
  ...props
}: TCardType["footer"]) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
  );
});

export const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Content: CardContent,
  Image: CardImage,
  Description: CardDescription,
  Footer: CardFooter,
});
