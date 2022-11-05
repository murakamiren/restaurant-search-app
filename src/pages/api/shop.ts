// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ShopFetchResult } from "@/@types/api/resultsType";
import apiBaseUrl from "@/constant/api/apiBase";
import fetcher from "@/lib/fetcher";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<ShopFetchResult>) => {
  const params = req.query;
  const fetchResults = await fetcher<ShopFetchResult>(`${apiBaseUrl}`, params);
  console.log(fetchResults);

  res.status(200).json(fetchResults);
};

export default handler;
