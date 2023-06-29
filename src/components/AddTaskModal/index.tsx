import { Flex, Modal, Select, Text, Textarea } from '@mantine/core';
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

type props = {
  opened: boolean;
  onClose: () => void;
  boardName?: string;
  boardId?: any;
};
const AddTaskModal = ({ opened, onClose, boardId, boardName }: props) => {
  const [value, setValue] = useState<any>(null);
  const [message, setMeassage] = useState('');
  const boards: any = useAppSelector((state) => state.boards.projectBoards);
  const dispatch = useAppDispatch();
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
  return (
    <Modal opened={opened} onClose={onClose} title="افزودن تسک" centered dir="rtl">
      <form
        className="h-96"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!value) {
            setMeassage('با کلیک بر آیکون تقویم تاریخ را انتخاب کنید');
            return;
          }
          if (form.validate().hasErrors === false) {
            const deadline = moment(value.format(), 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
            let data = {};
            boardId
              ? (data = { name: form.values.name, deadline, boardId,description:form.values.description })
              : (data = { ...form.values, deadline });
            try {
              const res = await myAxios.post('/task/', data);
              dispatch(addTaskToBoard(res.data.data));
              console.log(res.data.data);
              notifications.show({ message: 'تسک ایجاد شد', color: 'green' });
              form.reset();
              onClose();
            } catch (error: any) {
              notifications.show({ message: error?.message, color: 'red' });
            }
          }
        }}>
        <Flex direction="column" px="sm" gap={'lg'}>
          <TextInput
            mt={'32px'}
            w="165px"
            fw="500"
            color="#C8C8C8"
            fz="md"
            placeholder="نام تسک را وارد کنید"
            {...form.getInputProps('name')}
          />

          <Select
            label="در برد:"
            placeholder={'نام برد'}
            defaultValue={boardId?.toString()}
            mt="lg"
            data={boardId ? boardValue : boardValues}
            {...form.getInputProps('boardId')}
          />

          <Text>
            مهلت تسک:{' '}
            {value ? value.format() : <span className="font-medium text-red-600">{message}</span>}
          </Text>
          <Textarea placeholder="توضیحات تسک" {...form.getInputProps('description')} />
          <Flex justify="space-between" align="center" mt="lg">
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
            <Button type="submit">ساختن تسک</Button>
          </Flex>
        </Flex>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
