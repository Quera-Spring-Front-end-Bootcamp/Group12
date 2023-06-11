import { Flex, Text } from '@mantine/core';
import Card from '../../components/Card';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import AuthLayout from '../../layout/AuthLayout';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios, { AxiosError } from "axios";
import { notifications } from '@mantine/notifications';
import { BASE_URL } from "../../helpers";

function ForgetPassword() {

  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const errorHandle = (error: AxiosError<any, any>) => {
    if (error?.response?.data?.message === "User not found") {
      setErr("کاربر یافت نشد");
    } else {
      notifications.show({ message: error.message, color: "red" });
    }
  };

  const handleClick = async () => {
    try {
      setErr("");
      await axios.post(`${BASE_URL}/auth/forget-password`, form.values);
      form.reset();
      navigate('/forgetmsg')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        errorHandle(error);
      }
    }
  };


  const form = useForm({
    initialValues: {
      email: ""
    },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "لطفا ایمیل را درست وارد کنید",
    },
  });
  return (
    <AuthLayout loginPage={false}>
      <Card miw="463px" shadow="0px 12px 50px rgba(0, 0, 0, 0.18)" radius="20px" p="24px">
        <Flex
          direction="column"
          align="center"
          gap="29px"
          bg="#fff"
          style={{
            borderRadius: '20px'
          }}
        >
          <Text fz="32px" fw="600" color="#000">
            فراموشی رمز عبور
          </Text>

          <Text c="red" display={`${err.length > 0 ? "block" : "none"}`}>
            {err}
          </Text>

          <TextInput
            label="ایمیل خود را وارد کنید"
            style={{ width: '100%' }}
            labelProps={{
              style: {
                fontWeight: '400',
                marginBottom: '8px',
                fontSize: '14px'
              }
            }}
            {...form.getInputProps("email")}
          />

          <Button w="100%" fz="14px" fw="700" onClick={form.onSubmit(handleClick)}>
            دریافت ایمیل بازیابی رمز عبور
          </Button>
        </Flex>
      </Card>
    </AuthLayout>)
}

export default ForgetPassword;
