import { Box, Divider, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useAtom, useAtomValue } from "jotai";
import { FC, memo } from "react";

import PaginationMemo from "@/components/pagination/pagination";
import SearchInfoMemo from "@/components/searchInfo/searchInfo";
import useShopDataFetch from "@/hooks/fetch/useShopDataFetch";
import { searchParamAtom } from "@/store/searchParamAtom";
import { startAtom } from "@/store/startAtom";

import ShopCard from "../shopCard";

const ShopCardView: FC = () => {
  const start = useAtomValue(startAtom);
  const [searchParam] = useAtom(searchParamAtom);

  const { shopData, isError, isValidating } = useShopDataFetch(searchParam, start);

  if (isValidating) return <Spinner />;

  if (!shopData)
    return (
      <Box display="flex" justifyContent="center" mt={12} px={{ base: 4, lg: 8 }}>
        <Heading as="h2" fontSize={{ base: "xl", lg: "3xl" }}>
          検索するを押して検索してください
        </Heading>
      </Box>
    );

  if (isError) return <Text>error</Text>;

  return (
    <>
      <SearchInfoMemo count={shopData.results.results_available} />
      <Flex justify="center">
        <Divider my={12} w="80%" />
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(min(360px, 100%), 1fr))"
        rowGap={20}
        columnGap={12}
        px={{ base: 4, lg: 8 }}
      >
        {shopData.results.shop.map((shop) => (
          <ShopCard
            key={shop.name}
            id={shop.id}
            name={shop.name}
            access={shop.access}
            address={shop.address}
            src={shop.photo.pc.l}
            genre={shop.genre}
          />
        ))}
      </Box>
      {shopData.results.shop.length !== 0 ? (
        <PaginationMemo totalCount={shopData.results.results_available} />
      ) : null}
    </>
  );
};

const ShopCardViewMemo = memo(ShopCardView);

export default ShopCardViewMemo;
