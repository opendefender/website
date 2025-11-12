import { cn } from "@/lib/utils"; 
import { VariantProps, cva } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent/90 glow",
        outline: "bg-transparent border border-accent text-accent hover:bg-accent/10",
      },
      size: {
        default: "h-10 py-2 px-4",
        lg: "h-12 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.7)" }}
      transition={{ duration: 0.3 }}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default Button;