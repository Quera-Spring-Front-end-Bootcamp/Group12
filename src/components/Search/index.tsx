import { TextInput as MantineTextInput } from '@mantine/core';

import type { TextInputProps as MantineTextInputProps } from '@mantine/core';
import { Search } from '../../assets/icons';
import SvgProvier from '../../assets/icons/SvgProvider';


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
    <MantineTextInput variant='unstyled'  icon={<SvgProvier color="#323232" style={{ height: "24px" }}><Search /></SvgProvier>} placeholder={placeholder} styles={inputStyles} {...props} />
  );
}
