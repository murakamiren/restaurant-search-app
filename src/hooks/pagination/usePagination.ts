import { useAtom } from "jotai";

import { countPerPage } from "@/constant/api/setting";
import { startAtom } from "@/store/startAtom";

const usePagination = () => {
  const [, setStart] = useAtom(startAtom);

  const clickNext = () => {
    setStart((pre) => pre + countPerPage);
  };

  const clickPrev = () => {
    setStart((pre) => pre - countPerPage);
  };

  return { clickNext, clickPrev };
};

export default usePagination;
