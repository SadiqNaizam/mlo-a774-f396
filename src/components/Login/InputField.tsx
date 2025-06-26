import React from 'react';
import { cn } from '@/lib/utils';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string; // Used for placeholder and accessibility
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type = 'text', className, ...props }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={label}
        {...props}
        className={cn(
          'w-full border-b border-gray-400 bg-transparent py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-0',
          className
        )}
      />
    </div>
  );
};

export default InputField;
