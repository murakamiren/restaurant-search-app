import { Box, Flex, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { IoLocationSharp, IoRestaurantSharp } from "react-icons/io5";

import { Genre } from "@/@types/api/shopType";

import TextWithIcon from "../textWithIcon/textWithIcon";

type Props = {
  name: string;
  access: string;
  address: string;
  src: string;
  genre: Genre;
};

const ShopCard: FC<Props> = ({ name, access, address, src, genre }) => {
  return (
    <GridItem
      borderRadius={12}
      shadow="base"
      p={10}
      height="auto"
      cursor="pointer"
      data-test-id="card"
    >
      <Flex flexDir="column" justifyContent="space-between" height="100%">
        <Box>
          <Heading as="h3" fontSize="2xl">
            {name}
          </Heading>
          <Text color="gray.500" fontSize="sm">
            {access}
          </Text>
          <VStack alignItems="start" spacing={1} mt={4}>
            <TextWithIcon text={address} icon={IoLocationSharp} />
            <TextWithIcon text={genre.name} icon={IoRestaurantSharp} />
          </VStack>
        </Box>
        <Box w="full" height="300px" overflow="hidden" mt={8} borderRadius={10}>
          {src ? <Image src={src} alt={name} w="full" height="full" objectFit="cover" /> : null}
        </Box>
      </Flex>
    </GridItem>
  );
};

export default ShopCard;
