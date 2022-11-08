import { useAtom } from "jotai";
import { FC, memo } from "react";

import { countPerPage } from "@/constant/api/setting";
import { startAtom } from "@/store/startAtom";
import range from "@/util/range";
import { startCalc } from "@/util/startCalc";

import PaginationItemMemo from "../paginationItem/paginationItem";

type Props = {
  totalCount: number;
  itemLimit: number;
};

const PaginationItemList: FC<Props> = ({ totalCount, itemLimit }) => {
  const [start, setStart] = useAtom(startAtom);
  const paginationMaxRange = Math.ceil(totalCount / countPerPage);
  const paginationRangeArr = range(1, paginationMaxRange);
  const currentPaginationCount = start === 1 ? 1 : Math.ceil(start / countPerPage);

  return (
    <>
      {paginationRangeArr
        .filter(
          (rangeNumber) =>
            rangeNumber >= currentPaginationCount - 2 &&
            currentPaginationCount + itemLimit - 3 >= rangeNumber,
        )
        .map((number) => {
          return (
            <PaginationItemMemo
              key={number}
              number={number}
              onCLick={() => setStart(() => startCalc(number, countPerPage))}
              currentSelected={number === currentPaginationCount}
            />
          );
        })}
    </>
  );
};

const PaginationItemListMemo = memo<Props>(({ totalCount, itemLimit }) => (
  <PaginationItemList totalCount={totalCount} itemLimit={itemLimit} />
));
PaginationItemListMemo.displayName = "PaginationItemListMemo";

export default PaginationItemListMemo;
