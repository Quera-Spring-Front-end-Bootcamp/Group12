import { Badge, Flex, Text } from "@mantine/core";

interface propTypes {
    header: string;
    color: string;
}

export default function ListRowHeaders({header, color} : propTypes) {
    return (
        <Flex>
            <Badge radius={4} h={33} color={color} variant="filled">{header}</Badge>
            <Text className="mr-auto">اعضا</Text>
            <Text className="mr-20">ددلاین</Text>
            <Text className="mr-20">اولویت</Text>
            <Text className="mr-20">توضیحات</Text>
        </Flex>
    );
}