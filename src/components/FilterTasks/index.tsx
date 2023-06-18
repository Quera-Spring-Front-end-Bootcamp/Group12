import { Badge, Divider, Flex, Group, Text } from '@mantine/core';
import SearchInput from '../Search';
import Button from '../Button';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Delete, TwoLineSetting } from '../../assets/icons';
import MyDroppable from '../MyDroppable/MyDroppable';

type props = {
  dragTask?: boolean;
};

const FilterTask = ({ dragTask }: props) => (
  <div className="flex  gap-4 items-center border-b-2 pb-1 h-12">
    <SearchInput fw={500} fz={12} placeholder="جستجو بین تسک‌ها" className="border-none shrink-0" />
    <Divider orientation="vertical" />
    <Button
      fw={500}
      className="shrink-0"
      fz={12}
      leftIcon={
        <SvgProvier style={{ height: '24px' }}>
          <TwoLineSetting />
        </SvgProvier>
      }
      ml={30}
      style={{
        backgroundColor: 'transparent',
        color: 'inherit'
      }}
    >
      فیلترها
    </Button>
    <Badge className="shrink-0" size="lg" color="cyan">
      دسته‌بندی‌شده با: وضعیت
    </Badge>
    {
      <MyDroppable droppableId="delete">
        {(provided, snapshot) => {
          return (
            <Flex
              w={'100%'}
              pb={dragTask ? 6 : 0}
              ref={provided.innerRef}
              h={dragTask ? 42 : 0}
              style={{
                overflow: 'hidden'
              }}
              className="transition-all duration-200 z-40"
              {...provided.droppableProps}
            >
              <div
                className={`rounded-md transition-all border duration-200 ${
                  snapshot.isDraggingOver
                    ? 'bg-red-500 text-white border-white'
                    : 'border-red-500 text-red-500'
                } w-full  z-50`}
              >
                <Group position="center" w={'100%'} align="center" h={'100%'}>
                  <SvgProvier>
                    <Delete />
                  </SvgProvier>
                  <Text color="">حذف تسک</Text>
                  {/* {provided.placeholder} */}
                </Group>
              </div>
            </Flex>
          );
        }}
      </MyDroppable>
    }
  </div>
);

export default FilterTask;
