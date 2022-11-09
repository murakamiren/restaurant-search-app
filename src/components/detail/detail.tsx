import { Box, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { FC } from "react";

import useShopDetailFetch from "@/hooks/fetch/useShopDetailFetch";
import { useGeolocation } from "@/hooks/useGeolocation";

import DetailInfo from "./detailInfo/detailInfo";

const Detail: FC = () => {
  const { currentPos } = useGeolocation();
  const { data, error, isValidating } = useShopDetailFetch();

  if (isValidating || !currentPos) return <Spinner />;

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
        <Box mt={12}>
          <Heading as="h2">{data.name}</Heading>
          <Text>{data.address}</Text>
          <Text>{data.genre.name}</Text>
          <Text>{data.catch}</Text>
          <Text>{data.open}</Text>
          <Text>{data.close}</Text>
          <DetailInfo lat={data.lat} lng={data.lng} currentPos={currentPos} />
          <Box w="200px">
            <Image src={data.photo.pc.l} alt={data.name} w="100%" />
          </Box>
          <Link href={data.urls.pc} target="_blank">
            <Text>ホットペッパーグルメで見る</Text>
          </Link>
        </Box>
      </main>
    </>
  );
};

export default Detail;
