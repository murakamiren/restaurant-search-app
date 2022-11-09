import { point } from "@turf/helpers";
import { useCallback, useMemo } from "react";

import { DistanceOption } from "@/@types/distance/distance";
import { distanceCalc } from "@/lib/distance";

const useDistance = (
  shopCoordinate: number[],
  currentPos: GeolocationPosition,
  option?: DistanceOption,
) => {
  const currentCoordinate = useMemo(
    () => [currentPos.coords.longitude, currentPos.coords.latitude as number],
    [currentPos],
  );

  const formatCoordinates = useMemo(() => {
    return {
      from: point(currentCoordinate),
      to: point(shopCoordinate),
    };
  }, [currentCoordinate, shopCoordinate]);

  const distanceFromCurrentPoint = useCallback(
    () => distanceCalc(formatCoordinates.from, formatCoordinates.to, option),
    [formatCoordinates, option],
  );

  return distanceFromCurrentPoint;
};

export default useDistance;
