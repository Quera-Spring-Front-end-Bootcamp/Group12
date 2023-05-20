import { Card as MantineCard } from "@mantine/core";
import { CardProps as MantineCardProps } from "@mantine/core";

const Card = (props: MantineCardProps) => {
  return <MantineCard {...props}></MantineCard>;
};

export default Card;
