import React from 'react';
import { Button as ShadcnButton } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  withArrow?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  asChild?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  to,
  href,
  onClick,
  icon,
  withArrow = false,
  isLoading = false,
  disabled = false,
  type = 'button',
  asChild = false,
}) => {
  // Map our variant names to shadcn Button variants
  const variantMap: Record<string, string> = {
    primary: 'default',
    secondary: 'secondary',
    outline: 'outline',
    ghost: 'ghost',
    link: 'link',
    destructive: 'destructive',
    default: 'default',
  };

  const mappedVariant = variantMap[variant] as any;

  // If we have a to prop, render as Link
  if (to) {
    return (
      <ShadcnButton
        variant={mappedVariant}
        size={size}
        className={cn(
          "group", 
          variant === 'primary' && "bg-health-primary hover:bg-health-secondary text-white",
          className
        )}
        disabled={disabled || isLoading}
        asChild
      >
        <Link to={to} className="flex items-center gap-2">
          {icon && <span className="inline-flex">{icon}</span>}
          <span>{children}</span>
          {withArrow && (
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          )}
        </Link>
      </ShadcnButton>
    );
  }

  // If we have an href prop, render as anchor
  if (href) {
    return (
      <ShadcnButton
        variant={mappedVariant}
        size={size}
        className={cn(
          "group", 
          variant === 'primary' && "bg-health-primary hover:bg-health-secondary text-white",
          className
        )}
        disabled={disabled || isLoading}
        asChild
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          {icon && <span className="inline-flex">{icon}</span>}
          <span>{children}</span>
          {withArrow && (
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          )}
        </a>
      </ShadcnButton>
    );
  }

  // Otherwise render as button
  return (
    <ShadcnButton
      variant={mappedVariant}
      size={size}
      className={cn(
        "group", 
        variant === 'primary' && "bg-health-primary hover:bg-health-secondary text-white",
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      asChild={asChild}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="inline-flex">{icon}</span>}
        <span>{children}</span>
        {withArrow && (
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        )}
      </div>
    </ShadcnButton>
  );
};
