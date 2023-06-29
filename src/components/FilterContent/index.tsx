import { Text, Flex, Select } from '@mantine/core';
import { useAppSelector } from '../../data/reduxHooks';

type props = {
  setMember: () => void;
};

const FilterContent = ({setMember}:props) => {
  const members = useAppSelector((state) => state.boards.projectMembers);
  const value = members.map((m: any) => {
    return { value: m.user._id, label: `${m.user.firstname} ${m.user.lastname}` };
  });
  return (
    <Flex align="center" gap="xs">
      <Text> تسک هایی که اعضای آن ها </Text>
      <Select  onChange={setMember} data={value} className="text-sm"   withinPortal  width={"50px"}/>
      <Text>می باشد</Text>
    </Flex>
  );
};

export default FilterContent;
