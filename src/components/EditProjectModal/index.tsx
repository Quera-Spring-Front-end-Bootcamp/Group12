import { Button, Flex, List, Modal } from "@mantine/core";
import SvgProvier from "../../assets/icons/SvgProvider";
import { CheckList, Delete, Plus, Share } from "../../assets/icons";
import { useDisclosure } from "@mantine/hooks";
import myAxios from "../../helpers/myAxios";
import { notifications } from "@mantine/notifications";
import { useAppDispatch } from "../../data/reduxHooks";
import { deleteProject } from "../../data/dataSlice/workSpacesSlice";
import EditProjectNameModal from "../EditProjectNameModal";
import AddBoardModal from "../AddBoardModal";

type props = {
    opened: boolean;
    onClose: () => void;
    id: string;
  };
const EditProjectModal = ({ opened, onClose, id }: props) => {
    const dispatch = useAppDispatch();
    // hook for add board to the project modal
    const [boardOpened, { open: openboard, close: closeboard }] = useDisclosure(false);
    //hook for edit project name modal
    const [nameOpened, { open: openName, close: closeName }] = useDisclosure(false);
    const handleDelete = async () => {
        try {
          const res = await myAxios.delete(`/projects/${id}`);
          console.log(res.data.data)
          dispatch(deleteProject(res.data.data));
          notifications.show({ message: 'پروژه حذف شد', color: 'blue' });
          onClose();
        } catch (error: any) {
          notifications.show({ message: error?.message, color: 'red' });
        }
      };
  return (
      <Modal opened={opened} onClose={onClose} size="215px" centered dir="rtl">
        <EditProjectNameModal opened={nameOpened} onClose={closeName} id={id}/>
        <AddBoardModal opened={boardOpened} onClose={closeboard} id={id}/>
        <List spacing="2px" size="sm">
          <List.Item>
            <Flex className="cursor-pointer hover:underline" align="center" onClick={openboard}>
              <SvgProvier>
                <Plus />
              </SvgProvier>
              ساختن برد جدید{' '}
            </Flex>
          </List.Item>
          <List.Item>
            <Flex className="cursor-pointer hover:underline" align="center" onClick={openName}>
              <SvgProvier>
                <CheckList className="ml-1" />
              </SvgProvier>
              ویرایش نام پروژه{'  '}
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
          <Button>
            <SvgProvier>
              <Share />
            </SvgProvier>
            افزودن کاربر به پروژه
          </Button>
        </List>
      </Modal>
  )
}

export default EditProjectModal