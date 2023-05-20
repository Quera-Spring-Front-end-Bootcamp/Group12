import { Card as MantineCard } from "@mantine/core";
import { CardProps as MantineCardProps } from "@mantine/core";

const Card = (props: MantineCardProps) => {
  return <MantineCard {...props} style={{zIndex:99}}></MantineCard>;
};

export default Card;
