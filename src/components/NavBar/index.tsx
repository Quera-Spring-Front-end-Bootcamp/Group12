import { Navbar as MantineNavBar } from '@mantine/core';
import type { NavbarProps as MantineNavBarProps } from '@mantine/core';

export default function navBar(props: MantineNavBarProps) {
  return (
    <MantineNavBar {...props} />
  );
}
