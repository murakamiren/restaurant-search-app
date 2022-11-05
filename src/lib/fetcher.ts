import axios from "axios";

/**
 *
 * @param url url
 * @param params params
 * @returns data<Results>
 */
const fetcher = async <T, P = unknown>(url: string, params?: P) => {
  const res = await axios.get(url, { params });
  const data: T = await res.data;

  return data;
};

export default fetcher;
