import { Anchor as MantineAnchor } from '@mantine/core'
import type {AnchorProps as MantineAnchorProps} from '@mantine/core'

// type AnchorProps = Pick<
//     MantineAnchorProps,
//     'className' | 
//     >

export default function Anchor(props: MantineAnchorProps) {
    return (
        <MantineAnchor {...props}></MantineAnchor>
    )
}