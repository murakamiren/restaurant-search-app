import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

import { Shop } from "@/@types/api/shopType";

type Props = {
  data: Shop;
};

const DetailTop: FC<Props> = ({ data }) => {
  return (
    <Flex gap={{ base: 8, lg: 16 }} alignItems="center" flexDir={{ base: "column", md: "row" }}>
      <Box w={{ base: "300px", md: "260px", lg: "300px" }}>
        <Image src={data.photo.pc.l} alt={data.name} w="100%" />
      </Box>
      <Box flex="1">
        {data.catch === "" ? null : (
          <Text fontSize={{ base: "sm", md: "md" }} color="primary.600" fontWeight="semibold">
            {data.catch}
          </Text>
        )}
        <Heading as="h2" fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}>
          {data.name}
        </Heading>
        <Text color="gray.500" fontSize={{ base: "xs", md: "sm", lg: "md" }}>
          {data.access}
        </Text>
      </Box>
    </Flex>
  );
};

export default DetailTop;
