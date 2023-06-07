import {Avatar, Flex, Text, Accordion} from "@mantine/core";
import Button from "../Button";
import Modal from "../Modal";
import { useDisclosure } from "@mantine/hooks";
import TextInput from "../TextInput";
import { LinkBig } from "../../assets/icons";
import { Share } from "../../assets/icons";
const ShareComponent = () => {
 const [opened, { open, close }] = useDisclosure(false);

 return (
   <>
     <Modal title="به اشتراک گذاری پروژه" opened={opened} onClose={close}>
       <Flex m="24px 0">
         <TextInput
           w="100%"
           style={{ backgroundColor: "#F0F1F3" }}
           placeholder="دعوت با ایمیل"
         ></TextInput>
         <Button
           style={{
             fontSize: "14px",
             fontWeight: "400",
           }}
         >
           ارسال
         </Button>
       </Flex>
       <Flex justify="space-between" align="cente" m="32px 0">
         <Flex align="center">
           <LinkBig width="20px" style={{ marginLeft: "8px" }} />
           <Text style={{ fontSize: "14px", fontWeight: "400" }}>
             لینک خصوصی
           </Text>
         </Flex>
         <Flex>
           <Button
             style={{
               color: "#1E1E1E",
               backgroundColor: "white",
               border: "1px solid #E9EBF0",
               padding: "0px 12px",
               height: "24px",
               fontSize: "12px",
               fontWeight: "400",
             }}
           >
             کپی لینک
           </Button>
         </Flex>
       </Flex>
       <Flex>
         <Text
           style={{
             color: "#7D828C",
             fontSize: "14px",
             fontWeight: "400",
             marginBottom: "12px",
           }}
         >
           اشتراک گذاشته شده با
         </Text>
       </Flex>
       <Flex direction="column">
         <Flex align="center" direction="row" justify="space-between" m="8px 0">
           <Flex align="center">
             <Avatar style={{ borderRadius: "50%" }}>JD</Avatar>
             <Text
               style={{
                 marginRight: "4px",
               }}
             >
               من
             </Text>
             <Text
               style={{
                 backgroundColor: "#A5E4F8",
                 fontSize: "12px",
                 fontWeight: "400",
                 padding: "4px 8px",
                 borderRadius: "8px",
                 color: "#1E1E1E",
                 marginRight: "8px",
               }}
             >
               workspace owner
             </Text>
           </Flex>
           <Flex>
             <Text
               style={{
                 color: "#1E1E1E",
                 backgroundColor: "white",
                 border: "1px solid #E9EBF0",
                 padding: "0px 12px",
                 height: "24px",
                 fontSize: "12px",
                 fontWeight: "400",
                 borderRadius: "8px",
               }}
             >
               دسترسی کامل
             </Text>
           </Flex>
         </Flex>
         <Flex align="center">
           <Flex align="center">
             <Avatar style={{ borderRadius: "50%" }}>JD</Avatar>
             <Text
               style={{
                 marginRight: "4px",
                 color: "#1E1E1E",
                 fontSize: "14px",
                 fontWeight: "400",
               }}
             >
               Arianfathi03@gmail.com
             </Text>
           </Flex>
         </Flex>
       </Flex>
     </Modal>

     <Button onClick={open}>اشتراک گذاری <Share/></Button>
   </>
 );
};

export default ShareComponent;