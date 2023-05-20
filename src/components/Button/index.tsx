import { Button as MantineButton } from "@mantine/core"
import type { ButtonProps as MantineButtonProps } from "@mantine/core"

const Button = (props : MantineButtonProps) => {
    return (
        <MantineButton {...props} ></MantineButton>
    )
}

export default Button;