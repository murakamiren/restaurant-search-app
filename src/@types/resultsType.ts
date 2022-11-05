import { Shop } from "./shopType";

interface Results {
  api_version: string;
  results_available: number;
  results_returned: string;
  results_start: number;
  shop: Shop[];
}

export interface ShopFetchResult {
  results: Results;
}
