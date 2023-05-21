import { Flex, Text } from "@mantine/core";
import PasswordInput from "../../components/PasswordInput";
import Card from "../../components/Card";
import TextInput from "../../components/TextInput";
import Anchor from "../../components/Anchor";
import Button from "../../components/Button";
import AuthLayout from "../../layout/AuthLayout";

const Login = () => (
  <AuthLayout loginPage>
    <Card
      miw="402px"
      shadow="0px 12px 50px rgba(0, 0, 0, 0.18)"
      radius="20px"
      p="24px"
    >
      <Flex direction="column" align="center" bg="#fff">
        <Text fz="32px" fw="600" color="#000" mb="29px">
          به کوئرا تسک منیجر خوش برگشتی :)
        </Text>
        <TextInput
          dir="ltr"
          label="ایمیل"
          w="100%"
          mb="29px"
          labelProps={{
            style: {
              fontWeight: "400",
              marginBottom: "8px",
              fontSize: "14px",
            },
          }}
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
              fontWeight: "400",
              marginButton: "8px",
              fontSize: "14px",
            },
          }}
        />
        <Anchor href="#" style={{alignSelf:'flex-start'}}>رمز عبور را فراموش کرده‌ای؟</Anchor>

        <div style={{ width: "100%" }}>
          <Button h="40px" w="100%" fz="14px" fw="700" my="29px">
            ورود
          </Button>
          <Flex justify="center" mt="20px" gap="7px">
            <Text fz="16px" fw="400">
              ثبت نام نکرده ای؟
            </Text>
            <Anchor fz="16px" fw="700">
              ثبت نام
            </Anchor>
          </Flex>
        </div>
      </Flex>
    </Card>
  </AuthLayout>
);

export default Login;
