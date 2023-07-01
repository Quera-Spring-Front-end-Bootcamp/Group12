import { Accordion, Paper } from '@mantine/core';
import { useParams } from 'react-router-dom';
import FilterTask from '../FilterTasks';
import { useAppSelector } from '../../data/reduxHooks';
import ListAccordion from '../ListAccordion';

const List = () => {
  const params = useParams();
  const projectName: any = params.projectName;

  const storeBoards = useAppSelector((state) => state.boards);
  const renderBoards =
    storeBoards.searchTerm.length > 0
      ? storeBoards.search
      : storeBoards.filterTask.length > 0
      ? storeBoards.filterTask
      : storeBoards.projectBoards;
  return (
    <>
      <FilterTask />
        <Paper style={{ maxHeight: 'calc(100vh - 230px)', overflowY: 'auto' }}>
          <Accordion chevronPosition="left" defaultValue={projectName} variant="filled">
            <Accordion.Item value={projectName}>
              <Accordion.Control>{projectName}</Accordion.Control>
              <Accordion.Panel>
                {renderBoards.map((boards) => (
                  <ListAccordion key={boards._id} name={boards.name} tasks={boards.tasks} />
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Paper>
    </>
  );
};

export default List;
