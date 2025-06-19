import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-medium transition-all duration-200 shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-[#ff674d] text-white hover:bg-[#ff674d]/80 backdrop-blur-sm shadow-lg",
        outline: "border-2 border-[#23b5d3] text-[#23b5d3] bg-black/40 hover:bg-[#23b5d3]/10 shadow-lg",
        secondary: "bg-[#776bc0]/80 text-white hover:bg-[#776bc0] backdrop-blur-sm shadow-lg",  
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-10 sm:h-12 px-4 sm:px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
