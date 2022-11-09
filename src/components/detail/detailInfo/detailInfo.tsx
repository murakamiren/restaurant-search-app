import { Text, VStack } from "@chakra-ui/react";
import { FC } from "react";

import { Shop } from "@/@types/api/shopType";
import useDistance from "@/hooks/useDistance";

type Props = {
  data: Shop;
  lat: number;
  lng: number;
  currentPos: GeolocationPosition;
};

const DetailInfo: FC<Props> = ({ lat, lng, currentPos, data }) => {
  const distance = useDistance([lng, lat], currentPos);

  return (
    <VStack spacing={3} alignItems="start">
      <Text>住所：{data.address}</Text>
      <Text>ジャンル：{data.genre.name}</Text>
      <Text>営業日：{data.open}</Text>
      <Text>定休日：{data.close}</Text>
      <Text>収容人数：{data.card}</Text>
      <Text>パーキング：{data.parking}</Text>
      <Text>カード：{data.card}</Text>
      <Text>現在地から：{distance()}km</Text>
    </VStack>
  );
};

export default DetailInfo;
