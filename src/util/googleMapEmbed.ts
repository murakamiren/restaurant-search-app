import { googleMapUrlBase } from "@/constant/map/map";

export const googleMapEmbed = (lat: number, lng: number) => {
  const embedUrl = `${googleMapUrlBase}t=m&z=18&q=${lat},${lng}`;

  return embedUrl;
};
