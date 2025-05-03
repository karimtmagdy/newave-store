import React, { memo } from "react";

type ImageProps = {
  src: string | undefined;
  alt: string | undefined;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  placeholder?: boolean;
  placeholderSrc?: string;
  borderRadius?: string | number;
  onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  title?: string;
  draggable?: boolean;
  priority?: boolean;
  dataAttributes?: Record<string, string>;
  blurEffect?: boolean;
  aspectRatio?: string;
  ref?: React.Ref<HTMLImageElement>;
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      className = "",
      style = {},
      loading = "lazy",
      objectFit,
      objectPosition,
      // placeholder = false,
      // placeholderSrc,
      borderRadius,
      onError,
      onLoad,
      title,
      draggable,
      priority = false,
      dataAttributes,
      // blurEffect = false,
      aspectRatio,
      ...rest
    },
    ref,
  ) => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [hasError, setHasError] = React.useState(false);

    const combinedStyles: React.CSSProperties = {
      ...style,
      objectFit,
      objectPosition,
      borderRadius,
      aspectRatio,
      // filter: blurEffect && isLoading ? "blur(10px)" : "none",
      transition: "filter 0.3s ease-in-out",
    };

    const dataProps: Record<string, string> = {};
    if (dataAttributes) {
      Object.entries(dataAttributes).forEach(([key, value]) => {
        dataProps[`data-${key}`] = value;
      });
    }

    const handleLoad = (
      event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      // setIsLoading(false);
      onLoad?.(event);
    };

    const handleError = (
      event: React.SyntheticEvent<HTMLImageElement, Event>,
    ) => {
      // setHasError(true);
      // setIsLoading(false);
      onError?.(event);
    };

    return (
      <>
        {/* {placeholder && isLoading && !hasError && (
          <img
            src={placeholderSrc || "/api/placeholder/400/300"}
            alt="Loading placeholder"
            style={combinedStyles}
            className={`${className} placeholder-image`}
          />
        )} */}
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={combinedStyles}
          loading={priority ? "eager" : loading}
          onLoad={handleLoad}
          onError={handleError}
          title={title}
          draggable={draggable}
          {...dataProps}
          {...rest}
        />
      </>
    );
  },
);

Image.displayName = "Image";

export default memo(Image);
