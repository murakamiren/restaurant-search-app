import useSWR from "swr";

import { ShopFetchResult } from "@/@types/api/resultsType";
import SearchParamType from "@/@types/api/searchParamType";
import fetcher from "@/lib/fetcher";

const useShopDataFetch = (param: SearchParamType | null) => {
  const { data, error, isValidating } = useSWR<ShopFetchResult>(
    param?.lat ? ["/api/shop", param] : null,
    fetcher,
    { revalidateOnFocus: false },
  );

  return { shopData: data, isError: error, isValidating };
};

export default useShopDataFetch;
