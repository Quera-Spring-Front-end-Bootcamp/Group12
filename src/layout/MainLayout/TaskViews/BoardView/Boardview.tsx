import { Flex, Text } from "@mantine/core";
import TaskListHeader from "../../../../components/TaskListHeader";
import TaskCard from "../../../../components/TaskCard";

const BoardView = () => {
  return (
    <>
      <Flex gap={"lg"} >
              <Flex direction={"column"} miw={'250px'} gap={"md"}>
                  <TaskListHeader color="red">
                      <Text>درحال انجام</Text>
                  </TaskListHeader>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
        </Flex>
              <Flex direction={"column"} miw={'250px'} gap={"md"}>
                  <TaskListHeader color="red">
                      <Text>درحال انجام</Text>
                  </TaskListHeader>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
        </Flex>
              <Flex direction={"column"} miw={'250px'} gap={"md"}>
                  <TaskListHeader color="red">
                      <Text>درحال انجام</Text>
                  </TaskListHeader>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
        </Flex>
              <Flex direction={"column"} miw={'250px'} gap={"md"}>
                  <TaskListHeader color="red">
                      <Text>درحال انجام</Text>
                  </TaskListHeader>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
                  <TaskCard/>
        </Flex>
      </Flex>
    </>
  );
};
export default BoardView;
