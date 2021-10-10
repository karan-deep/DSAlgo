// Given an array the task is to reverse the array

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

function reverseArray(array) {
  const reversedArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reversedArray.push(array[index]);
  }
  return reversedArray;
}

function reverseArrayOptimized(array) {
  //Inner function to swap array position values
  function swap(first, second) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }
  let start = 0,
    end = array.length - 1;
  while (true) {
    if (start >= end) break;
    swap(start, end);
    start++;
    end--;
  }
  return array;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayOptimized([1, 2, 3]));
console.log(reverseArrayOptimized([1, 2, 3, 4]));
