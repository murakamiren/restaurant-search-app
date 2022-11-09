import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
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
    <>
      <UnorderedList spacing={3} alignItems="start">
        <ListItem>
          <Text>住所：{data.address}</Text>
        </ListItem>
        <ListItem>
          <Text>
            ジャンル：{data.genre.name} - {data.genre.catch}
          </Text>
        </ListItem>
        <ListItem>
          <Text>営業日：{data.open}</Text>
        </ListItem>
        <ListItem>
          <Text>定休日：{data.close}</Text>
        </ListItem>
        <ListItem>
          <Text>平均予算：{data.budget.average}</Text>
        </ListItem>
        <ListItem>
          <Text>収容人数：{data.capacity}</Text>
        </ListItem>
        <ListItem>
          <Text>貸切：{data.charter}</Text>
        </ListItem>
        <ListItem>
          <Text>パーキング：{data.parking}</Text>
        </ListItem>
        <ListItem>
          <Text>カード：{data.card}</Text>
        </ListItem>
      </UnorderedList>
      <Text mt={4} fontWeight="bold">
        現在地から：{distance()}km
      </Text>
    </>
  );
};

export default DetailInfo;
