import { Box, Heading } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { FC, memo } from "react";

import useShopDataFetch from "@/hooks/fetch/useShopDataFetch";
import { searchParamAtom } from "@/store/searchParamAtom";
import { startAtom } from "@/store/startAtom";

import SortSelectMemo from "./sortSelect/sortSelect";

const SearchInfo: FC = () => {
  const start = useAtomValue(startAtom);
  const searchParam = useAtomValue(searchParamAtom);
  const { shopData } = useShopDataFetch(searchParam, start);

  return (
    <Box
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{ base: 4, lg: 8 }}
      mt={12}
    >
      <Heading as="h2" fontSize={{ base: "xl", lg: "2xl" }} flex="1">
        検索結果：{shopData ? shopData.results.results_available : ""}件
      </Heading>
      <SortSelectMemo />
    </Box>
  );
};

const SearchInfoMemo = memo(SearchInfo);

export default SearchInfoMemo;
