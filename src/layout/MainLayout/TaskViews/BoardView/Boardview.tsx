import { Flex, ScrollArea, Text } from '@mantine/core';
import TaskListHeader from '../../../../components/TaskListHeader';
import TaskCard from '../../../../components/TaskCard';
import FilterTask from '../../../../components/FilterTasks';
import Board from '../../../../components/Board/Board';
import { useAppSelector } from '../../../../data/reduxHooks';

import ScrollContainer from 'react-indiana-drag-scroll';

const BoardView = () => {
  return (
    <>
      <FilterTask />
      <Flex style={{ flexShrink: '0' }} wrap="nowrap" gap="lg" mah="100%" mt="sm">
        <ScrollContainer
          style={{
            height: 'calc(100vh - 20px)',
            display: 'flex',
            gap: '16px',
            paddingLeft: '4px'
          }}
        >
          {/* {numbers.map((el) => (
          <div
            key={el}
            style={{
              flexShrink: '0',
              width: '100px',
              height: '400px',
              backgroundColor: 'red'
            }}>
            {el}
          </div>
        ))} */}

          {/* boards container */}
          {useAppSelector((state) =>
            state.boards.projectBoards.map((board) => (
              <Board key={board._id} name={board.name} tasks={board.tasks} />
            ))
          )}
          <Flex style={{ flexShrink: '0' }} direction="column" miw="250px" gap="md">
            <TaskListHeader tasksCount={5}>
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
            <TaskListHeader tasksCount={3}>
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
            <TaskListHeader tasksCount={4}>
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
            <TaskListHeader tasksCount={5}>
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
        </ScrollContainer>
      </Flex>
    </>
  );
};
export default BoardView;
