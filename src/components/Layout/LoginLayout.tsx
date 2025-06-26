import React from 'react';
import { cn } from '@/lib/utils';

interface LoginLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children, className }) => {
  return (
    <main className={cn("flex flex-col items-center justify-center min-h-screen bg-blue-500", className)}>
      {children}
    </main>
  );
};

export default LoginLayout;
