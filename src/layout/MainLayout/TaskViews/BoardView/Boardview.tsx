import { Flex } from '@mantine/core';
import FilterTask from '../../../../components/FilterTasks';
import Board from '../../../../components/Board/Board';
import { useAppDispatch, useAppSelector } from '../../../../data/reduxHooks';
import ScrollContainer from 'react-indiana-drag-scroll';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import boardsSlice, { task } from '../../../../data/dataSlice/boardsSlice';
import myAxios from '../../../../helpers/myAxios';
const BoardView = () => {
  const dispatch = useAppDispatch();
  const { updateBoards } = boardsSlice.actions;
  const storeBoards = useAppSelector((state) => state.boards.projectBoards);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (
      result.source.droppableId === result.destination?.droppableId &&
      result.source.index === result.destination?.index
    )
      return;
    if (result.source.droppableId === result.destination?.droppableId) {
      const board = storeBoards.find((board) => board._id === result.source.droppableId);
      const updatedTasks = board?.tasks.map((task) => {
        if (
          (result.destination &&
            task.position < result.source.index + 1 &&
            task.position < result.destination?.index + 1) ||
          (result.destination &&
            task.position > result.source.index + 1 &&
            task.position > result.destination?.index + 1)
        )
          return task;
        if (
          result.destination &&
          task.position > result.source.index + 1 &&
          task.position < result.destination?.index + 1
        ) {
          const updatedTask = { ...task, position: task.position - 1 };
          return updatedTask;
        }
        if (
          result.destination &&
          task.position < result.source.index + 1 &&
          task.position > result.destination?.index + 1
        ) {
          const updatedTask = { ...task, position: task.position + 1 };
          return updatedTask;
        }
        if (result.destination && task.position === result.source.index + 1) {
          const updatedTask = { ...task, position: result.destination.index + 1 };
          return updatedTask;
        }
        if (
          result.destination &&
          task.position === result.destination.index + 1 &&
          result.source.index < result.destination.index
        ) {
          const updatedTask = { ...task, position: result.destination.index };
          return updatedTask;
        }
        if (
          result.destination &&
          task.position === result.destination.index + 1 &&
          result.source.index > result.destination.index
        ) {
          const updatedTask = { ...task, position: result.destination.index + 2 };
          return updatedTask;
        }
      });
      const updatedBoards = storeBoards.map((storeBoard) => {
        if (storeBoard._id === board?._id)
          return {
            ...board,
            tasks: updatedTasks
          };
        return storeBoard;
      });
      dispatch(updateBoards(updatedBoards));
      myAxios.put(`/task/${result.draggableId}/position/${result.destination.index + 1}`);
      return;
    }
    if (result.destination && result.source.droppableId !== result.destination.droppableId) {
      const destination = result.destination;
      const sourceBoard = storeBoards.find((board) => board._id === result.source.droppableId);
      const destinationBoard = storeBoards.find((board) => board._id === destination.droppableId);
      const task = { ...sourceBoard?.tasks.find((task) => task._id === result.draggableId) };
      if (task?.position) task.position = result.destination.index + 1;
      if (task?.board) task.board = result.destination.droppableId;
      let updatedBoardTasks = [...(destinationBoard?.tasks as task[])];
      updatedBoardTasks = updatedBoardTasks.map((task) => {
        if (task.position === (result.destination?.index as number) + 1)
          return { ...task, position: task.position + 1 };
        return task;
      });
      console.log(result.destination.index, task, updatedBoardTasks);
      updatedBoardTasks?.splice(result.destination.index, 0, task as task);
      const updatedSourceBoard = {
        ...sourceBoard,
        tasks: sourceBoard?.tasks
          .filter((task) => task._id !== result.draggableId)
          .map((task) => {
            if (task.position > result.source.index + 1)
              return { ...task, position: task.position - 1 };
            return task;
          })
      };
      const updatedDestinationBoard = {
        ...destinationBoard,
        tasks: updatedBoardTasks
      };
      const updatedBoards = storeBoards.map((storeBoard) => {
        if (storeBoard._id === updatedSourceBoard._id) return updatedSourceBoard;
        if (storeBoard._id === updatedDestinationBoard._id) return updatedDestinationBoard;
        return storeBoard;
      });
      console.log(updatedBoards);
      dispatch(updateBoards(updatedBoards));

      myAxios
        .put(`/task/${result.draggableId}/board/${result.destination.droppableId}`)
        .then(() => {
          myAxios.put(
            `/task/${result.draggableId}/position/${(result.destination?.index as number) + 1}`
          );
        });
    }
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
