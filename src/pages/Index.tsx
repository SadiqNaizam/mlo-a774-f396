import React from 'react';
import LoginLayout from '../components/Layout/LoginLayout';
import LoginCard from '../components/Login/LoginCard';

const IndexPage: React.FC = () => {
  return (
    <LoginLayout>
      <LoginCard />
    </LoginLayout>
  );
};

export default IndexPage;
