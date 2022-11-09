import { useAtom } from "jotai";
import { ChangeEvent } from "react";

import { searchParamAtom } from "@/store/searchParamAtom";

const useSort = () => {
  const [searchParam, setSearchParam] = useAtom(searchParamAtom);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const vNum = parseInt(e.currentTarget.value);

    setSearchParam((pre) => {
      if (pre) {
        return {
          ...pre,
          order: vNum,
        };
      }
    });
  };

  const currentVal = searchParam?.order;

  return { onChange, currentVal };
};

export default useSort;
