import { Box, HStack, Icon } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC, memo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { countPerPage } from "@/constant/api/setting";
import usePagination from "@/hooks/pagination/usePagination";
import { startAtom } from "@/store/startAtom";
import range from "@/util/range";
import { startCalc } from "@/util/startCalc";

import PaginationItemMemo from "./paginationItem/paginationItem";

type Props = {
  totalCount: number;
};

const Pagination: FC<Props> = ({ totalCount }) => {
  const [start, setStart] = useAtom(startAtom);
  const { clickNext, clickPrev } = usePagination();
  const paginationMaxRange = Math.ceil(totalCount / countPerPage);

  return (
    <Box w="full" mt={12}>
      <HStack w="full" justify="center" spacing={6}>
        {start === 1 ? null : (
          <Icon as={IoIosArrowBack} w={6} h={6} cursor="pointer" onClick={() => clickPrev()} />
        )}
        {range(1, paginationMaxRange).map((number) => (
          <PaginationItemMemo
            key={number}
            number={number}
            onCLick={() => setStart(() => startCalc(number, countPerPage))}
            currentSelected={start === startCalc(number, countPerPage)}
          />
        ))}
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
