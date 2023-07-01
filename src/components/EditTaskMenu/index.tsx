import { Menu } from '@mantine/core';
import { ReactNode } from 'react';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Dots, Edit } from '../../assets/icons';
import Button from '../Button';
import EditTaskNameModal from '../EditTaskNameModal';
import { useDisclosure } from '@mantine/hooks';
import EditTaskDescriptionModal from '../EditTaskDescriptionModal';
import EditDeadlineModal from '../EditDeadlineModal';
type Props = {
  children?: ReactNode;
  id: string;
};
const EditTaskMenu = ({ children, id }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [descOpened, { open: openDesc, close: closeDesc }] = useDisclosure(false);
  const [deadlineOpened, { open: openDeadline, close: closeDeadline }] = useDisclosure(false);
  return (
    <>
      <EditTaskNameModal opened={opened} onClose={close} id={id} />
      <EditTaskDescriptionModal opened={descOpened} onClose={closeDesc} id={id} />
      <EditDeadlineModal opened={deadlineOpened} onClose={closeDeadline} id={id} />
      <Menu
        shadow="md"
        width={200}
        trigger="hover"
        position="left"
        openDelay={100}
        withArrow
        closeDelay={200}>
        <Menu.Target>
          <span>...</span>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item
            onClick={open}
            icon={
              <SvgProvier>
                <Edit />
              </SvgProvier>
            }>
            ویرایش نام تسک
          </Menu.Item>
          <Menu.Item
            onClick={openDesc}
            icon={
              <SvgProvier>
                <Edit />
              </SvgProvier>
            }>
            ویرایش توضیحات تسک
          </Menu.Item>
          <Menu.Item
            onClick={openDeadline}
            icon={
              <SvgProvier>
                <Edit />
              </SvgProvier>
            }>
            ویرایش مهلت تسک
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};

export default EditTaskMenu;
