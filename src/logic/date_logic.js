export const totalRoomRate = (checkIn, checkOut, amount) => {
  let correctDiff = 0;
  const DIVISOR = 1000 * 3600 * 24;
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);

  const difference = Math.ceil((endDate.getTime() - startDate.getTime()) / DIVISOR);

  if (difference === 0) {
    correctDiff += (difference + 1) * amount;
  } else {
    correctDiff += difference * amount;
  }
  return correctDiff;
};

const differenceBetweenDates = (checkIn, checkOut) => {
  let correctDiff = 0;
  const DIVISOR = 1000 * 3600 * 24;
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);

  const difference = Math.ceil((endDate.getTime() - startDate.getTime()) / DIVISOR);
  if (difference === 0) {
    correctDiff += difference + 1;
  } else {
    correctDiff += difference;
  }
  return correctDiff;
};

export default differenceBetweenDates;
