import { Container, Flex, useMantineTheme } from "@mantine/core";
import AuthHeader from "../AuthHeader";
const AuthLayout = ({ children }) => {
  const height = "calc(100vh - 210px)";
  return (
    <>
      <AuthHeader title={"salam"} />
      <Flex
        justify={"center"}
        align={"center"}
        style={{ minHeight: `${height}` }}
        direction={"column"}
      >
        {children}
      </Flex>
      <div
        style={{
          width: "100%",
          height: "100%",
          clipPath: "polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)",
          background: `linear-gradient(269.55deg, #06846F 0.35%, #54BEE8 103.4%)`,
          position: "absolute",
          bottom: "0",
          right: "0",
          zIndex: "-1",
        }}
      ></div>
    </>
  );
};

export default AuthLayout;
