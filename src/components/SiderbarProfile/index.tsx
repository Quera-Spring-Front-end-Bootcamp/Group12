import { Flex,Text } from "@mantine/core";
import ProfileImage from "../ProfileImage";


const SidebarProfile = () => {
  
  return (
    <>
      <Flex align='center' gap="sm">
        <ProfileImage/>
        <Text>جهان داوری</Text>
      </Flex>
    </>
  );
};

export default SidebarProfile;
