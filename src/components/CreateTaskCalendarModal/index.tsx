import { Flex, Modal, Select, Text, Textarea, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';

import TextInput from '../TextInput';
import Button from '../Button';
import { formatDate } from '@fullcalendar/core';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';

import { addTaskToBoard } from '../../data/dataSlice/boardsSlice';
import { useDisclosure } from '@mantine/hooks';
import AddBoardModal from '../AddBoardModal';

type props = {
  taskDate: string;
  opened: boolean;
  onClose: () => void;
};
const CreateTaskCalendarModal = ({ opened, onClose, taskDate }: props) => {
  const [boardOpened, { open: openboard, close: closeboard }] = useDisclosure(false);
  const boards: any = useAppSelector((state) => state.boards.projectBoards);
  const dispatch = useAppDispatch();
  const boardValues = boards.map((board: any) => {
    return { value: board._id, label: board.name };
  });
  const date = formatDate(taskDate, {
    timeZone: 'local',
    locale: 'fa',
    month: 'long',
    day: 'numeric'
  });

  const { primaryColor } = useMantineTheme();
  const form = useForm({
    initialValues: {
      name: '',
      boardId: '',
      description: ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'تسک باید بیشتر از دو حرف باشد'),
      boardId: (value) => (value.length > 2 ? null : 'لطفا نام برد تسک را انتحاب کنید')
    }
  });
  return (
    <Modal opened={opened} onClose={onClose} title="افزودن تسک" centered dir="rtl">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (form.validate().hasErrors === false) {
            const data = { ...form.values, deadline: taskDate };
            try {
              const res = await myAxios.post('/task/', data);
              dispatch(addTaskToBoard(res.data.data));
              notifications.show({ message: 'تسک ایجاد شد', color: 'green' });
              form.reset();
              onClose();
            } catch (error: any) {
              notifications.show({ message: error?.message, color: 'red' });
            }
          }
        }}>
        {boards.length <= 0 ? (
          <>
            <AddBoardModal opened={boardOpened} onClose={closeboard} />
            <Flex align="center" justify="center" direction="column">
              <Text mb="md">لطفا ابتدا به پروژه بورد اظافه کنید</Text>
              <Button onClick={openboard}>اظافه کردن بورد</Button>
            </Flex>
          </>
        ) : (
          <Flex direction="column" px="sm">
            <TextInput
              w="165px"
              fw="500"
              color="#C8C8C8"
              fz="md"
              placeholder="نام تسک را وارد کنید"
              {...form.getInputProps('name')}
            />
            <Select
              placeholder="نام برد"
              searchable
              defaultValue={'sd'}
              mt="md"
              maxDropdownHeight={45}
              data={boardValues}
              {...form.getInputProps('boardId')}
            />
            <Textarea placeholder="توضیحات تسک" mt="sm" {...form.getInputProps('description')} />
            <Flex justify="space-between" align="center" mt="lg" c={primaryColor}>
              <Text fw="500" fz="lg">
                {date}
              </Text>
              <Button type="submit">ساختن تسک</Button>
            </Flex>
          </Flex>
        )}
      </form>
    </Modal>
  );
};

export default CreateTaskCalendarModal;
