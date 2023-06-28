import { Flex, List, Modal } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Delete, Plus, Share, CheckList } from '../../assets/icons';
import Button from '../Button';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useAppDispatch } from '../../data/reduxHooks';
import { deleteWorkspace } from '../../data/dataSlice/workSpacesSlice';
import { useDisclosure } from '@mantine/hooks';
import EditNameModal from '../EditNameModal';
import AddProjectModal from '../AddProjectModal';
import ShareWorkSpaceModal from '../ShareWorkSpaceModal';
type props = {
  opened: boolean;
  onClose: () => void;
  id: string;
};

const EditWorkspaceModal = ({ opened, onClose, id }: props) => {
    //this modal is  for edit workspace name
  const [nameOpened, { open: openName, close: closeName }] = useDisclosure(false);
    // this hook  is  for make new project for current workspace
    const [projectOpened, { open: openProject, close: closeProject }] = useDisclosure(false);
    // this hook  is  for make new project for current workspace
    const [shareOpened, { open: openShare, close: closeShare }] = useDisclosure(false);
  const dispatch = useAppDispatch();

  // delete workspace by id
  const handleDelete = async () => {
    try {
      await myAxios.delete(`/workspace/${id}`);
      dispatch(deleteWorkspace(id));
      notifications.show({ message: 'ورک اسپیس حذف شد', color: 'blue' });
      onClose();
    } catch (error: any) {
      notifications.show({ message: error?.message, color: 'red' });
    }
  };
  return (
    <>
      <Modal opened={opened} onClose={onClose} size="250px" centered dir="rtl">
      <EditNameModal opened={nameOpened} onClose={closeName} id={id} />
      <AddProjectModal opened={projectOpened} onClose={closeProject} id={id}/>
      <ShareWorkSpaceModal opened={shareOpened} onClose={closeShare} id={id}/>
        <List spacing="2px" size="sm">
          <List.Item>
            <Flex className="cursor-pointer hover:underline" align="center" onClick={openProject}>
              <SvgProvier>
                <Plus />
              </SvgProvier>
              ساختن پروژه جدید{' '}
            </Flex>
          </List.Item>
          <List.Item>
            <Flex className="cursor-pointer hover:underline" align="center" onClick={openName}>
              <SvgProvier>
                <CheckList className="ml-1" />
              </SvgProvier>
              ویرایش نام ورک‌اسپیس{'  '}
            </Flex>
          </List.Item>
          <List.Item>
            <Flex
              className="cursor-pointer hover:underline text-red-600"
              align="center"
              onClick={handleDelete}>
              <SvgProvier>
                <Delete className="w-5" />
              </SvgProvier>
              حذف{' '}
            </Flex>
          </List.Item>
          <Button onClick={openShare}>
            <SvgProvier>
              <Share />
            </SvgProvier>
            افزودن کاربر به ورک اسپیس
          </Button>
        </List>
      </Modal>
    </>
  );
};

export default EditWorkspaceModal;
