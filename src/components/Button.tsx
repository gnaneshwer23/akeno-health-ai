
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'default' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className,
  icon,
  ...props
}, ref) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none overflow-hidden shadow-sm";
  
  const variants = {
    primary: "bg-health-primary text-white hover:bg-health-primary/90 focus-visible:ring-health-primary",
    secondary: "bg-health-secondary text-white hover:bg-health-secondary/90 focus-visible:ring-health-secondary",
    outline: "border border-health-primary/20 bg-transparent text-health-primary hover:bg-health-primary/5 focus-visible:ring-health-primary",
    ghost: "bg-transparent text-health-primary hover:bg-health-primary/5 focus-visible:ring-health-primary",
    default: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-400",
    link: "bg-transparent text-health-primary underline hover:text-health-primary/90 focus-visible:ring-health-primary p-0"
  };
  
  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3",
    icon: "p-2"
  };
  
  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant as keyof typeof variants],
        sizes[size as keyof typeof sizes],
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && <span className="inline-flex">{icon}</span>}
        {children}
      </span>
      <span className="absolute inset-0 z-0 overflow-hidden rounded-full">
        <span className="absolute top-1/2 left-1/2 aspect-square w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-all duration-300 group-active:w-32 group-active:opacity-20"></span>
      </span>
    </button>
  );
});

Button.displayName = "Button";

export { Button };
