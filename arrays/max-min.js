// Write a function to return minimum and maximum in an array

// Input  : array[] = {1, 2, 3}
// Output : min = 1, max = 3

function findMaxMin(array) {
  let start = 0,
    end = array.length - 1,
    min = array[0],
    max = array[0];
  while (true) {
    if (start > end) break;
    if (array[start] < min) min = array[start];
    if (array[end] < min) min = array[end];
    if (array[start] > max) max = array[start];
    if (array[end] > max) max = array[end];
    start++;
    end--;
  }
  return {
    min,
    max,
  };
}

function findMaxMinRecursion(array, low, high) {
  let min = array[0],
    max = array[0];
  if (low == high) {
    min = array[low];
    max = array[high];
    return {
      min,
      max,
    };
  }
  if (low + 1 == high) {
    if (array[low] > array[high]) {
      max = array[low];
      min = array[high];
    } else {
      max = array[high];
      min = array[low];
    }
    return {
      min,
      max,
    };
  }
  let mid = (low + high) / 2;
  resultLeftHalf = findMaxMinRecursion(array, low, mid);
  resultRightHalf = findMaxMinRecursion(array, mid + 1, high);

  if (resultLeftHalf.min < resultRightHalf.min) {
    min = resultLeftHalf.min;
  } else {
    min = resultRightHalf.min;
  }

  if (resultLeftHalf.max > resultRightHalf.max) {
    max = resultLeftHalf.max;
  } else {
    max = resultRightHalf.max;
  }

  return {
    min,
    max,
  };
}

console.log(findMaxMin([28, 322, 928, 23, 2]));
console.log(
  findMaxMinRecursion(
    [28, 322, 928, 23, 2],
    0,
    [28, 322, 928, 23, 2].length - 1
  )
);
