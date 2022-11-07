import { NextApiRequest, NextApiResponse } from "next";

import { ShopFetchResult } from "@/@types/api/resultsType";
import apiBaseUrl from "@/constant/api/apiBase";
import fetcher from "@/lib/fetcher";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const param = req.query;
  const response = await fetcher<ShopFetchResult>(apiBaseUrl, param);
  const detail = response.results.shop[0];

  res.status(200).json(detail);
};

export default handler;
