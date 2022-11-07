function sum_array(data) {
  let sum_value = 0;
  for (let each of data) {
    sum_value += each;
  }
  return sum_value;
}

const data = [3, 5, 9, 15];

console.log(sum_array(data));
