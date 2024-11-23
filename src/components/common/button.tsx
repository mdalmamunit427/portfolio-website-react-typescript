import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "rounded-[8px] font-semibold leading-normal tracking-[0.5px] transition-colors h-fit w-fit",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary/90",
        secondary: "bg-secondary text-white hover:bg-secondary/90",
        outline:
          "border-2 border-secondary text-secondary hover:bg-secondary/10",
      },
      size: {
        sm: "text-[12px] px-[30px] py-[8px]",
        md: "text-[16px] px-[40px] py-[14px]",
        lg: "text-[18px] px-[26px] py-[13px] md:text-[12px] md:px-[30px] md:py-[8px] lg:text-[16px] lg:px-[40px] lg:py-[14px] xl:text-[18px] xl:px-[50px] xl:py-[18px]",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, fullWidth, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps, buttonVariants };
