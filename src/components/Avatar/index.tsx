import { Avatar as MantineAvatar } from '@mantine/core';
import type { AvatarProps as MantineAvatarProps } from '@mantine/core';
import { useAppSelector } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { useEffect, useState } from 'react';

interface AvatarProps extends MantineAvatarProps {
  usernameorid?: string;
}
const Avatar = (props: AvatarProps) => {
  useEffect(() => {
    const request = async () => {
      const user = (await myAxios.get(`/users/${props.usernameorid}`)).data.data;
      setUser(user);
      const profilePlaceholder = user.firstname[0] + user.lastname[0];
      console.log(profilePlaceholder);
      return user;
    };
    if (props.usernameorid) {
      request();
    }
  }, []);
  const [user, setUser] = useState(useAppSelector((state) => state.user.user));
  let profilePlaceholder = user.firstname[0] + user.lastname[0];
  return (
    <MantineAvatar
      src={user.profile_url}
      size="32px"
      color="teal"
      radius="xl"
      variant="filled"
      {...props}
    >
      {profilePlaceholder}
    </MantineAvatar>
  );
};

export default Avatar;
