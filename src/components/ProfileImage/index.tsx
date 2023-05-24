import { Flex } from '@mantine/core';

const ProfileImage = () => {
  const firstName = 'Jhon';
  const lastName = 'Doe';
  const initials = firstName.charAt(0) + lastName.charAt(0);
  return (
    <>
      <Flex w="35px" h="35px" bg="yellow" justify="center" align="center" color="#000" style={{ borderRadius: '50%' }}>{initials}</Flex>
    </>
  );
};

export default ProfileImage;
