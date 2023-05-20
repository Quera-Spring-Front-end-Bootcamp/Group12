import { Checkbox as MantineCheckbox } from "@mantine/core";
import type {CheckboxProps as MantineCheckboxProps} from "@mantine/core";

const Checkbox = (props : MantineCheckboxProps) =>{
   return(
    <MantineCheckbox {...props}></MantineCheckbox>
   );
}

export default Checkbox;