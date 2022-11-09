import { Box, HStack, Icon } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC, memo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { countPerPage } from "@/constant/api/setting";
import usePagination from "@/hooks/component/pagination/usePagination";
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
          <Icon
            as={IoIosArrowBack}
            w={{ base: 4, lg: 6 }}
            h={{ base: 4, lg: 6 }}
            cursor="pointer"
            onClick={() => clickPrev()}
          />
        )}
        <PaginationItemListMemo totalCount={totalCount} itemLimit={5} />
        {start >= totalCount - countPerPage ? null : (
          <Icon
            as={IoIosArrowForward}
            w={{ base: 4, lg: 6 }}
            h={{ base: 4, lg: 6 }}
            cursor="pointer"
            onClick={() => clickNext()}
          />
        )}
      </HStack>
    </Box>
  );
};

const PaginationMemo = memo<Props>(({ totalCount }) => <Pagination totalCount={totalCount} />);
PaginationMemo.displayName = "PaginationMemo";

export default PaginationMemo;
