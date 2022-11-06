import { Shop } from "./shopType";

export interface ResultOnly {
  results_available: number;
  results_returned: string;
  results_start: number;
}
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
