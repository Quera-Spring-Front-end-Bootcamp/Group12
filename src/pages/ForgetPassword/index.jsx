import { Flex, Text } from "@mantine/core";
import Card from "../../components/Card";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import AuthLayout from "../../layout/AuthLayout";

const ForgetPassword = () => {
  return (
    <AuthLayout loginPage={true}>
      <Card
        miw="463px"
        shadow="0px 12px 50px rgba(0, 0, 0, 0.18)"
        radius="20px"
        p={"24px"}
      >
        <Flex
          direction={"column"}
          align="center"
          gap={"29px"}
          bg={"#fff"}
          style={{
            borderRadius: "20px",
          }}
        >
          <Text fz={"32px"} fw="600" color="#000">
          فراموشی رمز عبور
          </Text>
          <TextInput
            label="ایمیل خود را وارد کنید"
            style={{ width: "100%" }}
            labelProps={{
              style: {
                fontWeight: "400",
                marginBottom: "8px",
                fontSize: "14px",
              },
            }}
          />

          <Button w={"100%"} fz="14px" fw="700">
          دریافت ایمیل بازیابی رمز عبور
          </Button>
        </Flex>
      </Card>
    </AuthLayout>
  );
};

export default ForgetPassword;
