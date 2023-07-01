import { Accordion } from "@mantine/core";
import ListRowHeaders from "../ListRowHeaders";
import type { task } from '../../data/dataSlice/boardsSlice';
import ListRow from "../ListRows";

interface ListAccordionprops {
  name: string,
  tasks: task[]
}

export default function ListAccordion({ name, tasks }: ListAccordionprops) {
  const storeTasks = [...tasks];
  
  if (tasks) {
    storeTasks.sort((a, b) => a.position - b.position)
  }
  

  return (
    <>
      <Accordion defaultValue={name} chevronPosition="left" variant="filled">
        <Accordion.Item value={name}>
          <Accordion.Control>
            <ListRowHeaders header={name} />
          </Accordion.Control>

          <Accordion.Panel>
            {storeTasks.map((tasks) => (
              <ListRow 
                key={tasks._id}
                task={tasks}
                name={name}
              />
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}