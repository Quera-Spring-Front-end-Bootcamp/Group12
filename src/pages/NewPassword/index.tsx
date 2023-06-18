import { Flex, Text } from '@mantine/core';
import Card from '../../components/Card';
import AuthLayout from '../../layout/AuthLayout';
import PasswordInput from '../../components/PasswordInput';
import { useForm } from '@mantine/form';
import Button from '../../components/Button';
import { notifications } from '@mantine/notifications';
import myAxios from '../../helpers/myAxios';
import { useLocation, useNavigate } from 'react-router-dom';

const NewPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const inputToken = searchParams.get('token');

  const navigate = useNavigate();
  //form validation
  const form = useForm({
    initialValues: {
      password: '',
      reapeatPassword: ''
    },

    validate: {
      password: (value) => (value.length < 8 ? 'حداقل پسورد باید 8 حرف باشد' : null),
      reapeatPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null
    }
  });
  //on submit action
  async function handleClick() {
    const password = form.values.password;
    const token = inputToken;
    const data = {
      token,
      password
    };
    try {
      await myAxios.post('/auth/reset-password', data);
      navigate('/login');
    } catch (error: any) {
      notifications.show({ message: error?.response?.data?.message || error.message, color: 'red' });
    }
  }
  return (
    <AuthLayout loginPage={false}>
      <Card miw="402px" shadow="0px 12px 50px rgba(0, 0, 0, 0.18)" radius="20px" p="24px">
        <Flex direction="column" align="center" justify="center">
          <Text fz="32px" fw="600" color="#000" className="mb-8">
            رمز عبور جدید
          </Text>
          <PasswordInput
            label="رمز عبور جدید خود را وارد کنید"
            style={{ width: '100%' }}
            labelProps={{
              style: {
                fontWeight: '400',
                marginBottom: '8px',
                fontSize: '14px'
              }
            }}
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="تکرار رمز عبور"
            style={{ width: '100%' }}
            labelProps={{
              style: {
                fontWeight: '400',
                marginBottom: '8px',
                fontSize: '14px'
              }
            }}
            {...form.getInputProps('reapeatPassword')}
          />
          <Button
            h="40px"
            w="100%"
            fz="14px"
            fw="700"
            my="29px"
            type="submit"
            onClick={form.onSubmit(handleClick)}>
            ورود
          </Button>
        </Flex>
      </Card>
    </AuthLayout>
  );
};

export default NewPassword;
