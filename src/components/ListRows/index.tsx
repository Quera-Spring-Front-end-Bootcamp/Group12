import { Avatar, Flex, Text } from '@mantine/core';
import SvgProvier from '../../assets/icons/SvgProvider';
import { Flag, JustifyRight } from '../../assets/icons';

interface propTypes {
  color: string;
}

export default function ListRow({ color }: propTypes) {
  return (
    <Flex className="my-5 bg-white p-3">
      <div className="w-5 h-5 rounded-lg ml-2" style={{ backgroundColor: color }} />
      <Text>این یک تیتر برای این تسک است.</Text>
      <Avatar className="mr-auto" size="32px" color="teal" radius="xl" variant="filled">
        JD
      </Avatar>
      <Text className="mr-20">تاریخ</Text>
      <div className="mr-24">
        <SvgProvier color="#FB0606" style={{ height: '16px' }}>
          <Flag />
        </SvgProvier>
      </div>
      <div className="mr-28 ml-5">
        <SvgProvier color="#BDC0C6" style={{ height: '12px' }}>
          <JustifyRight />
        </SvgProvier>
      </div>
    </Flex>
  );
}
