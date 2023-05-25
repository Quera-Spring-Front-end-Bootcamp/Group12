import {
  Flex,
  Avatar,
  Text,
  Title,
  Group,
  Badge,
  Divider,
} from '@mantine/core';
import {
  CheckmarkSqaure,
  Done,
  Dots,
  Flag,
  JustifyRight,
} from '../../assets/icons';
import TaskListItem from '../TaskListItem';

const TaskCard = () => (
  <TaskListItem
    w="256px"
    pb="0px"
    withBorder
    className="group"
    style={{ transition: '300ms ease-out' }}
  >
    <Flex direction="column" gap="16px" style={{ position: 'relative' }}>
      <Flex direction="column" gap="8px">
        <Text size="12px">پروژه اول</Text>
        <Flex gap="4px" align="center">
          <Title style={{ fontWeight: 700, fontSize: '14px' }} order={6}>
              این یک تیتر برای این تسک است.
          </Title>
          <JustifyRight />
        </Flex>
      </Flex>
      <Avatar
        size="24px"
        variant="filled"
        color="brand"
        radius="xl"
        src={null}
        style={{ position: 'absolute', left: 0 }}
        className="opacity-0 group-hover/:opacity-100 duration-300 transition-all"
      >
          AH
      </Avatar>

      <Group>
        <Group spacing="4px">
          <Flag />
          <Text size="12px">۵ مهر - فردا</Text>
        </Group>
        <Group spacing="4px">
          <CheckmarkSqaure />
          <Text color="#BDC0C6" size="12px">
              ۲ / ۱۲
          </Text>
        </Group>
      </Group>
      <Group spacing="xs">
        <Badge>درس</Badge>
        <Badge color="grape">پروژه</Badge>
      </Group>
    </Flex>
    <div className="max-h-0  group-hover/:block group-hover/:max-h-20 transition-all ease-in-out duration-300 ">
      <Divider mb="16px" mt="16px" className="invisible group-hover/:visible transition-all ease-in-out" />
      <Flex justify="space-between" mb="16px">
        <Done className="opacity-0 group-hover/:opacity-100 transition-all ease-in-out duration-300" />
        <Dots className="invisible group-hover/:visible opacity-0 group-hover/:opacity-100 transition-all ease-in-out duration-300" />
      </Flex>
    </div>
  </TaskListItem>
);
export default TaskCard;
