import { Flex, Text } from "@mantine/core";
import Card from "../../components/Card";
import AuthLayout from "../../layout/AuthLayout";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import Checkbox from "../../components/Checkbox";

const Register = () => {
  return (
    <AuthLayout loginPage={false}>
      <Card
        miw="402px"
        shadow="0px 12px 50px rgba(0, 0, 0, 0.18)"
        radius="20px"
        p={"24px"}
      >
        <Flex direction={"column"} align="center" gap={"29px"} bg={"#fff"}>
          <Text fz={"32px"} fw="600" color="#000">
            ثبت‌نام در کوئرا تسک منیجر
          </Text>
          <TextInput
            label="نام کامل"
            w={"100%"}
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
          />
          <TextInput
            label="ایمیل"
            w={"100%"}
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
          />
          <PasswordInput
            w={"100%"}
            dir="ltr"
            label="رمز عبور"
            mb={"8px"}
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
          />
          <Checkbox w={"100%"} label="قوانین و مقررات را می‌پذیرم." />
          <div style={{ width: "100%" }}>
            <Button h={"48px"} w={"100%"} fz="14px" fw="700">
              ثبت‌نام
            </Button>
          </div>
        </Flex>
      </Card>
    </AuthLayout>
  );
};

export default Register;
