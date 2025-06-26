import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionButtonProps extends ButtonProps {}

const ActionButton: React.FC<ActionButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      className={cn('w-full h-10 rounded-full font-semibold', className)}
    >
      {children}
    </Button>
  );
};

export default ActionButton;
