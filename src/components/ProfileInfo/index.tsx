import { Flex, Text } from '@mantine/core';
import Button from '../Button';
import TextInput from '../TextInput';

const ProfileInfo = () => (
  <>
    <Flex direction="column" w="354px">
      <Text style={{ fontWeight: '700', fontSize: '24px' }}>اطلاعات حساب</Text>
      <Flex direction="column">
        <TextInput
          label="ایمیل"
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
          label="رمز عبور"
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
          label="نام کاربری"
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
export default ProfileInfo;
