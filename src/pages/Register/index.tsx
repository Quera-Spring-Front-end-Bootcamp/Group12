import { useState } from "react";
import { Flex, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios, { AxiosError } from "axios";
import { notifications } from "@mantine/notifications";
import Card from "../../components/Card";
import AuthLayout from "../../layout/AuthLayout";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import Checkbox from "../../components/Checkbox";
import { BASE_URL } from "../../helpers";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const errorHandle = (error: AxiosError<any, any>) => {
    if (error?.response?.data?.message === "Email address is already in use") {
      setErr("ایمیل تکراری می باشد.");
    } else if (
      error?.response?.data?.message === "Username is already in use"
    ) {
      setErr("نام کاربری تکراری می باشد.");
    } else {
      notifications.show({ message: error.message, color: "red" });
    }
  };

  const handleClick = async () => {
    try {
      setErr("");
      await axios.post(`${BASE_URL}/auth/register`, form.values);
      form.reset();
      navigate('/login')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        // const axiosError = error as AxiosError
        errorHandle(error);
      }
      console.log(error);
    }
  };
  const form = useForm({
    initialValues: {
      name: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      acceptRules: false,
    },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? "حداقل نام باید دو حرف باشد" : null),
      lastName: (value) =>
        value.length < 2 ? "حداقل نام حانوادگی باید دو حرف باشد" : null,
      username: (value) =>
        value.length < 3 ? "حداقل نام کاربری باید سه حرف باشد" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "لطفا ایمیل را درست وارد کنید",
      password: (value) =>
        value.length < 8 ? "حداقل پسورد باید 8 حرف باشد" : null,
      acceptRules: (value) =>
        value === false ? "لطفا قوانین را قبول کنید" : null,
    },
  });
  
  return (
    <AuthLayout loginPage={false}>
      <Card
        miw="402px"
        shadow="0px 12px 50px rgba(0, 0, 0, 0.18)"
        radius="20px"
        p="24px"
      >
        <Flex direction="column" align="center" gap="29px" bg="#fff">
          <Text fz="32px" fw="600" color="#000">
            ثبت‌نام در کوئرا تسک منیجر
          </Text>
          <Text c="red" display={`${err.length > 0 ? "block" : "none"}`}>
            {err}
          </Text>
          <Flex gap="md">
            <TextInput
              label="نام "
              w="100%"
              labelProps={{
                style: {
                  fontWeight: "400",
                  marginBottom: "8px",
                  fontSize: "14px",
                },
              }}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="نام خانوادگی"
              w="100%"
              labelProps={{
                style: {
                  fontWeight: "400",
                  marginBottom: "8px",
                  fontSize: "14px",
                },
              }}
              {...form.getInputProps("lastName")}
            />
          </Flex>
          <TextInput
            label="نام کاربری"
            w="100%"
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
            {...form.getInputProps("username")}
          />
          <TextInput
            label="ایمیل"
            w="100%"
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            w="100%"
            dir="ltr"
            label="رمز عبور"
            mb="8px"
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
            {...form.getInputProps("password")}
          />
          <Checkbox
            w="100%"
            label="قوانین و مقررات را می‌پذیرم."
            {...form.getInputProps("acceptRules", {
              type: "checkbox",
            })}
          />
          <div style={{ width: "100%" }}>
            <Button
              h="48px"
              w="100%"
              fz="14px"
              fw="700"
              onClick={form.onSubmit(handleClick)}
            >
              ثبت‌نام
            </Button>
          </div>
        </Flex>
      </Card>
    </AuthLayout>
  );
};


export default Register;
