import { TextInput as MantineTextInput } from '@mantine/core';

import type { TextInputProps as MantineTextInputProps } from '@mantine/core';
import { Search } from '../../assets/icons';

interface SearchInputProps extends MantineTextInputProps {
  placeholder: string;
}

export default function SearchInput({ placeholder, ...props }: SearchInputProps) {
  return (
    <MantineTextInput placeholder={placeholder} {...props} icon={<Search width="24px" />} />
  );
}
