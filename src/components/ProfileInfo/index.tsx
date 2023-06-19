import { Flex, Text } from '@mantine/core';
import Button from '../Button';
import TextInput from '../TextInput';
import { useForm } from '@mantine/form';
import axios, { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import myAxios from '../../helpers/myAxios';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import userSlice from '../../data/userSlice/userSlice';

function ProfileInfo() {
  const [err, setErr] = useState('');

  const user: any = useAppSelector(state => state.user.user);
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  const errorHandle = (error: AxiosError<any, any>) => {
    if (error?.response?.data?.message === "Server error") {
      setErr("ایمیل یا نام کاربری تکراری می باشد");
    } else if (
      error instanceof AxiosError &&
      error?.response?.data?.message === 'Invalid email/username or password') {
      setErr("رمز عبور نادرست است");
    } else {
      notifications.show({ message: error.message, color: 'red' });
    }
  };

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },

    validate: {
      username: (value) => (value.length < 3 ? 'حداقل نام کاربری باید سه حرف باشد' : null),
      password: (value) => (value.length < 8 ? 'حداقل پسورد باید 8 حرف باشد' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'لطفا ایمیل را درست وارد کنید')
    }
  })


  const handleClick = async () => {
    try {
      setErr('');
      const check = await myAxios.post(`/auth/login`, {
        emailOrUsername: user.username,
        password: form.values.password
      });

      const response = await myAxios.put(`/users/${user._id}`, form.values);

      dispatch(
        setUser({
          username: response.data.data.username,
          email: response.data.data.email,
        })
      );
      form.reset();
      setErr('تغییرات اعمال شد.')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        errorHandle(error);
      }
      console.log(error);
    }
  };

  return (
    <>
      <Flex direction="column" w="354px" ml={58} mt={170} h={'100%'}>
        <Text style={{ fontWeight: '700', fontSize: '24px' }}>اطلاعات حساب</Text>
        <Flex direction="column">
          <Text c="red" display={`${err.length > 0 ? 'block' : 'none'}`}>
            {err}
          </Text>
          <TextInput
            label="ایمیل"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: '500',
                marginBottom: '8px',
                fontSize: '12px'
              }
            }}
            {...form.getInputProps('email')}
          />
          <TextInput
            label="رمز عبور"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: '500',
                marginBottom: '8px',
                fontSize: '12px'
              }
            }}
            {...form.getInputProps('password')}
          />

          <TextInput
            label="نام کاربری"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: '500',
                marginBottom: '8px',
                fontSize: '12px'
              }
            }}
            {...form.getInputProps('username')}
          />
          <Button style={{ margin: '24px 0' }} onClick={form.onSubmit(handleClick)}>
            ثبت تغییرات
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
export default ProfileInfo;
