// Given an array and a number k where k is smaller than the size of the array, we need to find the k’th smallest element in the given array

// Input: arr[] = {7, 10, 4, 3, 20, 15}
// k = 3
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}
// k = 4
// Output: 10

function findKthMaxMin(array, kth) {
  let smallestPosition;
  function swap(first, second) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }
  for (let i = 0; i < array.length - 1; i++) {
    smallestPosition = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j] < array[smallestPosition]) smallestPosition = j;
    swap(smallestPosition, i);
  }
  return {
    min: array[kth - 1],
    max: array[array.length - kth],
  };
}

console.log(findKthMaxMin([7, 10, 4, 20, 15], 4));
