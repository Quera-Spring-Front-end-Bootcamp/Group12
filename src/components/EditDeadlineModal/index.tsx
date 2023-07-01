import { Button, Flex, Modal, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import TextInput from '../TextInput';
import { notifications } from '@mantine/notifications';
import { useAppDispatch } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { useState } from 'react';
import { updateBoards } from '../../data/dataSlice/boardsSlice';
import { useParams } from 'react-router';
import DatePicker, { Calendar } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_en from 'react-date-object/locales/persian_en';
import moment from 'jalali-moment';
import Icon from 'react-multi-date-picker/components/icon';

type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};
const EditDeadlineModal = ({ opened, onClose, id }: props) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const { projectID } = useParams();
  const [deadline, setDeadline] = useState<any>('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (deadline) {
      setLoading(true);
      try {
        const date = moment(deadline.format(), 'jYYYY/jMM/jDD').format('YYYY-MM-DD');
        await myAxios.put(`/task/${id}`, { deadline: date });
        const boards = await myAxios.get(`/board/${projectID}`);
        dispatch(updateBoards(boards.data.data));

        notifications.show({ message: 'مهلت ویرایش شد', color: 'green' });
        setDeadline('');
        setLoading(false);
        onClose();
      } catch (error: any) {
        setLoading(false);
        notifications.show({ message: error?.message, color: 'red' });
      }
    }
  };
  return (
    <Modal opened={opened} onClose={onClose} size="md" centered dir="rtl" title="ویرایش مهلت تسک">
      <form>
        <Flex direction="column" justify="center" align="center" gap="sm">
          {/* <DatePicker {...form.getInputProps('deadline')} /> */}
          <Calendar
            calendar={persian}
            locale={persian_en}
            value={deadline}
            onChange={setDeadline}
            format={'YYYY/MM/DD'}
          />
          <Text>مهلت جدید : {deadline? deadline.format(): ''}</Text>
          <Button
            loading={loading}
            type="submit"
            className="mt-4 w-full"
            onClick={(e) => handleSubmit(e)}>
            تغییر مهلت
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default EditDeadlineModal;
