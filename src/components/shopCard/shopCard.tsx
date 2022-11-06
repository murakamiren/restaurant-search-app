import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  name: string;
  access: string;
  address: string;
  src: string;
};

const ShopCard: FC<Props> = ({ name, access, address, src }) => {
  return (
    <Box borderRadius={8} shadow="base">
      <Heading as="h3">{name}</Heading>
      <Text>{access}</Text>
      <Text>{address}</Text>
      <Box w="200px" h="200px">
        {src ? <Image src={src} alt={name} w="100%" objectFit="fill" /> : null}
      </Box>
    </Box>
  );
};

export default ShopCard;
