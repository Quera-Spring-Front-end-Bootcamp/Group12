import { Flex, Text } from '@mantine/core';
import TaskListHeader from '../TaskListHeader';
import TaskCard from '../TaskCard';
import Button from '../Button';
import SvgProvier from '../../assets/icons/SvgProvider';
import { PlusSquare } from '../../assets/icons';
import type { task } from '../../data/dataSlice/boardsSlice';
import { Draggable } from 'react-beautiful-dnd';
import MyDroppable from '../MyDroppable/MyDroppable';
import { useDisclosure } from '@mantine/hooks';
import AddTaskModal from '../AddTaskModal';


type props = {
  name: string;
  tasks: task[];
  projectName: string;
  id: string;
};

const Board = ({ name, tasks, projectName, id }: props) => {
  const [opened, { open, close }] = useDisclosure(false);
  const sortedTasks = [...tasks];
  if (tasks) {
    sortedTasks.sort((a, b) => a.position - b.position);
  }
  const tasksCount = sortedTasks.length;
  return (
    <Flex direction="column" miw="250px" gap="sm" className="transition-all duration-200 shrink-0">
      <AddTaskModal opened={opened} onClose={close} boardName={name} boardId={id}/>
      <TaskListHeader tasksCount={tasksCount}>
        <Text>{name}</Text>
      </TaskListHeader>

      <Flex
        mah="calc(100vh - 250px)"
        style={{ flexShrink: '0' }}
        direction="column"
        miw="250px"
        gap="sm"
      >
        <MyDroppable droppableId={id}>
          {(provided) => (
            <Flex
              ref={provided.innerRef}
              direction="column"
              className={` overflow-scroll no-scrollbar  transition-all duration-200`}
              {...provided.droppableProps}
            >
              {sortedTasks.length > 0 ? (
                sortedTasks.map((task, index) => (
                  <Draggable key={task._id} draggableId={task._id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className="task"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard
                          dragTask={snapshot.isDragging}
                          task={task}
                          projectName={projectName}
                        />
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <div style={{ height: '1px' }}></div>
              )}
              {provided.placeholder}
            </Flex>
          )}
        </MyDroppable>
        <Button
        onClick={()=>{open()}}
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
    </Flex>
  );
};

export default Board;
