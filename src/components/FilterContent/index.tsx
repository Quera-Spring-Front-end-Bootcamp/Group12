import { Text, Flex, Select } from '@mantine/core';
import { useAppSelector } from '../../data/reduxHooks';

const FilterContent = () => {
  const members = useAppSelector((state) => state.boards.projectMembers);
  const data = members.map((m: any) => {
    return { value: m._id, label: m.name };
  });
  return (
    <Flex align="center" gap="xs">
      <Text> تسک هایی که اعضای آن ها </Text>
      <Select placeholder="اعضا" data={data} className="text-sm" />
      <Text>می باشد</Text>
    </Flex>
  );
};

export default FilterContent;
