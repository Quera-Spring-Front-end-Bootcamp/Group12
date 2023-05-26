import React from 'react';
import { TextInput as MantineTextInput } from '@mantine/core';

import type { TextInputProps as MantineTextInputProps } from '@mantine/core';
import { Search } from '../../assets/icons';

interface SearchInputProps extends MantineTextInputProps {
  placeholder: string;
}

export default function SearchInput({ placeholder, ...props }: SearchInputProps) {
  const inputStyles = {
    input: {
      border: 'none'
    },
  };
  return (
    <MantineTextInput  icon={<Search />} placeholder={placeholder} styles={inputStyles} {...props} />
  );
}
