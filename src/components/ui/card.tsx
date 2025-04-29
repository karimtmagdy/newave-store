import React, { memo } from "react";
import { cn } from "@/utils/helpers";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardRoot = memo(function CardRoot({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-lg border shadow-sm",
        className,
      )}
      {...props}
    />
  );
});

interface CardTitleProps {
  title: string;
  className?: string;
}

const CardTitle = memo(function CardTitle({
  title,
  className,
}: CardTitleProps) {
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

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardContent = memo(function CardContent({
  className,
  ...props
}: CardContentProps) {
  return <div className={cn("p-6", className)} {...props} />;
});

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const CardImage = memo(function CardImage({
  src,
  alt,
  className,
  ...props
}: CardImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("h-auto w-full rounded-t-lg", className)}
      {...props}
    />
  );
});

interface CardDescriptionProps {
  description: string;
  className?: string;
}

const CardDescription = memo(function CardDescription({
  description,
  className,
}: CardDescriptionProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>
      {description}
    </p>
  );
});

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const CardFooter = memo(function CardFooter({
  className,
  ...props
}: CardFooterProps) {
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
