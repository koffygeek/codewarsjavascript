function insertionSort(arr) {
    let n = arr.length;
  
    for (let i = 1; i < n; i++) {
      let currentElement = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > currentElement) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Example usage:
  let unsortedArray = [12, 11, 13, 5, 6];
  let sortedArray = insertionSort(unsortedArray);
  console.log("Sorted array:", sortedArray);
  