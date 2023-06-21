import { Accordion, Paper, ScrollArea } from '@mantine/core';
import { useParams } from 'react-router-dom';
import FilterTask from '../FilterTasks';
import { useAppSelector } from '../../data/reduxHooks';
import ListAccordion from '../ListAccordion';

const List = () => {
  const params = useParams();
  const projectName: any = params.projectName;

  const storeBoards = useAppSelector((state) => state.boards.projectBoards);

  return (
    <>
      <FilterTask />
      <ScrollArea mah="calc(100vh - 230px)">
        <Paper style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <Accordion chevronPosition="left" defaultValue={projectName} variant="filled">
            <Accordion.Item value={projectName}>
              <Accordion.Control>{projectName}</Accordion.Control>
              <Accordion.Panel>
                {storeBoards.map((boards) => (
                  <ListAccordion
                    key={boards._id}
                    name={boards.name}
                    tasks={boards.tasks}
                  />
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Paper>
      </ScrollArea>
    </>
  );
};

export default List;
