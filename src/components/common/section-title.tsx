import { createElement, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const titleVariants = cva("font-bold text-dark ", {
  variants: {
    size: {
      sm: "xl:text-[20] ",
      md: "xl:text-2xl text-xl",
      lg: "lg:text-5xl md:text-4xl text-5xl",
      xl: "text-5xl lg:text-6xl  xl:text-7xl",
    },
    alignment: {
      left: "text-left",
      center: "text-center mx-auto",
      right: "text-right ml-auto",
    },
    color: {
      dark: "text-dark",
      light: "text-white",
    },
  },
  defaultVariants: {
    size: "lg",
    alignment: "left",
    color: "dark",
  },
});

interface SectionTitleProps extends VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  underline?: boolean;
  uppercase?: boolean;
}

const SectionTitle = forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (
    { children, className, as = "h1", size, alignment, color, ...props },
    ref
  ) => {
    return createElement(
      as,
      {
        ref,
        className: cn(titleVariants({ size, alignment, color }), className),
        ...props,
      },
      children
    );
  }
);

SectionTitle.displayName = "SectionTitle";

export { SectionTitle, type SectionTitleProps, titleVariants };
