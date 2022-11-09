import { Box, Divider, Heading, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

import useShopDetailFetch from "@/hooks/fetch/useShopDetailFetch";
import { useGeolocation } from "@/hooks/useGeolocation";

import DetailInfo from "./detailInfo/detailInfo";
import DetailMap from "./detailMap/detailMap";
import DetailTop from "./detailTop/detailTop";

const Detail: FC = () => {
  const { currentPos } = useGeolocation();
  const { data, error, isValidating } = useShopDetailFetch();

  if (isValidating || !currentPos)
    return (
      <Box height="100px" display="flex" justifyContent="center" alignItems="center">
        <Spinner size="lg" thickness="4px" color="primary.500" />
      </Box>
    );

  if (error) return <Text>error</Text>;

  if (!data) return <Text>no data</Text>;

  return (
    <>
      <Head>
        <title>{data.name} - ちかれす</title>
        <meta name="description" content="店舗詳細" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box mt={12} px={{ base: 8, lg: 16 }}>
          <DetailTop data={data} />
          <Heading as="h3" fontSize={{ base: "xl", lg: "3xl" }} mt={12}>
            店舗情報
          </Heading>
          <Divider my={6} />
          <DetailInfo lat={data.lat} lng={data.lng} currentPos={currentPos} data={data} />
          <Divider my={6} />
          <DetailMap lat={data.lat} lng={data.lng} />
          <Divider my={6} />
          <Link href={data.urls.pc} target="_blank" className="link-hotpepper">
            <Text
              decoration="underline"
              color="primary.600"
              sx={{ "&:Hover": { color: "primary.700" } }}
              display="inline"
              fontSize="xl"
            >
              ホットペッパーグルメで見る
            </Text>
          </Link>
        </Box>
      </main>
    </>
  );
};

export default Detail;
