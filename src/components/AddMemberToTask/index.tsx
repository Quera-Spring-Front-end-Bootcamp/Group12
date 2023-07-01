import { useDisclosure } from '@mantine/hooks';
import Modal from '../Modal';
import { Button, Flex, Select, Text } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { AssignCircle } from '../../assets/icons';
import { useForm } from '@mantine/form';
import { useAppDispatch, useAppSelector } from '../../data/reduxHooks';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { updateBoards } from '../../data/dataSlice/boardsSlice';
import { useParams } from 'react-router';
import { useState } from 'react';
import TextInput from '../TextInput';
type Props = {
  taskId: string;
};
const AddMemberToTask = ({ taskId }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const { projectID } = useParams();
  const form = useForm({
    initialValues: {
      member: ''
    },

    validate: {
      member: (value) => (value.length > 2 ? null : 'لطفا عضو مورد نظر را انتخاب کنید')
    }
  });
  const members = useAppSelector((state) => state.boards.projectMembers);
  const value = members.map((m: any) => {
    return { value: m.user.username, label: `${m.user.firstname} ${m.user.lastname}` };
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.validate().hasErrors === false) {
      setLoading(false);
      try {
        await myAxios.put(`/task/${taskId}/assign/${form.values.member}`);
        const boards = await myAxios.get(`/board/${projectID}`);
        dispatch(updateBoards(boards.data.data));
        notifications.show({ message: 'کاربر اظافه شد', color: 'green' });
      } catch (error: any) {
        notifications.show({ message: error.message, color: 'red' });
      } finally {
        setLoading(false);
      }
      close();
    }
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="اظافه کردن ممبر به تسک">
        <Flex direction="column" gap="sm">
            <Text>نام کاربری کاربر مورد نظررا وارد کنید:</Text>
          <TextInput placeholder='username' {...form.getInputProps('member')} />

          <Button loading={loading} onClick={handleSubmit}>
            اظافه کردن
          </Button>
        </Flex>
      </Modal>

      <SvgProvier>
        <AssignCircle onClick={open} className="cursor-pointer" />
      </SvgProvier>
    </>
  );
};

export default AddMemberToTask;
