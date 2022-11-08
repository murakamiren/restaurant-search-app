import { useRouter } from "next/router";
import useSWR from "swr";

import { Shop } from "@/@types/api/shopType";
import fetcher from "@/lib/fetcher";

const useShopDetailFetch = () => {
  const router = useRouter();

  const param = {
    id: router.query.id,
  };

  const { data, error, isValidating } = useSWR<Shop>(["/api/shop/detail", param], fetcher, {
    revalidateOnFocus: false,
  });

  return { data, error, isValidating };
};

export default useShopDetailFetch;
