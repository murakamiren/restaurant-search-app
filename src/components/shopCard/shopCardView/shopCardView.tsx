import { Spinner, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { FC } from "react";

import useShopDataFetch from "@/hooks/fetch/useShopDataFetch";
import { searchParamAtom } from "@/store/searchParamAtom";

import ShopCard from "../shopCard";

const ShopCardView: FC = () => {
  const [searchParam] = useAtom(searchParamAtom);

  const { shopData, isError, isValidating } = useShopDataFetch(searchParam);

  if (isValidating) return <Spinner />;

  if (!shopData) return <Text>まだ検索していません</Text>;

  if (isError) return <Text>error</Text>;

  return (
    <>
      {shopData.results.shop.map((shop) => (
        <ShopCard
          key={shop.name}
          name={shop.name}
          access={shop.access}
          address={shop.address}
          src={shop.photo.pc.l}
        />
      ))}
    </>
  );
};

export default ShopCardView;
