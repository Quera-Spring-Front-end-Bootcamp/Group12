import { ReactNode, useState } from 'react';
import { Text, Flex, CardProps, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import TaskListItem from '../TaskListItem';
import { Plus, Dots } from '../../assets/icons';
import SvgProvier from '../../assets/icons/SvgProvider';

type TaskListHeaderProps = CardProps & {
  children?: ReactNode;
};

// popover not handled!

const TaskListHeader = ({ children }: TaskListHeaderProps) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { primaryColor } = useMantineTheme();
  const [tasksNumber, setTasksNumber] = useState(0);
  const onMouseDownHandler = () => {
    setTasksNumber(tasksNumber + 1);
  };
  return (
    <TaskListItem
      style={{
        borderTop: `1px solid ${theme.colors[primaryColor][7]}`,
        padding: '8px 12px'
      }}
      shadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
      radius="4px"
      className="group"
    >
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
          <Text
            style={{
              backgroundColor: colorScheme === 'light' ? '#F4F4F4' : 'black',
              borderRadius: '50%',
              padding: '2px 4px',
              fontSize: '10px',
              fontWeight: '500'
            }}
          >
            {tasksNumber}
          </Text>
        </Flex>
        <Flex
          className="invisible opacity-0 group-hover:visible duration-1000 group-hover:opacity-100"
          align="center"
          justify="end"
          gap="4px"
        >
          <Text style={{ cursor: 'default' }}>
            <SvgProvier color="black" style={{ height: '20px' }}>
              <Dots />
            </SvgProvier>
          </Text>
          <Text onMouseDown={onMouseDownHandler} style={{ cursor: 'default' }}>
            <SvgProvier color="black" style={{ height: '20px' }}>
              <Plus />
            </SvgProvier>
          </Text>
        </Flex>
      </Flex>
    </TaskListItem>
  );
};

export default TaskListHeader;
