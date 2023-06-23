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
  const [userInfo, setInfo] = useState(user);
  useEffect(() => {
    setInfo(user);
  }, [user]);
  
  // const [user, setUser] = useState(useAppSelector((state) => state.user.user));
  // useEffect(() => {
  //   const request = async () => {
  //     const user = (await myAxios.get(`/users/${props.usernameorid}`)).data.data;
  //     setUser(user);
  //     return user;
  //   };
  //   if (props.usernameorid) {
  //     request();
  //   }
  // }, []);
  // let profilePlaceholder =
  //   (props.firstname?.length > 0)
  //     ? props.firstname[0]
  //     : userInfo.firstname[0] + userInfo.lastname[0];
  const  profilePlaceholder = props.firstname ? props.firstname[0] : userInfo.firstname[0] + userInfo.lastname[0];
  const avatarSize = props.size || "32px";

  return (
    <MantineAvatar
      src={user.profile_url}
      size={avatarSize}
      alt={props.firstname || user.firstname}
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
