import { CardProps } from '@mantine/core';
import Card from '../Card';

const TaskListItem = (props :CardProps) => (
  <Card
    radius="md"
    shadow="sm"
    bg="#ffffff"
    {...props}
  />
);
export default TaskListItem;
