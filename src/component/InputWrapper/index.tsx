import { Input as MantineInput } from "@mantine/core";
import type { InputProps as MantineInputProps}  from "@mantine/core";

export const Input = (props : MantineInputProps) =>{
 return <MantineInput  {...props}></MantineInput>;
}

//probably has bugs 