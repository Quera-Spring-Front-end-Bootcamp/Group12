import { Flex } from '@mantine/core';
import FilterTask from '../../../../components/FilterTasks';
import Board from '../../../../components/Board/Board';
import { useAppSelector } from '../../../../data/reduxHooks';
import ScrollContainer from 'react-indiana-drag-scroll';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const BoardView = () => {
  const storeBoards = useAppSelector((state) => state.boards.projectBoards);
  const onDragEnd = (result: DropResult) => {
    if (
      result.source.droppableId === result.destination?.droppableId &&
      result.source.index === result.destination?.index
    )
      return;
    // if() return
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
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
            {/* boards container */}
            {useAppSelector((state) => {
              const sortedBoards = [...state.boards.projectBoards];
              sortedBoards.sort((a, b) => a.position - b.position);
              return sortedBoards.map((board) => (
                <Board
                  id={board._id}
                  key={board._id}
                  name={board.name}
                  tasks={board.tasks}
                  projectName={state.boards.projectName}
                />
              ));
            })}
          </ScrollContainer>
        </Flex>
      </DragDropContext>
    </>
  );
};
export default BoardView;
