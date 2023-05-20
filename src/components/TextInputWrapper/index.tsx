import { TextInput as MantineTextInput } from "@mantine/core";
import type { TextInputProps as MantineTextInputProps } from "@mantine/core";

const Input = (props: MantineTextInputProps) => {
  return <MantineTextInput {...props}></MantineTextInput>;
};
export default Input;
