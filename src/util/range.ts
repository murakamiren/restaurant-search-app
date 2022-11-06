/**
 *
 * @param start count start value (ex: 0)
 * @param max count max value (ex: 3)
 * @returns number array (ex: if params are (start: 1, max: 4), return will be [1,2,3,4])
 */
const range = (start: number, max: number) => {
  return [...Array(max - start + 1)].map((_, i) => start + i);
};

export default range;
