import { useDisclosure } from '@mantine/hooks';
import Modal from '../Modal';
import Button from '../Button';
import { TwoLineSetting } from '../../assets/icons';
import { Flex } from '@mantine/core';
import FilterContent from '../FilterContent';
const FilterComponent = () =>{

 const [opened , {open , close}] = useDisclosure(false);

  return (
    <>
      <Modal title="فیلترها" opened={opened} onClose={close} size="lg">
        <Flex gap="sm">
          <FilterContent />
          <Button >فیلتر کردن</Button>
        </Flex>
      </Modal>
      <Button onClick={open}>
        فیلترها <TwoLineSetting></TwoLineSetting>
      </Button>
    </>
  );
}

export default FilterComponent;