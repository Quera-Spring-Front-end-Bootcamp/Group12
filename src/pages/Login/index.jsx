import { Flex, Text,PasswordInput } from "@mantine/core";
import Card from "../../components/Card";
import Input from "../../components/TextInputWrapper";
import  Anchor  from "../../components/Anchor";
import Button from "../../components/Button";

const Login = () => {
  return (
    <Card  shadow="0px 12px 50px rgba(0, 0, 0, 0.18)" radius="20px">
      <Flex
        direction={"column"}
        align="center"
        p={"24px"}
        gap={"29px"}
        
        bg={"#fff"}
        style={{
          borderRadius: "20px",
          
        }}
      >
        <Text fz={"32px"} fw="600" color="#000">
          به کوئرا تسک منیجر خوش برگشتی :)
        </Text>
        <Input  label="ایمیل"  style={{width:"100%"}}
        labelProps={{
          style: { fontWeight: '400',marginBottom:'8px', fontSize: '14px' }
        }}/>
        <div style={{width:"100%"}}>
        <PasswordInput   dir="ltr" label="رمز عبور"   mb={"8px"} placeholder="password"
        labelProps={{
          style: { fontWeight: '400',marginBottom:'8px', fontSize: '14px' }
        }}/>
         <Anchor href="#" >
         رمز عبور را فراموش کرده‌ای؟
          </Anchor>
        </div>
        <div style={{width:"100%"}}>

          <Button w={"100%"} fz="14px" fw="700">ورود</Button>
          <Flex justify={"center"} mt="20px" gap="7px">
          <Text fz={"16px"} fw="400">ثبت نام نکرده ای؟</Text>
          <Anchor fz="16px" fw="700">ثبت نام</Anchor>
          </Flex>
        </div>
      </Flex>
    </Card>
  );
};

export default Login;
