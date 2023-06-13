import { Flex, Text } from '@mantine/core';
import { useAppSelector } from '../../data/reduxHooks';
import Avatar from '../Avatar';

const SidebarProfile = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <Flex align="center" gap="sm" w="100%">
      <Avatar />
      <Text weight={'bolder'}>
        {user.firstname} {user.lastname}
      </Text>
    </Flex>
  );
};

export default SidebarProfile;
