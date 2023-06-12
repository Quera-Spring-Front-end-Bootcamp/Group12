import { Flex, Text, useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/PasswordInput';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import AuthLayout from '../../layout/AuthLayout';
import myAxios from '../../helpers/myAxios';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import userSlice from '../../data/userSlice/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [err, setErr] = useState('');
  const { setUser } = userSlice.actions;
  const dispatch = useDispatch();
  const { colorScheme } = useMantineColorScheme();

  //Email or username and password check
  const errorHandle = (error: any) => {
    if (error?.response?.data?.message === 'Invalid email/username or password') {
      setErr('ایمیل یا نام کاربری یا رمزعبور نادرست است.');
    } else {
      notifications.show({ message: error.message, color: 'red' });
    }
  };

  async function handleClick() {
    try {
      setErr('');
      const response = await myAxios.post(`/auth/login`, form.values);

      dispatch(
        setUser({
          username: response.data.data.toBeSendUserData.username,
          firstname:response.data.data.toBeSendUserData.firstname,
          lastname:response.data.data.toBeSendUserData.firstname,
          email: response.data.data.toBeSendUserData.email,
          phone: response.data.data.toBeSendUserData.phone,
          accessToken: response.data.data.accessToken,
          refreshToken: response.data.data.refreshToken
        })
      );
    } catch (error) {
      console.error(error);
      errorHandle(error);
    }
  }

  //form validation
  const form = useForm({
    initialValues: {
      emailOrUsername: '',
      password: ''
    },

    validate: {
      emailOrUsername: (value) =>
        value.length < 3 ? 'نام کاربری یا ایمیل را درست وارد کنید' : null,
      password: (value) => (value.length < 8 ? 'حداقل پسورد باید 8 حرف باشد' : null)
    }
  });

  return (
    <AuthLayout loginPage>
      <Card miw="402px" shadow="0px 12px 50px rgba(0, 0, 0, 0.18)" radius="20px" p="24px">
        <Flex direction="column" align="center">
          <Text fz="32px" fw="600" mb="29px">
            به کوئرا تسک منیجر خوش برگشتی :)
          </Text>
          <Text c="red" display={`${err.length > 0 ? 'block' : 'none'}`}>
            {err}
          </Text>
          <TextInput
            dir="ltr"
            label="ایمیل یا نام کاربری"
            w="100%"
            mb="29px"
            labelProps={{
              style: {
                fontWeight: '400',
                marginBottom: '8px',
                fontSize: '14px'
              }
            }}
            {...form.getInputProps('emailOrUsername')}
          />

          <PasswordInput
            w="100%"
            dir="ltr"
            label="رمز عبور"
            mb="8px"
            fw="400"
            fz="16px"
            labelProps={{
              style: {
                fontWeight: '400',
                marginButton: '8px',
                fontSize: '14px'
              }
            }}
            {...form.getInputProps('password')}
          />
          <Link
            to="/forget"
            className={`${
              colorScheme === 'light' ? 'text-cyan-900' : 'text-cyan-500'
            } hover:underline  self-start`}
          >
            رمز عبور را فراموش کرده‌ای؟
          </Link>

          <div className="w-full">
            <Button
              h="40px"
              w="100%"
              fz="14px"
              fw="700"
              my="29px"
              onClick={form.onSubmit(handleClick)}
            >
              ورود
            </Button>
            <Flex justify="center" mt="20px" gap="7px">
              <Text fz="16px" fw="400">
                ثبت نام نکرده ای؟
              </Text>
              <Link
                to="/register"
                className={`${
                  colorScheme === 'light' ? 'text-cyan-800' : 'text-cyan-500'
                } hover:underline text-lg font-bold`}
              >
                ثبت نام
              </Link>
            </Flex>
          </div>
        </Flex>
      </Card>
    </AuthLayout>
  );
};

export default Login;
