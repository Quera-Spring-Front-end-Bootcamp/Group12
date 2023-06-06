import { Accordion, ScrollArea } from '@mantine/core';
import ListRowHeaders from '../ListRowHeaders';
import ListRow from '../ListRows';

const List = () => (
  <ScrollArea mah="calc(100vh - 230px)">
    <Accordion chevronPosition="left" defaultValue="پروژه اول" variant="filled">
      <Accordion.Item value="پروژه اول">
        <Accordion.Control>پروژه اول</Accordion.Control>
        <Accordion.Panel>
          {/* Pending */}
          <Accordion defaultValue="Pending" chevronPosition="left" variant="filled">
            <Accordion.Item value="Pending">
              <Accordion.Control>
                <ListRowHeaders color="pink" header="Pending" />
              </Accordion.Control>

              <Accordion.Panel>
                <ListRow color="#F92E8F" />
                <ListRow color="#F92E8F" />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          {/* In progress */}
          <Accordion defaultValue="In progress" chevronPosition="left" variant="filled">
            <Accordion.Item value="In progress">
              <Accordion.Control>
                <ListRowHeaders color="orange" header="In progress" />
              </Accordion.Control>

              <Accordion.Panel>
                <ListRow color="#F98F2E" />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

          {/* Done */}
          <Accordion defaultValue="Done" chevronPosition="left" variant="filled">
            <Accordion.Item value="Done">
              <Accordion.Control>
                <ListRowHeaders color="green" header="Done" />
              </Accordion.Control>

              <Accordion.Panel>
                <ListRow color="#43BB0B" />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </ScrollArea>
);

export default List;
