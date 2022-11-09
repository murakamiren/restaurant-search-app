import { Box, Heading } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { FC, memo } from "react";

import { searchInfoAtom } from "@/store/searchInfoAtom";

import SortSelectMemo from "./sortSelect/sortSelect";

type Props = {
  count: number;
};

const SearchInfo: FC<Props> = ({ count }) => {
  const searchInfo = useAtomValue(searchInfoAtom);
  if (!searchInfo) return null;

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
        検索結果：{count}件
      </Heading>
      <SortSelectMemo />
    </Box>
  );
};

const SearchInfoMemo = memo<Props>(({ count }) => <SearchInfo count={count} />);
SearchInfoMemo.displayName = "SearchInfoMemo";

export default SearchInfoMemo;
