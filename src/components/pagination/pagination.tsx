import { Box, HStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC, memo } from "react";

import { countPerPage } from "@/constant/api/setting";
import { startAtom } from "@/store/startAtom";
import range from "@/util/range";
import { startCalc } from "@/util/startCalc";

import PaginationItemMemo from "./paginationItem/paginationItem";

type Props = {
  totalCount: number;
};

const Pagination: FC<Props> = ({ totalCount }) => {
  const [start, setStart] = useAtom(startAtom);
  const paginationMaxRange = Math.ceil(totalCount / countPerPage);

  console.log(start);

  return (
    <Box w="full" mt={12}>
      <HStack w="full" justify="center" spacing={8}>
        {range(1, paginationMaxRange).map((number) => (
          <PaginationItemMemo
            key={number}
            number={number}
            onCLick={() => setStart(() => startCalc(number, countPerPage))}
            currentSelected={start === startCalc(number, countPerPage)}
          />
        ))}
      </HStack>
    </Box>
  );
};

const PaginationMemo = memo<Props>(({ totalCount }) => <Pagination totalCount={totalCount} />);
PaginationMemo.displayName = "PaginationMemo";

export default PaginationMemo;
