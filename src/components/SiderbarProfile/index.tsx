import { Avatar, Flex, Text } from '@mantine/core';
import { useSelector } from 'react-redux';

const SidebarProfile = () => {
  const user = useSelector((state: any) => state.user.user);
  return(
  <Flex align="center" gap="sm" w="100%">
    <Avatar size="32px" color="teal" radius="xl" variant="filled">
      JD
    </Avatar>
    <Text>{user.firstname} {user.lastname}</Text>
  </Flex>
)};

export default SidebarProfile;
