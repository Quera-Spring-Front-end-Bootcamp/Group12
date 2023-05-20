import { Flex, Text } from "@mantine/core";
import Button from "../../components/Button";
const AuthHeader = ({ title }) => {
  return (
    <Flex
      mih={50}
      justify="space-between"
      align="center"
      direction="row"
      wrap="wrap"
      px={"80px"}
      pt={"80px"}
      
    >
      <Text
        fz={"2rem"}
        fw={"800"}
        bg={"linear-gradient(90deg, #118C80 0%, #4AB7D8 120%)"}
        style={{backgroundClip:'text',WebkitTextFillColor:"transparent",WebkitBackgroundClip:'text'}}
      >
        کوئرا تسک منیجر
      </Text>
      <div>
        {title}
        <Button fw={"700"} fz={"14"} mr={"7px"}>ثبت نام</Button>
      </div>
    </Flex>
  );
};

export default AuthHeader;
