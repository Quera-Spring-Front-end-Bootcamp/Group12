import { Flex, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

const AuthHeader = ({ loginPage }: { loginPage: boolean }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    loginPage ? navigate('/register') : navigate('/login');
  };

  return (
    <Flex
      mih={50}
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
      px="80px"
      pt="55px"
    >
      <Logo />
      <Flex align="center" gap="8px">
        <Text>{loginPage ? 'ثبت‌نام نکرده‌ای؟' : 'قبلا ثبت‌نام کرده‌ای؟'}</Text>
        <Button fw="700" fz="14" mr="7px" onClick={handleClick}>
          {loginPage ? 'ثبت نام' : 'ورود'}
        </Button>
      </Flex>
    </Flex>
  );
};

export default AuthHeader;
