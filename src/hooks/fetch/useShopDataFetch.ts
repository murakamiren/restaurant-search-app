import { useSetAtom } from "jotai";
import useSWR from "swr";

import { ResultOnly, ShopFetchResult } from "@/@types/api/resultsType";
import SearchParamType from "@/@types/api/searchParamType";
import fetcher from "@/lib/fetcher";
import { searchInfoAtom } from "@/store/searchInfoAtom";

const useShopDataFetch = (param: SearchParamType | null, start: number) => {
  const setSearchInfo = useSetAtom(searchInfoAtom);

  const paramWithStart = { ...param, start };

  const { data, error, isValidating } = useSWR<ShopFetchResult>(
    param?.lat ? ["/api/shop", paramWithStart] : null,
    fetcher,
    { revalidateOnFocus: false },
  );

  const info: ResultOnly = {
    results_available: data?.results.results_available,
    results_returned: data?.results.results_returned,
    results_start: data?.results.results_start,
  };

  setSearchInfo(() => info);

  return { shopData: data, isError: error, isValidating };
};

export default useShopDataFetch;
