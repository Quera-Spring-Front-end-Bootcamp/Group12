import { Flex, Text } from '@mantine/core';
import Button from '../Button';
import TextInput from '../TextInput';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import myAxios from '../../helpers/myAxios';
import axios, { AxiosError } from 'axios';
import { notifications } from '@mantine/notifications';
import Avatar from '../Avatar';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import userSlice from '../../data/userSlice/userSlice';

function ProfileMainPanel() {
  const [err, setErr] = useState('');
  const user: any = useAppSelector(state => state.user.user);

  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setUser(user)
    );
  }, [user])

  const errorHandle = (error: AxiosError<any, any>) => {
    notifications.show({ message: error.message, color: 'red' });
  };

  const form = useForm({
    initialValues: {
      firstname: '',
      lastname: '',
      phone: ''
    },

    validate: {
      firstname: (value) => (value.length < 2 ? 'حداقل نام باید دو حرف باشد' : null),
      lastname: (value) => (value.length < 2 ? 'حداقل نام حانوادگی باید دو حرف باشد' : null),
      phone: (value) => (/\D/.test(value) || value.length != 11 ? 'شماره تلفن باید فقط شامل اعداد و 11 رقم باشد' : null)
    }
  });

  const handleClick = async () => {
    try {
      setErr('');

      const response = await myAxios.put(`/users/${user._id}`, form.values);

      dispatch(
        setUser({
          ...user,
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          phone: response.data.data.phone,
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

  // console.log(user);

  return (
    <>
      <Flex direction="column" w="354px" ml={58} mt={100} h={'100%'}>
        <Text style={{ fontWeight: '700', fontSize: '24px' }}>اطلاعات فردی</Text>
        <Flex m="32px 0" align="center" gap={20}>
          <Flex align="center" gap="sm">
            <Avatar size="lg" />
          </Flex>
          <Flex direction="column" m="0 12px">
            <Button
              h={20}
              style={{
                border: '1px solid #208D8E',
                marginBottom: '8px',
                fontSize: '16px',
                fontWeight: '500'
              }}
            >
              ویرایش تصویر پروفایل
            </Button>
            <Text style={{ fontSize: '10px', fontWeight: '300' }}>
              این تصویر برای عموم قابل نمایش است
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column">
          <Text c="red" display={`${err.length > 0 ? 'block' : 'none'}`}>
            {err}
          </Text>
          <TextInput
            label="نام"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: '500',
                marginBottom: '8px',
                fontSize: '12px'
              }
            }}
            {...form.getInputProps('firstname')}
          />
          <TextInput
            label="نام خانوادگی"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: '500',
                marginBottom: '8px',
                fontSize: '12px'
              }
            }}
            {...form.getInputProps('lastname')}
          />
          <TextInput
            label="شماره موبایل"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: '500',
                marginBottom: '8px',
                fontSize: '12px'
              }
            }}
            {...form.getInputProps('phone')}
          />
          <Button style={{ margin: '24px 0' }} onClick={form.onSubmit(handleClick)}>
            ثبت تغییرات
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
export default ProfileMainPanel;
