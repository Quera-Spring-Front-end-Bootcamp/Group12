import { Flex, ScrollArea, Text } from '@mantine/core';
import TaskListHeader from '../TaskListHeader';
import TaskCard from '../TaskCard';
import Button from '../Button';
import SvgProvier from '../../assets/icons/SvgProvider';
import { PlusSquare } from '../../assets/icons';
import type { task } from '../../data/dataSlice/boardsSlice';
import { Draggable } from 'react-beautiful-dnd';
import MyDroppable from '../MyDroppable/MyDroppable';

type props = {
  name: string;
  tasks: task[];
  projectName: string;
  id: string;
};

const Board = ({ name, tasks, projectName, id }: props) => {
  const sortedTasks = [...tasks];
  if (tasks) {
    sortedTasks.sort((a, b) => a.position - b.position);
  }
  const tasksCount = sortedTasks.length;
  return (
    <MyDroppable droppableId={id}>
      {(provided) => (
        <Flex
          ref={provided.innerRef}
          style={{ flexShrink: '0' }}
          direction="column"
          miw="250px"
          gap="md"
          {...provided.droppableProps}
        >
          <TaskListHeader tasksCount={tasksCount}>
            <Text>{name}</Text>
          </TaskListHeader>
          <ScrollArea
            type="never"
            mah="calc(100vh - 230px)"
            style={{
              overflow: 'visible'
            }}
          >
            <Flex direction="column" gap="md">
              {sortedTasks &&
                sortedTasks.map((task, index) => (
                  <Draggable draggableId={task._id} index={index}>
                    {(provided) => (
                      <div
                        key={task._id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard task={task} projectName={projectName} />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </Flex>
          </ScrollArea>
          <Button
            styles={{
              root: {
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center'
              }
            }}
            variant="outline"
          >
            <SvgProvier>
              <PlusSquare />
            </SvgProvier>
            <Text m={4}>افزودن تسک جدید</Text>
          </Button>
        </Flex>
      )}
    </MyDroppable>
  );
};

export default Board;