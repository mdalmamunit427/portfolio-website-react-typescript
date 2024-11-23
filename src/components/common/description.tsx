import { createElement, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const titleVariants = cva(" text-sm lg:text-lg text-gray");

interface DescriptionProps extends VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  className?: string;
  as?: "p";
  underline?: boolean;
  uppercase?: boolean;
}

const Description = forwardRef<HTMLHeadingElement, DescriptionProps>(
  ({ children, className, as = "p", ...props }, ref) => {
    return createElement(
      as,
      {
        ref,
        className: cn(titleVariants(), className),
        ...props,
      },
      children
    );
  }
);

Description.displayName = "Description";

export { Description, type DescriptionProps, titleVariants };
