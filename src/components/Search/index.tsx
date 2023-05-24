import React from 'react';
import { TextInput as MantineTextInput } from '@mantine/core';

import type { TextInputProps as MantineTextInputProps } from '@mantine/core';

interface SearchInputProps extends MantineTextInputProps {
  placeholder: string;
}

export default function SearchInput({ placeholder, ...props }: SearchInputProps) {
  return (
    <MantineTextInput placeholder={placeholder} {...props} />
  );
}
