import {useState} from "react";
import {Text, Flex, CardProps} from '@mantine/core';
import TaskListItem from "../TaskListItem";

type TaskListHeaderProps = CardProps & {
  color: string;
}

const TaskListHeader = ({children, color} : TaskListHeaderProps) => {
  const [tasksNumber, setTasksNumber] = useState("۳");

  return (
    <TaskListItem
      style={{ borderTop: `1px solid ${color}` ,
               padding : "8px 12px",
      }}
      shadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
      radius="4px"
      >
      <Flex justify="flex-start" align="center" gap="4px">
        <Text
          style={{
            fontSize:"16px",
            fontWeight: "500"
          }}
          >
          {children}
        </Text>
        <Text
          style={{
            backgroundColor: "#F4F4F4",
            borderRadius: "50%",
            padding: "2px 4px",
            fontSize: "10px",
            fontWeight: "500"
          }}
          >
          {tasksNumber}
        </Text>
      </Flex>
    </TaskListItem>
  );
};

export default TaskListHeader