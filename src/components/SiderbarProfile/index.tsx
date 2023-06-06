import { Avatar, Flex, Text } from '@mantine/core';

const SidebarProfile = () => (
  <Flex align="center" gap="sm" w="100%">
    <Avatar size="32px" color="teal" radius="xl" variant="filled">
      JD
    </Avatar>
    <Text>جهان داوری</Text>
  </Flex>
);

export default SidebarProfile;
