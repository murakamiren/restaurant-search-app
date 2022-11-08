import { point } from "@turf/helpers";
import { useAtomValue } from "jotai";

import { DistanceOption } from "@/@types/distance/distance";
import { distanceCalc } from "@/lib/distance";
import { searchParamAtom } from "@/store/searchParamAtom";

const useDistance = (shopCoordinate: number[], option?: DistanceOption) => {
  const searchParam = useAtomValue(searchParamAtom);

  const currentCoordinate = [searchParam?.lng as number, searchParam?.lat as number];
  const formatCoordinates = {
    from: point(currentCoordinate),
    to: point(shopCoordinate),
  };

  const distanceFromCurrentPoint = distanceCalc(
    formatCoordinates.from,
    formatCoordinates.to,
    option,
  );

  return distanceFromCurrentPoint;
};

export default useDistance;
