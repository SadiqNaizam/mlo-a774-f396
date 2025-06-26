import React, { useState } from 'react';
import InputField from './InputField';
import ActionButton from './ActionButton';
import LinkText from './LinkText';

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., API call)
    console.log('Login attempt with:', { email, password });
  };

  return (
    <div className="w-96 rounded-md bg-card px-8 py-10 text-card-foreground shadow-md">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Welcome
      </h1>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <div className="space-y-6">
          <InputField
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="text-left -mt-2">
           <LinkText href="#" className="text-sm font-normal text-muted-foreground hover:text-primary">
              Forgot Password
           </LinkText>
        </div>

        <div className="pt-2">
          <ActionButton type="submit">
            Login
          </ActionButton>
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <LinkText href="#">
          SignUp
        </LinkText>
      </p>
    </div>
  );
};

export default LoginCard;
