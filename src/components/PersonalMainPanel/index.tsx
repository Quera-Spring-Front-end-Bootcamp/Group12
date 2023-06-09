import { Flex, Text, Avatar } from '@mantine/core';
import Button from '../Button';
import TextInput from '../TextInput';

const ProfileMainPanel = () => (
  <>
    <Flex direction="column" w="354px">
      <Text style={{ fontWeight: '700', fontSize: '24px' }}>اطلاعات فردی</Text>
      <Flex m="32px 0" align="center">
        <Avatar color="#208D8E" style={{ borderRadius: '50%' }} size="75px">
          JD
        </Avatar>
        <Flex direction="column" m="0 12px">
          <Button
            style={{
              backgroundColor: 'white',
              color: '#208D8E',
              border: '1px solid #208D8E',
              marginBottom: '8px',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            ویرایش تصویر پروفایل
          </Button>
          <Text style={{ fontSize: '10px', fontWeight: '300' }}>
            این تصویر برای عموم قابل نمایش است
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <TextInput
          label="نام"
          m="12px 0"
          labelProps={{
            style: {
              fontWeight: '500',
              marginBottom: '8px',
              fontSize: '12px'
            }
          }}
        />
        <TextInput
          label="نام خانوادگی"
          m="12px 0"
          labelProps={{
            style: {
              fontWeight: '500',
              marginBottom: '8px',
              fontSize: '12px'
            }
          }}
        />
        <TextInput
          label="شماره موبایل"
          m="12px 0"
          labelProps={{
            style: {
              fontWeight: '500',
              marginBottom: '8px',
              fontSize: '12px'
            }
          }}
        />
        <Button style={{ margin: '24px 0' }}>ثبت تغییرات</Button>
      </Flex>
    </Flex>
  </>
);
export default ProfileMainPanel;
