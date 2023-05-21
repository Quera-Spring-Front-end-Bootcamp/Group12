import { Flex, Text } from '@mantine/core';
import Card from '../../components/Card';
import AuthLayout from '../../layout/AuthLayout';

const ForgetMessage = () => (
  <AuthLayout loginPage={false}>
    <Card
      miw="402px"
      shadow="0px 12px 50px rgba(0, 0, 0, 0.18)"
      radius="20px"
      p="24px"
    >
      <Flex direction="column" align="center" justify="center">
        <Text fz="32px" fw="600">
            فراموشی رمز عبور
        </Text>
        <Text fz="14px" fw="400" mt="30px">
            لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
            کنید.
        </Text>
      </Flex>
    </Card>
  </AuthLayout>
);

export default ForgetMessage;
