import { Text } from "@chakra-ui/react";
import { FC } from "react";

import useDistance from "@/hooks/useDistance";

type Props = {
  lat: number;
  lng: number;
  currentPos: GeolocationPosition;
};

const DetailInfo: FC<Props> = ({ lat, lng, currentPos }) => {
  const distance = useDistance([lng, lat], currentPos);

  return <Text>現在地から：{distance()}km</Text>;
};

export default DetailInfo;
