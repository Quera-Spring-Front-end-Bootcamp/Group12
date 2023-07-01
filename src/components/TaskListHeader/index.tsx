import { ReactNode } from 'react';
import { Text, Flex, CardProps, useMantineColorScheme, useMantineTheme, Menu } from '@mantine/core';
import TaskListItem from '../TaskListItem';
import { Plus, Dots, Edit, Delete } from '../../assets/icons';
import SvgProvier from '../../assets/icons/SvgProvider';
import myAxios from '../../helpers/myAxios';
import { notifications } from '@mantine/notifications';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../data/reduxHooks';
import { updateBoards } from '../../data/dataSlice/boardsSlice';
import EditBoardNameModal from '../EditBoardNameModal/EditBoardNameModal';
import { useDisclosure } from '@mantine/hooks';

type TaskListHeaderProps = CardProps & {
  tasksCount: number;
  children?: ReactNode;
  boardId: string;
  openAddModal: () => void;
};

const TaskListHeader = ({ children, tasksCount, boardId, openAddModal }: TaskListHeaderProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const { projectID }: any = useParams();
  const dispatch = useAppDispatch();

  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { primaryColor } = useMantineTheme();

  const editBoardName = () => {
    open();
  };
  const addTask = () => {
    openAddModal();
  };
  const deleteBoard = async () => {
    try {
      await myAxios.delete(`/board/${boardId}`);
      const boards = await myAxios.get(`/board/${projectID}`);
      dispatch(updateBoards(boards.data.data));
      notifications.show({ message: 'ستون حذف شد', color: 'green' });
    } catch (error: any) {
      notifications.show({ message: error?.message, color: 'red' });
    }
  };

  return (
    <TaskListItem
      w="256px"
      style={{
        borderTop: `1px solid ${theme.colors[primaryColor][7]}`,
        padding: '8px 12px'
      }}
      shadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
      className="group overflow-visible"
    >
      <EditBoardNameModal onClose={close} opened={opened} id={boardId} />
      <Flex justify="space-between">
        <Flex justify="flex-start" align="center" gap="4px">
          <Text
            style={{
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            {children}
          </Text>
          <Flex
            ml={8}
            className="rounded-lg"
            bg={colorScheme === 'light' ? '#F4F4F4' : 'black'}
            px={6}
            py={2}
            justify={'center'}
            align={'center'}
          >
            <Text fw={'bold'}>{tasksCount}</Text>
          </Flex>
        </Flex>
        <Flex
          className="invisible opacity-0 group-hover:visible duration-200 group-hover:opacity-100"
          align="center"
          justify="end"
          gap="4px"
        >
          <Menu trigger="hover" shadow="md" width={200} openDelay={100} withArrow closeDelay={500}>
            <Menu.Target>
              <Text style={{ cursor: 'pointer' }}>
                <SvgProvier style={{ height: '20px' }}>
                  <Dots />
                </SvgProvier>
              </Text>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={editBoardName}
                icon={
                  <SvgProvier style={{ height: '20px' }}>
                    <Edit />
                  </SvgProvier>
                }
              >
                ویرایش نام ستون
              </Menu.Item>
              <Menu.Item
                onClick={addTask}
                icon={
                  <SvgProvier style={{ height: '20px' }}>
                    <Plus />
                  </SvgProvier>
                }
              >
                افزودن تسک
              </Menu.Item>

              <Menu.Item
                onClick={deleteBoard}
                icon={
                  <SvgProvier style={{ height: '20px' }}>
                    <Delete />
                  </SvgProvier>
                }
              >
                حذف ستون
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Text style={{ cursor: 'pointer' }} onClick={openAddModal}>
            <SvgProvier style={{ height: '20px' }}>
              <Plus />
            </SvgProvier>
          </Text>
        </Flex>
      </Flex>
    </TaskListItem>
  );
};

export default TaskListHeader;
