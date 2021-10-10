// Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

// Input: {0, 1, 2, 0, 1, 2}
// Output: {0, 0, 1, 1, 2, 2}

function sortingWithoutAlgo(array) {
  let sortedArray = [];
  function unshift(value) {
    let newArray = new Array(sortedArray.length + 1);
    if (!sortedArray.length) sortedArray[0] = value;
    else {
      for (let i = 0; i < sortedArray.length; i++) {
        newArray[i + 1] = sortedArray[i];
      }
      newArray[0] = value;
      sortedArray = newArray;
    }
  }
  function push(value) {
    sortedArray[sortedArray.length] = value;
  }
  function addingAfterLastZero(index, value) {
    let newArray = new Array(sortedArray.length + 1);
    for (let j = 0; j < index; j++) {
      newArray[j] = sortedArray[j];
    }
    for (let i = index; i < sortedArray.length; i++) {
      newArray[i + 1] = sortedArray[i];
    }
    newArray[index] = value;
    sortedArray = newArray;
  }
  for (let index = 0; index < array.length; index++) {
    switch (array[index]) {
      case 0:
        unshift(0);
        break;
      case 1:
        addingAfterLastZero(sortedArray.lastIndexOf(0) + 1, 1);
        break;
      case 2:
        push(2);
        break;
      default:
        break;
    }
  }
  return sortedArray;
}

// using in-built function
function sortingWithoutAlgoInBuilt(array) {
  let sortedArray = [];
  for (let index = 0; index < array.length; index++) {
    switch (array[index]) {
      case 0:
        sortedArray.unshift(0);
        break;
      case 1:
        sortedArray.splice(sortedArray.lastIndexOf(0) + 1, 0, 1);
        break;
      case 2:
        sortedArray.push(2);
        break;
      default:
        break;
    }
  }
  return sortedArray;
}

function sorting(array) {
  //Inner function to swap array position values
  function swap(first, second) {
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
  }
  for (let i = 0; i < array.length - 1; i++) {
    let smallestPosition = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j] < array[smallestPosition]) smallestPosition = j;
    swap(i, smallestPosition);
  }
  return array;
}

console.log(sorting([0, 1, 2, 0, 1, 2]));
console.log(sortingWithoutAlgo([0, 1, 2, 0, 1, 2]));
console.log(sortingWithoutAlgoInBuilt([0, 1, 2, 0, 1, 2]));
