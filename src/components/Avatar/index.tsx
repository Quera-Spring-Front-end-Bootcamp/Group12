import { Avatar as MantineAvatar } from '@mantine/core';
import type { AvatarProps as MantineAvatarProps } from '@mantine/core';
import { useAppSelector } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { useEffect, useState } from 'react';

interface AvatarProps extends MantineAvatarProps {
  usernameorid?: string;
  firstname?: string;
  lastname?: string;
  size?: string;
}
const Avatar = (props: AvatarProps) => {
  const user = useAppSelector((state) => state.user.user);
  const [info, setInfo] = useState(user);
  useEffect(() => {
    setInfo(user);
  }, [user]);
  
  // const [user, setUser] = useState(useAppSelector((state) => state.user.user));
  // useEffect(() => {
  //   const request = async () => {
  //     const user = (await myAxios.get(`/users/${props.usernameorid}`)).data.data;
  //     setUser(user);
  //     const profilePlaceholder = user.firstname[0] + user.lastname[0];
  //     console.log(profilePlaceholder);
  //     return user;
  //   };
  //   if (props.usernameorid) {
  //     request();
  //   }
  // }, []);

  let profilePlaceholder =
    props.firstname && props.lastname
      ? props.firstname[0] + props.lastname[0]
      : info.firstname[0] + info.lastname[0];

  const avatarSize = props.size || "32px";

  return (
    <MantineAvatar
      src={info.profile_url}
      size={avatarSize}
      color="primary"
      radius="xl"
      variant="filled"
      {...props}
    >
      {profilePlaceholder}
    </MantineAvatar>
  );
};

export default Avatar;
