import { Flex, ScrollArea, Text } from '@mantine/core';
import TaskListHeader from '../../../../components/TaskListHeader';
import TaskCard from '../../../../components/TaskCard';
import FilterTask from '../../../../components/FilterTasks';

const BoardView = () => (
  <>
    <FilterTask/>
    <Flex style={{ flexShrink: '0' }} wrap="nowrap" gap="lg" mah="100%" mt='sm'>
      <Flex style={{ flexShrink: '0' }} direction="column" miw="250px" gap="md">
        <TaskListHeader color="red">
          <Text>درحال انجام</Text>
        </TaskListHeader>
        <ScrollArea type="never" mah="calc(100vh - 230px)">
          <Flex direction="column" gap="md">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Flex>
        </ScrollArea>
      </Flex>
      <Flex style={{ flexShrink: '0' }} direction="column" miw="250px" gap="md">
        <TaskListHeader color="red">
          <Text>درحال انجام</Text>
        </TaskListHeader>
        <ScrollArea type="never" mah="calc(100vh - 230px)">
          <Flex direction="column" gap="md">
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Flex>
        </ScrollArea>
      </Flex>
      <Flex style={{ flexShrink: '0' }} direction="column" miw="250px" gap="md">
        <TaskListHeader color="red">
          <Text>درحال انجام</Text>
        </TaskListHeader>
        <ScrollArea type="never" mah="calc(100vh - 230px)">
          <Flex direction="column" gap="md">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Flex>
        </ScrollArea>
      </Flex>
      <Flex style={{ flexShrink: '0' }} direction="column" miw="250px" gap="md">
        <TaskListHeader color="red">
          <Text>درحال انجام</Text>
        </TaskListHeader>
        <ScrollArea type="never" mah="calc(100vh - 230px)">
          <Flex direction="column" gap="md">
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
          </Flex>
        </ScrollArea>
      </Flex>
    </Flex>
  </>
);
export default BoardView;
