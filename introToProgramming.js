const reverse = (row, index=row.length-1, accum='') => {
  if (index < 0) return accum;
  accum += row[index];
  return reverse(row, index-1, accum);
};
// console.log(reverse('hexlet'));


const reverse2 = (str) => {
  if (str.length === 0) return str;
  return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
};




// Реализуйте и экспортируйте по умолчанию функцию, 
///которая определяет, является ли переданное число натуральной степенью тройки. 
//Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

const isPowerOfThree = (num, check = 1) => {
  if (check > num) return false;
  if (check === num) return true;
  return isPowerOfThree(num, check * 3);
};

for (let index = 0; index < 30; index++) {  
  console.log(index, isPowerOfThree(index));
}
// BEGIN
export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};
// END