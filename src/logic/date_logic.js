// Format the number
// Format the date

// const numFormat = (num) => num.toString().padStart(2, '0');

// const formatDate = (date) => {
//   const formattedDate = [
//     date.getFullYear().toString(),
//     numFormat(date.getMonth() + 1).toString(),
//     numFormat(date.getDate()).toString(),
//   ];

//   return formattedDate.join('/');
// };

const differenceBetweenDates = (checkIn, checkOut, amount) => {
  const DIVISOR = 1000 * 3600 * 24;
  const startDate = new Date(checkIn);
  const endDate = new Date(checkOut);

  const difference = Math.ceil((endDate.getTime() - startDate.getTime()) / DIVISOR);
  return (difference + 1) * amount;
};

export default differenceBetweenDates;
