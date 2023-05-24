import Card from '../Card';
import { CardProps } from '@mantine/core';


const TaskListItem = (props :CardProps ) => {
    return (
        <Card radius={'md'} shadow='sm' bg={'#ffffff'} {...props}
        ></Card>
    )
}
export default TaskListItem;