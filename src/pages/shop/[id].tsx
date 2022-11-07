import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Shop } from "@/@types/api/shopType";
import Footer from "@/components/footer/footer";
import fetcher from "@/lib/fetcher";

const ShopDetail = () => {
  const router = useRouter();

  const param = {
    id: router.query.id,
  };

  const { data } = useSWR<Shop>(["/api/shop/detail", param], fetcher);

  return (
    <div>
      <Head>
        <title>ちかれす - 店舗詳細</title>
        <meta name="description" content="店舗詳細" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text>{data ? data.name : "no"}</Text>
      </main>
      <Footer />
    </div>
  );
};

export default ShopDetail;
