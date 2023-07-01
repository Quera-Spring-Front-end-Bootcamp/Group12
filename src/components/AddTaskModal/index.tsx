import { Badge, Flex, Modal, Select, Text, Textarea } from '@mantine/core';
import 'dayjs/locale/fa';
import TextInput from '../TextInput';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import { useForm } from '@mantine/form';
import Button from '../Button';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_en from 'react-date-object/locales/persian_en';
import moment from 'jalali-moment';
import { useState } from 'react';

import Icon from 'react-multi-date-picker/components/icon';
import { addTaskToBoard } from '../../data/dataSlice/boardsSlice';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import CreateTagModal from '../CreateTagModal';
import AddBoardModal from '../AddBoardModal';
import { useDisclosure } from '@mantine/hooks';

type props = {
  opened: boolean;
  onClose: () => void;
  boardName?: string;
  boardId?: any;
};
const AddTaskModal = ({ opened, onClose, boardId, boardName }: props) => {
  const [username, setUsername] = useState<string | null>('');
  const [loading, setLoading] = useState(false);
  const [tag, SetTag] = useState({
    name: '',
    color: ''
  });
  const [boardOpened, { open: openboard, close: closeboard }] = useDisclosure(false);
  const [value, setValue] = useState<any>(null);
  const [message, setMeassage] = useState('');
  const boards: any = useAppSelector((state) => state.boards.projectBoards);
  const { projectMembers } = useAppSelector((state) => state.boards);
  const dispatch = useAppDispatch();
  const memberValues = projectMembers.map((m: any) => {
    return { value: m.user.username, label: `${m.user.firstname} ${m.user.lastname}` };
  });
  const boardValues = boards.map((board: any) => {
    return { value: board._id, label: board.name };
  });
  const boardValue = [{ value: boardId, label: boardName }];
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      boardId: boardId ? boardId.toString() : ''
    },

    validate: {
      name: (value) => (value.length > 2 ? null : 'تسک باید بیشتر از دو حرف باشد'),
      boardId: (value) => (value.length > 2 ? null : 'لطفا نام برد تسک را انتحاب کنید')
    }
  });

  const submitTag = (a: string, b: string) => {
    console.log(a, b);
    SetTag({ name: a, color: b });
  };

  // add member to task func
  const addMemberToTask = async (taskId: string) => {
    if (username) {
      try {
        await myAxios.put(`/task/${taskId}/assign/${username}`);
        setUsername('');
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  // add tag to task func
  const addTagToTask = async (taskId: string) => {
    if (tag.name) {
      console.log(tag);
      try {
        const res = await myAxios.post(`/tags`, { ...tag, taskId });
        SetTag({ name: '', color: '' });
      } catch (error: any) {
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={onClose}
        title="افزودن تسک"
        centered
        dir="rtl"
        className="relative"
      >
        <form
          className="h-96"
          onSubmit={async (e) => {
            e.preventDefault();
            if (!value) {
              setMeassage('با کلیک بر آیکون تقویم تاریخ را انتخاب کنید');
              return;
            }
            if (form.validate().hasErrors === false) {
              setLoading(true);
              const deadline = moment(value.format(), 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
              let data = {};
              boardId
                ? (data = {
                    name: form.values.name,
                    deadline,
                    boardId,
                    description: form.values.description
                  })
                : (data = { ...form.values, deadline });
              try {
                setMeassage('');
                const res = await myAxios.post('/task/', data);
                setValue('');
                let promise = await Promise.all([
                  addTagToTask(res.data.data._id),
                  addMemberToTask(res.data.data._id)
                ]);
                dispatch(addTaskToBoard(res.data.data));
                notifications.show({ message: 'تسک ایجاد شد', color: 'green' });
                form.reset();
                setLoading(false);
                onClose();
              } catch (error: any) {
                setLoading(false);
                notifications.show({ message: error?.message, color: 'red' });
              }
            }
          }}
        >
          {boards.length <= 0 ? (
            <>
              <AddBoardModal opened={boardOpened} onClose={closeboard} />
              <Flex align="center" justify="center" direction="column">
                <Text mb="md">لطفا ابتدا به پروژه بورد اظافه کنید</Text>
                <Button onClick={openboard}>اظافه کردن بورد</Button>
              </Flex>
            </>
          ) : (
            <Flex direction="column" px="sm" gap={'md'}>
              <TextInput
                mt={'10px'}
                w="165px"
                fw="500"
                color="#C8C8C8"
                fz="md"
                placeholder="نام تسک را وارد کنید"
                {...form.getInputProps('name')}
              />
              <Flex align="center" gap="xs">
                <Select
                  label="در :"
                  placeholder={'نام برد'}
                  defaultValue={boardId?.toString()}
                  data={boardId ? boardValue : boardValues}
                  {...form.getInputProps('boardId')}
                />
                <Select label="برای :" data={memberValues} onChange={setUsername} />
              </Flex>

              <Textarea
                placeholder="توضیحات تسک"
                {...form.getInputProps('description')}
                w="100%"
                size="lg"
              />
              <Text>
                مهلت تسک:{' '}
                {value ? (
                  value.format()
                ) : (
                  <span className="font-medium text-red-600">{message}</span>
                )}
              </Text>
              <Text>تگ: {tag.name && <Badge color={tag.color}>{tag.name}</Badge>}</Text>
              <Flex justify="space-between" align="center" mt="lg">
                <Flex align="center" gap="sm">
                  <DatePicker
                    render={<Icon />}
                    calendar={persian}
                    locale={persian_en}
                    value={value}
                    onChange={setValue}
                    calendarPosition="bottom-right"
                    format={'YYYY/MM/DD'}
                    required
                  />
                  <CreateTagModal setTag={submitTag} />
                </Flex>
                <Button loading={loading} type="submit">
                  ساختن تسک
                </Button>
              </Flex>
            </Flex>
          )}
        </form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
