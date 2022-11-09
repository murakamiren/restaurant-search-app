import { Select } from "@chakra-ui/react";
import { FC, memo } from "react";

import useSort from "@/hooks/component/sort/useSort";

const SortSelect: FC = () => {
  const { onChange, currentVal } = useSort();

  return (
    <Select w={{ base: "140px", md: "200px" }} value={currentVal} onChange={(e) => onChange(e)}>
      <option value="1">距離順</option>
      <option value="4">おすすめ順</option>
    </Select>
  );
};

const SortSelectMemo = memo(SortSelect);

export default SortSelectMemo;
