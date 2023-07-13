let countArray = [0, 0, 0, 0, 0, 0];

function countArr(arr) {

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }
  console.log(countArray);
}

function sortedArr(ar) {
  let sortedArray = [];

  for (let i = 0; i < ar.length; i++) {
    let j = 0;
    while (j < ar[i]) {
      sortedArray.push(i);
      j++;
    }
  }
  console.log(sortedArray);
}

countArr([0, 0, 1, 0, 2, 3, 5, 4, 3, 2, 1, 3, 4, 5]);
sortedArr(countArray)
