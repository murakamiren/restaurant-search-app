import { Box, Heading } from "@chakra-ui/react";
import { useAtomValue } from "jotai";
import { FC, memo } from "react";

import { searchInfoAtom } from "@/store/searchInfoAtom";

type Props = {
  count: number;
};

const SearchInfo: FC<Props> = ({ count }) => {
  const searchInfo = useAtomValue(searchInfoAtom);
  if (!searchInfo) return null;

  return (
    <Box w="full" display="flex" justifyContent="center" mt={12}>
      <Heading as="h2" fontSize={{ base: "xl", lg: "3xl" }}>
        {count}件の店舗が見つかりました
      </Heading>
    </Box>
  );
};

const SearchInfoMemo = memo<Props>(({ count }) => <SearchInfo count={count} />);
SearchInfoMemo.displayName = "SearchInfoMemo";

export default SearchInfoMemo;
