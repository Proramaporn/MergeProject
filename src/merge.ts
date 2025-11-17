export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const len1 = collection_1.length;
  const len2 = collection_2.length;
  const len3 = collection_3.length;
  const totalLength = len1 + len2 + len3;
  
  // Pre-allocate result array for better performance
  const result: number[] = new Array(totalLength);
  
  let i = 0;      // pointer for collection_1
  let j = len2 - 1; // pointer for collection_2 (read from right)
  let k = 0;      // pointer for collection_3
  let r = 0;      // result index
  
  // Main merge loop - compare all three arrays
  while (i < len1 && j >= 0 && k < len3) {
    const val1 = collection_1[i];
    const val2 = collection_2[j];
    const val3 = collection_3[k];
    
    if (val1 <= val2 && val1 <= val3) {
      result[r++] = val1;
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result[r++] = val2;
      j--;
    } else {
      result[r++] = val3;
      k++;
    }
  }
  
  // Handle remaining elements from two arrays
  while (i < len1 && j >= 0) {
    if (collection_1[i] <= collection_2[j]) {
      result[r++] = collection_1[i++];
    } else {
      result[r++] = collection_2[j--];
    }
  }
  
  while (i < len1 && k < len3) {
    if (collection_1[i] <= collection_3[k]) {
      result[r++] = collection_1[i++];
    } else {
      result[r++] = collection_3[k++];
    }
  }
  
  while (j >= 0 && k < len3) {
    if (collection_2[j] <= collection_3[k]) {
      result[r++] = collection_2[j--];
    } else {
      result[r++] = collection_3[k++];
    }
  }
  
  // Copy remaining elements from any single array
  while (i < len1) result[r++] = collection_1[i++];
  while (j >= 0) result[r++] = collection_2[j--];
  while (k < len3) result[r++] = collection_3[k++];
  
  return result;
}