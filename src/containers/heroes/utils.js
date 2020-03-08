/**
 * This method returns pagination number array forward when the number of left numbers to go forward is smaller then the set amountForward.
 * @param {Array} pageNumbers
 * @param {Number} heroesPerPage
 * @param {Number} heroesLength
 * @param {Number} amountForward
 */
export function getPageNumbersForward(
  pageNumbers,
  heroesPerPage,
  heroesLength,
  amountForward
) {
  let pageNumbersForward = [];
  let pageNumberLength = pageNumbers.length - 1;
  let lastPagNumber = Math.ceil(heroesLength / heroesPerPage);
  let currentLastPagNumber = pageNumbers[pageNumberLength];
  let currentLastDiff = lastPagNumber - currentLastPagNumber;

  if (currentLastDiff < amountForward) {
    pageNumbersForward = [...pageNumbers];

    for (let i = currentLastPagNumber + 1; i <= lastPagNumber; i++) {
      pageNumbersForward.push(i);
    }

    pageNumbersForward = pageNumbersForward.slice(currentLastDiff);
  } else {
    pageNumbersForward = pageNumbers.map(number => {
      return number + amountForward;
    });
  }

  return pageNumbersForward;
}

/**
 * This method does the same thing as the getPageNumbersForward but when going back instead of going forward.
 * @param {Array} pageNumbers
 * @param {Number} amountBack
 */
export function getPageNumberBack(pageNumbers, amountBack) {
  let pageNumbersBack = [];
  let firstPagNumber = 1;
  let currentFirstPagNumber = pageNumbers[0];
  let currentLastDiff = currentFirstPagNumber - firstPagNumber;

  if (currentLastDiff < amountBack) {
    pageNumbersBack = [...pageNumbers];

    let lastPreviousNumber = pageNumbersBack[0];

    for (let i = lastPreviousNumber - 1; i > 0; i--) {
      pageNumbersBack.unshift(i);
    }

    pageNumbersBack = pageNumbersBack.slice(0, -currentLastDiff);
  } else {
    pageNumbersBack = pageNumbers.map(number => {
      return number - amountBack;
    });
  }

  return pageNumbersBack;
}
