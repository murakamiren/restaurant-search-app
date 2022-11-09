import { googleMapUrlBase } from "@/constant/map/map";

/**
 *
 * @param lat shop lat
 * @param lng shop lng
 * @returns google map embed url to show shop place
 */
export const googleMapEmbed = (lat: number, lng: number) => {
  const embedUrl = `${googleMapUrlBase}t=m&z=18&q=${lat},${lng}`;

  return embedUrl;
};
