import { Flex, ScrollArea, Text } from '@mantine/core';
import TaskListHeader from '../TaskListHeader';
import TaskCard from '../TaskCard';

type props = {
  name: string;
  tasks: object[];
};

const Board = ({ name, tasks }: props) => {
  const tasksCount = tasks.length;
  return (
    <Flex style={{ flexShrink: '0' }} direction="column" miw="250px" gap="md">
      <TaskListHeader tasksCount={tasksCount}>
        <Text>{name}</Text>
      </TaskListHeader>
      <ScrollArea type="never" mah="calc(100vh - 230px)">
        <Flex direction="column" gap="md">
          {tasks && tasks.map(() => <TaskCard />)}
        </Flex>
      </ScrollArea>
    </Flex>
  );
};

export default Board;
