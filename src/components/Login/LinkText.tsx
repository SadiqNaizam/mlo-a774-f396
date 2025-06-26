import React from 'react';
import { cn } from '@/lib/utils';

interface LinkTextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const LinkText: React.FC<LinkTextProps> = ({ children, className, ...props }) => {
  return (
    <a
      {...props}
      href={props.href || '#'}
      className={cn('cursor-pointer text-sm font-medium text-primary hover:underline', className)}
    >
      {children}
    </a>
  );
};

export default LinkText;
