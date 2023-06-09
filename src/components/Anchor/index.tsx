import { Anchor as MantineAnchor } from '@mantine/core';
import type { AnchorProps as MantineAnchorProps } from '@mantine/core';

type Props = MantineAnchorProps & {
  href?: string;
};

export default function Anchor(props: Props) {
  return <MantineAnchor href={props.href} {...props} />;
}
