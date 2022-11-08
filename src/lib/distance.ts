import distance from "@turf/distance";
import { Feature, Point } from "@turf/helpers";

import { DistanceOption } from "@/@types/distance/distance";

export const distanceCalc = (from: Feature<Point>, to: Feature<Point>, option?: DistanceOption) => {
  const calc = distance(from, to, option);

  const distanceFormatResult = calc.toFixed(2);

  return distanceFormatResult;
};
