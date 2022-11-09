/**
 *
 * @param number start number
 * @param countPerPage card to show per page
 * @returns current page number
 */
export const startCalc = (number: number, countPerPage: number) => {
  if (number === 1) {
    return 1;
  } else {
    const calcNum = number - 1;
    return calcNum * countPerPage + 1;
  }
};
