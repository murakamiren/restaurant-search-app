import { Box, HStack, Icon } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC, memo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import usePagination from "@/hooks/pagination/usePagination";
import { startAtom } from "@/store/startAtom";

import PaginationItemListMemo from "./paginationItemList/paginationItemList";

type Props = {
  totalCount: number;
};

const Pagination: FC<Props> = ({ totalCount }) => {
  const [start] = useAtom(startAtom);
  const { clickNext, clickPrev } = usePagination();

  return (
    <Box w="full" mt={12}>
      <HStack w="full" justify="center" spacing={6}>
        {start === 1 ? null : (
          <Icon as={IoIosArrowBack} w={6} h={6} cursor="pointer" onClick={() => clickPrev()} />
        )}
        <PaginationItemListMemo totalCount={totalCount} itemLimit={3} />
        {start === totalCount - 9 ? null : (
          <Icon as={IoIosArrowForward} w={6} h={6} cursor="pointer" onClick={() => clickNext()} />
        )}
      </HStack>
    </Box>
  );
};

const PaginationMemo = memo<Props>(({ totalCount }) => <Pagination totalCount={totalCount} />);
PaginationMemo.displayName = "PaginationMemo";

export default PaginationMemo;
