import { ReactNode } from 'react';
import { Text, Flex, CardProps, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import TaskListItem from '../TaskListItem';
import { Plus, Dots } from '../../assets/icons';
import SvgProvier from '../../assets/icons/SvgProvider';

type TaskListHeaderProps = CardProps & {
  tasksCount: number;
  children?: ReactNode;
};

// popover not handled!

const TaskListHeader = ({ children, tasksCount }: TaskListHeaderProps) => {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const { primaryColor } = useMantineTheme();

  return (
    <TaskListItem
      w="256px"
      style={{
        borderTop: `1px solid ${theme.colors[primaryColor][7]}`,
        padding: '8px 12px'
      }}
      shadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
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
          <Text style={{ cursor: 'default' }}>
            <SvgProvier style={{ height: '20px' }}>
              <Dots />
            </SvgProvier>
          </Text>
          <Text style={{ cursor: 'default' }}>
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
