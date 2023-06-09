import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

interface ButtonProps extends MantineButtonProps {
  onClick?: () => void;
}
const Button = (props: ButtonProps) => <MantineButton {...props} />;

export default Button;
