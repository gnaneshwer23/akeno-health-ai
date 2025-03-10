
import React from 'react';
import { toast as sonnerToast, Toast, useToaster } from 'sonner';

type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: 'default' | 'destructive';
};

export const useToast = () => {
  const toast = ({ title, description, action, variant = 'default' }: ToastProps) => {
    sonnerToast(title as string, {
      description,
      action,
      className: variant === 'destructive' ? 'bg-red-50 border-red-200 text-red-900' : undefined,
    });
  };

  return { toast };
};

export const toast = ({ title, description, action, variant = 'default' }: ToastProps) => {
  sonnerToast(title as string, {
    description,
    action,
    className: variant === 'destructive' ? 'bg-red-50 border-red-200 text-red-900' : undefined,
  });
};

export const Toaster = useToaster;
