import { Flex } from '@mantine/core';
import { ReactNode } from 'react';
import AuthHeader from '../AuthHeader';

type props = {
  children?: ReactNode;
  loginPage: boolean;
};

const AuthLayout = ({ children, loginPage }: props) => {
  const height = 'calc(100vh - 200px)';
  return (
    <>
      <AuthHeader loginPage={loginPage} />
      <Flex
        justify='center'
        align='center'
        style={{ minHeight: `${height}` }}
        direction='column'
      >
        {children}
      </Flex>
      <div
        style={{
          width: '100%',
          height: '100%',
          clipPath: 'polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)',
          background:
            'linear-gradient(269.55deg, #06846F 0.35%, #54BEE8 103.4%)',
          position: 'absolute',
          bottom: '0',
          right: '0',
          zIndex: '-1',
        }}
      />
    </>
  );
};

export default AuthLayout;
