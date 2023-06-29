import { useDisclosure } from '@mantine/hooks';
import { TwoLineSetting } from '../../assets/icons';
import { Button, Flex, Modal, Select, Text } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import { useForm } from '@mantine/form';
import { filterTasks, removeFilter } from '../../data/dataSlice/boardsSlice';
const FilterComponent = () => {
  const dispatch = useAppDispatch()
  const members = useAppSelector((state) => state.boards.projectMembers);
  const value = members.map((m: any) => {
    return { value: m.user._id, label: `${m.user.firstname} ${m.user.lastname}` };
  });
  const [opened, { open, close }] = useDisclosure(false);
  
  const form = useForm({
    initialValues: {
      member: ''
    },

    validate: {
      member: (value) => (value.length > 2 ? null : 'لطفا عضو مورد نظر را انتخاب کنید')
    }
  });
  
  //filterin functionality
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.validate().hasErrors === false) {
      dispatch(filterTasks(form.values.member))
      close();
    }
      
  };
  return (
    <>
      <Modal title="فیلترها" opened={opened} onClose={close} size="xl">
        <form >
          <Flex gap="sm" align='center'>
            {/* <FilterContent /> */}
            <Text> تسک هایی که اعضای آن ها </Text>
            <Select
              data={value}
              className="text-sm"
              withinPortal
              {...form.getInputProps('member')}
            />
            <Text>می باشد</Text>
            <Button onClick={handleSubmit}>فیلتر کردن</Button>
            <Button onClick={()=>dispatch(removeFilter())}>لغو فیلتر</Button>
          </Flex>
        </form>
      </Modal>
      <Button
        onClick={open}
        fw={500}
        className="shrink-0"
        fz={12}
        leftIcon={
          <SvgProvier style={{ height: '24px' }}>
            <TwoLineSetting />
          </SvgProvier>
        }
        ml={30}
        style={{
          backgroundColor: 'transparent',
          color: 'inherit'
        }}>
        فیلترها
      </Button>
    </>
  );
};

export default FilterComponent;
