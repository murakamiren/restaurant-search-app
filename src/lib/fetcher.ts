import axios from "axios";

/**
 * fetcher to use swr
 * @param url axios.get(url)
 * @returns return res.data
 */
const fetcher = async (url: string) => {
  const res = await axios.get(url);
  const data = await res.data;

  return data;
};

export default fetcher;
