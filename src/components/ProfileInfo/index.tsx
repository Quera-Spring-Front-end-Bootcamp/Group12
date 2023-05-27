import { Flex, Text, Avatar } from "@mantine/core";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

const ProfileInfo = () => {
  return (
    <>
      <Flex direction="column" w="354px">
        <Text style={{ fontWeight: "700", fontSize: "24px" }}>
          اطلاعات حساب
        </Text>
        <Flex direction="column">
          <TextInput
            label="ایمیل"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "12px",
              },
            }}
          ></TextInput>
            <TextInput
              label="رمز عبور"
              m="12px 0"
              labelProps={{
                style: {
                  fontWeight: "500",
                  marginBottom: "8px",
                  fontSize: "12px",
                },
              }}
            ></TextInput>

          <TextInput
            label="نام کاربری"
            m="12px 0"
            labelProps={{
              style: {
                fontWeight: "500",
                marginBottom: "8px",
                fontSize: "12px",
              },
            }}
          ></TextInput>
          <Button style={{ margin: "24px 0" }}>ثبت تغییرات</Button>
        </Flex>
      </Flex>
    </>
  );
};
export default ProfileInfo;
