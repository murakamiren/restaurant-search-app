import { Box } from "@chakra-ui/react";
import { FC } from "react";

import { googleMapEmbed } from "@/util/googleMapEmbed";

type Props = {
  lat: number;
  lng: number;
};

const DetailMap: FC<Props> = ({ lat, lng }) => {
  return (
    <Box w="full" height={{ base: "300px", lg: "600px" }}>
      <iframe src={googleMapEmbed(lat, lng)} width="100%" height="100%" />
    </Box>
  );
};

export default DetailMap;
